import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faShieldAlt, faChartLine, faCogs, faCloud, faRobot, faLink, faUsers, faCreditCard, faCheckCircle, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const hero = {
  url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
  title: 'Empowering Tomorrow’s Finance, Today',
  desc: 'VirtuSwift partners with financial institutions to unlock digital innovation, elevate customer trust, and optimize operations—helping you lead confidently in a tech-driven regulatory landscape.'
};

const subSectors = [
  {
    icon: faLandmark,
    title: 'Banking & Capital Markets',
    desc: 'Modernize core banking, enable real-time analytics, and meet regulatory obligations—without compromising on performance.',
    link: '/industries/financial/banking',
    cta: 'Start Your Banking Transformation →',
  },
  {
    icon: faShieldAlt,
    title: 'Insurance',
    desc: 'Digitize underwriting, claims, and policy admin while improving risk modeling, reporting, and customer self-service.',
    link: '/industries/financial/insurance',
    cta: 'Accelerate Your Insurance Transformation →',
  },
  {
    icon: faChartLine,
    title: 'Investment Management',
    desc: 'Support portfolio and asset managers with advanced data platforms, ESG reporting, and client transparency tools.',
    link: '/industries/financial/investment',
    cta: 'Explore Investment Solutions →',
  },
  {
    icon: faCreditCard,
    title: 'Payments & Fintech',
    desc: 'Enable real-time payments, integrate wallet and card systems, and develop scalable APIs for embedded finance.',
    link: '/industries/financial/payments',
    cta: 'Schedule a Payments Strategy Call →',
  },
  {
    icon: faLink,
    title: 'Digital Assets & Blockchain',
    desc: 'Explore tokenization, smart contracts, and secure digital ledgers. Enterprise-grade blockchain adoption and crypto compliance.',
    link: '/industries/financial/blockchain',
    cta: 'Book a Blockchain Strategy Consultation →',
  },
];

const benefits = [
  'Accelerated cloud and core banking modernization',
  'Secure, compliant architecture by design',
  'Seamless customer journeys across channels',
  'Actionable analytics for smarter decisions',
  'Future-proof platforms for rapid fintech innovation',
];

export default function Financial() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className={`relative w-full h-[400px] bg-gray-100 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="slide min-w-full h-[400px] bg-cover bg-center relative" style={{ backgroundImage: `url('${hero.url}')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-10">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">{hero.title}</h1>
              <p className="text-lg">{hero.desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Landscape */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🌍 Industry Landscape</h3>
          <p className="text-gray-700 mb-4">The financial sector is undergoing a profound shift—driven by digital-first customers, real-time payments, embedded finance, and rising compliance demands. Whether you're a bank modernizing core systems, a fintech scaling fast, or an insurer transforming customer experiences, VirtuSwift helps you navigate with precision and agility.</p>
        </div>

        {/* Financial Services Solutions */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🧭 Our Financial Services Solutions</h3>
          <p className="text-gray-700 mb-4">We empower financial institutions across every segment to modernize infrastructure, harness data, and drive customer-centric innovation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {[
              { icon: faCloud, title: 'Cloud-native banking transformations' },
              { icon: faShieldAlt, title: 'AI-powered fraud detection & risk analytics' },
              { icon: faUserShield, title: 'Regulatory compliance frameworks (Basel III, GDPR, etc.)' },
              { icon: faRobot, title: 'Intelligent automation (RPA, workflow orchestration)' },
              { icon: faLink, title: 'API strategy & Open Banking enablement' },
              { icon: faUsers, title: 'Customer experience modernization & omnichannel platforms' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <FontAwesomeIcon icon={item.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              </div>
            ))}
          </div>
          <Link to="/contact?industry=financial" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Let’s Talk Financial Transformation →</Link>
        </div>

        {/* Sub-Sectors */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🧩 Sub-Sectors We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subSectors.map((sector) => (
              <div key={sector.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <FontAwesomeIcon icon={sector.icon} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{sector.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{sector.desc}</p>
                <Link to={sector.link} className="inline-block bg-[#3a3dc4] text-white px-4 py-2 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm">{sector.cta}</Link>
              </div>
            ))}
          </div>
          <Link to="/contact?industry=financial" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg mt-8">Explore Solutions for Your Financial Sector →</Link>
        </div>

        {/* The VirtuSwift Advantage */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">📊 The VirtuSwift Advantage</h3>
          <p className="text-gray-700 mb-4">We bring deep domain expertise, regulatory insight, and cutting-edge technology to every financial services engagement.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-4">
            {benefits.map((b) => (
              <div key={b} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{b}</h4>
              </div>
            ))}
          </div>
          <Link to="/contact?industry=financial" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Lead Financial Innovation with Confidence →</Link>
        </div>

        {/* Final CTA */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🌐 Ready to Transform Your Financial Ecosystem?</h3>
          <p className="text-lg text-gray-700 mb-6">VirtuSwift helps financial organizations embrace innovation while staying secure and compliant. Partner with us to build agile, intelligent, and customer-ready finance platforms.</p>
          <Link to="/contact?industry=financial" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Book a Financial Services Strategy Session →</Link>
        </div>
      </div>
    </div>
  );
} 