import React, { useRef, useEffect } from 'react';

interface BannerProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  tags: string[];
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  tags
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full banner size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };
    
    // Call resize on load and window resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // VirtuSwift brand colors
    const BLUE = '#3a3dc4';
    const LIGHT_BLUE = '#5658d0';
    const ORANGE = '#f05a28';
    const LIGHT_ORANGE = '#f47950';
    
    // Convert hex color to RGB
    const hexToRgb = (hex: string) => {
      hex = hex.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    };
    
    // Grid of connected nodes
    class Node {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      lastX: number;
      lastY: number;
      color: string;
      glowing: boolean;
      glowIntensity: number;
      glowDirection: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 2 + Math.random() * 3;
        this.speedX = (Math.random() - 0.5) * 0.7;
        this.speedY = (Math.random() - 0.5) * 0.7;
        this.lastX = x;
        this.lastY = y;
        this.color = Math.random() > 0.5 ? BLUE : ORANGE;
        this.glowing = Math.random() > 0.7;
        this.glowIntensity = 0;
        this.glowDirection = 0.02;
      }
      
      update() {
        // Save last position for trails
        this.lastX = this.x;
        this.lastY = this.y;
        
        // Move node
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges with some padding
        const padding = 50;
        if (this.x < padding || this.x > canvas.width - padding) {
          this.speedX *= -1;
          this.x = this.x < padding ? padding : canvas.width - padding;
        }
        
        if (this.y < padding || this.y > canvas.height - padding) {
          this.speedY *= -1;
          this.y = this.y < padding ? padding : canvas.height - padding;
        }
        
        // Add subtle drift
        this.speedX += (Math.random() - 0.5) * 0.03;
        this.speedY += (Math.random() - 0.5) * 0.03;
        
        // Cap speed
        const maxSpeed = 0.8;
        this.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, this.speedX));
        this.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, this.speedY));
        
        // Update glow effect
        if (this.glowing) {
          this.glowIntensity += this.glowDirection;
          if (this.glowIntensity > 1 || this.glowIntensity < 0) {
            this.glowDirection *= -1;
          }
        }
      }
      
      draw() {
        if (!ctx) return;
        
        // Draw glow
        if (this.glowing) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          const glowColor = this.color === BLUE ? LIGHT_BLUE : LIGHT_ORANGE;
          ctx.fillStyle = `rgba(${hexToRgb(glowColor)}, ${this.glowIntensity * 0.15})`;
          ctx.fill();
        }
        
        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Digital circuit paths that move across screen
    class CircuitPath {
      pathPoints: { x: number; y: number }[];
      direction: string;
      startX: number;
      startY: number;
      progress: number;
      speed: number;
      color: string;
      lineWidth: number;
      active: boolean;
      
      constructor() {
        this.pathPoints = [];
        this.direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
        this.startX = 0;
        this.startY = 0;
        this.progress = 0;
        this.speed = 0.005 + Math.random() * 0.008;
        this.color = Math.random() > 0.5 ? ORANGE : BLUE;
        this.lineWidth = 1 + Math.random() * 1.5;
        this.active = true;
        this.reset();
      }
      
      reset() {
        this.pathPoints = [];
        
        if (this.direction === 'horizontal') {
          const y = Math.random() * canvas.height;
          this.startX = -50;
          this.startY = y;
          
          // Create zigzag path points
          let currentX = this.startX;
          while (currentX < canvas.width + 100) {
            this.pathPoints.push({ 
              x: currentX, 
              y: this.startY + (Math.random() - 0.5) * 100
            });
            currentX += 30 + Math.random() * 60;
          }
        } else {
          const x = Math.random() * canvas.width;
          this.startX = x;
          this.startY = -50;
          
          // Create zigzag path points
          let currentY = this.startY;
          while (currentY < canvas.height + 100) {
            this.pathPoints.push({ 
              x: this.startX + (Math.random() - 0.5) * 100, 
              y: currentY
            });
            currentY += 30 + Math.random() * 60;
          }
        }
        
        this.progress = 0;
        this.active = true;
      }
      
      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.active = false;
        }
      }
      
      draw() {
        if (!ctx) return;
        
        const visiblePoints = Math.floor(this.pathPoints.length * this.progress);
        
        if (visiblePoints <= 1) return;
        
        ctx.beginPath();
        ctx.moveTo(this.pathPoints[0].x, this.pathPoints[0].y);
        
        for (let i = 1; i < visiblePoints; i++) {
          ctx.lineTo(this.pathPoints[i].x, this.pathPoints[i].y);
        }
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        
        // Draw pulse dots along the path
        const pulsePoint = Math.floor(visiblePoints * 0.8);
        if (pulsePoint > 0 && pulsePoint < this.pathPoints.length) {
          const point = this.pathPoints[pulsePoint];
          ctx.beginPath();
          ctx.arc(point.x, point.y, 3 + Math.sin(Date.now() * 0.01) * 2, 0, Math.PI * 2);
          ctx.fillStyle = this.color === BLUE ? LIGHT_BLUE : LIGHT_ORANGE;
          ctx.fill();
        }
      }
    }
    
    // Draw logo shape component
    function drawLogoShape(x: number, y: number, scale: number, rotation: number) {
      if (!ctx) return;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);
      
      // Draw VirtuSwift-inspired shape
      ctx.beginPath();
      ctx.moveTo(-30, -20);
      ctx.lineTo(0, 20);
      ctx.lineTo(30, -20);
      ctx.closePath();
      ctx.fillStyle = ORANGE;
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(0, -20);
      ctx.lineTo(30, 20);
      ctx.lineTo(60, -20);
      ctx.closePath();
      ctx.fillStyle = BLUE;
      ctx.fill();
      
      ctx.restore();
    }
    
    // Create nodes
    const nodeCount = 40;
    const nodes: Node[] = [];
    const connectionDistance = 150;
    
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push(new Node(x, y));
    }
    
    // Create circuit paths
    const circuitPaths: CircuitPath[] = [];
    const maxCircuitPaths = 5;
    
    function addCircuitPath() {
      if (circuitPaths.length < maxCircuitPaths) {
        circuitPaths.push(new CircuitPath());
      }
    }
    
    // Add initial circuit paths
    for (let i = 0; i < 3; i++) {
      addCircuitPath();
    }
    
    // Add new path occasionally
    const pathInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        addCircuitPath();
      }
    }, 2000);
    
    // Floating logo shapes
    interface LogoShape {
      x: number;
      y: number;
      scale: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }
    
    const logoShapes: LogoShape[] = [];
    const shapesCount = 8;
    
    for (let i = 0; i < shapesCount; i++) {
      logoShapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        scale: 0.1 + Math.random() * 0.3,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        opacity: 0.1 + Math.random() * 0.2
      });
    }
    
    // Update logo shapes
    function updateLogoShapes() {
      for (let shape of logoShapes) {
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;
        
        // Wrap around edges
        if (shape.x < -100) shape.x = canvas.width + 100;
        if (shape.x > canvas.width + 100) shape.x = -100;
        if (shape.y < -100) shape.y = canvas.height + 100;
        if (shape.y > canvas.height + 100) shape.y = -100;
      }
    }
    
    // Draw logo shapes
    function drawLogoShapes() {
      if (!ctx) return;
      
      for (let shape of logoShapes) {
        ctx.globalAlpha = shape.opacity;
        drawLogoShape(shape.x, shape.y, shape.scale, shape.rotation);
      }
      ctx.globalAlpha = 1;
    }
    
    // Animation loop
    let animationFrameId: number;
    
    function animate() {
      if (!ctx) return;
      
      // Create background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1c1c38');
      gradient.addColorStop(1, '#232342');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw logo shapes in background
      drawLogoShapes();
      
      // Draw connections between nodes first (behind nodes)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Mix colors when connecting different colored nodes
            let connectionColor;
            if (nodes[i].color === nodes[j].color) {
              connectionColor = nodes[i].color;
            } else {
              connectionColor = '#a54ad1'; // Purple blend of blue and orange
            }
            
            ctx.strokeStyle = `rgba(${hexToRgb(connectionColor)}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      // Update and draw circuit paths
      for (let i = circuitPaths.length - 1; i >= 0; i--) {
        circuitPaths[i].update();
        circuitPaths[i].draw();
        
        // Remove inactive paths
        if (!circuitPaths[i].active) {
          circuitPaths.splice(i, 1);
        }
      }
      
      // Update and draw nodes
      for (let node of nodes) {
        node.update();
        node.draw();
      }
      
      // Update logo shapes
      updateLogoShapes();
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(pathInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Canvas for animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 
              className="text-5xl font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-xl mb-8 opacity-90">{description}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={primaryButtonLink}
                className="bg-[#f05a28] text-white px-8 py-3 rounded-lg hover:bg-[#e04d1d] transition duration-300"
              >
                {primaryButtonText}
              </a>
              <a
                href={secondaryButtonLink}
                className="border-2 border-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#3a3dc4]/10 transition duration-300"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service tags */}
      {tags && tags.length > 0 && (
        <div className="absolute bottom-8 right-8 flex flex-wrap justify-end gap-4 max-w-xl z-10">
          {tags.map((tag, index) => (
            <div 
              key={tag} 
              className="px-4 py-2 bg-[#3a3dc4]/20 border-l-4 border-[#3a3dc4] text-white rounded animate-fadeInTag"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Banner; 