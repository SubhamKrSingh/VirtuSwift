import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faLightbulb, faCogs, faCloud, faLock, faDatabase, faServer, faCloudUploadAlt, faSync, faUserShield, faChartBar, faRocket, faBolt, faShieldAlt, faCloudSun, faCheckCircle, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    image: '/assets/cloud2.png', // updated to use the correct local image
    title: 'VirtuSwift Cloud Services',
    subtitle: 'Your business, powered by the cloud. Secure, scalable, and future-ready cloud solutions built for agility and innovation.'
  },
  {
    image: '/assets/cloud3.png', // updated to use the correct local image
    title: 'Transform with Cloud',
    subtitle: 'Cut costs, increase agility, enable remote collaboration, and stay secure in a fast-changing world.'
  },
];

const services = [
  {
    icon: faLightbulb,
    title: 'Cloud Strategy & Consulting',
    link: '/services/cloud-strategy-and-consulting',
    desc: 'Personalized cloud strategies aligned with your business goals, growth needs, and risk profile.'
  },
  {
    icon: faServer,
    title: 'Cloud Infrastructure Setup & Management',
    link: '/services/cloud-infrastructure',
    desc: 'Setup, configure, and manage secure, high-performance infrastructure across AWS, Azure, and GCP.'
  },
  {
    icon: faSync,
    title: 'Cloud Migration & Integration',
    link: '/services/cloud-migration',
    desc: 'Risk-free cloud migration and seamless integration of apps, systems, and data — with zero disruption.'
  },
  {
    icon: faLock,
    title: 'Cloud Security & Compliance',
    link: '/services/cloud-security',
    desc: 'Hardened, policy-driven environments with end-to-end encryption, MFA, and compliance.'
  },
  {
    icon: faDatabase,
    title: 'Cloud Backup & Disaster Recovery (DRaaS)',
    link: '/services/cloud-backup',
    desc: "Continuous backup across regions with near-zero RTOs, ensuring you're protected no matter what."
  },
  {
    icon: faCloud,
    title: 'Internet of Things (IoT) Cloud Solutions',
    link: '/services/cloud-iot',
    desc: 'Connect, monitor, and manage IoT ecosystems with real-time dashboards and predictive analytics.'
  },
  {
    icon: faChartLine,
    title: 'Cloud Monitoring & Performance Optimization',
    link: '/services/cloud-monitoring',
    desc: '24/7 performance monitoring, predictive alerts, and proactive cost optimization.'
  },
  {
    icon: faCloudSun,
    title: 'Multi-Cloud & Hybrid Cloud Solutions',
    link: '/services/multi-cloud',
    desc: 'Flexible, integrated environments across AWS, Azure, GCP, and on-prem systems.'
  },
];

const tabs = ['Why Cloud?', 'Our Solutions', 'Why VirtuSwift?'];

const benefitsList = [
  {
    icon: faCheckCircle,
    text: '<b>24/7 Support:</b> Always-on help from certified cloud experts.'
  },
  {
    icon: faShieldAlt,
    text: '<b>Security-First:</b> Enterprise-grade encryption and compliance.'
  },
  {
    icon: faChartBar,
    text: '<b>Cost Optimization:</b> Smart workload placement to save you money.'
  },
  {
    icon: faRocket,
    text: '<b>Agility & Scale:</b> Instantly scale resources to meet demand.'
  },
];

