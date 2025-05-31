import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'; // Or appropriate navigation library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faUsers, faCogs, faPaperPlane, faCommentAlt, faMapMarkerAlt, faPhoneAlt, faEnvelope, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SapServices: React.FC = () => {
  // State for chat widget
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'user' | 'bot'; text: string }>>([]);
  const [chatInput, setChatInput] = useState('');

  // Smooth scroll to section (if using anchor links)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed navbar height
        behavior: 'smooth',
      });
    }
  };

  const handleSendMessage = () => {
    if (chatInput.trim()) {
        const newMessages = [...chatMessages, { type: 'user' as 'user' | 'bot', text: chatInput.trim() }];
      setChatMessages(newMessages);
      setChatInput('');
      setTimeout(() => {
        setChatMessages(prevMessages => [...prevMessages, { type: 'bot', text: 'Thank you for your message! How can we assist you further?' }]);
      }, 1000);
    }
  };
  
  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => document.querySelectorAll('.fade-in').forEach(el => observer.unobserve(el));
  }, []);


  return (
    <div className="bg-white text-gray-700">
      {/* Hero Section */}
      <section className="hero-section relative w-full h-[90vh] min-h-[700px] flex items-center text-white overflow-hidden bg-gradient-to-r from-[rgba(0,123,255,0.1)] to-[rgba(255,98,0,0.1)]">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-[0.8]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f')" }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(0,123,255,0.5)] to-[rgba(255,98,0,0.5)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="text-accent font-bold uppercase tracking-widest text-lg mb-5">SAP SERVICES</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Transform Your Business with SAP Excellence</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent my-8 animate-pulse"></div>
            <p className="text-xl mb-10">VirtuSwift delivers innovative SAP solutions with expertise and collaboration to fuel your digital transformation.</p>
            <div className="flex space-x-4">
              <button onClick={() => scrollToSection('services')} className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:from-accent hover:to-primary hover:-translate-y-1 transition-all duration-300">Explore Services</button>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 ml-4">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-accent font-bold uppercase tracking-widest text-lg mb-5">OUR APPROACH</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Driving Success with SAP Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-8 animate-pulse"></div>
            <p className="text-lg text-gray-600">At VirtuSwift, we tailor SAP solutions with transparency and collaboration to empower your business transformation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            <div className="text-center fade-in">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <FontAwesomeIcon icon={faSyncAlt} className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transparent Process</h3>
              <p className="text-gray-600">Stay informed with our clear and open SAP implementation process.</p>
            </div>
            <div className="text-center fade-in">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <FontAwesomeIcon icon={faUsers} className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Collaborative Approach</h3>
              <p className="text-gray-600">We partner with your team to create solutions that align with your goals.</p>
            </div>
            <div className="text-center fade-in">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <FontAwesomeIcon icon={faCogs} className="text-4xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Expertise</h3>
              <p className="text-gray-600">Our certified consultants tackle complex challenges with industry-leading skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-accent font-bold uppercase tracking-widest text-lg mb-5">OUR SAP SERVICES</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Tailored SAP Solutions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-8 animate-pulse"></div>
            <p className="text-lg text-gray-600">Discover our comprehensive SAP services designed to meet your unique business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[{
                img: "https://images.unsplash.com/photo-1551288049-b1b4a64d9765",
                title: "SAP Implementation",
                desc: "Deliver on-time, on-budget SAP implementations with our proven methodology.",
                link: "#"
              },
              {
                img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
                title: "Cloud Migration",
                desc: "Migrate SAP workloads to Azure seamlessly with full visibility via ClientSync Portal.",
                link: "#"
              },
              {
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                title: "Managed Services",
                desc: "Ensure peak performance with 24/7 proactive monitoring and support.",
                link: "#"
              }
            ].map((service, index) => (
              <div key={index} className="service-card border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-accent fade-in">
                <div className="h-56 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 h-20 overflow-hidden">{service.desc}</p>
                  <Link to={service.link} className="text-primary font-semibold hover:text-accent transition-colors duration-300 group">
                    Learn More <FontAwesomeIcon icon={faChevronRight} className="ml-1 w-3 h-3 inline-block group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-accent font-bold uppercase tracking-widest text-lg mb-5">OUR PROCESS</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Delivering SAP Excellence</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-8 animate-pulse"></div>
            <p className="text-lg text-gray-600">Our structured methodology ensures high-quality, consistent results for your SAP projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mt-16">
            {[{
                num: 1, title: "Discovery & Analysis",
                desc: "We analyze your business goals and processes to craft a strategic roadmap."
              },
              {
                num: 2, title: "Solution Design",
                desc: "Tailored SAP solutions designed to optimize your operations."
              },
              {
                num: 3, title: "Implementation",
                desc: "Agile implementation with minimal disruption to your business."
              },
              {
                num: 4, title: "Testing & Quality Assurance",
                desc: "Rigorous testing to ensure optimal performance and reliability."
              },
              {
                num: 5, title: "Training & Change Management",
                desc: "Comprehensive training to maximize your SAP investment."
              },
              {
                num: 6, title: "Ongoing Support & Optimization",
                desc: "Continuous support and optimization for sustained success."
              }
            ].map((step, index) => (
              <div key={index} className="process-step flex items-start mb-12 p-5 rounded-lg transition-all duration-300 hover:bg-blue-50 fade-in">
                <div className="step-number w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 mr-6 shadow-lg">{step.num}</div>
                <div className="step-content">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[{
                value: "95%", text: "Client Satisfaction Rate"
              },
              {
                value: "200+", text: "SAP Projects Completed"
              },
              {
                value: "15+", text: "Years of SAP Experience"
              },
              {
                value: "50+", text: "Certified SAP Consultants"
              }
            ].map((stat, index) => (
              <div key={index} className="counter-box text-center p-10 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1.5 fade-in">
                <div className="text-5xl font-bold text-primary mb-2.5 shadow-text-primary">{stat.value}</div>
                <div className="text-base text-gray-500 font-medium">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-bg relative py-24 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f')"}}></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-accent font-bold uppercase tracking-widest text-lg mb-5">CLIENT TESTIMONIALS</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-8 animate-pulse"></div>
            <p className="text-lg text-gray-600">Discover how VirtuSwift has transformed businesses with our SAP solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[{
                quote: "VirtuSwift's expertise reduced our processing time by 30%. Their transparency was exceptional.",
                name: "John Matthews", role: "CEO, TechCorp", img: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "The cloud migration was seamless with VirtuSwift's ClientSync Portal, enhancing our agility.",
                name: "Sarah Johnson", role: "CIO, Global Enterprises", img: "https://randomuser.me/api/portraits/women/44.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card bg-white rounded-lg shadow-xl p-10 mx-auto max-w-md relative border-l-4 border-accent fade-in">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-primary opacity-10 text-8xl absolute top-5 left-5 -z-1"/>
                <p className="text-gray-600 mb-6 text-lg italic relative z-1">{testimonial.quote}</p>
                <div className="flex items-center mt-8">
                  <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 shadow-md" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-800">Trusted by Leading Brands</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {[ "https://pnghunter.com/get-logo.php?id=3839",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPAzN0thISPaG1ULIXHj8PMes96xADCsJSw&s",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZthX2JdflmjlL9ieewvgNMuYu4faDtkb8g&s",
                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRu-DDQzkINpBMQIXcglfOdn9iPl67jV2SGA&s"
                ].map((logo, index) => (
                  <img key={index} src={logo} alt={`Client ${index + 1}`} className="h-12 filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section relative py-24 bg-gradient-to-r from-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')"}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="text-white font-bold uppercase tracking-widest text-lg mb-5">READY TO TRANSFORM?</div>
            <h2 className="text-4xl font-bold mb-6">Launch Your SAP Journey Today</h2>
            <div className="w-20 h-1 bg-white mx-auto my-8 animate-pulse"></div>
            <p className="text-lg mb-10 max-w-2xl mx-auto">Partner with VirtuSwift to unlock your business's potential with tailored SAP solutions.</p>
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300">Start Now</Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-accent font-bold uppercase tracking-widest text-lg mb-5">OUR TEAM</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our SAP Experts</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto my-8 animate-pulse"></div>
            <p className="text-lg text-gray-600">Our certified consultants drive your success with unparalleled expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[{
                name: "Michael Chen", role: "SAP Solution Architect", img: "https://randomuser.me/api/portraits/men/45.jpg"
              },
              {
                name: "Emily Rodriguez", role: "SAP Project Manager", img: "https://randomuser.me/api/portraits/women/65.jpg"
              },
              {
                name: "David Patel", role: "SAP Cloud Specialist", img: "https://randomuser.me/api/portraits/men/78.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="team-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl fade-in">
                <img src={member.img} alt={member.name} className="w-full h-72 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><FontAwesomeIcon icon={faLinkedinIn} size="lg"/></a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-5 right-5 z-50">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)} 
          className="bg-gradient-to-r from-primary to-accent text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 focus:outline-none"
          aria-label="Toggle chat"
        >
          <FontAwesomeIcon icon={faCommentAlt} size="2x" />
        </button>
        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl overflow-hidden animate-slidein">
            <div className="bg-gradient-to-r from-primary to-accent p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold text-lg">VirtuSwift Support</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-200 text-2xl">&times;</button>
            </div>
            <div className="h-80 p-4 overflow-y-auto bg-gray-50">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`mb-3 max-w-[80%] clear-both ${msg.type === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                  <div className={`p-3 rounded-xl ${msg.type === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {chatMessages.length === 0 && <div className="text-center text-gray-500 pt-10">Welcome to VirtuSwift! How can we assist you today?</div>}
            </div>
            <div className="p-3 border-t flex items-center bg-white">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..." 
                className="flex-grow border border-gray-300 rounded-full py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <button onClick={handleSendMessage} className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-700 transition-colors duration-300 focus:outline-none">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SapServices; 