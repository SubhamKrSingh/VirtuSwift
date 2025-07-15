import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCogs, faCheckCircle, faDatabase, faRocket, faChartBar } from '@fortawesome/free-solid-svg-icons';

export default function CloudMigrationAndIntegration() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/cloudmigration4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-[#232584]/80 z-0" />
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Cloud Migration and Integration</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">Move workloads, apps, and databases to the cloud without friction. VirtuSwift modernizes your infrastructure while protecting uptime and performance.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg mb-4">Start Your Cloud Migration</Link>
        </div>
      </section>

      {/* Why Cloud Migration & Integration? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Why Cloud Migration & Integration?</h2>
            <p className="text-lg text-gray-700 mb-6">Cloud migration is more than just moving data—it's about unlocking agility, scalability, and cost efficiency. VirtuSwift ensures a seamless transition to the cloud, minimizing downtime and maximizing business value.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-xl" /> End-to-End Cloud Migration Planning</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#008BCF] text-xl" /> Application & Database Modernization</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faDatabase} className="text-[#f05a28] text-xl" /> Data Integration & Synchronization</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Zero-Downtime Cutover & Failover</li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloudmigration2.png" alt="Cloud Migration Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">Our Cloud Migration Services</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-xl" /> Multi-Cloud & Hybrid Cloud Deployments</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#008BCF] text-xl" /> Automated Data & App Migration Tools</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#f05a28] text-xl" /> Performance Tuning & Optimization</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Post-Migration Support & Monitoring</li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/cloudmigration3.png" alt="Cloud Migration Services" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Why Choose VirtuSwift? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2">Why Choose VirtuSwift?</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-xl" /> Certified Cloud Migration Experts</li>
            <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Proven Zero-Downtime Migrations</li>
            <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#f05a28] text-xl" /> Fast, Secure, and Cost-Effective</li>
          </ul>
          <div className="flex justify-center mb-8">
            <img src="/assets/cloudmigration5.png" alt="VirtuSwift Cloud Migration Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
          <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Get a Cloud Migration Consultation</Link>
        </div>
      </div>
    </div>
  );
} 