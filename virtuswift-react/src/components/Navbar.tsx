import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCloud, faShieldAlt, faBriefcase, faHeartbeat, faUniversity, faStore, faIndustry, faTruck, faUserShield, faPills, faDatabase, faServer, faShoppingCart, faBolt, faMoneyBillTrendUp, faHospital, faLightbulb, faCogs, faChartLine, faComments, faUsers, faUserPlus, faLandmark, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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
  const [servicesLeft, setServicesLeft] = useState(0);
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

  useEffect(() => {
    if (servicesOpen || industriesOpen || caseStudiesOpen) {
      if (servicesBtnRef.current) {
        setServicesLeft(servicesBtnRef.current.offsetLeft);
      }
    }
  }, [servicesOpen, industriesOpen, caseStudiesOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setServicesOpen(false);
      setIndustriesOpen(false);
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

  const navLinkClass = "text-gray-700 hover:text-[#3a3dc4] px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const dropdownLinkClass = "block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#f05a28] transition-colors duration-200";
  const dropdownButtonClass = "inline-flex items-center text-gray-700 hover:text-[#3a3dc4] px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-[#3a3dc4]";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center mr-6" style={{ marginLeft: '-32px' }}>
                <img src="/logo.png" alt="VirtuSwift Logo" className="h-16 w-auto" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link to="/" className={navLinkClass}>Home</Link>
              <Link to="/about" className={navLinkClass}>About Us</Link>
              
              {/* Services Dropdown */}
              <div className="inline-block text-left">
                <button ref={servicesBtnRef} onClick={toggleServices} className={`${dropdownButtonClass} ${servicesOpen ? 'border-[#3a3dc4] text-[#3a3dc4]' : ''}`}>
                  <span>Services</span>
                  <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div ref={servicesDropdownRef} className="absolute top-full w-[750px] shadow-2xl bg-white ring-1 ring-black ring-opacity-5 flex z-50 animate-fade-in border-t-2 border-[#3a3dc4]" style={{ left: `calc(${servicesLeft}px - 250px)` }}>
                    {/* Sidebar */}
                    <div className="w-1/3 bg-[#E8E9F5] p-6 flex flex-col items-start border-r border-gray-200 min-h-[300px]">
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
                    <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-2 p-6">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-4">Cloud Solutions</h4>
                        <Link to="/services/aws-migration" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] group-hover:text-[#f05a28] group-hover:underline">AWS Migration</span>
                            <div className="text-xs text-gray-500">Seamless transition to AWS cloud</div>
                          </span>
                        </Link>
                        <Link to="/services/azure" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] group-hover:text-[#f05a28] group-hover:underline">Azure Solutions</span>
                            <div className="text-xs text-gray-500">Empower your business with Azure</div>
                          </span>
                        </Link>
                        <Link to="/services/multi-google-cloud" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faGoogle} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] group-hover:text-[#f05a28] group-hover:underline">Multi-Cloud Google</span>
                            <div className="text-xs text-gray-500">Integrate Google Cloud with ease</div>
                          </span>
                        </Link>
                        <Link to="/services/cloud-security" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] group-hover:text-[#f05a28] group-hover:underline">Cloud Security</span>
                            <div className="text-xs text-gray-500">Protect your cloud infrastructure</div>
                          </span>
                        </Link>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-4">Enterprise Solutions</h4>
                        <Link to="/services/sap" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faBriefcase} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] group-hover:text-[#f05a28] group-hover:underline">SAP Services</span>
                            <div className="text-xs text-gray-500">Expert SAP implementation & support</div>
                          </span>
                        </Link>
                        <Link to="/services/salesforce" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faUserShield} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] group-hover:text-[#f05a28] group-hover:underline">Salesforce</span>
                            <div className="text-xs text-gray-500">CRM solutions for business growth</div>
                          </span>
                        </Link>
                        <Link to="/services/microsoft-dynamics" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faMicrosoft} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] group-hover:text-[#f05a28] group-hover:underline">Microsoft Dynamics</span>
                            <div className="text-xs text-gray-500">Business apps for productivity</div>
                          </span>
                        </Link>
                        <Link to="/services/oracle-solutions" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faDatabase} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-[#2563eb] group-hover:text-[#f05a28] group-hover:underline">Oracle Solutions</span>
                            <div className="text-xs text-gray-500">Robust Oracle enterprise solutions</div>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div className="inline-block text-left">
                <button onClick={toggleIndustries} className={`${dropdownButtonClass} ${industriesOpen ? 'border-[#3a3dc4] text-[#3a3dc4]' : ''}`}>
                  <span>Industries</span>
                  <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${industriesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {industriesOpen && (
                  <div ref={industriesDropdownRef} className="absolute top-full w-[750px] shadow-2xl bg-white ring-1 ring-black ring-opacity-5 flex z-50 animate-fade-in border-t-2 border-[#3a3dc4]" style={{ left: `calc(${servicesLeft}px - 250px)` }}>
                    {/* Sidebar */}
                    <div className="w-1/3 bg-[#E8E9F5] p-6 flex flex-col items-start border-r border-gray-200 min-h-[300px]">
                      <h3 className="text-xl font-bold text-[#121927] mb-2">Industries</h3>
                      <p className="text-sm text-[#121927] mb-4">Expertise across key sectors to drive your business forward.</p>
                      <Link to="/industries" className="bg-[#3a3dc4] hover:bg-[#2f3099] text-white font-semibold px-4 py-2 rounded mb-6 transition">View All Industries</Link>
                      <div className="flex flex-col gap-2 w-full">
                        <Link to="/industries" className="text-[#121927] hover:underline text-base">All Industries</Link>
                        <Link to="/industries/technology" className="text-[#121927] hover:underline text-base">By Technology</Link>
                      </div>
                    </div>
                    {/* Main Mega Menu Content */}
                    <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-2 p-6">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Core Industries</h4>
                        <Link to="/industries/healthcare" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faHeartbeat} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Healthcare</span>
                            <div className="text-xs text-gray-500">Innovative IT for patient care</div>
                          </span>
                        </Link>
                        <Link to="/industries/financial" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faLandmark} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Financial</span>
                            <div className="text-xs text-gray-500">Secure, compliant solutions</div>
                          </span>
                        </Link>
                        <Link to="/industries/retail" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faStore} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Retail</span>
                            <div className="text-xs text-gray-500">Digital transformation for retail</div>
                          </span>
                        </Link>
                        <Link to="/manufacturing" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faIndustry} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Manufacturing</span>
                            <div className="text-xs text-gray-500">Smart manufacturing solutions</div>
                          </span>
                        </Link>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Specialized Sectors</h4>
                        <Link to="/industries/utilities" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faBolt} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Utilities</span>
                            <div className="text-xs text-gray-500">Powering digital utilities</div>
                          </span>
                        </Link>
                        <Link to="/industries/pharmaceuticals" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faPills} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Pharmaceuticals</span>
                            <div className="text-xs text-gray-500">IT for pharma innovation</div>
                          </span>
                        </Link>
                        <Link to="/industries/public-sector" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faUniversity} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Public Sector</span>
                            <div className="text-xs text-gray-500">Modernizing government IT</div>
                          </span>
                        </Link>
                        <Link to="/industries/logistics" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faTruck} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Logistics</span>
                            <div className="text-xs text-gray-500">Efficient supply chain IT</div>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies Dropdown */}
              <div className="inline-block text-left">
                <button onClick={() => {
                  setCaseStudiesOpen((prev) => {
                    if (!prev) {
                      setServicesOpen(false);
                      setIndustriesOpen(false);
                    }
                    return !prev;
                  });
                }} className={`${dropdownButtonClass} ${caseStudiesOpen ? 'border-[#3a3dc4] text-[#3a3dc4]' : ''}`}>
                  <span>Case Studies</span>
                  <svg className={`ml-2 h-4 w-4 transition-transform duration-200 ${caseStudiesOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {caseStudiesOpen && (
                  <div ref={caseStudiesDropdownRef} className="absolute top-full w-[750px] shadow-2xl bg-white ring-1 ring-black ring-opacity-5 flex z-50 animate-fade-in border-t-2 border-[#3a3dc4]" style={{ left: `calc(${servicesLeft}px - 250px)` }}>
                    {/* Sidebar */}
                    <div className="w-1/3 bg-[#E8E9F5] p-6 flex flex-col items-start border-r border-gray-200 min-h-[300px]">
                      <h3 className="text-xl font-bold text-[#121927] mb-2">Case Studies</h3>
                      <p className="text-sm text-[#121927] mb-4">Explore our proven success across industries.</p>
                      <Link to="/case-studies" className="bg-[#3a3dc4] hover:bg-[#2f3099] text-white font-semibold px-4 py-2 rounded mb-6 transition">View All Case Studies</Link>
                      <div className="flex flex-col gap-2 w-full">
                        <Link to="/case-studies" className="text-[#121927] hover:underline text-base">All Case Studies</Link>
                        <Link to="/case-studies/industry" className="text-[#121927] hover:underline text-base">By Industry</Link>
                      </div>
                    </div>
                    {/* Main Mega Menu Content */}
                    <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-2 p-6">
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Featured Industries</h4>
                        <Link to="/case-studies/manufacturing" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faIndustry} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Manufacturing</span>
                            <div className="text-xs text-gray-500">Driving efficiency and innovation</div>
                          </span>
                        </Link>
                        <Link to="/case-studies/retail" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Retail</span>
                            <div className="text-xs text-gray-500">Transforming customer experience</div>
                          </span>
                        </Link>
                        <Link to="/case-studies/utilities" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faBolt} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Utilities</span>
                            <div className="text-xs text-gray-500">Modernizing infrastructure</div>
                          </span>
                        </Link>
                        <Link to="/case-studies/pharmaceuticals" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faPills} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Pharmaceuticals</span>
                            <div className="text-xs text-gray-500">Accelerating drug development</div>
                          </span>
                        </Link>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">More Case Studies</h4>
                        <Link to="/case-studies/finance" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faMoneyBillTrendUp} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Finance</span>
                            <div className="text-xs text-gray-500">Securing financial futures</div>
                          </span>
                        </Link>
                        <Link to="/case-studies/public-sector" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faLandmark} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Public Sector</span>
                            <div className="text-xs text-gray-500">Empowering government services</div>
                          </span>
                        </Link>
                        <Link to="/case-studies/healthcare" className="flex items-start gap-3 mb-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faHospital} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">Healthcare</span>
                            <div className="text-xs text-gray-500">Enhancing patient outcomes</div>
                          </span>
                        </Link>
                        <Link to="/case-studies/high-tech" className="flex items-start gap-3 group">
                          <span className="bg-[#D3D6E8] p-2 rounded group-hover:bg-[#ffe5d0] group transition-colors duration-200">
                            <FontAwesomeIcon icon={faLightbulb} className="text-[#3a3dc4] group-hover:text-[#f05a28] transition-colors duration-200" />
                          </span>
                          <span>
                            <span className="font-semibold text-blue-900 group-hover:underline">High-Tech</span>
                            <div className="text-xs text-gray-500">Innovating for tomorrow</div>
                          </span>
                        </Link>
                      </div>
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
                  <Link to="/services/aws-migration" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faCloud} className="mr-2" />AWS Migration</Link>
                  <Link to="/services/azure" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faCloud} className="mr-2" />Azure Solutions</Link>
                  <Link to="/services/cloud-security" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faShieldAlt} className="mr-2" />Cloud Security</Link>
                  <Link to="/services/supply-chain" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faTruck} className="mr-2" />Supply Chain</Link>
                  <Link to="/services/sap" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faBriefcase} className="mr-2" />SAP Services</Link>
                  <Link to="/services/salesforce" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faUserShield} className="mr-2" />Salesforce</Link>
                  <Link to="/services/pharmaceutical" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faPills} className="mr-2" />Pharmaceutical IT</Link>
                  <Link to="/services/oracle-solutions" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faDatabase} className="mr-2" />Oracle Solutions</Link>
                  <Link to="/services/multi-google-cloud" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faGoogle} className="mr-2" />Multi-Cloud Google</Link>
                  <Link to="/services/microsoft-dynamics" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faMicrosoft} className="mr-2" />Microsoft Dynamics</Link>
                  <Link to="/services/ibm-systems" className={dropdownLinkClass} onClick={toggleMenu}><FontAwesomeIcon icon={faServer} className="mr-2" />IBM Systems</Link>
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
                  <Link to="/industries/healthcare" className={dropdownLinkClass} onClick={toggleMenu}>Healthcare</Link>
                  <Link to="/industries/financial" className={dropdownLinkClass} onClick={toggleMenu}>Financial</Link>
                  <Link to="/industries/retail" className={dropdownLinkClass} onClick={toggleMenu}>Retail</Link>
                  <Link to="/manufacturing" className={dropdownLinkClass} onClick={toggleMenu}>Manufacturing</Link>
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