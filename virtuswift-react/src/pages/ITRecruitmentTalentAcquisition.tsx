import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCogs, faCheckCircle, faCloud, faRocket, faChartBar, faDatabase, faLock, faChartLine, faMoneyBillWave, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const bannerImages = [
  '/assets/itrecruitment.png',
  '/assets/itrecrutment1.png',
  '/assets/itrecrutment2.png',
  '/assets/itrecrutment3.png',
];

export default function ITRecruitmentTalentAcquisition() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: `url('${bannerImages[0]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Build High-Impact Tech Teams with Precision Hiring</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">Struggling to find top-tier IT talent that fits your culture and roadmap?<br/>VirtuSwift delivers smart, scalable hiring strategies to fuel your digital evolution.</p>
          <Link to="/contact?service=it-recruitment" className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg mb-4">Start Hiring Smarter</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift for IT Staffing? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">🚀 Why Choose VirtuSwift for IT Staffing?</h2>
            <p className="text-lg text-gray-700 mb-6">Because great tech requires great talent—on time, every time.<br/>We specialize in placing high-caliber professionals who align with your technical needs, timelines, and team dynamics.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faUserPlus} className="text-[#008BCF] text-xl" /> Full-Cycle IT Recruitment (Permanent, Contract, Project-Based)</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4] text-xl" /> Role-Based Skill Gap Analysis and Talent Mapping</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#f05a28] text-xl" /> Strategic Employer Branding and Market Positioning</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Technical Pre-Screening, Soft Skills Vetting & Seamless Onboarding</li>
            </ul>
            <Link to="/contact?service=it-recruitment-consultation" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Request a Staffing Consultation</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={bannerImages[1]} alt="IT Recruitment Banner" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">Beyond resumes—real results.<br/>We help you reduce hiring risks while accelerating project velocity with the right-fit talent.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">You Benefit From:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#008BCF] text-xl" /> Faster Hiring Turnarounds</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#3a3dc4] text-xl" /> Vetted Talent with Domain Experience</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#f05a28] text-xl" /> Cultural and Technical Fit Assurance</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-xl" /> Flexible Hiring Models to Scale on Demand</li>
            </ul>
            <Link to="/contact?service=it-recruitment-benefits" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Staff Your IT Team with Confidence →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={bannerImages[2]} alt="VirtuSwift Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Other Offerings in IT Staffing Solutions */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">Other Offerings in IT Staffing Solutions</h2>
          <p className="text-xl text-gray-600 mb-10 text-center">Empowering Your Business with Scalable Talent, Technology, and Transformation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon={faDatabase} title="Data Warehousing and Integration" desc="Augment your team with data specialists. Our experts manage the design, implementation, and integration of data warehouses to ensure your teams have access to clean, actionable, and business-ready information." />
            <ServiceCard icon={faCogs} title="Application and Database Management" desc="Staff your application and DB operations with certified professionals. We provide skilled resources for real-time monitoring, performance tuning, and maintenance of mission-critical systems — ensuring stability and uptime." />
            <ServiceCard icon={faLock} title="Cloud Security and Compliance" desc="Hire cloud security experts who keep your systems secure and compliant. Our talent pool includes specialists in identity management, encryption, and governance across regulated industries like healthcare, finance, and enterprise IT." />
            <ServiceCard icon={faMoneyBillWave} title="Data Monetization Strategies" desc="Empower your teams with monetization know-how. Our consultants help you transform data into revenue — through analytics, platform integrations, and innovative data-driven services tailored to your goals." />
            <ServiceCard icon={faCloud} title="Cloud Migration and Integration" desc="Accelerate cloud adoption with the right team in place. We deploy experienced cloud architects, migration engineers, and integration specialists who ensure smooth, secure, and cost-efficient cloud transitions." />
            <ServiceCard icon={faProjectDiagram} title="Internet of Things (IoT) Solutions" desc="Staff up for the connected future. Our IoT experts help implement smart device integrations, edge computing solutions, and real-time automation that expand your digital capabilities and open up new business models." />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">💡 Ready to Scale Your Tech Teams with Precision?</h2>
        <p className="text-xl text-gray-600 mb-6">Let’s build a workforce that powers your technology goals and delivers measurable outcomes.</p>
        <Link to="/contact?service=it-recruitment-strategy" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Request a Free Talent Strategy Session →</Link>
        <div className="flex justify-center mt-8">
          <img src={bannerImages[3]} alt="IT Recruitment CTA" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  icon: any;
  title: string;
  desc: string;
}
function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  // Map service titles to their detail page routes
  const detailLinks: { [key: string]: string } = {
    'Data Warehousing and Integration': '/services/data-warehousing-and-integration',
    'Application and Database Management': '/services/application-and-database-management',
    'Cloud Security and Compliance': '/services/cloud-security-and-compliance',
    'Data Monetization Strategies': '/services/data-monetization',
    'Cloud Migration and Integration': '/services/cloud-migration-and-integration',
    'Internet of Things (IoT) Solutions': '/services/iot-solutions',
  };
  const detailLink = detailLinks[title];
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full">
      <FontAwesomeIcon icon={icon} className="text-2xl text-[#3a3dc4] mb-3" />
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
      {detailLink && (
        <Link to={detailLink} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">
          View Detail
        </Link>
      )}
    </div>
  );
} 