const tabContent = {
  'Why Cloud?': (
    <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Cloud: The Foundation for Innovation, Scale, and Resilience</h2>
        <p className="text-gray-600 mb-6">
          Whether you're just starting your cloud journey or looking to modernize, VirtuSwift helps you adopt the right strategy, the right way. We help you leverage cloud to cut costs, increase agility, enable remote collaboration, and stay secure in a fast-changing world.
        </p>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Talk to a Cloud Specialist</Link>
      </div>
      <div className="md:w-1/2">
        <img src="/assets/cloud-city-banner.png" alt="Cloud Overview" className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105" />
      </div>
    </div>
  ),
  'Our Solutions': (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8">
        <div className="md:w-full w-full">
          <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR SOLUTIONS</h3>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Explore Our Cloud Solutions</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col items-start bg-white rounded-2xl shadow-lg p-7 border-l-4 border-[#3a3dc4] group h-full">
            <FontAwesomeIcon icon={s.icon} className="text-3xl text-[#3a3dc4] group-hover:text-[#f05a28] mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900">{s.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-1">{s.desc}</p>
            <Link to={s.link} className="mt-auto inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-sm">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  ),
  'Why VirtuSwift?': (
    <div className="transition-all duration-1000 delay-400">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Why Companies Trust VirtuSwift</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: faCloud, title: 'Cloud-Native Expertise', text: 'Certified engineers build resilient, auto-scaling infrastructures using leading providers and modern DevOps.' },
          { icon: faSync, title: 'Zero Downtime Migration', text: 'We plan and execute migrations that are fast, secure, and transparent — with zero interruption.' },
          { icon: faServer, title: 'Full Lifecycle Management', text: 'From strategy and setup to monitoring and optimization, we manage every step.' },
          { icon: faShieldAlt, title: 'Security-First DNA', text: 'Every deployment is hardened with security, compliance, and risk in mind.' },
          { icon: faChartBar, title: 'ROI-Driven Optimization', text: 'Cut costs and boost performance through smart cloud economics and workload placement.' },
          { icon: faUserShield, title: 'Always-On Support', text: 'Cloud support team available 24/7 — no tickets lost, no queues. Just answers, fast.' },
        ].map((f, index) => (
          <div key={f.title} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-white cursor-pointer border-b-4 border-[#3a3dc4] group-hover:border-[#f05a28]">
            <FontAwesomeIcon icon={f.icon} className="text-3xl text-[#3a3dc4] mb-4 transition-transform duration-300 hover:scale-110 group-hover:text-[#f05a28]" />
            <h4 className="font-bold text-lg mb-2 text-gray-700">{f.title}</h4>
            <p className="text-gray-600 text-sm">{f.text}</p>
          </div>
        ))}
      </div>
      {/* Benefits List with Checkmarks and Image */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 w-full">
        <ul className="space-y-4">
          {benefitsList.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
              <FontAwesomeIcon icon={b.icon} className="text-[#008BCF] mt-1 text-xl" />
              <span dangerouslySetInnerHTML={{__html: b.text}} />
            </li>
          ))}
        </ul>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img src="/assets/cloud5.png" alt="VirtuSwift Trust Illustration" className="max-w-xs w-full h-auto object-contain" />
        </div>
      </div>
      {/* Testimonial Card */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#008BCF] flex items-center gap-4 group-hover:border-[#f05a28]">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-[#008BCF] mr-4" />
          <div>
            <p className="text-lg italic text-gray-700 mb-2">“VirtuSwift's cloud team delivered a seamless migration and ongoing support that exceeded our expectations. We're more agile, secure, and cost-effective than ever.”</p>
            <span className="block text-sm font-semibold text-gray-500">— CIO, Leading Manufacturing Firm</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default function CloudStrategyConsulting() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Why Cloud?');
  const [isVisible, setIsVisible] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    setIsVisible(true);
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Slider Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-[400px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-10 md:px-20">
                <div className="text-white max-w-2xl text-center mx-auto">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
                  <p className="text-lg md:text-xl drop-shadow mb-6">{slide.subtitle}</p>
                  <Link
                    to="/contact"
                    className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg"
                  >
                    Talk to a Cloud Specialist →
                  </Link>
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
                className={`py-3 px-4 text-sm font-medium border-b-2 transition-all duration-300 hover:scale-105
                  ${activeTab === tab ? 'border-[#3a3dc4] text-[#3a3dc4]' : 'border-transparent text-gray-400 hover:text-white'}`}
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
        {tabContent[activeTab as keyof typeof tabContent]}
      </div>

      {/* Process Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">How VirtuSwift Delivers Your Cloud Success</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
          {[
            { step: 1, title: 'Discover & Plan', desc: 'We analyze your tech landscape, audit legacy systems, and align goals with an actionable roadmap.' },
            { step: 2, title: 'Design & Architect', desc: 'From high-availability zones to secure VPCs, we architect cloud environments built for scale and compliance.' },
            { step: 3, title: 'Migrate & Integrate', desc: 'Apps, databases, workloads — we move them all with minimal risk and zero downtime.' },
            { step: 4, title: 'Optimize & Evolve', desc: 'Continuous monitoring, real-time optimization, and adaptive scaling — for performance that grows with you.' },
          ].map((s) => (
            <div key={s.title} className="flex-1 flex flex-col items-center text-center bg-white rounded-lg p-6 shadow border-b-4 border-[#008BCF] mx-2 mb-4 md:mb-0 group transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#3a3dc4] to-[#008BCF] text-white text-2xl font-bold mb-2 group-hover:scale-110 transition">{s.step}</div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-12 pb-12">
        <img src="/assets/cloud4.png" alt="Cloud Journey Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Begin Your Cloud Journey?</h2>
        <p className="text-lg text-gray-600 mb-6">Reimagine your business with smarter systems, faster performance, and unlimited scale — all powered by VirtuSwift.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule Your Free Cloud Strategy Session</Link>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Request a Custom Demo</Link>
        </div>
      </div>
    </div>
  );
} 