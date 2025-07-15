import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCloud, faShieldAlt, faBriefcase, faHeartbeat, faUniversity, faStore, faIndustry, faTruck, faUserShield, faPills, faDatabase, faServer, faShoppingCart, faBolt, faMoneyBillTrendUp, faHospital, faLightbulb, faCogs, faChartLine, faComments, faUsers, faUserPlus, faLandmark, faEnvelope, faPhone, faChartBar, faRocket, faHeadset, faProjectDiagram, faCode, faPlaneDeparture, faGlobe, faSeedling, faFlask, faOilCan, faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const caseStudies = [
  { name: 'Manufacturing', slug: 'manufacturing', icon: faIndustry },
  { name: 'Retail', slug: 'retail', icon: faShoppingCart },
  { name: 'Utilities', slug: 'utilities', icon: faBolt },
  { name: 'Pharmaceuticals', slug: 'pharmaceuticals', icon: faPills },
  { name: 'Finance', slug: 'finance', icon: faMoneyBillTrendUp },
  { name: 'Public Sector', slug: 'public-sector', icon: faLandmark },
  { name: 'Healthcare', slug: 'healthcare', icon: faHospital },
  { name: 'High-Tech', slug: 'high-tech', icon: faLightbulb },
  { name: 'Logistics', slug: 'logistics', icon: faTruck },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<{ id: string; title: string; description: string } | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<{ id: string; title: string; description: string } | null>(null);
  const [hoveredCaseStudy, setHoveredCaseStudy] = useState<{ id: string; title: string; description: string } | null>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
  const caseStudiesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesOpen && servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node) && 
          servicesBtnRef.current && !servicesBtnRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesOpen && industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
      if (caseStudiesOpen && caseStudiesDropdownRef.current && !caseStudiesDropdownRef.current.contains(event.target as Node)) {
        setCaseStudiesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesOpen, industriesOpen, caseStudiesOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setServicesOpen(false);
      setIndustriesOpen(false);
      setCaseStudiesOpen(false); // Close dropdowns when mobile menu is closed
    }
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setServicesOpen((prev) => {
      if (!prev) {
        setIndustriesOpen(false);
        setCaseStudiesOpen(false);
      }
      return !prev;
    });
  };

  const toggleIndustries = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndustriesOpen((prev) => {
      if (!prev) {
        setServicesOpen(false);
        setCaseStudiesOpen(false);
      }
      return !prev;
    });
  };
  
  const toggleCaseStudies = (e: React.MouseEvent) => {
    e.preventDefault();
    setCaseStudiesOpen((prev) => {
      if (!prev) {
        setServicesOpen(false);
        setIndustriesOpen(false);
      }
      return !prev;
    });
  };

  const navLinkClass = "text-gray-700 hover:text-[#3a3dc4] px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const dropdownLinkClass = "block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f05a28] transition-colors duration-200";
  const dropdownButtonClass = "inline-flex items-center text-gray-700 hover:text-[#3a3dc4] px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent focus:outline-none";

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-[#E8E9F5] text-[#121927] text-sm py-2 px-4 flex items-center justify-between border-b border-[#D3D6E8]">
        <div className="flex items-center gap-6 justify-end w-full">
          {/* Email */}
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-[#3a3dc4]" />
            <a href="mailto:info@virtuswift.com" className="hover:underline">info@virtuswift.com</a>
          </span>
          {/* Phone */}
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faPhone} className="mr-1 text-[#3a3dc4]" />
            <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
          </span>
        </div>
      </div>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          onMouseEnter={(e) => {
            // Only close dropdowns if we're not hovering over a dropdown button or dropdown content
            const target = e.target as HTMLElement;
            const isDropdownButton = target.closest('button[onMouseEnter]');
            const isDropdownContent = target.closest('[ref]');
            
            if (!isDropdownButton && !isDropdownContent) {
              setServicesOpen(false);
              setIndustriesOpen(false);
              setCaseStudiesOpen(false);
            }
          }}
        >
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center mr-6" style={{ marginLeft: '-32px' }}>
                <img src="/logo.png" alt="VirtuSwift Logo" className="h-16 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link 
                to="/" 
                className={`${navLinkClass} home-hover`}
                onMouseEnter={() => {
                  setServicesOpen(false);
                  setIndustriesOpen(false);
                  setCaseStudiesOpen(false);
                }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${navLinkClass} about-hover`}
                onMouseEnter={() => {
                  setServicesOpen(false);
                  setIndustriesOpen(false);
                  setCaseStudiesOpen(false);
                }}
              >
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div className="inline-block text-left">
                <button ref={servicesBtnRef} onMouseEnter={() => { setServicesOpen(true); setIndustriesOpen(false); setCaseStudiesOpen(false); }} className={`${dropdownButtonClass} ${servicesOpen ? 'services-active text-[#3a3dc4]' : ''}`}>
                  <span>Services</span>
                  <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div ref={servicesDropdownRef} onMouseLeave={() => setServicesOpen(false)} className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[1200px] h-[400px] shadow-2xl bg-white ring-1 ring-black ring-opacity-5 flex z-50 animate-fade-in border-t-2 border-[#3a3dc4]`}>
                    {/* Sidebar */}
                    <div className="w-1/4 bg-[#E8E9F5] p-6 flex flex-col items-start border-r border-gray-200 min-h-[300px]">
                      <h3 className="text-xl font-bold text-[#121927] mb-2">Our Services</h3>
                      <p className="text-sm text-[#121927] mb-4">Tailored solutions to meet your unique business requirements.</p>
                      <Link to="/services" className="bg-[#3a3dc4] hover:bg-[#2f3099] text-white font-semibold px-4 py-2 rounded mb-6 transition">View All Services</Link>
                      <div className="flex flex-col gap-2 w-full">
                        <Link to="/services" className="text-[#121927] hover:underline text-base">All Services</Link>
                        <Link to="/services/industry" className="text-[#121927] hover:underline text-base">By Industry</Link>
                        <Link to="/services/technology" className="text-[#121927] hover:underline text-base">By Technology</Link>
                      </div>
                    </div>
                    {/* Main Mega Menu Content: Reorganized services */}
                    <div className="w-3/4 p-6">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {/* Column 1 */}
                        <Link to="/services/cloud-strategy-consulting" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faLightbulb} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">Cloud Strategy & Consulting</span>
                            <div className="text-xs text-gray-500">Custom cloud strategies for agility</div>
                          </span>
                        </Link>
                        <Link to="/services/digital-transformation" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">Digital Transformation Solutions</span>
                            <div className="text-xs text-gray-500">Accelerate digital growth with smarter workflows</div>
                          </span>
                        </Link>
                        <Link to="/data-analytics-monetization" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">Data Analytics & Monetization</span>
                            <div className="text-xs text-gray-500">Unlock insights and new revenue streams</div>
                          </span>
                        </Link>
                        <Link to="/services/custom-software-development" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCode} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">Custom Software Development Solutions</span>
                            <div className="text-xs text-gray-500">Agile. Scalable. Future-Ready software solutions</div>
                          </span>
                        </Link>
                        <Link to="/services/it-staffing-talent-solutions" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faUserPlus} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">IT Staffing & Talent Solutions</span>
                            <div className="text-xs text-gray-500">Find and scale tech talent fast</div>
                          </span>
                        </Link>
                        <Link to="/services/managed-it-services" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faServer} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">Managed IT Services</span>
                            <div className="text-xs text-gray-500">End-to-end infrastructure, cloud, and application support</div>
                          </span>
                        </Link>
                        <Link to="/services/devops" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCogs} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">DevOps Services</span>
                            <div className="text-xs text-gray-500">Accelerate delivery and reliability with modern DevOps automation and CI/CD.</div>
                          </span>
                        </Link>
                        <Link to="/services/project-management" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faProjectDiagram} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">Project Management Services</span>
                            <div className="text-xs text-gray-500">Drive your digital projects with confidence</div>
                          </span>
                        </Link>
                        <Link to="/services/metaverse-vr-ar-solutions" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faHeadset} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">Metaverse, VR & AR Solutions</span>
                            <div className="text-xs text-gray-500">Design immersive digital experiences that connect, engage, and innovate</div>
                          </span>
                        </Link>
                        <Link to="/services/sap" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] transition-colors duration-200 flex items-center justify-center">
                            <FontAwesomeIcon icon={faBriefcase} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] underline group-hover:text-[#f05a28] group-hover:underline">SAP Services</span>
                            <div className="text-xs text-gray-500">Expert SAP implementation & support</div>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div className="inline-block text-left">
                <button onMouseEnter={() => { setIndustriesOpen(true); setServicesOpen(false); setCaseStudiesOpen(false); }} className={`${dropdownButtonClass} ${industriesOpen ? 'industries-active text-[#3a3dc4]' : ''}`}>
                  <span>Industries</span>
                  <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${industriesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {industriesOpen && (
                  <div ref={industriesDropdownRef} onMouseLeave={() => setIndustriesOpen(false)} className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[1200px] h-[400px] shadow-2xl bg-white ring-1 ring-black ring-opacity-5 flex z-50 animate-fade-in border-t-2 border-[#3a3dc4]`}>
                    {/* Sidebar */}
                    <div className="w-1/4 bg-[#E8E9F5] p-6 flex flex-col items-start border-r border-gray-200 min-h-[300px]">
                      <h3 className="text-xl font-bold text-[#121927] mb-2">Industries</h3>
                      <p className="text-sm text-[#121927] mb-4">Expertise across key sectors to drive your business forward.</p>
                      <Link to="/industries" className="bg-[#3a3dc4] hover:bg-[#2f3099] text-white font-semibold px-4 py-2 rounded mb-6 transition">View All Industries</Link>
                      <div className="flex flex-col gap-2 w-full">
                        <Link to="/industries" className="text-[#121927] hover:underline text-base">All Industries</Link>
                        <Link to="/industries/technology" className="text-[#121927] hover:underline text-base">By Technology</Link>
                      </div>
                    </div>
                    {/* Main Mega Menu Content */}
                    <div className="w-1/4 p-6">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Core Industries</h4>
                        <Link to="/industries/aviation" className="flex items-start gap-3 mb-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'aviation', title: 'Aviation', description: 'Intelligent, secure, and passenger-centric digital solutions for airlines and airports.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faPlaneDeparture} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Aviation</span>
                            <div className="text-xs text-gray-500">Intelligent, secure, and passenger-centric digital solutions</div>
                          </span>
                        </Link>
                        <Link to="/industries/aerospace-defense" className="flex items-start gap-3 mb-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'aerospace-defense', title: 'Aerospace & Defense', description: 'Mission-critical, secure, and scalable digital solutions for aerospace and defense organizations.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Aerospace & Defense</span>
                            <div className="text-xs text-gray-500">Mission-critical, secure, and scalable digital solutions</div>
                          </span>
                        </Link>
                        <Link to="/industries/financial" className="flex items-start gap-3 mb-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'financial', title: 'Financial', description: 'Secure, compliant IT solutions for the financial services industry.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faLandmark} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Financial</span>
                            <div className="text-xs text-gray-500">Secure, compliant solutions</div>
                          </span>
                        </Link>
                        <Link to="/industries/energy" className="flex items-start gap-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'energy', title: 'Energy & Natural Resources', description: 'Empowering the future of energy, resources, and industrial ecosystems.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faGlobe} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Energy & Natural Resources</span>
                            <div className="text-xs text-gray-500">Empowering the future of energy, resources, and industrial ecosystems</div>
                          </span>
                        </Link>
                        <Link to="/industries/consumer-products" className="flex items-start gap-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'consumer-products', title: 'Consumer Products', description: 'Innovative IT solutions for consumer goods manufacturers and distributors.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faSeedling} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Consumer Products</span>
                            <div className="text-xs text-gray-500">Innovative IT for consumer goods</div>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="w-1/4 p-6">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Specialized Sectors</h4>
                        <Link to="/industries/utilities" className="flex items-start gap-3 mb-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'utilities', title: 'Utilities', description: 'Powering digital transformation for utility companies with robust IT.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faBolt} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Utilities</span>
                            <div className="text-xs text-gray-500">Powering digital utilities</div>
                          </span>
                        </Link>
                        <Link to="/industries/pharmaceuticals" className="flex items-start gap-3 mb-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'pharmaceuticals', title: 'Pharmaceuticals', description: 'IT solutions and support tailored for the pharmaceutical industry.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faPills} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Pharmaceuticals</span>
                            <div className="text-xs text-gray-500">IT for pharma innovation</div>
                          </span>
                        </Link>
                        <Link to="/industries/public-sector" className="flex items-start gap-3 mb-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'public-sector', title: 'Public Sector', description: 'Modernizing government IT and services for the public sector.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faUniversity} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Public Sector</span>
                            <div className="text-xs text-gray-500">Modernizing government IT</div>
                          </span>
                        </Link>
                        <Link to="/industries/logistics" className="flex items-start gap-3 group"
                          onMouseEnter={() => setHoveredIndustry({ id: 'logistics', title: 'Logistics', description: 'Efficient supply chain management and logistics IT solutions.' })}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faTruck} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 underline group-hover:underline">Logistics</span>
                            <div className="text-xs text-gray-500">Efficient supply chain IT</div>
                          </span>
                        </Link>
                      </div>
                    </div>
                    {/* New Fourth Column for dynamic content */}
                    <div className="w-1/4 p-6 bg-[#F5F5F5] border-l border-gray-200">
                      {hoveredIndustry ? (
                        <div className="animate-fade-in">
                          <h4 className="font-bold text-blue-900 mb-2">{hoveredIndustry.title}</h4>
                          <p className="text-sm text-gray-700">{hoveredIndustry.description}</p>
                        </div>
                      ) : (
                        <div className="animate-fade-in">
                          <h4 className="font-bold text-blue-900 mb-2">About Our Industries</h4>
                          <p className="text-sm text-gray-700">We bring specialized IT expertise to a wide range of industries, understanding their unique challenges and opportunities to deliver tailored solutions.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies Dropdown */}
              <div className="inline-block text-left">
                <button onMouseEnter={() => { setCaseStudiesOpen(true); setServicesOpen(false); setIndustriesOpen(false); }} className={`${dropdownButtonClass} ${caseStudiesOpen ? 'case-studies-active text-[#3a3dc4]' : ''}`}>
                  <span>Case Studies</span>
                  <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${caseStudiesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {caseStudiesOpen && (
                  <div ref={caseStudiesDropdownRef} onMouseLeave={() => setCaseStudiesOpen(false)} className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[1200px] h-[400px] shadow-2xl bg-white ring-1 ring-black ring-opacity-5 flex z-50 animate-fade-in border-t-2 border-[#3a3dc4]`}>
                    {/* Sidebar */}
                    <div className="w-1/4 bg-[#E8E9F5] p-6 flex flex-col items-start border-r border-gray-200 min-h-[300px]">
                      <h3 className="text-xl font-bold text-[#121927] mb-2">Case Studies</h3>
                      <p className="text-sm text-[#121927] mb-4">Explore our proven success across industries.</p>
                      <Link to="/case-studies" className="bg-[#3a3dc4] hover:bg-[#2f3099] text-white font-semibold px-4 py-2 rounded mb-6 transition">View All Case Studies</Link>
                      <div className="flex flex-col gap-2 w-full">
                        <Link to="/case-studies" className="text-[#121927] hover:underline text-base">All Case Studies</Link>
                        <Link to="/case-studies/industry" className="text-[#121927] hover:underline text-base">By Industry</Link>
                      </div>
                    </div>
                    {/* Main Mega Menu Content */}
                    <div className="w-1/4 p-6">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Featured Industries</h4>
                        {caseStudies.slice(0, 4).map(cs => (
                          <Link
                            key={cs.slug}
                            to={`/case-studies/${cs.slug}`}
                            className="flex items-start gap-3 mb-3 group"
                            onMouseEnter={() => setHoveredCaseStudy({ id: cs.slug, title: cs.name, description: `Explore our success story in the ${cs.name} industry.` })}
                            onMouseLeave={() => setHoveredCaseStudy(null)}
                          >
                            <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                              <FontAwesomeIcon icon={cs.icon} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                            </span>
                            <span>
                              <span className="font-semibold text-blue-900 underline group-hover:underline">{cs.name}</span>
                              <div className="text-xs text-gray-500">{`Explore our success story in the ${cs.name} industry.`}</div>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="w-1/4 p-6">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">More Case Studies</h4>
                        {caseStudies.slice(4).map(cs => (
                          <Link
                            key={cs.slug}
                            to={`/case-studies/${cs.slug}`}
                            className="flex items-start gap-3 mb-3 group"
                            onMouseEnter={() => setHoveredCaseStudy({ id: cs.slug, title: cs.name, description: `Discover how we helped clients in the ${cs.name} sector.` })}
                            onMouseLeave={() => setHoveredCaseStudy(null)}
                          >
                            <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                              <FontAwesomeIcon icon={cs.icon} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                            </span>
                            <span>
                              <span className="font-semibold text-blue-900 underline group-hover:underline">{cs.name}</span>
                              <div className="text-xs text-gray-500">{`Discover how we helped clients in the ${cs.name} sector.`}</div>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* New Fourth Column for dynamic content */}
                    <div className="w-1/4 p-6 bg-[#F5F5F5] border-l border-gray-200">
                      {hoveredCaseStudy ? (
                        <div className="animate-fade-in">
                          <h4 className="font-bold text-blue-900 mb-2">{hoveredCaseStudy.title}</h4>
                          <p className="text-sm text-gray-700">{hoveredCaseStudy.description}</p>
                        </div>
                      ) : (
                        <div className="animate-fade-in">
                          <h4 className="font-bold text-blue-900 mb-2">About Our Case Studies</h4>
                          <p className="text-sm text-gray-700">Explore real-world examples of how VirtuSwift has helped businesses like yours achieve their IT goals and drive success.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/contact" className={"ml-2 bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 transition-colors duration-200 hover:bg-blue-700"}>Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FontAwesomeIcon icon={faBars} className="block h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className={dropdownLinkClass} onClick={toggleMenu}>Home</Link>
            <Link to="/about" className={dropdownLinkClass} onClick={toggleMenu}>About Us</Link>
            
            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button onClick={toggleServices} className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                <span>Services</span>
                <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4">
                  <Link to="/services/cloud-strategy-consulting" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faLightbulb} className="mr-2" />Cloud Strategy & Consulting</Link>
                  <Link to="/data-analytics-monetization" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faChartBar} className="mr-2" />Data Analytics & Monetization</Link>
                  <Link to="/services/it-staffing-talent-solutions" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faUserPlus} className="mr-2" />IT Staffing & Talent Solutions</Link>
                  <Link to="/services/devops" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faCogs} className="mr-2" />DevOps Services</Link>
                  <Link to="/services/digital-transformation" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faRocket} className="mr-2" />Digital Transformation Solutions</Link>
                  <Link to="/services/custom-software-development" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faCode} className="mr-2" />Custom Software Development Solutions</Link>
                  <Link to="/services/managed-it-services" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faServer} className="mr-2" />Managed IT Services</Link>
                  <Link to="/services/project-management" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />Project Management Services</Link>
                  <Link to="/services/metaverse-vr-ar-solutions" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faHeadset} className="mr-2" />Metaverse, VR & AR Solutions</Link>
                  <Link to="/services/sap" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faBriefcase} className="mr-2" />SAP Services</Link>
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div className="relative">
              <button onClick={toggleIndustries} className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                <span>Industries</span>
                <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${industriesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {industriesOpen && (
                <div className="pl-4">
                  <Link to="/industries/aviation" className={dropdownLinkClass} onClick={toggleMenu}>Aviation</Link>
                  <Link to="/industries/aerospace-defense" className={dropdownLinkClass} onClick={toggleMenu}>Aerospace & Defense</Link>
                  <Link to="/industries/financial" className={dropdownLinkClass} onClick={toggleMenu}>Financial</Link>
                  <Link to="/industries/energy" className={dropdownLinkClass} onClick={toggleMenu}>Energy & Natural Resources</Link>
                  <Link to="/industries/consumer-products" className={dropdownLinkClass} onClick={toggleMenu}>Consumer Products</Link>
                </div>
              )}
            </div>

            {/* Case Studies Dropdown (Mobile) */}
            <div className="relative">
              <button onClick={() => setCaseStudiesOpen(!caseStudiesOpen)} className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                <span>Case Studies</span>
                <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${caseStudiesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {caseStudiesOpen && (
                <div className="pl-4">
                  {caseStudies.map(cs => (
                    <Link
                      key={cs.slug}
                      to={`/case-studies/${cs.slug}`}
                      className={dropdownLinkClass}
                      onClick={toggleMenu}
                    >
                      <FontAwesomeIcon icon={cs.icon} className="mr-2 text-primary" />
                      {cs.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className={dropdownLinkClass} onClick={toggleMenu}>Contact Us</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 