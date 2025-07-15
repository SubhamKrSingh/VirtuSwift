import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faCogs, faCheckCircle, faCloud, faRocket, faLock, faChartLine, faServer, faCodeBranch, faTools, faRedo, faUndo, faKey, faSearch, faBox, faChartBar, faDatabase, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function CICDPipelines() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/devops.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3"><FontAwesomeIcon icon={faCogs} className="text-[#f05a28]" /> Accelerate Software Delivery with Modern CI/CD Pipelines</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift empowers your teams to move from code to production faster and safer—with fully automated CI/CD workflows that improve velocity, reduce risks, and ensure continuous innovation.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg flex items-center gap-2"><FontAwesomeIcon icon={faRocket} /> Enable Your CI/CD Journey</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift for CI/CD? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4]" /> Why Choose VirtuSwift for CI/CD?</h2>
            <p className="text-lg text-gray-700 mb-6">We help you deploy better, faster, and smarter.</p>
            <p className="text-gray-600 mb-6">Whether you're a startup scaling fast or an enterprise modernizing delivery, VirtuSwift builds resilient, secure CI/CD pipelines tailored to your toolset and goals.</p>
            <div className="bg-white rounded-xl shadow p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">Our CI/CD Offerings Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faTools} className="text-[#3a3dc4]" /> Pipeline Architecture & Orchestration (Jenkins, GitLab, GitHub Actions, etc.)</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faRedo} className="text-[#008BCF]" /> Automated Build, Test, and Deployment</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faUndo} className="text-[#f05a28]" /> Rollback Strategies and Deployment Governance</li>
                <li className="flex items-center gap-3 text-gray-800"><FontAwesomeIcon icon={faKey} className="text-[#008BCF]" /> Integrated Quality Gates, Secrets, and Access Control</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg flex items-center gap-2"><FontAwesomeIcon icon={faPhone} /> Request a CI/CD Pipeline Assessment</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/devops1.png" alt="CI/CD Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faChartLine} className="text-[#3a3dc4]" /> The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">Delivery without delays. Releases without regressions.</p>
            <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">You Benefit From:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] text-xl" /> Faster Time to Market</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faSearch} className="text-[#008BCF] text-xl" /> Automated Quality Assurance</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faBox} className="text-[#f05a28] text-xl" /> Zero-Downtime Deployments</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRedo} className="text-[#008BCF] text-xl" /> Higher Release Frequency</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#3a3dc4] text-xl" /> Reduced Errors and Failures</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Streamline Your Development Lifecycle →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/devops2.png" alt="VirtuSwift Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* More from VirtuSwift's DevOps Solutions */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">More from VirtuSwift's DevOps Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: faDatabase, title: 'Data Warehousing and Integration', desc: 'Integrate DevOps principles into your data stack with automated provisioning, version-controlled pipelines, and CI/CD for data models.' },
            { icon: faCogs, title: 'Application and Database Management', desc: 'Deliver high availability with auto-scaling, health checks, and infrastructure-as-code for database and app clusters.' },
            { icon: faLock, title: 'Cloud Security and Compliance', desc: 'Secure every release with integrated DevSecOps: static code analysis, vulnerability scans, access policies, and audit-ready pipelines.' },
            { icon: faChartBar, title: 'Data Monetization Strategies', desc: 'Accelerate experimentation. Use DevOps to test, refine, and deploy monetization features and products quickly and reliably.' },
            { icon: faCloud, title: 'Cloud Migration and Integration', desc: 'Use containerization, Kubernetes, and continuous delivery pipelines to simplify and accelerate your shift to the cloud.' },
            { icon: faSync, title: 'IoT Solutions at Scale', desc: 'Enable CI/CD at the edge with over-the-air updates, device monitoring, and DevOps pipelines optimized for IoT systems.' },
            { icon: faChartLine, title: 'Data-Driven Decision Making', desc: 'Gain full observability into your DevOps lifecycle. Our dashboards track code velocity, deployment frequency, MTTR, and more.' },
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
        <img src="/assets/devops4.png" alt="CI/CD Journey Illustration" className="mx-auto mb-6 max-w-xs w-full h-auto object-contain" style={{ maxWidth: '450px' }} />
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready to Supercharge Your DevOps Strategy?</h2>
        <p className="text-lg text-gray-600 mb-6">Let VirtuSwift build intelligent CI/CD systems that fuel agility, uptime, and user satisfaction.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request Your DevOps Assessment →</Link>
        </div>
      </div>
    </div>
  );
} 