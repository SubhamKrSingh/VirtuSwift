import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faChartLine, faBoxOpen, faBrain, faCogs, faFileAlt, faCheckCircle, faTractor, faWarehouse, faChartPie, faClipboardCheck, faSatellite, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const hero = {
  url: '/assets/energy1.png',
  title: 'Agribusiness',
  desc: 'Empowering Smarter Farming Through Technology',
};

const features = [
  {
    icon: faSeedling,
    title: 'Precision Agriculture & Field Monitoring',
    desc: 'Deploy sensor-based and drone-enabled technologies to monitor crop health, moisture, weather, and soil conditions in real time. Automate decision-making and intervene before risks impact yield.',
    bullets: [
      'IoT Sensors & Smart Devices',
      'Aerial Crop Scanning with Drones',
      'Environmental Data Dashboards',
      'Irrigation & Fertilizer Optimization',
    ],
  },
  {
    icon: faBoxOpen,
    title: 'Agri-Supply Chain & Traceability',
    desc: 'Track produce from field to fork with real-time visibility across logistics, warehousing, and distribution. Ensure compliance, reduce loss, and build consumer trust through end-to-end traceability.',
    bullets: [
      'Blockchain for Supply Chain Integrity',
      'Cold Chain Monitoring',
      'SKU-Level Tracking & Alerts',
      'QR Code Product Histories',
    ],
  },
  {
    icon: faBrain,
    title: 'Data & AI in Farming Decisions',
    desc: 'Use AI/ML models to predict crop yields, optimize harvest planning, and evaluate risk factors. Turn historical data and real-time feeds into actionable insights for smarter agriculture.',
    bullets: [
      'Yield Prediction Algorithms',
      'Pest & Disease Pattern Recognition',
      'Agronomic Data Warehousing',
      'Satellite Imaging & Predictive Models',
    ],
  },
  {
    icon: faCogs,
    title: 'Agri-Business Process Automation',
    desc: 'Digitize back-office processes—procurement, finance, compliance, and inventory—using ERP and cloud platforms customized for agricultural workflows.',
    bullets: [
      'SAP for Agri-Procurement & Inventory',
      'Workflow Automation & Notifications',
      'Field Staff Mobility Solutions',
      'Compliance Reporting & Document Management',
    ],
  },
  {
    icon: faClipboardCheck,
    title: 'Crop Insurance & Risk Analytics',
    desc: 'Offer farmers and agri-cooperatives data-driven insurance models powered by remote sensing and AI. Streamline claims with pre-validated geotagged reports.',
    bullets: [
      'Claim Automation with Drone Imagery',
      'Real-Time Crop Damage Detection',
      'Parametric Insurance Modeling',
      'Integration with PM Fasal Bima Yojana',
    ],
  },
];

const benefits = [
  'Higher Yield Per Hectare',
  'Reduced Input & Operational Costs',
  'Predictable, Profitable Supply Chains',
  'Enhanced Farmer & Consumer Trust',
  'ESG-Ready Sustainability Data',
];

const industries = [
  'Farming Cooperatives & Agri-Startups',
  'Agrochemical & Seed Manufacturers',
  'Food Processing & Milling Units',
  'Commodity Traders & Agri-Exporters',
  'Government & Policy Institutions',
];

export default function Agribusiness() {
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Empowering Smarter Farming Through Technology</h2>
          <p className="text-gray-700 mb-4">At VirtuSwift, we transform agribusinesses into data-driven, digitally enabled enterprises. From precision agriculture to AI-powered crop insights, we help you harness advanced technologies to improve yield, reduce waste, and drive profitability across the agricultural value chain.</p>
          <Link to="/contact?industry=agribusiness" className="inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg hover:bg-[#008BCF] transition-all duration-300 hover:scale-105 hover:shadow-lg">🚜 Accelerate Your Agri-Digital Journey</Link>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-4">🌐 The Future of Agriculture is Connected</h3>
          <p className="text-gray-700 mb-4">With climate variability, rising input costs, and evolving consumer demand, today’s agribusinesses must operate smarter. VirtuSwift integrates IoT, cloud, AI, and analytics to build resilient, efficient, and traceable farming ecosystems. Whether you're managing farm networks, processing facilities, or agri-logistics—we make every step more intelligent.</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
              <FontAwesomeIcon icon={feature.icon} className="text-3xl text-[#3a3dc4] mb-4" />
              <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{feature.desc}</p>
              <ul className="list-disc ml-4 text-sm text-gray-600">
                {feature.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">📈 The VirtuSwift Advantage for Agribusiness</h3>
          <p className="text-gray-700 mb-4">Digitally transform your agriculture value chain—end-to-end.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b) => (
              <div key={b} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
                <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-[#3a3dc4] mb-4" />
                <h4 className="font-bold text-lg mb-2">{b}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🧭 Industries We Serve</h3>
          <ul className="list-disc ml-4 text-gray-700 text-lg">
            {industries.map((i) => <li key={i}>{i}</li>)}
          </ul>
        </div>

        {/* Final CTA */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">🌟 Ready to Cultivate the Future?</h3>
          <p className="text-lg text-gray-700 mb-6">Let VirtuSwift help you unlock intelligent agriculture—one insight, one acre, one harvest at a time.</p>
          <Link to="/contact?industry=agribusiness" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">📩 Book a Free AgriTech Consultation Today →</Link>
        </div>
      </div>
    </div>
  );
} 