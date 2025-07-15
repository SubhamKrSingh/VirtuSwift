import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faChartLine, faCheckCircle, faCloud, faDatabase, faLock, faMoneyBillWave, faCogs, faGlobe, faProjectDiagram, faUsers, faCalendarAlt, faShieldAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function ProjectPlanningScopeManagement() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/projectmanagment1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Define Success from the Start</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift helps you initiate projects with clarity, measurable goals, and aligned stakeholder expectations to drive consistent, on-time delivery.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Start Smart, Deliver Strong</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift for Project Planning? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">🚀 Why Choose VirtuSwift for Project Planning?</h2>
            <p className="text-lg text-gray-700 mb-6">We bridge business strategy with execution certainty—ensuring each project starts with the right foundation.</p>
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">Our Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faProjectDiagram} className="text-[#3a3dc4]" /> Project Charter Creation & Approval Workflows</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faUsers} className="text-[#008BCF]" /> Scope Definition & Requirements Gathering</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faCalendarAlt} className="text-[#f05a28]" /> Timeline, Resource, and Budget Estimation</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faShieldAlt} className="text-[#008BCF]" /> Risk Management & Change Control Strategies</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule a Project Kickoff Consultation</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/projectmanagment2.png" alt="Project Planning Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">📈 The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">Structured, transparent planning that sets your teams up for success.</p>
            <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">You Benefit From:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#3a3dc4] text-xl" /> Controlled and Aligned Project Scope</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faUsers} className="text-[#008BCF] text-xl" /> Clearly Defined Roles and Milestones</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#f05a28] text-xl" /> Accurate Forecasts and Budget Discipline</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#008BCF] text-xl" /> Fewer Surprises, Better Outcomes</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Plan for Success →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/projectmanagment3.png" alt="VirtuSwift Advantage Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Optimize Your IT Projects? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">🌐 Ready to Optimize Your IT Projects?</h2>
          <p className="text-lg text-gray-700 mb-6">Let VirtuSwift define your path to project excellence—right from day one.</p>
          <div className="flex justify-center mb-8">
            <img src="/assets/projectmanagment.png" alt="Project Optimization" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Kick Off with a Planning Strategy Session</Link>
        </div>
      </div>

      {/* Other Offerings in Project Management */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">🚀 Other Offerings in Project Management</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">Delivering Complex Projects On Time, On Budget, and Beyond Expectations</p>
        <p className="text-gray-600 mb-8 text-center">Our Project Management services are built to bring clarity, control, and consistency to your digital initiatives. From scope definition to data-backed execution, we combine strategic oversight with technical depth to ensure success across every phase of your project.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: faProjectDiagram, title: 'Project Planning and Scope Management', desc: 'Lay a clear foundation for execution. We define objectives, deliverables, milestones, and risks — turning business goals into actionable project plans that ensure smooth execution and stakeholder alignment.' },
            { icon: faDatabase, title: 'Data Warehousing and Integration', desc: 'Plan and implement data infrastructure with precision. We manage all stages — from scope analysis to deployment — ensuring data integration supports your analytics, reporting, and decision-making needs.' },
            { icon: faCogs, title: 'Application and Database Management', desc: 'Deliver stable applications with strong backend performance. Our project teams oversee application lifecycle management, database design, and performance optimization — aligning technical deliverables with business outcomes.' },
            { icon: faLock, title: 'Cloud Security and Compliance', desc: 'Bake security into your project plan. We manage cloud risk assessments, security audits, and regulatory compliance (GDPR, HIPAA, etc.) as an integrated part of the project lifecycle.' },
            { icon: faMoneyBillWave, title: 'Data Monetization Strategies', desc: 'Drive business value through every phase. We help define how data generated during projects can be productized or leveraged post-deployment — turning execution into an ongoing revenue opportunity.' },
            { icon: faCloud, title: 'Cloud Migration and Integration', desc: 'Execute migrations without the chaos. We handle planning, risk mitigation, vendor coordination, and full-stack integration to ensure cloud transitions are secure, smooth, and aligned with timelines.' },
            { icon: faGlobe, title: 'Internet of Things (IoT) Solutions', desc: 'Manage end-to-end delivery of IoT initiatives. From device planning to data capture and integration, we provide full project oversight to ensure IoT solutions deliver on operational goals.' },
            { icon: faChartLine, title: 'Data-Driven Decision Making', desc: 'Build a project culture rooted in insights. We deploy real-time dashboards, KPIs, and reporting tools that provide visibility and guide your team in making timely, strategic decisions.' },
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
        <img src="/assets/itrecrutment3.png" alt="Project Execution Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">💡 Ready to Execute Your Next Project with Precision?</h2>
        <p className="text-lg text-gray-600 mb-6">Let's manage your digital initiatives with agility, accountability, and results that move the needle.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book a Free Project Planning Call →</Link>
          <Link to="/services/project-management" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">View All Project Management Services</Link>
        </div>
      </div>
    </div>
  );
} 