import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCloud, faCogs, faServer, faDatabase, faChartLine, faCheckCircle, faRocket, faUsers, faLightbulb, faLaptopCode, faProjectDiagram, faBrain, faCalendarAlt, faSearch, faSync, faGlobe, faLock, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const heroImages = [
  '/assets/itstaff1.png',
  '/assets/itstaff2.png',
  '/assets/itstaff3.png',
  '/assets/itstaff4.png',
  '/assets/itstaff.png',
];

const tabs = ['What Is IT Staffing?', 'Our Services', 'Why VirtuSwift?'];

export default function ITStaffingTalentSolutions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('What Is IT Staffing?');

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section Slider */}
      <section className="relative w-full h-[400px] overflow-hidden mb-0">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroImages.map((img, index) => (
            <div key={index} className="min-w-full h-[400px] bg-cover bg-center relative" style={{ backgroundImage: `url(${img})` }}>
              <div className="absolute inset-0 flex items-center justify-center px-10 md:px-20 bg-black bg-opacity-40">
                <div className="text-white max-w-2xl text-center mx-auto drop-shadow-lg">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4">IT Staffing & Talent Solutions</h1>
                  <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">Find and scale tech talent fast. VirtuSwift delivers vetted IT professionals who match your needs, culture, and goals—on-demand.</p>
                  <Link to="/contact?service=it-staffing" className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request Talent Now</Link>
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
        {activeTab === 'What Is IT Staffing?' && (
          <>
            {/* Why IT Staffing Services */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why IT Staffing Services?</h2>
                  <p className="text-lg text-gray-700 mb-6">Your people are your advantage.<br/>At VirtuSwift, we understand that the right talent fuels innovation. Whether you're preparing for a product launch, scaling teams during high growth, or need specialized experts to fill short-term gaps, we deliver top-tier tech professionals—when and where you need them.<br/>We don't just recruit—we enable digital velocity through precision hiring.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/itstaff2.png" alt="IT Staffing Banner" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* How IT Staffing Fuels Business Growth */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">How IT Staffing Fuels Business Growth</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <GrowthCard icon={faSearch} title="Faster Hiring, Better Fit" desc="Access pre-vetted candidates with deep technical skills and strong cultural alignment." />
                <GrowthCard icon={faSync} title="Scalable Resources" desc="Ramp teams up or down based on project cycles—no long-term overhead." />
                <GrowthCard icon={faCheckCircle} title="Cost Optimization" desc="Reduce hiring costs while gaining access to top-level engineering and IT capabilities." />
                <GrowthCard icon={faChartLine} title="Role-Specific Precision" desc="From front-end developers to DevOps and ML engineers, we match niche skills to specific roles." />
                <GrowthCard icon={faGlobe} title="Global Reach" desc="Source onshore, offshore, or hybrid teams across time zones." />
                <GrowthCard icon={faLock} title="Secure & Compliant" desc="All talent complies with NDAs, data protection policies, and enterprise security standards." />
              </div>
            </div>
          </>
        )}
        {activeTab === 'Our Services' && (
          <>
            {/* Our IT Staffing & Talent Solutions */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Our IT Staffing & Talent Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceButton icon={faUserPlus} title="IT Recruitment and Talent Acquisition" desc="Full-cycle staffing for contract, permanent, and hybrid roles—tailored to your tech stack, timeline, and delivery model." link="/services/it-recruitment-talent-acquisition" />
                <ServiceButton icon={faCogs} title="Application & Database Management" desc="Staff your application and DB operations with certified professionals. We provide skilled resources for real-time monitoring, performance tuning, and maintenance of mission-critical systems — ensuring stability and uptime." link="/services/application-and-database-management" />
                <ServiceButton icon={faLock} title="Cloud Security and Compliance" desc="Hire cloud security experts who keep your systems secure and compliant. Our talent pool includes specialists in identity management, encryption, and governance across regulated industries like healthcare, finance, and enterprise IT." link="/services/cloud-security-and-compliance" />
                <ServiceButton icon={faMoneyBillWave} title="Data Monetization Strategies" desc="Empower your teams with monetization know-how. Our consultants help you transform data into revenue — through analytics, platform integrations, and innovative data-driven services tailored to your goals." link="/services/data-monetization" />
                <ServiceButton icon={faDatabase} title="Data Warehousing and Integration" desc="Augment your team with data specialists. Our experts manage the design, implementation, and integration of data warehouses to ensure your teams have access to clean, actionable, and business-ready information." link="/services/data-warehousing-and-integration" />
                <ServiceButton icon={faProjectDiagram} title="Internet of Things (IoT) Solutions" desc="IoT developers, embedded engineers, and cloud analysts who can build, manage, and scale intelligent edge-to-cloud solutions." link="/services/iot-solutions" />
              </div>
            </div>
            {/* 4-Step Talent Delivery Process */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Our 4-Step Talent Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <StepCard step={1} title="Understand & Scope" desc="We align with your project, goals, and cultural values to scope the exact profile you need." />
                <StepCard step={2} title="Source & Screen" desc="We identify and rigorously test candidates through multi-layered technical screening and soft skill evaluation." />
                <StepCard step={3} title="Deploy & Support" desc="We place vetted professionals into your workflow—remote, hybrid, or on-site—with seamless onboarding." />
                <StepCard step={4} title="Review & Optimize" desc="We continue to manage, gather feedback, and improve performance or upskill resources as needed." />
              </div>
            </div>
          </>
        )}
        {activeTab === 'Why VirtuSwift?' && (
          <>
            {/* Why Choose VirtuSwift for IT Staffing */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full md:pr-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">🌟 Why Choose VirtuSwift for IT Staffing?</h2>
                  <p className="text-lg text-gray-700 mb-6">We combine deep technical recruitment expertise with real-world IT delivery understanding. Our curated candidate pools, flexible models, and proactive support make scaling your team frictionless.</p>
                  <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">✅ What Sets VirtuSwift Apart</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-800 text-base">💻 Specialized Tech Coverage: Python, Java, Salesforce, SAP, React, Kubernetes, ML—whatever the stack, we have the experts.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">⏱ Speed with Precision: Our extensive bench and global talent network allow us to fill roles in days, not weeks.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🧾 White-Label Support: Partner with us under your brand. We deliver quietly for agencies, MSPs, and IT service providers.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🧑‍🏫 End-to-End Support: From sourcing to onboarding to performance optimization, we stay with you through the full engagement lifecycle.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base">🔁 Flexible Engagement Models: Choose contract, contract-to-hire, or full-time placements with monthly, milestone, or retainer pricing options.</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/itstaff3.png" alt="Why Choose VirtuSwift IT Staffing" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* Final CTA */}
            <div className="text-center mt-16 pb-16">
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900">📞 Need developers, engineers, or tech specialists to hit your next milestone?</h2>
              <Link to="/contact?service=it-staffing" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg mb-4">Digitize Your Success</Link>
              <div className="flex justify-center mt-8">
                <img src="/assets/itstaff4.png" alt="IT Staffing CTA" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Explore More Services */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">🔗 Explore More Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExploreCard icon={faRocket} title="Digital Transformation Solutions" desc="From automation to ERP to legacy modernization, we power total enterprise transformation." link="/services/digital-transformation" />
          <ExploreCard icon={faBrain} title="AI & Machine Learning Development" desc="Access top data scientists and ML engineers to build custom algorithms, analytics, and automation pipelines." link="/services/ai-machine-learning" />
          <ExploreCard icon={faLaptopCode} title="Software Development" desc="Hire full-cycle dev teams or individual developers to build web, mobile, and enterprise-grade software." link="/services/application-web-development" />
          <ExploreCard icon={faChartLine} title="Data Analytics & Monetization" desc="Recruit BI analysts, data engineers, and data scientists to transform insights into action." link="/data-analytics-monetization" />
          <ExploreCard icon={faCalendarAlt} title="Project Management Services" desc="PMI-certified project managers and scrum masters ready to take your initiatives from backlog to delivery." link="/services/project-management" />
          <ExploreCard icon={faCogs} title="DevOps Services" desc="Hire DevOps pros to design CI/CD pipelines, automate releases, and manage infrastructure-as-code environments." link="/services/devops" />
          <ExploreCard icon={faProjectDiagram} title="Metaverse & XR Solutions" desc="Expand into new realities with Unity developers, 3D artists, and VR/AR specialists for product and brand experiences." link="/services/metaverse-xr" />
        </div>
      </div>
    </div>
  );
}

interface GrowthCardProps {
  icon: any;
  title: string;
  desc: string;
}
function GrowthCard({ icon, title, desc }: GrowthCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
      <FontAwesomeIcon icon={icon} className="text-4xl mb-2 text-[#3a3dc4]" />
      <h4 className="font-bold mb-1 text-[#232584] text-lg">{title}</h4>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}

interface ServiceSectionProps {
  number: number;
  title: string;
  desc: string;
}
function ServiceSection({ number, title, desc }: ServiceSectionProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col mb-4">
      <h4 className="font-semibold text-lg mb-2 text-gray-800">📌 {number}. {title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
    </div>
  );
}

interface StepCardProps {
  step: number;
  title: string;
  desc: string;
}
function StepCard({ step, title, desc }: StepCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#3a3dc4] to-[#008BCF] text-white text-2xl font-bold mb-2 group-hover:scale-110 transition">{step}</div>
      <h4 className="font-semibold text-lg mb-1 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm text-center">{desc}</p>
    </div>
  );
}

interface ExploreCardProps {
  icon: any;
  title: string;
  desc: string;
  link: string;
}
function ExploreCard({ icon, title, desc, link }: ExploreCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full">
      <FontAwesomeIcon icon={icon} className="text-2xl text-[#3a3dc4] mb-3" />
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
      <Link to={link} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">Learn More</Link>
    </div>
  );
}

interface ServiceButtonProps {
  icon: any;
  title: string;
  desc: string;
  link?: string;
}
function ServiceButton({ icon, title, desc, link }: ServiceButtonProps) {
  const content = (
    <>
      <FontAwesomeIcon icon={icon} className="text-2xl text-[#3a3dc4] mb-3 group-hover:text-[#f05a28] transition" />
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
    </>
  );
  return link ? (
    <Link to={link} className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full text-left hover:bg-[#f5f7ff] hover:shadow-lg transition group focus:outline-none focus:ring-2 focus:ring-[#3a3dc4]">
      {content}
      <Link to={link} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
    </Link>
  ) : (
    <button type="button" className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full text-left hover:bg-[#f5f7ff] hover:shadow-lg transition group focus:outline-none focus:ring-2 focus:ring-[#3a3dc4]">
      {content}
    </button>
  );
} 