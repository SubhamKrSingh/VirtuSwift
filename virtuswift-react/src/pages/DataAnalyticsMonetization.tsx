import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faDatabase, faLightbulb, faChartLine, faRocket, faCogs, faLock, faCloud, faCheckCircle, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    image: '/assets/datastatergy.png',
    title: 'VirtuSwift Data Analytics & Monetization',
    subtitle: 'Unlock the value of your data. Transform insights into revenue and smarter decisions with advanced analytics and monetization strategies.'
  },
  {
    image: '/assets/dataanalytics1.png',
    title: 'Data-Driven Growth',
    subtitle: 'Empower your business with actionable intelligence, predictive analytics, and new revenue streams.'
  },
];

const services = [
  {
    icon: faChartBar,
    title: 'Data Strategy and Planning',
    link: '/services/data-strategy-and-planning',
    desc: 'Interactive dashboards and real-time reporting for smarter, faster decisions.'
  },
  {
    icon: faDatabase,
    title: 'Data Warehousing & Integration',
    link: '/services/data-warehousing-and-integration',
    desc: 'Centralize, clean, and connect your data for unified analytics and compliance.'
  },
  {
    icon: faLightbulb,
    title: 'Cloud Security and Compliance',
    link: '/services/cloud-security-and-compliance',
    desc: 'Protect your data at every layer with encryption, IAM, access controls, and compliance models (GDPR, HIPAA, ISO).'
  },
  {
    icon: faChartLine,
    title: 'Data Monetization Strategies',
    link: '/services/data-monetization',
    desc: 'Turn data into revenue with data-as-a-service, APIs, and embedded analytics.'
  },
  {
    icon: faRocket,
    title: 'Application and Database Management',
    link: '/services/application-and-database-management',
    desc: 'Ensure continuous performance of your data ecosystem. We monitor, optimize, and support every layer—apps to databases.'
  },
  {
    icon: faCogs,
    title: 'Cloud Migration and Integration',
    link: '/services/cloud-migration-and-integration',
    desc: 'Move workloads, apps, and databases to the cloud without friction. We modernize infrastructure while protecting uptime and performance.'
  },
  {
    icon: faLock,
    title: 'Internet of Things (IoT) Solutions',
    link: '/services/iot-solutions',
    desc: 'Extend your analytics into the physical world. We collect, connect, and compute IoT data to drive smarter automation and predictive decision-making.'
  },
  {
    icon: faCloud,
    title: 'Data-Driven Decision Making',
    link: '/services/data-driven-decision-making',
    desc: 'Empower every team with smart dashboards, analytics, and predictive models for data-backed decisions.'
  },
];

const tabs = ['Why Analytics?', 'Our Solutions', 'Why VirtuSwift?'];

const benefitsList = [
  {
    icon: faCheckCircle,
    text: '<b>Actionable Insights:</b> Make smarter decisions with real-time analytics.'
  },
  {
    icon: faChartBar,
    text: '<b>Monetize Data:</b> Create new revenue streams from your data assets.'
  },
  {
    icon: faLightbulb,
    text: '<b>AI-Driven Advantage:</b> Predict trends and automate decisions.'
  },
  {
    icon: faRocket,
    text: '<b>Faster Time to Value:</b> Rapid deployment and self-service tools.'
  },
];

