import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faServer, faDatabase, faProjectDiagram, faChartLine, faCheckCircle, faRocket, faUsers, faBrain, faCalendarAlt, faMoneyBillWave, faLock } from '@fortawesome/free-solid-svg-icons';

const tabs = ['What Are Managed IT Services?', 'Our Services', 'Why VirtuSwift?'];

const heroSlides = [
  {
    image: '/assets/digitaltransformation.png', // Updated to provided image
    title: 'Managed IT Services',
    subtitle: 'End-to-end infrastructure, cloud, and application support. VirtuSwift keeps your digital backbone secure, optimized, and ready for growth.',
    cta: '🔘 Consult Our Experts',
    ctaLink: '/contact?service=managed-it-services',
  },
];

export default function ManagedITServices() {
  const [activeTab, setActiveTab] = useState('What Are Managed IT Services?');
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
              <div className="absolute inset-0 flex items-center justify-center px-10 md:px-20 bg-black bg-opacity-40">
                <div className="text-white max-w-2xl text-center mx-auto drop-shadow-lg">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">{slide.subtitle}</p>
                  <Link to={slide.ctaLink} className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">{slide.cta}</Link>
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
        {activeTab === 'What Are Managed IT Services?' && (
          <>
            {/* Why Managed Services? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Managed Services?</h2>
                  <p className="text-lg text-gray-700 mb-6">In a world where technology drives everything, proactive IT management is no longer optional—it’s mission-critical.<br/>VirtuSwift’s Managed Services remove the complexity of running, securing, and scaling your IT ecosystem. From cloud architecture and cybersecurity to server management and SAP support, we deliver seamless backend operations—so you can focus on what matters: innovation and growth.<br/>We don’t just maintain systems.<br/>We future-proof them.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/digitalstratergy.png" alt="Why Managed IT Services" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* How Managed Services Drive Business Value */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">🚀 How Managed Services Drive Business Value</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard icon={faCogs} title="Proactive Infrastructure Management" desc="Resolve issues before they happen with predictive monitoring and automation." />
                <ValueCard icon={faChartLine} title="Cost Optimization" desc="Reduce internal IT spend while retaining full visibility and control over SLAs and KPIs." />
                <ValueCard icon={faRocket} title="Operational Efficiency" desc="Increase uptime, performance, and resilience across your digital operations." />
                <ValueCard icon={faLock} title="Advanced Security & Compliance" desc="Enterprise-grade threat detection, patching, access control, and compliance built-in." />
                <ValueCard icon={faCloud} title="On-Demand Scalability" desc="Scale up or down instantly as business needs evolve—no infrastructure headaches." />
                <ValueCard icon={faProjectDiagram} title="Seamless Multi-Platform Integration" desc="Run hybrid, on-prem, or multi-cloud environments with unified support and control." />
              </div>
            </div>
          </>
        )}
        {activeTab === 'Our Services' && (
          <>
            {/* Our Managed IT Service Offerings */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Our Managed IT Service Offerings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceSection number={1} title="IT Infrastructure Management" desc="End-to-end management for your OS, databases, network, and security systems. From OS hardening to firewall configuration and vulnerability patching, we keep your IT backbone resilient." />
                <ServiceSection number={2} title="Cloud Infrastructure Setup and Management" desc="Design, deploy, and manage secure, high-performance cloud environments across AWS, Azure, GCP, and hybrid setups." />
                <ServiceSection number={3} title="Cloud Migration and Integration" desc="Smooth transitions from legacy systems to the cloud. We replatform, integrate, and optimize without downtime or data loss." />
                <ServiceSection number={4} title="Server and Storage Management" desc="Ensure performance, reliability, and data integrity across all workloads with real-time monitoring and secure storage provisioning." />
                <ServiceSection number={5} title="Application and Database Management" desc="Eliminate downtime and performance bottlenecks. We manage, optimize, and support your business-critical applications and databases with proactive maintenance, tuning, and incident handling — ensuring stability and scalability." />
                <ServiceSection number={6} title="Internet of Things (IoT) Solutions" desc="We connect your physical world with digital intelligence—enabling predictive maintenance, edge computing, and smart automation." />
                <ServiceSection number={7} title="Cloud Monitoring and Performance Optimization" desc="Real-time visibility into your cloud stack. VirtuSwift detects bottlenecks, applies auto-scaling, and reduces latency for optimal performance." />
              </div>
            </div>
            {/* How VirtuSwift Makes IT Management Seamless */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">How VirtuSwift Makes IT Management Seamless</h2>
              <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
                {[
                  { step: 1, title: 'Assess & Strategize', desc: 'We start with a complete audit and align infrastructure strategy with business goals, compliance mandates, and future growth.' },
                  { step: 2, title: 'Design & Deploy', desc: 'Tailored cloud setups, workload migrations, server configurations, and automated infrastructure tools are deployed with precision.' },
                  { step: 3, title: 'Monitor & Optimize', desc: '24/7 monitoring + real-time analytics ensure consistent performance, zero downtime, and cost savings.' },
                  { step: 4, title: 'Support & Evolve', desc: 'As your business grows, VirtuSwift evolves your IT stack and SLA coverage to match your ambitions.' },
                ].map((s) => (
                  <div key={s.title} className="flex-1 flex flex-col items-center text-center bg-white rounded-lg p-6 shadow border-b-4 border-[#008BCF] mx-2 mb-4 md:mb-0 group transition">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#3a3dc4] to-[#008BCF] text-white text-2xl font-bold mb-2 group-hover:scale-110 transition">{s.step}</div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {activeTab === 'Why VirtuSwift?' && (
          <>
            {/* Why Prioritize VirtuSwift as Your Managed Service Partner? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-xl shadow p-8">
                <div className="flex-1 w-full md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Prioritize VirtuSwift as Your Managed Service Partner?</h2>
                  <p className="text-lg text-gray-700 mb-6">With VirtuSwift, you're not outsourcing IT—you’re gaining a transformation partner who aligns your technology with long-term business outcomes.</p>
                  <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">✅ What Sets VirtuSwift Apart</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-800 text-base">🏅 Certified Infrastructure Experts: Across OS, cloud, databases, and SAP, our certified specialists bring deep technical expertise and operational rigor.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🧠 End-to-End Visibility: Proactive alerts, transparent SLAs, and detailed dashboards keep you informed at every layer.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🌐 Multi-Platform Mastery: Expertise in AWS, Azure, GCP, private cloud, SAP, and hybrid IT environments.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🔐 Security-First by Design: Embedded data protection, threat modeling, identity access control, and continuous compliance checks.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🎧 24/7 Dedicated Support Desk: Our expert engineers monitor, manage, and resolve issues—before they impact your users.</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/datawarehousing.png" alt="VirtuSwift Managed IT Partner" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* Final CTA */}
            <div className="text-center mt-16 pb-16">
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Unlock smarter IT with VirtuSwift.</h2>
              <p className="text-xl text-gray-600 mb-6">Faster resolution, proactive support, and a future-ready infrastructure start here.</p>
              <img src="/assets/digitaltransformation.png" alt="Unlock smarter IT" className="mx-auto mb-6 max-w-md w-full h-auto object-cover rounded-xl shadow-lg" />
              <Link to="/contact?service=managed-it-services" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">🔘 Let’s Talk</Link>
            </div>
          </>
        )}
      </div>

      {/* Explore More Services */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">🔗 Explore More Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExploreCard image="/assets/digitaltransformation.png" title="Digital Transformation Solutions" desc="End-to-end transformation with process automation, AI, cloud, and ERP modernization." link="/services/digital-transformation" />
          <ExploreCard image="/assets/digitalstratergy.png" title="AI & Machine Learning Development" desc="Intelligent systems powered by predictive models, NLP, and real-time analytics." link="/services/ai-machine-learning" />
          <ExploreCard image="/assets/datawarehousing.png" title="Software Development" desc="From SaaS apps to internal tools, we build secure, scalable, user-centric software." link="/services/application-web-development" />
          <ExploreCard image="/assets/itstaff2.png" title="IT Staffing Solutions" desc="On-demand hiring of developers, cloud architects, security experts, and more." link="/services/it-staffing-talent-solutions" />
          <ExploreCard image="/assets/digitalstratergy.png" title="Project Management Services" desc="Agile and waterfall-certified PMs to deliver projects efficiently, on time." link="/services/project-management" />
          <ExploreCard image="/assets/digitaltransformation.png" title="DevOps Services" desc="DevOps engineers streamline delivery with CI/CD pipelines and IAC." link="/services/devops" />
          <ExploreCard image="/assets/datawarehousing.png" title="Metaverse & XR Solutions" desc="3D experiences and virtual environments for training, events, and marketing." link="/services/metaverse-xr" />
          <ExploreCard image="/assets/datawarehousing.png" title="Data Analytics & Monetization" desc="From dashboards to machine learning—turn data into profitable insights." link="/data-analytics-monetization" />
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
      <FontAwesomeIcon icon={icon} className="text-4xl mb-2 text-[#3a3dc4]" />
      <h4 className="font-bold mb-1 text-[#232584] text-lg">{title}</h4>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}

function ServiceSection({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col mb-4">
      <h4 className="font-semibold text-lg mb-2 text-gray-800">📌 {number}. {title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
      {number === 1 && (
        <Link to="/services/it-infrastructure-management" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 2 && (
        <Link to="/services/cloud-infrastructure" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 3 && (
        <Link to="/services/cloud-migration" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 4 && (
        <Link to="/services/server-and-storage-management" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 5 && (
        <Link to="/services/application-and-database-management" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 6 && (
        <Link to="/services/iot-solutions" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 7 && (
        <Link to="/services/cloud-monitoring" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
    </div>
  );
}

function ExploreCard({ image, title, desc, link }: { image: string; title: string; desc: string; link: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full">
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
      <Link to={link} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">Learn More</Link>
    </div>
  );
} 