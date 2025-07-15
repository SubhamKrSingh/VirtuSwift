import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCheckCircle, faRocket, faLightbulb, faDatabase, faLock, faChartBar, faCloud, faMoneyBillWave, faMobile, faDesktop, faServer, faProjectDiagram, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const serviceList = [
  'Enterprise-grade Software Architecture',
  'Cross-Platform Application Development (Web, Mobile, Desktop)',
  'Agile Delivery and DevOps Integration',
  'Maintenance, Upgrades, and Ongoing Support',
];

const advantageList = [
  'Fully Customized Business Logic',
  'Secure Code and Scalable Infrastructure',
  'Faster Time-to-Delivery',
  'Seamless Integration with Legacy or Cloud Systems',
];

const otherOfferings = [
  {
    icon: faDatabase,
    title: '🗄️ Data Warehousing and Integration',
    desc: 'Supercharge your software with seamless data flows. We implement centralized, cloud-native data warehouses and integrate siloed systems to ensure your applications operate on clean, accessible, and real-time data.'
  },
  {
    icon: faCogs,
    title: '⚙️ Application and Database Management',
    desc: 'Ensure smooth and stable software performance. We manage your applications and databases end-to-end, providing updates, performance tuning, security patches, and incident handling for optimal functionality.'
  },
  {
    icon: faLock,
    title: '🔐 Cloud Security and Compliance',
    desc: 'Build with security at the core. From access control and encryption to compliance with industry-specific regulations like GDPR or HIPAA, we protect your applications and customer data across the full development lifecycle.'
  },
  {
    icon: faMoneyBillWave,
    title: '💰 Data Monetization Strategies',
    desc: 'Turn your software into a growth driver. We help identify and activate monetization opportunities within your software — from user data insights to new digital product offerings and embedded analytics.'
  },
  {
    icon: faCloud,
    title: '☁️ Cloud Migration and Integration',
    desc: 'Modernize your legacy systems. We migrate your software to cloud-native architectures, ensure seamless integration with cloud platforms, and optimize for speed, availability, and cost-efficiency.'
  },
  {
    icon: faProjectDiagram,
    title: '🌐 Internet of Things (IoT) Solutions',
    desc: 'Connect your software to the physical world. We develop software-enabled IoT platforms that collect data, enable automation, and deliver real-time insights across operations, devices, and users.'
  },
];

export default function CustomApplicationDevelopment() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/assets/customsoft.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Tailored Software Solutions for Business Excellence</h1>
            <p className="text-lg md:text-xl mb-6">At VirtuSwift, we design and build custom software that aligns with your business goals, enhances operational agility, and drives digital growth.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold">👉 Start Building Your Custom Solution</Link>
          </div>
        </div>
      </section>

      {/* Why Choose VirtuSwift for Custom Software Development? */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faBullseye} className="text-[#3a3dc4]" /> Why Choose VirtuSwift for Custom Software Development?</h2>
                <p className="text-gray-700 mb-6">We deliver scalable, robust, and secure applications tailored to your unique processes and workflows.</p>
                <h3 className="text-xl font-semibold text-[#3a3dc4] mb-4">Our Services Include:</h3>
                <ul className="space-y-4 mb-8">
                  {serviceList.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">👉 Get a Custom Dev Plan</Link>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/customsoft1.png" alt="Custom Application Development" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The VirtuSwift Advantage */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4]" /> The VirtuSwift Advantage</h2>
                <p className="text-gray-700 mb-6">We turn your software vision into reliable and future-ready systems.</p>
                <h3 className="text-xl font-semibold text-[#3a3dc4] mb-4">You Benefit From:</h3>
                <ul className="space-y-4 mb-8">
                  {advantageList.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">👉 Build What Your Business Needs →</Link>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/customsoft2.png" alt="VirtuSwift Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Offerings in Software Development */}
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Other Offerings in Software Development</h2>
        <p className="text-lg text-gray-600 mb-6">Building Smart, Scalable, and Secure Software Solutions for the Digital Age<br/>Our Software Development services go beyond just code. We architect intelligent systems, integrate powerful data frameworks, and create future-ready platforms that adapt to your business needs and fuel long-term success.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {otherOfferings.map((s, i) => (
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
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Build Software That Drives Impact?</h2>
        <p className="text-lg text-gray-600 mb-6">Let’s develop intelligent, secure, and scalable software that meets your business goals.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/customsoft.png" alt="Custom Software Impact" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">👉 Schedule Your Free Software Consultation →</Link>
      </div>
    </div>
  );
} 