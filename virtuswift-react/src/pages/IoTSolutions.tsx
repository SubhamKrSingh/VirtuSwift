import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faCogs, faCheckCircle, faCloud, faRocket, faChartBar, faLightbulb, faDatabase, faLock, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function IoTSolutions() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/cloudiot.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Internet of Things (IoT) Solutions</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">Extend your analytics into the physical world. We collect, connect, and compute IoT data to drive smarter automation and predictive decision-making.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Start Your IoT Journey</Link>
        </div>
      </section>

      {/* Why IoT Solutions? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why IoT Solutions?</h2>
            <p className="text-lg text-gray-700 mb-6">The Internet of Things is transforming how businesses operate, monitor, and optimize their physical assets and processes.</p>
            <p className="text-gray-600 mb-6">At VirtuSwift, we help you harness the power of connected devices to gain real-time insights, automate operations, and create new business opportunities.</p>
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">Our IoT Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faWifi} className="text-[#3a3dc4]" /> IoT Device Integration & Management</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faCloud} className="text-[#008BCF]" /> Real-Time Data Collection & Processing</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faChartBar} className="text-[#f05a28]" /> Predictive Analytics & Machine Learning</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faCogs} className="text-[#008BCF]" /> Automated Workflows & Control Systems</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faCheckCircle} className="text-[#3a3dc4]" /> Security & Compliance Frameworks</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request IoT Consultation</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloudiot2.png" alt="IoT Solutions Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Our IoT Services */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">Our IoT Services</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faWifi} className="text-[#3a3dc4] text-xl" /> IoT Device Integration & Management</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#008BCF] text-xl" /> Real-Time Data Collection & Processing</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#f05a28] text-xl" /> Predictive Analytics & Machine Learning</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#008BCF] text-xl" /> Automated Workflows & Control Systems</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#3a3dc4] text-xl" /> Security & Compliance Frameworks</li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloudiot.png" alt="IoT Services Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Why Choose VirtuSwift? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">Why Choose VirtuSwift?</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faWifi} className="text-[#3a3dc4] text-xl" /> Certified IoT Integration Experts</li>
            <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Proven Real-Time Data Solutions</li>
            <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#f05a28] text-xl" /> Fast, Secure, and Scalable</li>
          </ul>
          <div className="flex justify-center mb-8">
            <img src="/assets/cloudiot3.png" alt="VirtuSwift IoT Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Get IoT Consultation</Link>
        </div>
      </div>

      {/* Ready to Connect? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Connect Your World?</h2>
        <p className="text-lg text-gray-600 mb-6">Let VirtuSwift help you build intelligent, connected systems that drive efficiency and innovation.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/cloudiot4.png" alt="IoT Connection Illustration" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Start Your IoT Project</Link>
      </div>

      {/* Related Services */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Explore More from Our Data Analytics & Monetization Suite</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: faChartBar, title: 'Data Strategy and Planning', desc: 'Lay the foundation for data growth. Define your vision, build a roadmap, and align governance with business outcomes.' },
            { icon: faDatabase, title: 'Data Warehousing and Integration', desc: 'Break down data silos with scalable warehouses and integration pipelines that power accurate, real-time analytics.' },
            { icon: faCogs, title: 'Application and Database Management', desc: 'Ensure continuous performance of your data ecosystem. We monitor, optimize, and support every layer—apps to databases.' },
            { icon: faLock, title: 'Cloud Security and Compliance', desc: 'Protect your IoT data with robust encryption, role-based access, and audit-ready frameworks.' },
            { icon: faChartLine, title: 'Data Monetization Strategies', desc: 'Convert your IoT data into external value. From subscription APIs to partner-facing platforms, we help you unlock new revenue streams.' },
            { icon: faCloud, title: 'Cloud Migration and Integration', desc: 'Move your IoT workloads to the cloud securely and efficiently, enabling faster processing and flexible scaling.' },
            { icon: faCheckCircle, title: 'Data Governance & Compliance', desc: 'Ensure data quality, privacy, and regulatory compliance at every step.' },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
              <FontAwesomeIcon icon={service.icon} className="text-2xl text-[#3a3dc4] mb-3" />
              <h4 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-12 pb-12">
        <img src="/assets/cloudiot5.png" alt="IoT Journey Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Build Your IoT Ecosystem?</h2>
        <p className="text-lg text-gray-600 mb-6">Let VirtuSwift help you connect, collect, and compute data from the physical world to drive smarter decisions.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule Your Free IoT Consultation</Link>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Request an IoT Demo</Link>
        </div>
      </div>
    </div>
  );
} 