import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCheckCircle, faRocket, faLightbulb, faDatabase, faLock, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const iotServices = [
  'Setup & Configuration on AWS IoT, Azure IoT Hub, or Google IoT Core',
  'Edge Device Integration with Secure Cloud Gateways',
  'Real-Time Dashboards and Control Interfaces',
  'Predictive Maintenance Using Sensor Data',
  'IoT Data Stream Processing & AI Model Integration',
  'Device Provisioning, Management, and Firmware Updates',
];

const advantageList = [
  'Rapid, Zero-Touch Device Onboarding',
  'Scalable Cloud Storage and Compute for Sensor Data',
  'Secure, Token-Based API Interfaces for Remote Commands',
  'Edge AI Capabilities for Real-Time Decisioning',
  'Flexible Architectures for Industrial, Smart City, or Consumer IoT',
];

const suite = [
  {
    icon: faLightbulb,
    title: 'Cloud Strategy and Consulting',
    desc: 'Plan an IoT-enabled future with the right platform, governance, and security from day one.'
  },
  {
    icon: faDatabase,
    title: 'Data Warehousing and Integration',
    desc: 'Store, process, and enrich IoT data for real-time insights and cross-system reporting.'
  },
  {
    icon: faCloud,
    title: 'Cloud Migration and Integration',
    desc: 'Connect IoT systems into existing cloud architectures and third-party ecosystems.'
  },
  {
    icon: faLock,
    title: 'Cloud Security and Compliance',
    desc: 'Secure every device, gateway, and cloud endpoint with identity control, encryption, and compliance.'
  },
  {
    icon: faChartBar,
    title: 'Data Monetization Strategies',
    desc: 'Turn your IoT insights into revenue streams with data-as-a-service models, dashboards, or partner APIs.'
  },
  {
    icon: faChartBar,
    title: 'Data-Driven Decision Making',
    desc: 'Enable operational intelligence through predictive analytics, anomaly detection, and dynamic visualization.'
  },
];

export default function InternetOfThingsCloudSolutions() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/cloudiot.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Power IoT with the Cloud Edge</h1>
            <p className="text-lg md:text-xl mb-6">VirtuSwift engineers secure, cloud-integrated IoT ecosystems that connect physical assets with digital intelligence—enabling automation, analytics, and real-time control at scale.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold">Scale with IoT and Cloud</Link>
          </div>
        </div>
      </section>

      {/* Struggling to Connect Physical Devices to Business Value? */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4]" /> Struggling to Connect Physical Devices to Business Value?</h2>
                <p className="text-gray-700 mb-6">IoT success isn’t about just collecting sensor data—it’s about making it actionable.<br/>At VirtuSwift, we architect IoT solutions that bridge the edge and cloud, giving you full control, visibility, and insight across devices and operations. Whether you're building smart factories, connected supply chains, or intelligent urban infrastructure—we design for scale, security, and intelligence.</p>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudiot2.png" alt="VirtuSwift IoT Business Value" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What’s Included in Our IoT Cloud Services? */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4]" /> What’s Included in Our IoT Cloud Services?</h2>
                <h3 className="text-xl font-semibold text-[#3a3dc4] mb-4">We Offer:</h3>
                <ul className="space-y-4 mb-8">
                  {iotServices.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">See a Smart Cloud Deployment</Link>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudiot3.png" alt="IoT Cloud Services" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The VirtuSwift Advantage */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4]" /> The VirtuSwift Advantage</h2>
                <p className="text-gray-700 mb-6">Why Our Clients Choose Us for IoT at Scale:</p>
                <ul className="space-y-4 mb-8">
                  {advantageList.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <span className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">Extend Your Business with Smart IoT →</span>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudiot4.png" alt="VirtuSwift IoT Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Build a Smarter, Connected Ecosystem? */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Build a Smarter, Connected Ecosystem?</h2>
          <p className="text-lg text-gray-600 mb-6">VirtuSwift helps you go from device setup to data-driven transformation with future-ready IoT platforms.</p>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Start Your IoT Cloud Initiative</Link>
        </div>
      </div>

      {/* Digital Transformation Suite */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Explore More from VirtuSwift’s Digital Transformation Suite</h2>
        <p className="text-lg text-gray-600 mb-6">We integrate IoT with the full stack of transformation services—from strategy to analytics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {suite.map((s, i) => (
          <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
            <FontAwesomeIcon icon={s.icon} className="text-2xl text-[#3a3dc4] mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="text-center mt-12 pb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Bring IoT to Life?</h2>
        <p className="text-lg text-gray-600 mb-6">Let’s design a smarter future with real-time awareness and cloud-connected intelligence.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/cloudiot5.png" alt="IoT to Life" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book Your Free Consultation →</Link>
      </div>
    </div>
  );
} 