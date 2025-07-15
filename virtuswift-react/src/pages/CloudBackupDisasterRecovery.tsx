import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faSync, faShieldAlt, faCloud, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: faDatabase,
    title: 'Continuous Backup',
    desc: 'Your data is backed up across regions in real time for maximum protection.'
  },
  {
    icon: faSync,
    title: 'Near-Zero RTOs',
    desc: 'Instant recovery with minimal downtime, so your business never misses a beat.'
  },
  {
    icon: faShieldAlt,
    title: 'End-to-End Security',
    desc: 'Encrypted backups and secure recovery processes keep your data safe.'
  },
  {
    icon: faCloud,
    title: 'Disaster Recovery as a Service',
    desc: 'Fully managed DRaaS for peace of mind and business continuity.'
  },
];

const process = [
  {
    step: 1,
    title: 'Assessment & Planning',
    desc: 'We evaluate your data landscape and design a backup and DR strategy.'
  },
  {
    step: 2,
    title: 'Implementation',
    desc: 'We set up automated, secure backups and configure DR processes.'
  },
  {
    step: 3,
    title: 'Testing & Monitoring',
    desc: 'Regular DR drills and continuous monitoring ensure readiness.'
  },
  {
    step: 4,
    title: 'Rapid Recovery',
    desc: 'Instant failover and data restoration in the event of a disaster.'
  },
];

export default function CloudBackupDisasterRecovery() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center bg-cover bg-center mb-16" style={{ backgroundImage: 'url(/assets/cloudbackup2.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Cloud Backup & Disaster Recovery (DRaaS)</h1>
            <p className="text-lg md:text-xl mb-6">Can your business bounce back from a failure — instantly? With VirtuSwift DRaaS, your data is always protected and recoverable, no matter what.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold">Protect My Data →</Link>
          </div>
        </div>
      </section>
      {/* Why VirtuSwift for Backup & DR? */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why VirtuSwift for Backup & DR?</h2>
                <ul className="space-y-4 mb-8 list-disc pl-6">
                  <li className="text-gray-800 text-base"><strong>Continuous Backup</strong><br/>Your data is backed up across regions in real time for maximum protection.</li>
                  <li className="text-gray-800 text-base"><strong>Near-Zero RTOs</strong><br/>Instant recovery with minimal downtime, so your business never misses a beat.</li>
                  <li className="text-gray-800 text-base"><strong>End-to-End Security</strong><br/>Encrypted backups and secure recovery processes keep your data safe.</li>
                  <li className="text-gray-800 text-base"><strong>Disaster Recovery as a Service</strong><br/>Fully managed DRaaS for peace of mind and business continuity.</li>
                </ul>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloudbackup2.png" alt="VirtuSwift Backup & DR" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10 border-l-4 border-[#3a3dc4]">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our DR Process</h2>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {process.map(s => (
              <div key={s.title} className="flex-1 flex flex-col items-center text-center bg-gray-50 rounded-lg p-6 shadow relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3a3dc4] text-white text-2xl font-bold mb-2">{s.step}</div>
                <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Ready for Resilient Cloud Backup Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Ready for Resilient Cloud Backup?</h2>
            <p className="text-lg text-gray-700 mb-6">Let VirtuSwift protect your business with enterprise-grade backup and disaster recovery solutions.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloudbackup3.png" alt="Cloud Backup Resilience" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
            </div>
            <a href="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Get Protected</a>
          </div>
        </section>
      </div>
    </div>
  );
} 