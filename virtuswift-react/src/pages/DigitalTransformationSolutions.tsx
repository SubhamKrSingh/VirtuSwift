import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faChartLine, faCogs, faCloud, faLock, faMoneyBillWave, faLightbulb, faDatabase, faUsers, faSync, faProjectDiagram, faBrain, faChalkboardTeacher, faChartBar, faUserShield, faCalendarAlt, faLaptopCode, faPeopleArrows, faLayerGroup, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const tabs = ['What Is Digital Transformation?', 'Our Services', 'Why VirtuSwift?'];

const heroSlides = [
  {
    image: '/assets/digitaltransformation.png',
    title: 'Digital Transformation Solutions',
    subtitle: 'Accelerate digital growth with smarter workflows, enterprise automation, and intelligent operations. No delays. Just momentum.',
    cta: 'Digitize Your Business',
    ctaLink: '/contact',
  },
];

export default function DigitalTransformationSolutions() {
  const [activeTab, setActiveTab] = useState('What Is Digital Transformation?');
  const [currentSlide, setCurrentSlide] = useState(0);

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
        {activeTab === 'What Is Digital Transformation?' && (
          <>
            {/* What Is Digital Transformation? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full md:pr-8">
                  <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">WHAT IS DIGITAL TRANSFORMATION?</h3>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">What Is Digital Transformation?</h2>
                  <p className="text-lg text-gray-700 mb-6">It’s not a buzzword — it’s a business imperative.</p>
                  <p className="text-gray-600 mb-6">In a hyper-digital era, transformation means survival. VirtuSwift helps organizations modernize legacy systems, automate processes, adopt scalable cloud infrastructure, and reimagine the way they operate.</p>
                  <p className="text-gray-600 mb-6">Whether you’re scaling globally or streamlining operations, our tailored transformation frameworks help you stay ahead of the curve. We don’t just deploy tools — we build future-ready enterprises.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/digitaltransformation1.png" alt="Digital Transformation Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* How Digital Transformation Benefits Your Business */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">BUSINESS BENEFITS</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How Digital Transformation Benefits Your Business</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faRocket} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Business Growth</h4>
                  <p className="text-sm text-gray-600 text-center">Automate tasks, scale fast, and optimize efficiency across all departments.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faChartLine} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Data-Led Strategy</h4>
                  <p className="text-sm text-gray-600 text-center">Use real-time dashboards to make strategic decisions based on facts, not instinct.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Lower Costs</h4>
                  <p className="text-sm text-gray-600 text-center">Shift from on-prem to cloud, remove manual redundancies, and boost margins.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faUsers} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Better Experiences</h4>
                  <p className="text-sm text-gray-600 text-center">Deliver personalized, cross-platform digital journeys that customers love.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faLock} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Built-In Security</h4>
                  <p className="text-sm text-gray-600 text-center">Embed compliance, identity controls, and real-time threat detection from Day 1.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faCogs} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Legacy Modernization</h4>
                  <p className="text-sm text-gray-600 text-center">Upgrade or integrate legacy systems for speed, flexibility, and scalability.</p>
                </div>
                <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl mb-2 text-[#3a3dc4]" />
                  <h4 className="font-bold mb-1 text-[#232584] text-lg">Data Monetization Strategies</h4>
                  <p className="text-sm text-gray-600 text-center">Turn data into dollars. We help identify untapped data assets, build frameworks to extract value, and implement models that generate new revenue streams from your existing data ecosystem.</p>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === 'Our Services' && (
          <>
            {/* Our Core Digital Transformation Services */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR SERVICES</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Our Core Digital Transformation Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: faChartLine, title: 'Digital Strategy Development', desc: 'Craft your transformation journey with purpose. We design business-aligned roadmaps that define technology priorities, risks, and ROI milestones.', link: '/services/digital-strategy-development' },
                  { icon: faCogs, title: 'Business Process Optimization', desc: 'We analyze and redesign inefficient workflows using automation, system integration, and smart design thinking — enabling faster throughput with fewer resources.', link: '/services/business-process-optimization' },
                  { icon: faCogs, title: 'User Experience Design', desc: 'VirtuSwift designs intuitive, accessible, and high-performing digital interfaces that elevate engagement and drive measurable business impact.', link: '/services/user-experience-design' },
                  { icon: faLaptopCode, title: 'Application & Web Development', desc: 'VirtuSwift delivers custom mobile and web applications that combine speed, scalability, and security—engineered for today’s users and tomorrow’s growth.', link: '/services/application-web-development' },
                  { icon: faMoneyBillWave, title: 'Data Monetization Strategies', desc: 'Turn data into dollars. We help identify untapped data assets, build frameworks to extract value, and implement models that generate new revenue streams from your existing data ecosystem.', link: '/services/data-monetization' },
                  { icon: faCloud, title: 'Cloud Migration and Integration', desc: 'Move from legacy infrastructure to scalable cloud platforms with zero downtime. We integrate apps, databases, and services into cohesive ecosystems.', link: '/services/cloud-migration-integration' },
                  { icon: faProjectDiagram, title: 'Internet of Things (IoT) Solutions', desc: 'Digitally connect machines, devices, and environments. Enable real-time monitoring, predictive maintenance, and automated control systems.', link: '/services/iot-solutions' },
                  { icon: faBrain, title: 'Data-Driven Decision Making', desc: 'Make smarter choices, faster. We implement data platforms and dashboards that give leaders real-time visibility and insights—powering decisions with confidence and clarity.', link: '/services/data-driven-decision-making' },
                  { icon: faDatabase, title: 'Robotic Process Automation for SAP', desc: 'Extend and enhance your SAP ecosystem with robotic process automation.', link: '/services/robotic-process-automation' },
                  { icon: faChalkboardTeacher, title: 'Change Management and Training', desc: 'We help your team adapt, learn, and embrace transformation with structured onboarding, workshops, and user-first digital experiences.', link: '/services/change-management-training' },
                  { icon: faUserShield, title: 'Cybersecurity & Data Privacy', desc: 'Secure your digital assets from day one. We implement zero-trust frameworks, access controls, and compliance-ready policies tailored to your business.', link: '/services/cybersecurity-data-privacy' },
                  { icon: faDatabase, title: 'Data Warehousing and Integration', desc: 'Unify your data landscape. We build centralized, scalable data warehouses and integrate siloed systems to deliver clean, consistent, and reliable data for analysis.', link: '/services/data-warehousing-and-integration' },
                  { icon: faLayerGroup, title: 'ERP Implementation', desc: 'Integrate your enterprise with ERP systems that unify HR, finance, operations, and supply chain. Boost control, accuracy, and visibility across units.', link: '/services/erp-implementation' },
                  { icon: faChartBar, title: 'Data Analytics & Visualization', desc: 'Turn raw business data into actionable insight. From Power BI dashboards to predictive analytics, we enable smarter, faster, insight-led decisions.', link: '/services/data-analytics-visualization' },
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl text-[#3a3dc4] mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h4>
                    <p className="text-gray-600 text-sm flex-1">{service.desc}</p>
                    {service.link && (
                      <Link to={service.link} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">Learn More</Link>
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
                  <p className="text-lg text-gray-700 mb-6">Because digital transformation should be engineered, not improvised.</p>
                  <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">What Sets VirtuSwift Apart</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4] text-xl" /> Strategy-Driven Execution</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLightbulb} className="text-[#3a3dc4] text-xl" /> End-to-End Capabilities</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] text-xl" /> Rapid Time to Value</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faUsers} className="text-[#3a3dc4] text-xl" /> Human-Centric Technology</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLock} className="text-[#3a3dc4] text-xl" /> Compliance Built-In</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faSync} className="text-[#3a3dc4] text-xl" /> Continuous Optimization</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/digitaltransformation3.png" alt="Why VirtuSwift for Digital Transformation" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* Execution Flow */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR PROCESS</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How VirtuSwift Executes Your Transformation Journey</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
                {[
                  { step: 1, title: 'Discover & Define', desc: 'We assess your digital maturity, systems, teams, and vision to co-create a transformation blueprint.' },
                  { step: 2, title: 'Design & Plan', desc: 'We design workflows, architecture, and integrations around speed, scalability, and usability.' },
                  { step: 3, title: 'Deploy & Integrate', desc: 'We implement technologies seamlessly — minimizing disruption, maximizing value.' },
                  { step: 4, title: 'Train & Optimize', desc: 'We onboard your team, support adoption, and continuously improve for impact and performance.' },
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
              <img src="/assets/digitaltransformation2.png" alt="Digital Future Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Let’s Build Your Digital Future</h2>
              <p className="text-lg text-gray-600 mb-6">Modernize processes. Empower teams. Deliver more.</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule Your Strategy Session</Link>
              </div>
            </div>
            {/* Related Services */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">EXPLORE MORE</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Explore More VirtuSwift Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: faCloud, title: 'Cloud Services', desc: 'Migrate, modernize, and scale securely in the cloud. We build high-availability, high-performance cloud environments that reduce cost and improve agility.' },
                  { icon: faBrain, title: 'SAP Services', desc: 'Accelerate SAP adoption with BTP development, cloud migration, and tailored SAP consulting for enterprises.' },
                  { icon: faCogs, title: 'Managed IT Services', desc: 'Leave IT to us. Our managed services include 24/7 infrastructure support, remote monitoring, patching, and disaster recovery.' },
                  { icon: faProjectDiagram, title: 'Metaverse & XR Development', desc: 'Step into immersive digital transformation. From virtual training labs to customer engagement in the metaverse — we deliver future-forward solutions.' },
                  { icon: faChartBar, title: 'Data Analytics & Monetization', desc: 'Monetize your business data. We design data lakes, BI tools, and analytics dashboards that unlock new revenue and insights.' },
                  { icon: faLaptopCode, title: 'Software Engineering', desc: 'From MVPs to enterprise systems — we build, deploy, and maintain scalable software solutions aligned with your goals.' },
                  { icon: faUsers, title: 'IT Staffing Solutions', desc: 'Need talent fast? We deploy pre-vetted engineers, developers, and architects to scale your team instantly.' },
                  { icon: faCalendarAlt, title: 'Project Management', desc: 'Deliver every initiative with confidence. Our certified PMs handle timelines, communication, and outcomes at scale.' },
                  { icon: faSync, title: 'Robotic Process Automation (RPA)', desc: 'Automate repetitive, rule-based tasks with intelligent bots that scale your efficiency and free your teams for strategic work.', link: '/services/robotic-process-automation' },
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