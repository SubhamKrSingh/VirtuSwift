import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCloud, 
  faRobot, 
  faUsers, 
  faCog, 
  faChartLine, 
  faServer,
  faShieldAlt,
  faDatabase,
  faBullseye,
  faRocket,
  faHandshakeAngle,
  faLocationDot,
  faArrowUpFromBracket,
  faGears,
  faShieldHalved,
  faCloudArrowUp,
  faHardDrive,
  faNetworkWired,
  faIndustry,
  faShoppingCart,
  faBolt,
  faPills,
  faMoneyBillTrendUp,
  faOilWell,
  faLandmark,
  faHospital,
  faLightbulb,
  faTruck,
  faQuoteLeft,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import BannerCarousel from '../components/carousel/BannerCarousel';
import ServiceIconCarousel from '../components/ServiceIconCarousel';
import WorldMap from '../components/WorldMap';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import Contact from './Contact';
import '../styles/animations.css';

// Add keyframes for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes rocketLaunch {
    0% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-10px, -20px) rotate(-45deg); }
    100% { transform: translate(-20px, -40px) rotate(-45deg) scale(0.5); opacity: 0; }
  }

  @keyframes targetPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }

  @keyframes handshake {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }

  .rocket-animate {
    animation: rocketLaunch 1s ease-out forwards;
  }

  .target-animate {
    animation: targetPulse 1s ease-in-out infinite;
  }

  .handshake-animate {
    animation: handshake 0.3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

// Define the BannerData type
interface BannerData {
  id: string;
  type: 'standard' | 'html';
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  tags?: string[];
}

const homeBanners: BannerData[] = [
  {
    id: 'banner1',
    type: 'standard',
    title: 'Digital Excellence, <span class="accent-text">Swift</span> Innovation',
    subtitle: 'Empowering businesses through advanced IT solutions and expert talent. Let VirtuSwift accelerate your technological transformation journey.',
    primaryButtonText: 'Discover Solutions',
    primaryButtonLink: '/services',
    secondaryButtonText: 'Get in Touch',
    secondaryButtonLink: '/contact',
    tags: ['IT Consulting', 'Custom Software Development', 'Digital Transformation', 'Staffing Solutions', 'Cloud Services']
  },
  {
    id: 'banner2',
    type: 'standard',
    title: 'Cloud Solutions with <span class="accent-text">Virtuous</span> Speed',
    subtitle: 'Where Virtuous excellence meets Swift delivery. Our cloud services empower your business with unmatched scalability, efficiency, and security.',
    primaryButtonText: 'Explore Cloud Solutions',
    primaryButtonLink: '/services/cloud-security',
    secondaryButtonText: 'Schedule a Consultation',
    secondaryButtonLink: '/contact',
    tags: ['AWS Migration', 'Azure Solutions', 'Multi-Cloud Google', 'Cloud Security']
  },
  {
    id: 'banner3',
    type: 'standard',
    title: 'Innovate with Our Expert <span class="accent-text">IT Staffing</span>',
    subtitle: 'Access top-tier IT professionals to augment your team and drive project success. VirtuSwift connects you with the talent you need, when you need it.',
    primaryButtonText: 'Find Talent Now',
    primaryButtonLink: '/contact',
    secondaryButtonText: 'Learn About Staffing',
    secondaryButtonLink: '/services',
    tags: ['Expert Developers', 'Project Managers', 'QA Engineers', 'DevOps Specialists']
  }
];

// Add this interface after other interfaces
interface CaseStudy {
  icon: any;
  industry: string;
  description: string;
  stats: string[];
  testimonial: string;
}

const caseStudies: CaseStudy[] = [
  {
    icon: faIndustry,
    industry: 'Manufacturing',
    description: 'Modernized factory operations with SAP S/4HANA.',
    stats: [
      '35% Faster Order Processing',
      '20% Lower Inventory Costs',
      '40% Less Equipment Downtime'
    ],
    testimonial: 'VirtuSwift\'s S/4HANA solution transformed our factory floor.'
  },
  {
    icon: faShoppingCart,
    industry: 'Retail',
    description: 'Enhanced inventory accuracy and sales with SAP CAR.',
    stats: [
      '98% Inventory Accuracy',
      '25% Higher Conversions',
      '25% Improved Customer Retention'
    ],
    testimonial: 'VirtuSwift\'s retail solutions redefined our customer experience.'
  },
  {
    icon: faBolt,
    industry: 'Utilities',
    description: 'Optimized billing and reduced outages with SAP IS-U.',
    stats: [
      '40% Fewer Outages',
      '25% Improved Billing Accuracy',
      '30% Higher Customer Engagement'
    ],
    testimonial: 'VirtuSwift\'s utilities solutions transformed our operations.'
  },
  {
    icon: faPills,
    industry: 'Pharmaceuticals',
    description: 'Achieved FDA compliance with life sciences SAP tools.',
    stats: [
      '100% FDA Compliance',
      '30% Improved Traceability',
      '20% Lower R&D Costs'
    ],
    testimonial: 'VirtuSwift\'s solutions ensured our compliance.'
  },
  {
    icon: faMoneyBillTrendUp,
    industry: 'Finance',
    description: 'Accelerated close cycles with SAP S/4HANA Finance.',
    stats: [
      '8-Day Faster Financial Closes',
      '15% Higher Profitability',
      '100% IFRS Compliance'
    ],
    testimonial: 'VirtuSwift\'s finance solutions transformed our reporting.'
  },
  {
    icon: faLandmark,
    industry: 'Public Sector',
    description: 'Modernized governance with SAP Public Sector Management.',
    stats: [
      '30% Faster Processing',
      '100% Audit Compliance',
      '25% Improved Service Delivery'
    ],
    testimonial: 'VirtuSwift\'s solutions improved our citizen services.'
  },
  {
    icon: faHospital,
    industry: 'Healthcare',
    description: 'Unified patient data and improved compliance with SAP IS-H.',
    stats: [
      '30% Faster Claims Processing',
      '100% HIPAA Compliance',
      '25% Better Care Coordination'
    ],
    testimonial: 'VirtuSwift\'s solutions improved our patient care.'
  },
  {
    icon: faLightbulb,
    industry: 'High-Tech',
    description: 'Accelerated R&D with SAP PLM and real-time tracking.',
    stats: [
      '25% Faster Time-to-Market',
      '30% Improved Traceability',
      '100% Global Compliance'
    ],
    testimonial: 'VirtuSwift\'s solutions boosted our R&D.'
  },
  {
    icon: faTruck,
    industry: 'Logistics',
    description: 'Streamlined deliveries and improved visibility with SAP LBN.',
    stats: [
      '18% Faster Deliveries',
      '30% Improved Supplier Performance',
      '25% Higher Uptime'
    ],
    testimonial: 'VirtuSwift\'s solutions transformed our supply chain.'
  }
  // Oil & Gas case study removed
];

const Home: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCaseStudies, setVisibleCaseStudies] = useState(6);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen">
      <BannerCarousel banners={homeBanners} />

      {/* Services Carousel */}
      <ServiceIconCarousel />

      {/* Who We Are Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl font-bold text-center mb-6">Who We Are</h2>
            <div className="w-40 h-1 bg-[#f05a28] mx-auto mb-12"></div>
            <p className="text-2xl text-gray-600 text-center mb-24 max-w-5xl mx-auto leading-relaxed">
              VirtuSwift is a global leader in IT solutions and staffing services, committed to delivering 
              excellence at the speed of innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-16 px-4">
              {/* Vision Card */}
              <div 
                className="bg-white rounded-xl p-16 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative"
                onMouseEnter={() => setHoveredCard('vision')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-[#3a3dc4] mb-10 h-24 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faBullseye} 
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'vision' ? 'target-animate' : ''}`}
                  />
                </div>
                <h3 className="text-4xl font-bold mb-8">Our Vision</h3>
                <div className="w-28 h-1 bg-[#f05a28] mb-10 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed text-xl">
                  To be the global leader in IT solutions and staffing services, empowering businesses 
                  to achieve unparalleled success through virtuous innovation and swift execution.
                </p>
              </div>

              {/* Mission Card */}
              <div 
                className="bg-white rounded-xl p-16 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative"
                onMouseEnter={() => setHoveredCard('mission')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-[#3a3dc4] mb-10 h-24 flex items-center justify-center relative z-50">
                  <FontAwesomeIcon 
                    icon={faRocket} 
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'mission' ? 'rocket-animate' : ''}`}
                  />
                </div>
                <h3 className="text-4xl font-bold mb-8">Our Mission</h3>
                <div className="w-28 h-1 bg-[#f05a28] mb-10 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed text-xl">
                  Deliver cutting-edge technology solutions that drive business transformation. 
                  Provide expertly screened talent across all tech stacks. Foster long-term 
                  partnerships through ethical practices and rapid service delivery.
                </p>
              </div>

              {/* Philosophy Card */}
              <div 
                className="bg-white rounded-xl p-16 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative"
                onMouseEnter={() => setHoveredCard('philosophy')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-[#3a3dc4] mb-10 h-24 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={faHandshakeAngle} 
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'philosophy' ? 'handshake-animate' : ''}`}
                  />
                </div>
                <h3 className="text-4xl font-bold mb-8">Our Philosophy</h3>
                <div className="w-28 h-1 bg-[#f05a28] mb-10 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed text-xl">
                  VirtuSwift operates on the principles of virtue and speed, combining moral 
                  excellence with swift execution. We believe in upholding integrity, 
                  accelerating success, and innovating responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl font-bold text-center mb-6">Case Studies</h2>
            <div className="w-40 h-1 bg-[#f05a28] mx-auto mb-12"></div>
            <p className="text-2xl text-gray-600 text-center mb-24 max-w-5xl mx-auto leading-relaxed">
              Discover how VirtuSwift has transformed businesses across industries with innovative SAP solutions.
            </p>

            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(0, visibleCaseStudies).map((study, index) => (
                <div 
                  key={index}
                  className="case-study-card bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl service-card relative overflow-hidden"
                  onMouseEnter={() => setHoveredCard(`case-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onMouseMove={(e) => handleMouseMove(e, `case-${index}`)}
                >
                  <div 
                    className="glow-effect"
                    style={{
                      '--glow-x': `${mousePosition.x}%`,
                      '--glow-y': `${mousePosition.y}%`
                    } as React.CSSProperties}
                  ></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <FontAwesomeIcon 
                      icon={study.icon} 
                      className={`industry-icon text-[#3a3dc4] text-3xl ${hoveredCard === `case-${index}` ? 'icon-animate' : ''}`}
                    />
                    <h3 className="text-2xl font-bold ml-4">{study.industry}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg relative z-10">
                    {study.description}
                  </p>

                  <div className="space-y-4 mb-6 relative z-10">
                    {study.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="stat-item flex items-center text-[#3a3dc4]">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                        <span className="font-semibold">{stat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="testimonial relative z-10">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-[#f05a28] mr-2" />
                    {study.testimonial}
                  </div>

                  <Link 
                    to={`/case-studies/${study.industry.toLowerCase().replace(/\s+/g, '-')}`}
                    className="view-case-study inline-flex items-center text-[#3a3dc4] font-semibold mt-4 hover:text-[#f05a28] relative z-10"
                  >
                    View Case Study
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>

            {visibleCaseStudies < caseStudies.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setVisibleCaseStudies(prev => prev + 3)}
                  className="bg-[#3a3dc4] hover:bg-[#2f3099] text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Load More Case Studies
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SAP & Cloud Migration Experts Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl font-bold text-center mb-6">SAP & Cloud Migration Experts</h2>
            <div className="w-40 h-1 bg-[#f05a28] mx-auto mb-12"></div>
            <p className="text-2xl text-gray-600 text-center mb-24 max-w-5xl mx-auto leading-relaxed">
              We are industry leaders in Cloud Architecture for SAP deployments, SAP HANA Upgrade, 
              SAP Data Migration, providing High Availability, implementing industry regulations, 
              and complete disaster recovery solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 px-4">
              {/* SAP Cloud Architecture Card */}
              <div 
                className="bg-white rounded-xl p-12 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative service-card"
                onMouseEnter={() => setHoveredCard('sap-cloud')}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, 'sap-cloud')}
              >
                <div 
                  className="glow-effect"
                  style={{
                    '--glow-x': `${mousePosition.x}%`,
                    '--glow-y': `${mousePosition.y}%`
                  } as React.CSSProperties}
                ></div>
                <div className="text-[#3a3dc4] mb-8 h-24 flex items-center justify-center relative z-50">
                  <FontAwesomeIcon 
                    icon={faCloudArrowUp}
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'sap-cloud' ? 'icon-animate' : ''}`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">SAP Cloud Architecture</h3>
                <div className="w-24 h-1 bg-[#f05a28] mb-6 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed">
                  Expert cloud architecture design for SAP deployments with optimized performance and scalability.
                </p>
              </div>

              {/* HANA Migration Card */}
              <div 
                className="bg-white rounded-xl p-12 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative service-card"
                onMouseEnter={() => setHoveredCard('hana')}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, 'hana')}
              >
                <div 
                  className="glow-effect"
                  style={{
                    '--glow-x': `${mousePosition.x}%`,
                    '--glow-y': `${mousePosition.y}%`
                  } as React.CSSProperties}
                ></div>
                <div className="text-[#3a3dc4] mb-8 h-24 flex items-center justify-center relative z-50">
                  <FontAwesomeIcon 
                    icon={faArrowUpFromBracket}
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'hana' ? 'icon-animate' : ''}`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">SAP HANA Migration</h3>
                <div className="w-24 h-1 bg-[#f05a28] mb-6 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed">
                  Seamless SAP HANA upgrades and migrations with minimal downtime and maximum efficiency.
                </p>
              </div>

              {/* Data Migration Card */}
              <div 
                className="bg-white rounded-xl p-12 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative service-card"
                onMouseEnter={() => setHoveredCard('data')}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, 'data')}
              >
                <div 
                  className="glow-effect"
                  style={{
                    '--glow-x': `${mousePosition.x}%`,
                    '--glow-y': `${mousePosition.y}%`
                  } as React.CSSProperties}
                ></div>
                <div className="text-[#3a3dc4] mb-8 h-24 flex items-center justify-center relative z-50">
                  <FontAwesomeIcon 
                    icon={faDatabase}
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'data' ? 'icon-animate' : ''}`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">Data Migration</h3>
                <div className="w-24 h-1 bg-[#f05a28] mb-6 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed">
                  Secure and efficient data migration services with comprehensive validation and testing.
                </p>
              </div>

              {/* High Availability Card */}
              <div 
                className="bg-white rounded-xl p-12 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative service-card"
                onMouseEnter={() => setHoveredCard('ha')}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, 'ha')}
              >
                <div 
                  className="glow-effect"
                  style={{
                    '--glow-x': `${mousePosition.x}%`,
                    '--glow-y': `${mousePosition.y}%`
                  } as React.CSSProperties}
                ></div>
                <div className="text-[#3a3dc4] mb-8 h-24 flex items-center justify-center relative z-50">
                  <FontAwesomeIcon 
                    icon={faNetworkWired}
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'ha' ? 'icon-animate' : ''}`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">High Availability</h3>
                <div className="w-24 h-1 bg-[#f05a28] mb-6 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed">
                  Ensure 24/7 system availability with robust architecture and failover solutions.
                </p>
              </div>

              {/* Compliance Card */}
              <div 
                className="bg-white rounded-xl p-12 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative service-card"
                onMouseEnter={() => setHoveredCard('compliance')}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, 'compliance')}
              >
                <div 
                  className="glow-effect"
                  style={{
                    '--glow-x': `${mousePosition.x}%`,
                    '--glow-y': `${mousePosition.y}%`
                  } as React.CSSProperties}
                ></div>
                <div className="text-[#3a3dc4] mb-8 h-24 flex items-center justify-center relative z-50">
                  <FontAwesomeIcon 
                    icon={faShieldHalved}
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'compliance' ? 'icon-animate' : ''}`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">Industry Compliance</h3>
                <div className="w-24 h-1 bg-[#f05a28] mb-6 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed">
                  Implement and maintain compliance with industry regulations and security standards.
                </p>
              </div>

              {/* Disaster Recovery Card */}
              <div 
                className="bg-white rounded-xl p-12 hover:shadow-2xl transition-all duration-300 border border-[#f1f1f1] group hover:-translate-y-2 relative service-card"
                onMouseEnter={() => setHoveredCard('dr')}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, 'dr')}
              >
                <div 
                  className="glow-effect"
                  style={{
                    '--glow-x': `${mousePosition.x}%`,
                    '--glow-y': `${mousePosition.y}%`
                  } as React.CSSProperties}
                ></div>
                <div className="text-[#3a3dc4] mb-8 h-24 flex items-center justify-center relative z-50">
                  <FontAwesomeIcon 
                    icon={faHardDrive}
                    className={`text-6xl transition-all duration-300 ${hoveredCard === 'dr' ? 'icon-animate' : ''}`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">Disaster Recovery</h3>
                <div className="w-24 h-1 bg-[#f05a28] mb-6 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive disaster recovery solutions with rapid recovery time objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence & Stats Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-6xl font-bold text-center mb-6">Global Presence</h2>
            <div className="w-40 h-1 bg-[#f05a28] mx-auto mb-12"></div>
            <p className="text-2xl text-gray-600 text-center mb-24 max-w-5xl mx-auto leading-relaxed">
              With strategic locations across three continents, VirtuSwift delivers excellence globally. 
              Our presence in key tech hubs ensures 24/7 service delivery and local expertise with global reach.
            </p>

            {/* Map and Stats Container */}
            <div>
              {/* World Map */}
              <div className="relative w-full aspect-[2.5/1] mb-16">
                <WorldMap />
              </div>

              {/* Location Names */}
              <div className="flex justify-between items-center px-16 mb-20">
                <div className="flex items-center">
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    className="text-[#f05a28] text-2xl mr-2" 
                  />
                  <span className="text-2xl font-bold">United States</span>
                </div>

                <div className="flex items-center">
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    className="text-[#f05a28] text-2xl mr-2" 
                  />
                  <span className="text-2xl font-bold">United Kingdom</span>
                </div>

                <div className="flex items-center">
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    className="text-[#f05a28] text-2xl mr-2" 
                  />
                  <span className="text-2xl font-bold">India</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-8 bg-gradient-to-r from-[#3a3dc4]/5 to-white via-white rounded-3xl p-12">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <div className="text-6xl font-bold mb-4 text-[#3a3dc4]">500+</div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#f05a28]/10 rounded-full"></div>
                  </div>
                  <div className="text-xl text-gray-600">Clients Worldwide</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <div className="text-6xl font-bold mb-4 text-[#3a3dc4]">2,000+</div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#f05a28]/10 rounded-full"></div>
                  </div>
                  <div className="text-xl text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <div className="text-6xl font-bold mb-4 text-[#3a3dc4]">98%</div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#f05a28]/10 rounded-full"></div>
                  </div>
                  <div className="text-xl text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <div className="text-6xl font-bold mb-4 text-[#3a3dc4]">24/7</div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#f05a28]/10 rounded-full"></div>
                  </div>
                  <div className="text-xl text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#232584] to-[#1c1c38] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Partner with VirtuSwift to unlock innovation, efficiency, and growth 
            for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" 
              className="bg-[#f05a28] hover:bg-[#e04d1d] text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Contact Us Today
            </Link>
            <Link to="/services" 
              className="border-2 border-[#3a3dc4] hover:bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Explore Our Services
          </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;