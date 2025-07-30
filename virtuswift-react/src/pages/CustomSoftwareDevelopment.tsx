import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCheckCircle, faCloud, faRocket, faChartBar, faLightbulb, faDatabase, faLock, faChartLine, faSync, faCalendarAlt, faExclamationTriangle, faBullhorn, faMoneyBillWave, faServer, faProjectDiagram, faUserShield, faCode, faMobile, faDesktop, faShieldAlt, faUsers, faHeadset } from '@fortawesome/free-solid-svg-icons';

const tabs = ['Why Custom Software?', 'Our Solutions', 'Why VirtuSwift?'];

const heroSlides = [
  {
    image: '/assets/CUSTOMSOFTWARE.png',
    title: 'Custom Software Development Solutions',
    subtitle: 'Agile. Scalable. Future-Ready. VirtuSwift builds enterprise-grade software that powers innovation and delivers real business results.',
    cta: 'Code Your Success',
    ctaLink: '/contact',
  },
  {
    image: '/assets/customsoftware1.png',
    title: 'Custom Software Development Solutions',
    subtitle: 'Agile. Scalable. Future-Ready. VirtuSwift builds enterprise-grade software that powers innovation and delivers real business results.',
    cta: 'Code Your Success',
    ctaLink: '/contact',
  },
];

