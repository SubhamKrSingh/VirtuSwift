import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCheckCircle, faRocket, faChartLine, faLock, faDatabase, faCloud, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const consultingServices = [
  'Cloud Readiness Assessment & Gap Analysis',
  'Hybrid, Multi-Cloud, and Edge Strategy Planning',
  'Cloud Cost Optimization & FinOps Enablement',
  'Innovation-Driven Architecture Design',
  'SaaS, PaaS, IaaS Advisory Across AWS, Azure, GCP',
  'Cloud Operating Model & Governance Frameworks',
];

const advantageList = [
  'Accelerated & Sustainable Cloud Adoption',
  'Vendor-Neutral, Business-Aligned Cloud Strategy',
  'Simplified Architecture with High Resilience',
  'Long-Term Cost Efficiency & ROI Focus',
  'Enterprise-Grade Security & Compliance by Design',
];

const suite = [
  {
    icon: faDatabase,
    title: 'Data Warehousing and Integration',
    desc: 'Eliminate silos and build a unified digital backbone. We design and implement secure, scalable data architectures that power real-time insights and enterprise-wide intelligence.'
  },
  {
    icon: faCloud,
    title: 'Cloud Migration and Integration',
    desc: 'From lift-and-shift to cloud-native rebuilds—our experts manage full-stack migrations and seamlessly integrate your apps, databases, and platforms in the cloud.'
  },
  {
    icon: faLock,
    title: 'Cloud Security and Compliance',
    desc: 'Cloud success is built on trust. We protect your workloads with multi-layered security, real-time threat detection, and automated compliance aligned with GDPR, HIPAA, and industry standards.'
  },
  {
    icon: faChartBar,
    title: 'Data Monetization Strategies',
    desc: 'Unlock the business value of your data. VirtuSwift helps you identify, productize, and profit from your data assets through tailored monetization frameworks and digital products.'
  },
  {
    icon: faCloud,
    title: 'Internet of Things (IoT) Solutions',
    desc: 'Connect devices, automate processes, and capture real-time insights. We build smart IoT ecosystems that bridge the physical and digital—enhancing efficiency, visibility, and control.'
  },
  {
    icon: faChartLine,
    title: 'Data-Driven Decision Making',
    desc: 'Empower every decision with intelligence. We deliver real-time dashboards, advanced analytics, and predictive models that help you act faster, smarter, and more strategically.'
  },
];

export default function CloudStrategyAndConsulting() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[380px] flex items-center justify-center bg-cover bg-center mb-16" style={{ backgroundImage: 'url(/assets/cloud6.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Empower Growth with a Cloud Strategy That Scales</h1>
            <p className="text-xl md:text-2xl mb-6 font-medium drop-shadow">At VirtuSwift, we craft custom cloud strategies that drive agility, resilience, and innovation—helping you modernize confidently in a cloud-first world.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-xl font-bold">Design Your Cloud Roadmap</Link>
          </div>
        </div>
      </section>

      {/* Why Choose VirtuSwift for Cloud Strategy */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] text-3xl" /> Why Choose VirtuSwift for Cloud Strategy?</h2>
            <p className="text-lg text-gray-700 mb-6">We don’t believe in one-size-fits-all roadmaps. VirtuSwift blends deep technical expertise with strategic business vision to help you define, implement, and scale a cloud strategy that fits your unique goals and operational realities.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">Our Cloud Consulting Services Include:</h3>
        <ul className="space-y-4 mb-8">
          {consultingServices.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloud7.png" alt="VirtuSwift Cloud Strategy Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
        {/* Centered Button Below the Two-Column Layout */}
        <div className="flex justify-center mt-8">
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book a Cloud Strategy Session</Link>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 w-full md:pr-8">
            <div className="bg-white rounded-xl shadow p-8">
              <h2 className="text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4] text-3xl" /> The VirtuSwift Advantage</h2>
              <p className="text-lg text-gray-700 mb-6">Cloud isn’t just about technology—it’s about transforming how your business operates. With VirtuSwift, You Achieve:</p>
              <ul className="space-y-4 mb-0">
          {advantageList.map((a, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
              <FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] mt-1 text-xl" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloud8.png" alt="VirtuSwift Advantage Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
        {/* Centered Button Below the Two-Column Layout */}
        <div className="flex justify-center mt-8">
          <span className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">Let’s Think Strategically. Let’s Act Cloud-First.</span>
        </div>
        <div className="text-center mt-4">
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Start Your Cloud Transformation</Link>
        </div>
      </div>

      {/* Ready to Unlock Cloud as a Business Enabler? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 w-full md:pr-8">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Ready to Unlock Cloud as a Business Enabler?</h2>
          <p className="text-xl text-gray-600 mb-6">VirtuSwift helps you design and execute a future-ready cloud blueprint built for growth, speed, and innovation.</p>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule a Cloud Strategy Call</Link>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloud9.png" alt="Cloud Business Enabler" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '250px' }} />
          </div>
        </div>
      </div>

      {/* Digital Transformation Suite */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Explore Our Full Digital Transformation Suite</h2>
        <p className="text-xl text-gray-600 mb-6">Beyond cloud, VirtuSwift helps organizations modernize, automate, and monetize across every layer of the digital enterprise.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
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
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Ready to Reimagine Your Digital Future?</h2>
        <p className="text-xl text-gray-600 mb-6">Let’s build a smarter, faster, more connected business with the power of cloud and data.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/cloud4.png" alt="VirtuSwift Digital Transformation" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book Your Free Cloud & Transformation Consultation →</Link>
      </div>
    </div>
  );
} 