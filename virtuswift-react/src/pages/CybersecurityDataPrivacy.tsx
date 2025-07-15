import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faSync, faCogs, faLaptopCode, faMoneyBillWave, faCloud, faProjectDiagram, faChartBar, faChalkboardTeacher, faLock, faDatabase, faLayerGroup, faUserShield } from '@fortawesome/free-solid-svg-icons';

export default function CybersecurityDataPrivacy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/cloudsecurity1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Shield Your Business. Empower Trust.</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">Are your digital systems truly secure? Are you ready for the next cyber threat?<br/>At VirtuSwift, we go beyond defense. We build cyber resilience—so your innovation moves fast without fear, and your data stays compliant, protected, and private.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg mb-4">Strengthen Your Security Posture</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift for Cybersecurity? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Choose VirtuSwift for Cybersecurity?</h2>
            <p className="text-lg text-gray-700 mb-6">Security isn’t just about tools—it’s about trust.<br/>VirtuSwift integrates modern security protocols and privacy frameworks into every aspect of your tech ecosystem—so you stay one step ahead of threats and regulators.</p>
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">Our Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-800">End-to-End Security Audits & Penetration Testing</li>
                <li className="flex items-center gap-3 text-gray-800">Advanced Threat Detection & Response (EDR, SIEM)</li>
                <li className="flex items-center gap-3 text-gray-800">Regulatory Compliance (GDPR, HIPAA, CCPA, SOC 2)</li>
                <li className="flex items-center gap-3 text-gray-800">IAM & Role-Based Access Architecture</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule a Security Audit</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloudsecurity2.png" alt="Cybersecurity Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">The VirtuSwift Advantage</h2>
            <p className="mb-4 text-gray-700">Transform fear into readiness.<br/>Cybersecurity is no longer an option—it’s a business enabler. With VirtuSwift, your systems are protected, your teams are empowered, and your data is governed with integrity.</p>
            <h4 className="font-semibold text-lg mb-2 text-[#232584]">You Benefit From:</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Stronger, Adaptive Cyber Defenses</li>
              <li>Zero Trust Architecture</li>
              <li>Audit-Ready Privacy Controls</li>
              <li>Continuous Threat Monitoring & Remediation</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-3 rounded-lg font-bold shadow hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Confidently Scale Your Digital Future →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloudsecurity4.png" alt="VirtuSwift Cybersecurity Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Power Secure Innovation? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">Ready to Power Secure Innovation?</h2>
          <p className="mb-6 text-gray-700">Don’t just protect your systems—future-proof them.<br/>Let VirtuSwift help you build an unshakable foundation for secure transformation.</p>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Start Your Security Readiness Review</Link>
        </div>
      </div>

      {/* Other Offerings in Digital Transformation */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">🚀 Other Offerings in Digital Transformation</h2>
        <p className="text-center text-gray-700 mb-8">Empowering Your Enterprise for Tomorrow<br/>Digital Transformation isn’t just a service—it’s a journey. Our wide spectrum of future-ready services is designed to help your business scale, innovate, and lead in a digital-first world. Explore our extended suite of offerings that cover every strategic pillar of transformation—designed to deliver value, efficiency, and growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: faChartLine, title: 'Digital Strategy Development', desc: 'Build your digital future on a solid blueprint. We help define actionable, long-term strategies tailored to your goals—aligning business, technology, and customer experience into one unified digital roadmap.' },
            { icon: faSync, title: 'Business Process Optimization', desc: 'Unlock higher productivity and reduce costs by reimagining and automating your workflows. We analyze your current operations and implement smart, scalable processes that maximize ROI.' },
            { icon: faCogs, title: 'User Experience Design', desc: 'Delight your users at every touchpoint. We craft intuitive, visually compelling, and conversion-optimized experiences that keep your audience engaged and loyal.' },
            { icon: faLaptopCode, title: 'Mobile and Web Application Development', desc: 'From concept to launch, we create high-performing mobile and web apps that drive user adoption, improve operations, and generate revenue—customized for your industry and business needs.' },
            { icon: faMoneyBillWave, title: 'Data Monetization Strategies', desc: 'Turn data into dollars. We help identify untapped data assets, build frameworks to extract value, and implement models that generate new revenue streams from your existing data ecosystem.' },
            { icon: faCloud, title: 'Cloud Migration and Integration', desc: 'Seamlessly shift your workloads to the cloud. Our team ensures secure, scalable, and downtime-free migration while integrating all your applications and data into a single cloud ecosystem.' },
            { icon: faProjectDiagram, title: 'Internet of Things (IoT) Solutions', desc: 'Transform physical operations into intelligent systems. Our IoT solutions connect devices, collect data, and enable real-time decisions that revolutionize efficiency and customer experience.' },
            { icon: faChartBar, title: 'Data-driven Decision Making', desc: 'Make smarter choices, faster. We implement data platforms and dashboards that give leaders real-time visibility and insights—powering decisions with confidence and clarity.' },
            { icon: faSync, title: 'Robotic Process Automation (RPA)', desc: 'Let bots handle the boring stuff. We deploy RPA tools that automate repetitive tasks, improve accuracy, and free your team to focus on high-impact work.' },
            { icon: faChalkboardTeacher, title: 'Change Management and Training', desc: 'Digital success requires people-first transformation. We guide your teams through change with structured training programs and support to ensure adoption, resilience, and long-term impact.' },
            { icon: faDatabase, title: 'Data Warehousing and Integration', desc: 'Unify your data landscape. We build centralized, scalable data warehouses and integrate siloed systems to deliver clean, consistent, and reliable data for analysis.' },
            { icon: faLayerGroup, title: 'Enterprise Resource Planning (ERP) Implementation', desc: 'Modernize your operations with the right ERP. We customize and implement scalable ERP systems that centralize your core business functions and drive operational agility.' },
            { icon: faChartBar, title: 'Data Analytics and Visualization', desc: 'Make your data speak. We transform complex datasets into compelling dashboards and visual reports that drive strategic action and measurable outcomes.' },
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
        <img src="/assets/cloudsecurity3.png" alt="Cybersecurity Journey Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">💡 Ready to Accelerate Your Digital Journey?</h2>
        <p className="text-lg text-gray-600 mb-6">Let’s build something extraordinary together.</p>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book a Free Consultation →</Link>
      </div>
    </div>
  );
} 