export default function CustomSoftwareDevelopment() {
  const [activeTab, setActiveTab] = useState('Why Custom Software?');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section Slider */}
      <section className="relative w-full h-[400px] overflow-hidden mb-0">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-[400px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center px-10 md:px-20">
                <div className="text-white max-w-2xl text-center mx-auto drop-shadow-lg">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">{slide.subtitle}</p>
                  <Link to={slide.ctaLink} className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">{slide.cta}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110"
          onClick={nextSlide}
        >
          ❯
        </button>
      </section>

      {/* Tab Navigation */}
      <div className="bg-[#121927] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start space-x-4 md:space-x-8 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`py-3 px-4 text-sm font-medium border-b-2 transition-all duration-300 hover:scale-105 ${activeTab === tab ? 'border-[#3a3dc4] text-[#3a3dc4]' : 'border-transparent text-gray-400 hover:text-white'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'Why Custom Software?' && (
          <>
            {/* Why Custom Software Development? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full md:pr-8">
                  <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">WHY CUSTOM SOFTWARE?</h3>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why Custom Software Development?</h2>
                  <p className="text-lg text-gray-700 mb-6">Software is no longer a support function—it's your business engine.</p>
                  <p className="text-gray-600 mb-6">At VirtuSwift, we craft powerful, secure, and scalable software that solves critical business challenges. From enterprise platforms to cloud-native applications, our solutions are tailored to your goals, industry, and technology stack.</p>
                  <p className="text-gray-600 mb-6">We don't just ship code—we deliver growth, velocity, and competitive edge.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/customsoftware2.png" alt="Custom Software Development" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* How Custom Software Drives Business Value */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">BUSINESS VALUE</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How Custom Software Drives Business Value</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faCogs} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Tailored to Your Workflow</h4>
                  <p className="text-sm text-gray-600 text-center">Purpose-built to fit your processes—no compromise, no clutter.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faRocket} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Accelerated Execution</h4>
                  <p className="text-sm text-gray-600 text-center">Cut manual work and deliver faster with automation-focused architecture.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faChartLine} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Scale Without Rewrites</h4>
                  <p className="text-sm text-gray-600 text-center">Built with flexible, modular codebases that grow with you.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faLock} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Security by Design</h4>
                  <p className="text-sm text-gray-600 text-center">Compliance, encryption, and governance from day one.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faDesktop} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Cross-Platform Delivery</h4>
                  <p className="text-sm text-gray-600 text-center">Web, mobile, desktop, cloud—we build for where your users are.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Long-Term Cost Control</h4>
                  <p className="text-sm text-gray-600 text-center">Own your code. Say goodbye to license fatigue and per-user fees.</p>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === 'Our Solutions' && (
          <>
            {/* VirtuSwift Software Development Services */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR SOLUTIONS</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">VirtuSwift Software Development Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: faCode, title: 'Custom Application Development', desc: 'From MVPs to complex enterprise tools—bespoke solutions for your users, market, and mission.', link: '/services/custom-application-development' },
                  { icon: faCloud, title: 'Cloud Infrastructure Setup & Management', desc: 'Build and maintain cloud-native environments on AWS, Azure, or GCP—optimized for performance and scalability.', link: '/services/cloud-infrastructure' },
                  { icon: faSync, title: 'Cloud Migration & Integration', desc: 'Replatform legacy systems into modern, cloud-native architectures with seamless API and third-party integrations.', link: '/services/cloud-migration-and-integration' },
                  { icon: faServer, title: 'Server & Storage Management', desc: 'Secure, high-performance backend environments built to scale with your workload.', link: '/services/server-and-storage-management' },
                  { icon: faDatabase, title: 'SAP Extension & Integration Support', desc: 'Develop custom SAP add-ons and APIs. Enhance SAP functionality using Fiori, UI5, and SAP BTP.', link: '/services/sap-integration-third-party' },
                  { icon: faMobile, title: 'IoT-Enabled Application Development', desc: 'Create real-time applications that interface with smart devices, sensors, and industrial systems.', link: '/services/iot-solutions' },
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl text-[#3a3dc4] mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h4>
                    <p className="text-gray-600 text-sm flex-1">{service.desc}</p>
                    {service.link && (
                      <Link to={service.link} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Details</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {activeTab === 'Why VirtuSwift?' && (
          <>
            {/* Why Choose VirtuSwift? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-xl shadow p-8">
                <div className="flex-1 w-full md:pr-8">
                  <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">WHY VIRTUSWIFT?</h3>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why Choose VirtuSwift?</h2>
                  <p className="text-lg text-gray-700 mb-6">You don't just need a dev team—you need a transformation partner.</p>
                  <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">What Sets VirtuSwift Apart</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] text-xl" /> Rapid Agile Delivery – Launch fast, iterate faster.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLightbulb} className="text-[#3a3dc4] text-xl" /> Design-Led Development – Intuitive UIs, seamless workflows.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLock} className="text-[#3a3dc4] text-xl" /> Secure Code Practices – DevSecOps, audits, and zero-trust design.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#3a3dc4] text-xl" /> Tech Stack Flexibility – From .NET to Python, React to Flutter—we build with the best tools for your case.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#3a3dc4] text-xl" /> Long-Term Partnership – Post-launch support, scaling, and feature evolution all built in.</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/customsoftware3.png" alt="Why VirtuSwift for Custom Software Development" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* How We Build Winning Software at VirtuSwift */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR PROCESS</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How We Build Winning Software at VirtuSwift</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
                {[
                  { step: 1, title: 'Discover & Define', desc: 'Stakeholder interviews, system analysis, KPIs—aligned from day one.' },
                  { step: 2, title: 'Design & Prototype', desc: 'Wireframes, user flows, and clickable prototypes validated by your team.' },
                  { step: 3, title: 'Develop & Iterate', desc: 'Agile sprints, automated testing, sprint demos, and transparent reporting.' },
                  { step: 4, title: 'Deploy & Support', desc: 'CI/CD pipelines, rollback plans, SLA-backed support, and post-launch optimization.' },
                ].map((s) => (
                  <div key={s.title} className="flex-1 flex flex-col items-center text-center bg-white rounded-lg p-6 shadow border-b-4 border-[#3a3dc4] mx-2 mb-4 md:mb-0 group transition">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3a3dc4] text-white text-2xl font-bold mb-2 group-hover:scale-110 transition">{s.step}</div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Final CTA */}
            <div className="text-center mt-12 pb-12">
              <div className="mb-4">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest text-center">GET STARTED</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight text-center">Let's Build Something Extraordinary</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">Innovation doesn't wait. Neither should you.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Let's Talk</Link>
              </div>
            </div>
            {/* Related Services */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">EXPLORE MORE</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Explore More Services from VirtuSwift</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: faRocket, title: 'Digital Transformation Solutions', desc: 'Modernize systems, automate workflows, and connect every layer of your enterprise.', link: '/services/digital-transformation' },
                  { icon: faLightbulb, title: 'AI & Machine Learning Development', desc: 'Embed intelligence into your custom apps with predictive models and automation pipelines.', link: '/services/ai-machine-learning' },
                  { icon: faChartBar, title: 'Data Analytics & Monetization', desc: 'Visualize data. Derive insight. Create revenue streams from software usage.', link: '/data-analytics-monetization' },
                  { icon: faUsers, title: 'IT Staffing Solutions', desc: 'Access top-tier engineers, DevOps pros, and tech leads—on demand.', link: '/services/it-staffing-talent-solutions' },
                  { icon: faCalendarAlt, title: 'Project Management Services', desc: 'Structured, milestone-driven delivery with Agile, Waterfall, or hybrid models.', link: '/services/project-management' },
                  { icon: faCogs, title: 'DevOps Services', desc: 'Set up end-to-end CI/CD workflows, containerized deployments, and secure infrastructure pipelines.', link: '/services/devops' },
                  { icon: faHeadset, title: 'Metaverse & XR Solutions', desc: 'Create next-gen immersive platforms with 3D interaction, virtual training, and spatial design.', link: '/services/metaverse-vr-ar-solutions' },
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl text-[#3a3dc4] mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                    {service.link && (
                      <Link to={service.link} className="text-[#3a3dc4] text-sm font-semibold hover:text-[#f05a28] transition-colors">Learn More →</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 