const tabContent = {
  'Why Analytics?': (
    <div className="flex flex-col gap-8 mb-16 items-center bg-white rounded-2xl shadow p-8 md:p-12 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#232584] text-center leading-tight">Data Analytics & Monetization</h1>
      <p className="text-lg md:text-2xl mb-4 max-w-3xl mx-auto text-center text-gray-700 font-medium">Transform your data into decisions, insights into outcomes, and intelligence into income — with VirtuSwift as your analytics powerhouse.</p>
      <img src="/assets/dataanalytics2.png" alt="Data Analytics Illustration" className="mx-auto mb-6 max-w-xl w-full h-auto object-contain rounded-xl shadow-lg border border-gray-100" />
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#3a3dc4] text-center">Why Choose Data Analytics & Monetization?</h2>
      <p className="mb-2 text-lg text-gray-800 text-center font-semibold">What if your greatest untapped asset is already in your business?</p>
      <p className="mb-2 text-gray-600 text-center">Data isn’t just a byproduct of operations — it’s your growth engine. At VirtuSwift, we turn raw information into actionable insights and revenue-generating opportunities using enterprise-grade analytics and tailored monetization strategies.</p>
      <p className="mb-2 font-semibold text-[#f05a28] text-center">Why settle for reports when you can drive revenue?</p>
      <p className="mb-6 text-gray-600 text-center">From marketing to manufacturing, finance to field operations — we help you use your data not just for visibility, but for value creation.</p>
      {/* Analytics Powers Growth Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6">
        <div className="bg-[#f8f9fa] rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
          <span className="text-4xl mb-2">🧠</span>
          <h4 className="font-bold mb-1 text-[#232584] text-lg">Smarter, Faster Decisions</h4>
          <p className="text-sm text-gray-600 text-center">Get real-time dashboards and AI-powered forecasting for better decisions at every level.</p>
        </div>
        <div className="bg-[#f8f9fa] rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
          <span className="text-4xl mb-2">📊</span>
          <h4 className="font-bold mb-1 text-[#232584] text-lg">Operational Efficiency</h4>
          <p className="text-sm text-gray-600 text-center">Identify bottlenecks, reduce costs, and fine-tune workflows using smart data insights.</p>
        </div>
        <div className="bg-[#f8f9fa] rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
          <span className="text-4xl mb-2">🎯</span>
          <h4 className="font-bold mb-1 text-[#232584] text-lg">Personalized Experiences</h4>
          <p className="text-sm text-gray-600 text-center">Use behavioral data to personalize offers, increase conversions, and retain customers.</p>
        </div>
        <div className="bg-[#f8f9fa] rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
          <span className="text-4xl mb-2">💸</span>
          <h4 className="font-bold mb-1 text-[#232584] text-lg">Revenue From Data</h4>
          <p className="text-sm text-gray-600 text-center">Monetize your proprietary data by building platforms, dashboards, or digital products.</p>
        </div>
        <div className="bg-[#f8f9fa] rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
          <span className="text-4xl mb-2">⚡</span>
          <h4 className="font-bold mb-1 text-[#232584] text-lg">Live Business Intelligence</h4>
          <p className="text-sm text-gray-600 text-center">Monitor KPIs across departments in real time with unified, interactive dashboards.</p>
        </div>
        <div className="bg-[#f8f9fa] rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
          <span className="text-4xl mb-2">🛡️</span>
          <h4 className="font-bold mb-1 text-[#232584] text-lg">Risk Prediction</h4>
          <p className="text-sm text-gray-600 text-center">Predict issues before they escalate with historical trends and AI-driven alerts.</p>
        </div>
      </div>
      <div className="w-full flex justify-center mb-2">
        <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Unlock Your Data Potential →</Link>
      </div>
    </div>
  ),
  'Our Solutions': (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8">
        <div className="md:w-full w-full">
          <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR SOLUTIONS</h3>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Explore Our Analytics & Monetization Solutions</h2>
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
      <div className="text-center mb-8">
        <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">WHY VIRTUSWIFT?</h3>
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why Companies Trust VirtuSwift for Analytics</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: faChartBar, title: 'Analytics Expertise', text: 'Certified data engineers and analysts deliver robust, scalable solutions.' },
          { icon: faDatabase, title: 'Unified Data', text: 'Break down silos and centralize data for a single source of truth.' },
          { icon: faLightbulb, title: 'Innovation with AI', text: 'Leverage machine learning and AI for predictive and prescriptive insights.' },
          { icon: faRocket, title: 'Rapid Results', text: 'Accelerate your analytics journey with proven frameworks and automation.' },
          { icon: faCogs, title: 'Seamless Integration', text: 'Connect analytics to your existing apps, workflows, and cloud platforms.' },
          { icon: faLock, title: 'Data Security', text: 'Protect sensitive data with enterprise-grade security and compliance.' },
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
                <FontAwesomeIcon icon={b.icon} className="text-[#3a3dc4] mt-1 text-xl" />
                <span dangerouslySetInnerHTML={{ __html: b.text }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img src="/assets/dataanalytics4.png" alt="VirtuSwift Analytics Trust Illustration" className="max-w-xs w-full h-auto object-contain" />
        </div>
      </div>
      {/* Testimonial Card */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#3a3dc4] flex items-center gap-4 group-hover:border-[#f05a28]">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-[#3a3dc4] mr-4" />
          <div>
            <p className="text-lg italic text-gray-700 mb-2">“VirtuSwift’s analytics team helped us unlock new revenue streams and optimize our operations. The insights are game-changing.”</p>
            <span className="block text-sm font-semibold text-gray-500">— Chief Data Officer, Leading Retailer</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default function DataAnalyticsMonetization() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Why Analytics?');
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
                    Talk to a Data Expert →
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
        <div className="text-center mb-6">
          <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR PROCESS</h3>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How VirtuSwift Delivers Data-Driven Success</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
          {[
            { step: 1, title: 'Discover & Assess', desc: 'We audit your data landscape and identify monetization opportunities.' },
            { step: 2, title: 'Design & Build', desc: 'Architect analytics solutions and data products for your business goals.' },
            { step: 3, title: 'Integrate & Automate', desc: 'Connect data sources, automate pipelines, and embed analytics everywhere.' },
            { step: 4, title: 'Monetize & Optimize', desc: 'Launch new data products, APIs, and dashboards—then optimize for growth.' },
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
        <img src="/assets/dataanalytics3.png" alt="Analytics Journey Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
        <div className="mb-4">
          <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest text-center">GET STARTED</h3>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight text-center">Ready to Monetize Your Data?</h2>
        </div>
        <p className="text-lg text-gray-600 mb-6">Let VirtuSwift help you unlock new value, drive innovation, and grow your business with analytics.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule Your Free Analytics Consultation</Link>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Request a Data Monetization Demo</Link>
        </div>
      </div>
    </div>
  );
} 