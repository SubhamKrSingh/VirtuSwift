import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCheckCircle, faCloud, faRocket, faChartBar, faLightbulb, faDatabase, faLock, faChartLine, faSync, faCalendarAlt, faExclamationTriangle, faBullhorn, faMoneyBillWave, faServer, faProjectDiagram, faUserShield } from '@fortawesome/free-solid-svg-icons';

const tabs = ['Why DevOps?', 'Our Solutions', 'Why VirtuSwift?'];

const heroSlides = [
  {
    image: '/assets/devops.png',
    title: 'DevOps Services',
    subtitle: 'Accelerate innovation, reduce downtime, and scale your digital delivery—VirtuSwift’s DevOps experts design automation pipelines that fit your teams, your stack, and your business.',
    cta: 'Launch with Zero Downtime',
    ctaLink: '/contact',
  },
  {
    image: '/assets/devops2.png',
    title: 'DevOps Services',
    subtitle: 'Accelerate innovation, reduce downtime, and scale your digital delivery—VirtuSwift’s DevOps experts design automation pipelines that fit your teams, your stack, and your business.',
    cta: 'Launch with Zero Downtime',
    ctaLink: '/contact',
  },
];

export default function DevOpsServices() {
  const [activeTab, setActiveTab] = useState('Why DevOps?');
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
        {activeTab === 'Why DevOps?' && (
          <>
            {/* Why Choose DevOps with VirtuSwift? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full md:pr-8">
                  <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">WHY DEVOPS?</h3>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why Choose DevOps with VirtuSwift?</h2>
                  <p className="text-lg text-gray-700 mb-6">Is your software delivery as fast as your ambition?</p>
                  <p className="text-gray-600 mb-6">DevOps is more than a process—it’s a cultural transformation. At VirtuSwift, we integrate development and operations into one agile engine that drives speed, stability, and continuous innovation.</p>
                  <p className="text-gray-600 mb-6">From startups launching MVPs to enterprises managing multi-cloud systems—we help you deploy confidently and scale intelligently. We don’t just automate steps—we engineer velocity.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/devops1.png" alt="DevOps Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* How DevOps Fuels Business Growth */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">BUSINESS GROWTH</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How DevOps Fuels Business Growth</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faSync} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Continuous Delivery</h4>
                  <p className="text-sm text-gray-600 text-center">Release features and updates faster with CI/CD that’s built for agility.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faCogs} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Streamlined Operations</h4>
                  <p className="text-sm text-gray-600 text-center">Automate deployments, rollbacks, and infrastructure provisioning.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faChartBar} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Faster Time to Market</h4>
                  <p className="text-sm text-gray-600 text-center">Reduce delivery cycles and accelerate go-to-market strategies.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faLock} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Embedded Security</h4>
                  <p className="text-sm text-gray-600 text-center">Shift security left and integrate compliance from the start.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faServer} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Infrastructure as Code</h4>
                  <p className="text-sm text-gray-600 text-center">Build, test, and manage infrastructure with repeatable IaC modules.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faCloud} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Scalable Environments</h4>
                  <p className="text-sm text-gray-600 text-center">Deploy across staging, testing, and production with consistent control.</p>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === 'Our Solutions' && (
          <>
            {/* VirtuSwift’s DevOps Services */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">VirtuSwift’s DevOps Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: faSync, title: 'CI/CD Pipelines', desc: 'We build automated CI/CD pipelines for building, testing, and deploying your applications—reducing manual errors and improving release velocity.', link: '/cicd-pipelines' },
                  { icon: faDatabase, title: 'Data Warehousing and Integration', desc: 'Unify, integrate, and accelerate your data with cloud-ready architecture and seamless pipelines.', link: '/services/data-warehousing-and-integration' },
                  { icon: faCogs, title: 'Application and Database Management', desc: 'Keep your mission-critical apps and databases running at peak performance with proactive, SLA-backed management and optimization.', link: '/services/application-and-database-management' },
                  { icon: faLock, title: 'Cloud Security and Compliance', desc: 'Protect your cloud workloads with robust security frameworks, compliance automation, and real-time threat detection.', link: '/services/cloud-security-and-compliance' },
                  { icon: faMoneyBillWave, title: 'Data Monetization Strategies', desc: 'Unlock new revenue streams by turning your enterprise data into high-value, governed, and secure products.', link: '/services/data-monetization' },
                  { icon: faCloud, title: 'Cloud Migration & Integration', desc: 'Our DevOps engineers automate secure, zero-downtime cloud migrations—from legacy platforms to modern microservices.', link: '/services/cloud-migration-and-integration' },
                  { icon: faProjectDiagram, title: 'IoT DevOps Pipelines', desc: 'We build DevOps environments that support real-time IoT data integration, firmware rollout, and secure device orchestration.', link: '/services/iot-solutions' },
                  { icon: faChartLine, title: 'Data-Driven Decision Making', desc: 'Drive strategy with actionable intelligence. Enable real-time analytics, predictive modeling, and smarter business decisions.', link: '/services/data-driven-decision-making' },
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
            {/* Why VirtuSwift for DevOps? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-xl shadow p-8">
                <div className="flex-1 w-full md:pr-8">
                  <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">WHY VIRTUSWIFT?</h3>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why VirtuSwift for DevOps?</h2>
                  <p className="text-lg text-gray-700 mb-6">Because great DevOps isn’t about tools—it’s about orchestration.</p>
                  <p className="text-gray-600 mb-6">VirtuSwift builds DevOps engines that are robust, secure, and tailored for business outcomes. From CI/CD to multi-cloud infrastructure, we make delivery effortless and reliable.</p>
                  <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">What Sets VirtuSwift Apart</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] text-xl" /> Full-Spectrum DevOps Services</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#3a3dc4] text-xl" /> Flexible Toolchain Expertise</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLock} className="text-[#3a3dc4] text-xl" /> Shift-Left Security</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-xl" /> Cloud-Agnostic Delivery</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#3a3dc4] text-xl" /> 24/7 Monitoring & Support</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/devops3.png" alt="Why VirtuSwift for DevOps Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* Our DevOps Execution Flow */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR PROCESS</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Our DevOps Execution Flow</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
                {[
                  { step: 1, title: 'Audit & Plan', desc: 'We assess your current release and ops workflows to map gaps, risks, and automation opportunities.' },
                  { step: 2, title: 'Design & Automate', desc: 'We develop tailored CI/CD flows, IaC templates, and integrated security checkpoints aligned with your goals.' },
                  { step: 3, title: 'Deploy & Orchestrate', desc: 'We handle seamless rollouts with integrated version control, testing, and rollback logic.' },
                  { step: 4, title: 'Monitor & Optimize', desc: 'We provide performance monitoring, issue detection, and pipeline tuning to keep your DevOps machine in top gear.' },
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
              <img src="/assets/devops4.png" alt="DevOps Journey Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Let’s Build Your DevOps Engine</h2>
              <p className="text-lg text-gray-600 mb-6">Cut delivery time, boost reliability, and unleash your engineering team’s full potential.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule a Free DevOps Strategy Call</Link>
              </div>
            </div>
            {/* Related Services */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">RELATED SERVICES</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Related Services From VirtuSwift</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: faRocket, title: 'Digital Transformation Services', desc: 'Bring DevOps into the heart of your enterprise modernization.' },
                  { icon: faLightbulb, title: 'AI & Machine Learning Pipelines', desc: 'Use MLOps to deploy models faster with auto-training and version control.' },
                  { icon: faCogs, title: 'Custom Software Development', desc: 'Build apps using CI/CD-backed agile development and automated testing.' },
                  { icon: faChartBar, title: 'Data Analytics & Automation', desc: 'Use DevOps to auto-deploy dashboards, update ETL pipelines, and manage data flows.' },
                  { icon: faUserShield, title: 'IT Staffing Solutions', desc: 'Hire experienced DevOps engineers, cloud specialists, and automation architects on-demand.' },
                  { icon: faCalendarAlt, title: 'Agile Project Management', desc: 'Align DevOps execution with agile sprints, OKRs, and stakeholder workflows.' },
                  { icon: faCloud, title: 'Metaverse & XR Environments', desc: 'Automate immersive application builds using containerized DevOps pipelines.' },
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl text-[#3a3dc4] mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
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