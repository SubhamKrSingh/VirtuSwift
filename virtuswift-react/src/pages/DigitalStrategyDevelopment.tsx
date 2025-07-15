import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLightbulb, faMapMarkedAlt, faChartBar, faCogs, faSync, faUserFriends, faMobileAlt, faMoneyBillWave, faCloud, faWifi, faChartLine, faRobot, faUsers, faLock, faDatabase, faLayerGroup, faChartPie } from '@fortawesome/free-solid-svg-icons';

export default function DigitalStrategyDevelopment() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/digitaltransformation.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Strategize Boldly. Transform with Purpose.</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift helps you architect a future-ready business by aligning technology, innovation, and leadership vision through strategic digital planning.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Craft Your Digital Roadmap</Link>
        </div>
      </section>

      {/* Why VirtuSwift for Digital Strategy? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4]" /> Why VirtuSwift for Digital Strategy?</h2>
            <p className="text-lg text-gray-700 mb-6">We translate ambition into actionable transformation frameworks.</p>
            <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">Our Strategic Services Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLightbulb} className="text-[#3a3dc4] text-xl" /> Digital Maturity Assessments & Opportunity Mapping</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faMapMarkedAlt} className="text-[#008BCF] text-xl" /> Technology Investment Roadmaps & Capability Planning</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#f05a28] text-xl" /> Competitor Benchmarking & Market Disruption Analysis</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#008BCF] text-xl" /> Innovation Blueprints for Products, Services & Operations</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule Your Digital Strategy Session</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/digitaltransformation1.png" alt="Digital Strategy Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">Align vision and value across your enterprise.</p>
            <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">You Gain:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faUserFriends} className="text-[#3a3dc4] text-xl" /> Leadership Buy-In and Strategic Cohesion</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#008BCF] text-xl" /> Innovation Paths Grounded in Industry Trends</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#f05a28] text-xl" /> Smarter Technology Investment Decisions</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faLightbulb} className="text-[#008BCF] text-xl" /> Scalable Roadmaps with Measurable Milestones</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Future-Ready Begins Here →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/digitaltransformation2.png" alt="VirtuSwift Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Accelerate Your Digital Transformation */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">Accelerate Your Digital Transformation</h2>
          <p className="text-lg text-gray-700 mb-6">Partner with VirtuSwift to lead confidently through change with a strategic foundation built for growth.</p>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book a Strategy Workshop Today</Link>
        </div>
      </div>

      {/* Other Offerings in Digital Transformation */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Other Offerings in Digital Transformation</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">Empowering Your Enterprise for Tomorrow<br/>Digital Transformation isn’t just a service—it’s a journey. Our wide spectrum of future-ready services is designed to help your business scale, innovate, and lead in a digital-first world. Explore our extended suite of offerings that cover every strategic pillar of transformation—designed to deliver value, efficiency, and growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Each card below represents an offering, styled like IoT related services */}
          {[
            { icon: faSync, title: 'Business Process Optimization', desc: 'Unlock higher productivity and reduce costs by reimagining and automating your workflows. We analyze your current operations and implement smart, scalable processes that maximize ROI.' },
            { icon: faUserFriends, title: 'User Experience Design', desc: 'Delight your users at every touchpoint. We craft intuitive, visually compelling, and conversion-optimized experiences that keep your audience engaged and loyal.' },
            { icon: faMobileAlt, title: 'Mobile and Web Application Development', desc: 'From concept to launch, we create high-performing mobile and web apps that drive user adoption, improve operations, and generate revenue—customized for your industry and business needs.' },
            { icon: faMoneyBillWave, title: 'Data Monetization Strategies', desc: 'Turn data into dollars. We help identify untapped data assets, build frameworks to extract value, and implement models that generate new revenue streams from your existing data ecosystem.' },
            { icon: faCloud, title: 'Cloud Migration and Integration', desc: 'Seamlessly shift your workloads to the cloud. Our team ensures secure, scalable, and downtime-free migration while integrating all your applications and data into a single cloud ecosystem.' },
            { icon: faWifi, title: 'Internet of Things (IoT) Solutions', desc: 'Transform physical operations into intelligent systems. Our IoT solutions connect devices, collect data, and enable real-time decisions that revolutionize efficiency and customer experience.' },
            { icon: faChartLine, title: 'Data-driven Decision Making', desc: 'Make smarter choices, faster. We implement data platforms and dashboards that give leaders real-time visibility and insights—powering decisions with confidence and clarity.' },
            { icon: faRobot, title: 'Robotic Process Automation (RPA)', desc: 'Let bots handle the boring stuff. We deploy RPA tools that automate repetitive tasks, improve accuracy, and free your team to focus on high-impact work.' },
            { icon: faUsers, title: 'Change Management and Training', desc: 'Digital success requires people-first transformation. We guide your teams through change with structured training programs and support to ensure adoption, resilience, and long-term impact.' },
            { icon: faLock, title: 'Cybersecurity and Data Privacy Solutions', desc: 'Stay protected in a digital world. We assess vulnerabilities, implement end-to-end security protocols, and ensure compliance with global privacy regulations to keep your data and reputation safe.' },
            { icon: faDatabase, title: 'Data Warehousing and Integration', desc: 'Unify your data landscape. We build centralized, scalable data warehouses and integrate siloed systems to deliver clean, consistent, and reliable data for analysis.' },
            { icon: faLayerGroup, title: 'Enterprise Resource Planning (ERP) Implementation', desc: 'Modernize your operations with the right ERP. We customize and implement scalable ERP systems that centralize your core business functions and drive operational agility.' },
            { icon: faChartPie, title: 'Data Analytics and Visualization', desc: 'Make your data speak. We transform complex datasets into compelling dashboards and visual reports that drive strategic action and measurable outcomes.' },
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
        <img src="/assets/digitaltransformation3.png" alt="Digital Journey Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Accelerate Your Digital Journey?</h2>
        <p className="text-lg text-gray-600 mb-6">Let’s build something extraordinary together.</p>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book a Free Consultation →</Link>
      </div>
    </div>
  );
} 