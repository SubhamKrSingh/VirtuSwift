import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloud, faServer, faSync, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: faCloudSun,
    title: 'Best of All Clouds',
    desc: 'Leverage AWS, Azure, GCP, and on-prem for maximum flexibility and resilience.'
  },
  {
    icon: faSync,
    title: 'Seamless Integration',
    desc: 'Unified management and integration across multiple cloud and on-prem environments.'
  },
  {
    icon: faServer,
    title: 'Reduced Vendor Lock-In',
    desc: 'Avoid single-provider risks and negotiate better terms.'
  },
  {
    icon: faCloud,
    title: 'Agility & Scalability',
    desc: 'Scale workloads dynamically and deploy where it makes the most sense.'
  },
];

const process = [
  {
    step: 1,
    title: 'Assess & Design',
    desc: 'We evaluate your needs and design a multi-cloud/hybrid architecture.'
  },
  {
    step: 2,
    title: 'Integrate & Deploy',
    desc: 'We connect and deploy workloads across clouds and on-prem systems.'
  },
  {
    step: 3,
    title: 'Manage & Optimize',
    desc: 'Unified management, monitoring, and cost optimization.'
  },
];

export default function MultiCloudHybridCloudSolutions() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center mb-16" style={{ backgroundImage: 'url(/assets/cloudmulticloud.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Multi-Cloud & Hybrid Cloud Solutions</h1>
            <p className="text-lg md:text-xl mb-6">Why choose one cloud when you can have the best of all? VirtuSwift builds flexible, integrated environments across AWS, Azure, GCP, and on-prem systems.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold">Explore Multi-Cloud →</Link>
          </div>
        </div>
      </section>
      {/* Why VirtuSwift for Multi-Cloud? */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why VirtuSwift for Multi-Cloud?</h2>
                <ul className="space-y-4 mb-8 list-disc pl-6">
                  <li className="text-gray-800 text-base"><span className="font-semibold">Best of All Clouds</span><br/>Leverage AWS, Azure, GCP, and on-prem for maximum flexibility and resilience.</li>
                  <li className="text-gray-800 text-base"><span className="font-semibold">Seamless Integration</span><br/>Unified management and integration across multiple cloud and on-prem environments.</li>
                  <li className="text-gray-800 text-base"><span className="font-semibold">Reduced Vendor Lock-In</span><br/>Avoid single-provider risks and negotiate better terms.</li>
                  <li className="text-gray-800 text-base"><span className="font-semibold">Agility & Scalability</span><br/>Scale workloads dynamically and deploy where it makes the most sense.</li>
                </ul>
              </div>
              {/* Right: Image */}
              <div className="flex-1 w-full flex justify-center">
                <img src="/assets/cloudmulticloud2.png" alt="Why VirtuSwift for Multi-Cloud" className="w-[500px] h-[406px] object-cover rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faCloudSun} className="text-[#3a3dc4]" /> Why VirtuSwift for Multi-Cloud?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(f => (
              <li key={f.title} className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
                <FontAwesomeIcon icon={f.icon} className="text-2xl text-[#3a3dc4] mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-gray-800">{f.title}</h4>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10 border-l-4 border-[#3a3dc4]">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Multi-Cloud Process</h2>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {process.map(s => (
              <div key={s.title} className="flex-1 flex flex-col items-center text-center bg-gray-50 rounded-lg p-6 shadow relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3a3dc4] text-white text-2xl font-bold mb-2">{s.step}</div>
                <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Final CTA Section */}
        <section className="py-16 text-gray-900 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready for Multi-Cloud Agility?</h2>
          <p className="text-lg text-gray-700 mb-6">Let VirtuSwift help you build, manage, and optimize a truly flexible cloud environment.</p>
          <div className="flex justify-center mb-8">
            <img src="/assets/cloud4.png" alt="Multi-Cloud Agility" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
          </div>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition transform duration-200">Get Started</Link>
        </section>
      </div>
    </div>
  );
} 