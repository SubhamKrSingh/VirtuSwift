import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faChartLine, faShieldAlt, faGlobe, faBolt, faChartBar, faCheckCircle, faUsers, faBrain, faCalendarAlt, faMoneyBillWave, faLock, faProjectDiagram, faCogs, faCloud, faServer, faDatabase } from '@fortawesome/free-solid-svg-icons';

const tabs = ['What Are Project Management Services?', 'Our Services', 'Why VirtuSwift?'];

const heroSlides = [
  {
    image: '/assets/projectmanagment.png',
    title: 'Project Management Services',
    subtitle: 'Drive your digital projects with confidence. From planning to delivery, VirtuSwift ensures flawless execution and measurable outcomes.',
    cta: '🔘 Manage Projects Smarter',
    ctaLink: '/contact?service=project-management',
  },
];

export default function ProjectManagementServices() {
  const [activeTab, setActiveTab] = useState('What Are Project Management Services?');
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section Slider */}
      <section className="relative w-full h-[400px] overflow-hidden mb-0">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-[400px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center px-10 md:px-20 bg-black bg-opacity-40">
                <div className="text-white max-w-2xl text-center mx-auto drop-shadow-lg">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">{slide.subtitle}</p>
                  <Link to={slide.ctaLink} className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">{slide.cta}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-[#121927] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-start space-x-4 md:space-x-8 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`py-3 px-4 text-sm font-medium border-b-2 transition-all duration-300 hover:scale-105 ${activeTab === tab ? 'border-[#3a3dc4] text-[#3a3dc4]' : 'border-transparent text-gray-400 hover:text-white'}`}
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
        {activeTab === 'What Are Project Management Services?' && (
          <>
            {/* Why Project Management Services? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Project Management Services?</h2>
                  <p className="text-lg text-gray-700 mb-6">Project success doesn't happen by chance—it's planned, monitored, and delivered. At VirtuSwift, our certified project managers bring structure, visibility, and momentum to every initiative.</p>
                  <p className="text-lg text-gray-700 mb-6">Whether you're deploying cloud infrastructure, launching IoT solutions, or managing enterprise apps, we lead your project from idea to impact with precision.</p>
                  <p className="text-lg text-gray-700 mb-6">We don't just manage timelines—we manage transformation.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/projectmanagment2.png" alt="Why Project Management Services" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* How Project Management Drives Business Growth */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">🚀 How Project Management Drives Business Growth</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard icon={faProjectDiagram} title="Strategic Alignment" desc="Ensure every initiative is tied to business objectives, budgets, and KPIs that matter." />
                <ValueCard icon={faUsers} title="Smarter Resource Allocation" desc="Use talent and tools efficiently—avoiding burnout, bottlenecks, and overruns." />
                <ValueCard icon={faShieldAlt} title="Risk Reduction" desc="Spot, mitigate, and manage risks early—protecting delivery and reputation." />
                <ValueCard icon={faGlobe} title="Streamlined Communication" desc="Stakeholders stay informed through real-time updates and reporting." />
                <ValueCard icon={faBolt} title="Faster Delivery" desc="Accelerate launches with agile sprints or structured timelines." />
                <ValueCard icon={faChartBar} title="Better ROI" desc="Maximize every dollar and development cycle—on time, on budget." />
              </div>
            </div>
          </>
        )}
        {activeTab === 'Our Services' && (
          <>
            {/* Our Project Management Service Offerings */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Our Project Management Service Offerings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceSection number={1} title="Project Planning and Scope Management" desc="Define your project's vision, goals, deliverables, and roadmap with clarity." />
                <ServiceSection number={2} title="Data Warehousing and Integration" desc="Plan and implement data infrastructure with precision. We manage all stages — from scope analysis to deployment — ensuring data integration supports your analytics, reporting, and decision-making needs." link="/services/data-warehousing-and-integration" />
                <ServiceSection number={3} title="Application and Database Management" desc="Deliver stable applications with strong backend performance. Our project teams oversee application lifecycle management, database design, and performance optimization — aligning technical deliverables with business outcomes." link="/services/application-and-database-management" />
                <ServiceSection number={4} title="Data Monetization Strategies" desc="Drive business value through every phase. We help define how data generated during projects can be productized or leveraged post-deployment — turning execution into an ongoing revenue opportunity." link="/services/data-monetization-strategies" />
                <ServiceSection number={5} title="Cloud Migration and Integration" desc="Execute migrations without the chaos. We handle planning, risk mitigation, vendor coordination, and full-stack integration to ensure cloud transitions are secure, smooth, and aligned with timelines." link="/services/cloud-migration-and-integration" />
                <ServiceSection number={6} title="Internet of Things (IoT) Solutions" desc="Deliver infrastructure-aware, phased IoT rollouts." link="/services/iot-solutions" />
                <ServiceSection number={7} title="Agile and Waterfall Project Methodologies" desc="Run Agile, Waterfall, or hybrid projects aligned to your culture and workflows." link="/services/data-driven-decision-making" />
              </div>
            </div>
            {/* How VirtuSwift Delivers Seamless Project Execution */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">How VirtuSwift Delivers Seamless Project Execution</h2>
              <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
                {[
                  { step: 1, title: 'Assess & Align', desc: 'Understand business needs, risks, timelines, and goals.' },
                  { step: 2, title: 'Plan & Mobilize', desc: 'Build agile boards, milestone plans, and staff resources.' },
                  { step: 3, title: 'Execute & Optimize', desc: 'Track delivery velocity while adapting to change.' },
                  { step: 4, title: 'Deliver & Support', desc: 'Post-launch stabilization, reporting, and scale-up planning.' },
                ].map((s) => (
                  <div key={s.title} className="flex-1 flex flex-col items-center text-center bg-white rounded-lg p-6 shadow border-b-4 border-[#008BCF] mx-2 mb-4 md:mb-0 group transition">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#3a3dc4] to-[#008BCF] text-white text-2xl font-bold mb-2 group-hover:scale-110 transition">{s.step}</div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {activeTab === 'Why VirtuSwift?' && (
          <>
            {/* Why Prioritize VirtuSwift as Your PMO Partner? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-xl shadow p-8">
                <div className="flex-1 w-full md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Prioritize VirtuSwift as Your PMO Partner?</h2>
                  <p className="text-lg text-gray-700 mb-6">Managing IT projects is more than tracking tasks—it's about orchestrating people, process, and technology for impact.</p>
                  <p className="text-lg text-gray-700 mb-6">At VirtuSwift, we go beyond status meetings to deliver results that scale.</p>
                  <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">✅ What Sets VirtuSwift Apart</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-800 text-base">🏅 Certified Expertise: PMP, CSM, PRINCE2-certified project leaders with global and industry-specific experience.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🧠 Agile & Adaptive: DevOps, SAP, AI, IoT—we manage it all, your way.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">📊 Outcome-Driven Planning: Success metrics set from day one—timelines, KPIs, ROI.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🛠️ Tool Integration: Work in your stack: Jira, Trello, Asana, ClickUp, Smartsheet.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">👁️ Governance & Visibility: Live dashboards and transparent updates at every step.</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/projectmanagment3.png" alt="VirtuSwift Project Management Partner" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* Final CTA */}
            <div className="text-center mt-16 pb-16">
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Your next big project deserves more than luck—it deserves leadership.</h2>
              <p className="text-xl text-gray-600 mb-6">Let's transform your project management approach with proven methodologies and expert guidance.</p>
              <img src="/assets/projectmanagment.png" alt="Project Management Leadership" className="mx-auto mb-6 max-w-md w-full h-auto object-cover rounded-xl shadow-lg" />
              <Link to="/contact?service=project-management" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">🔘 Let's Talk</Link>
            </div>
          </>
        )}
      </div>

      {/* Explore More Services */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">🔗 Explore More Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExploreCard image="/assets/digitaltransformation.png" title="Digital Transformation Solutions" desc="End-to-end transformation with process automation, AI, cloud, and ERP modernization." link="/services/digital-transformation" />
          <ExploreCard image="/assets/digitalstratergy.png" title="AI & Machine Learning Development" desc="Intelligent systems powered by predictive models, NLP, and real-time analytics." link="/services/ai-machine-learning" />
          <ExploreCard image="/assets/datawarehousing.png" title="Software Development" desc="From SaaS apps to internal tools, we build secure, scalable, user-centric software." link="/services/application-web-development" />
          <ExploreCard image="/assets/datawarehousing.png" title="Data Analytics & Monetization" desc="From dashboards to machine learning—turn data into profitable insights." link="/data-analytics-monetization" />
          <ExploreCard image="/assets/itstaff2.png" title="IT Staffing Solutions" desc="On-demand hiring of developers, cloud architects, security experts, and more." link="/services/it-staffing-talent-solutions" />
          <ExploreCard image="/assets/digitaltransformation.png" title="DevOps Services" desc="DevOps engineers streamline delivery with CI/CD pipelines and IAC." link="/services/devops" />
          <ExploreCard image="/assets/datawarehousing.png" title="Metaverse & XR Solutions" desc="3D experiences and virtual environments for training, events, and marketing." link="/services/metaverse-xr" />
          <ExploreCard image="/assets/digitalstratergy.png" title="Managed IT Services" desc="End-to-end infrastructure, cloud, and application support with 24/7 monitoring." link="/services/managed-it-services" />
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
      <FontAwesomeIcon icon={icon} className="text-4xl mb-2 text-[#3a3dc4]" />
      <h4 className="font-bold mb-1 text-[#232584] text-lg">{title}</h4>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}

function ServiceSection({ number, title, desc, link }: { number: number; title: string; desc: string; link?: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col mb-4">
      <h4 className="font-semibold text-lg mb-2 text-gray-800">📌 {number}. {title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
      {link ? (
        <Link to={link} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      ) : (
        number === 1 && (
          <Link to="/services/project-planning-scope-management" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
        )
      )}

    </div>
  );
}

function ExploreCard({ image, title, desc, link }: { image: string; title: string; desc: string; link: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full">
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
      <Link to={link} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">Learn More</Link>
    </div>
  );
} 