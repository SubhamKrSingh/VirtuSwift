import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCheckCircle, faRocket, faLightbulb, faDatabase, faLock, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const infraServices = [
  'End-to-End Cloud Environment Setup (AWS, Azure, GCP)',
  'Virtual Machines, Kubernetes, Serverless & Containers',
  'CI/CD Pipeline Implementation & Automation',
  'Load Balancing, Autoscaling & Availability Zones',
  'Cloud Networking (VPC, VPN, DNS, Subnets)',
  'Backup, Disaster Recovery & Monitoring Setup',
  'Ongoing Performance Optimization & Cost Control',
];

const advantageList = [
  '99.99% Uptime Architectures',
  'Infrastructure as Code (IaC) for Easy Reproducibility',
  'Proactive Monitoring & Alerting',
  'DevOps-Ready Environments',
  'Cost-Efficient, Right-Sized Deployments',
  'Seamless Scalability for Sudden Growth',
];

const suite = [
  {
    icon: faLightbulb,
    title: 'Cloud Strategy and Consulting',
    desc: 'Get a clear cloud vision and execution roadmap tailored to your business outcomes.'
  },
  {
    icon: faDatabase,
    title: 'Data Warehousing and Integration',
    desc: 'Deploy cloud-native warehouses and data lakes that power analytics and insight.'
  },
  {
    icon: faCloud,
    title: 'Cloud Migration and Integration',
    desc: 'Migrate apps and workloads without downtime or risk. We handle the full stack.'
  },
  {
    icon: faLock,
    title: 'Cloud Security and Compliance',
    desc: 'Protect infrastructure, data, and workloads with hardened security frameworks.'
  },
  {
    icon: faChartBar,
    title: 'Data Monetization Strategies',
    desc: 'Build scalable APIs and services to turn infrastructure-backed data into revenue.'
  },
  {
    icon: faCloud,
    title: 'Internet of Things (IoT) Solutions',
    desc: 'Manage cloud-connected devices, edge data, and IoT apps in a centralized stack.'
  },
  {
    icon: faChartBar,
    title: 'Data-Driven Decision Making',
    desc: 'Connect infrastructure to intelligence—enable cloud-native analytics and dashboards.'
  },
];

export default function CloudInfrastructureSetupManagement() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[340px] flex items-center justify-center bg-cover bg-center mb-16" style={{ backgroundImage: 'url(/assets/cloud10.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Build Resilient, Scalable Cloud Foundations</h1>
            <p className="text-xl md:text-2xl mb-6 font-medium drop-shadow">VirtuSwift sets up, optimizes, and manages secure cloud infrastructures that fuel agility, innovation, and uptime across your enterprise.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-xl font-bold">Launch Your Cloud Foundation</Link>
          </div>
        </div>
      </section>

      {/* Is Your Infrastructure Ready for Tomorrow’s Demands? */}
      <section className="py-16 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-3xl" /> Is Your Infrastructure Ready for Tomorrow’s Demands?</h2>
                <p className="text-lg text-gray-700 mb-6">Cloud isn’t just about hosting—it’s about future-proofing your business.<br/>Whether you’re launching a new product, scaling globally, or modernizing legacy systems, VirtuSwift helps you architect and manage cloud environments that are elastic, secure, and cost-effective across AWS, Azure, and Google Cloud.</p>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloud11.png" alt="VirtuSwift Infrastructure Readiness" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2 justify-center md:justify-start"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] text-3xl" /> What We Deliver</h2>
                <h3 className="text-2xl font-semibold text-[#3a3dc4] mb-4">Our Cloud Infrastructure Services Include:</h3>
          <ul className="space-y-4 mb-8">
            {infraServices.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#f05a28] mt-1 text-xl" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
                <div className="text-center md:text-left mt-8">
                  <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-xl">Build on Rock-Solid Cloud Infrastructure</Link>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloud12.jpg" alt="VirtuSwift Cloud Infrastructure Delivery" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The VirtuSwift Advantage */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2 justify-center md:justify-start"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4] text-3xl" /> The VirtuSwift Advantage</h2>
                <p className="text-lg text-gray-700 mb-6 text-center md:text-left">Why Businesses Trust Us with Their Cloud Backbone:</p>
          <ul className="space-y-4 mb-8">
            {advantageList.map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800 text-base">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#f05a28] mt-1 text-xl" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
                <div className="text-center md:text-left mt-8">
                  <span className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-lg font-semibold shadow-lg text-xl">Infrastructure Built for Speed, Stability, and Scale →</span>
                </div>
              </div>
              {/* Right: Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="/assets/cloud8.png" alt="VirtuSwift Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Modernize Your Cloud Stack? */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Modernize Your Cloud Stack?</h2>
          <p className="text-lg text-gray-600 mb-6">From design to ongoing optimization, VirtuSwift ensures your cloud works for your business—not the other way around.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloud13.png" alt="VirtuSwift Modernize Cloud" className="w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxWidth: '110%', height: 'auto', maxHeight: '360px' }} />
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-xl">Schedule Your Cloud Architecture Session</Link>
          </div>
        </div>
      </section>

      {/* Digital Transformation Suite */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Explore More from VirtuSwift’s Digital Transformation Suite</h2>
          <p className="text-lg text-gray-600 mb-6">We unify strategy, infrastructure, and analytics into a future-ready digital core.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#232584] to-[#1c1c38] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Future-Proof Your Cloud Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Get the infrastructure agility, reliability, and performance your enterprise demands.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] hover:bg-[#e04d1d] text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition text-xl">Book Your Free Consultation →</Link>
        </div>
      </section>

      {/* Intelligent Cloud Hosting Services Section */}
      <section className="bg-white py-16 px-4 md:px-0 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="inline-block text-3xl mb-2"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4]" /></span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Smarter Hosting for High-Performance Digital Operations</h2>
            <p className="text-lg text-gray-700 mb-4">VirtuSwift delivers intelligent, automated, and scalable cloud hosting solutions that optimize cost, performance, and security across your applications and workloads.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloud7.png" alt="VirtuSwift Smarter Hosting" className="max-w-md w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Deploy Smarter. Scale Faster.</Link>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faCloud} /> Why Intelligent Cloud Hosting?</h3>
            <p className="text-gray-700 mb-4">Traditional hosting slows down digital transformation. VirtuSwift’s intelligent cloud hosting platform combines automation, observability, and cost governance to deliver continuous performance with minimal manual intervention.<br/>Whether you're running SAP workloads, web apps, or enterprise APIs, we ensure your infrastructure adapts in real-time to demand, threats, and change.</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} /> Our Cloud Hosting Services Include:</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li><b>Fully Managed Hosting (AWS, Azure, GCP):</b> End-to-end cloud infrastructure management with automated provisioning, updates, and backups.</li>
              <li><b>AI-Powered Resource Scaling:</b> Use predictive analytics and auto-scaling to match resources to workload demand—without overpaying.</li>
              <li><b>High Availability & Disaster Recovery:</b> Multi-zone, multi-region hosting architectures with real-time failover and backup strategies.</li>
              <li><b>Cloud Cost Optimization & Billing Insights:</b> Automated rightsizing, reserved instance planning, and budget alerts with centralized cost dashboards.</li>
              <li><b>Monitoring, Logging & Observability:</b> Integrated telemetry, health checks, and proactive alerting for every component of your stack.</li>
              <li><b>DevOps Enablement & CI/CD Integration:</b> Support for GitOps, container orchestration (Kubernetes), and automated build/release pipelines.</li>
              <li><b>Security-First Hosting Architecture:</b> Zero-trust networking, identity and access control, and compliance (HIPAA, SOC2, ISO) baked in.</li>
            </ol>
            <div className="text-center mt-6">
              <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Get a Hosting Assessment Report</Link>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faChartBar} /> The VirtuSwift Advantage</h3>
            <p className="mb-2 font-medium">What Makes Our Hosting Intelligent?</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>AI-driven scaling decisions</li>
              <li>Cost-aware provisioning</li>
              <li>Security automation & self-healing infra</li>
              <li>Observability dashboards pre-integrated</li>
              <li>Infrastructure as Code (IaC) support</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Hosting Architectures We Deliver</h3>
            <table className="w-full text-left mb-4 border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Model</th>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Single Cloud (AWS/Azure/GCP)</td>
                  <td className="p-2 border">Fully managed in a single cloud environment</td>
                  <td className="p-2 border">Mid to large enterprises</td>
                </tr>
                <tr>
                  <td className="p-2 border">Hybrid Cloud</td>
                  <td className="p-2 border">On-premise + cloud with seamless integration</td>
                  <td className="p-2 border">Regulated industries</td>
                </tr>
                <tr>
                  <td className="p-2 border">Multi-Cloud</td>
                  <td className="p-2 border">Spread workloads across providers for risk mitigation</td>
                  <td className="p-2 border">Large distributed businesses</td>
                </tr>
                <tr>
                  <td className="p-2 border">Edge Hosting</td>
                  <td className="p-2 border">Deliver applications close to users with edge nodes</td>
                  <td className="p-2 border">Real-time, latency-sensitive apps</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Enterprise-Grade Hosting, Ready Out of the Box</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Secure VPC & Subnet Configuration</li>
              <li>SSL Termination & Load Balancers</li>
              <li>Identity Federation & MFA Policies</li>
              <li>Centralized Logging & Audit Trails</li>
              <li>Backup Snapshots & Recovery RTO &lt; 5 min</li>
              <li>Auto Healing & Auto Scaling Groups</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Your Hosting Journey with VirtuSwift</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li>Assessment & Planning: We analyze your current infrastructure and define your ideal hosting architecture.</li>
              <li>Design & Provision: We provision your cloud environment using automation and best practices.</li>
              <li>Migrate & Optimize: We migrate your apps, apply cost tuning, and enable observability.</li>
              <li>Manage & Scale: We monitor, patch, secure, and scale your systems—24/7.</li>
            </ol>
          </div>
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Make Your Hosting Smarter?</h3>
            <p className="text-lg text-gray-600 mb-4">Let VirtuSwift take your digital operations to the next level.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloud4.png" alt="VirtuSwift Hosting Smarter" className="max-w-md w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '320px' }} />
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book Your Cloud Hosting Consultation →</Link>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Related Services</h3>
            <ul className="space-y-3 text-gray-800">
              <li><span className="font-bold">☁️ Cloud Migration and Integration</span><br/>Move your workloads to the cloud with zero disruption and maximum ROI.</li>
              <li><span className="font-bold">🔐 Cloud Security and Compliance</span><br/>Protect your hosted apps with world-class security and real-time threat detection.</li>
              <li><span className="font-bold">🚀 DevOps & Automation Services</span><br/>Automate deployment pipelines, infrastructure changes, and monitoring.</li>
              <li><span className="font-bold">📊 Data-Driven Decision Making</span><br/>Leverage cloud analytics and telemetry to continuously improve hosted workloads.</li>
              <li><span className="font-bold">🧠 AI Infrastructure Management</span><br/>Embed ML-based resource planning and autoscaling into your hosting environments.</li>
            </ul>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <span className="block">Host smarter with VirtuSwift. Intelligent cloud hosting services with AI-driven scaling, security-first architecture, and 24/7 managed support.</span>
          </div>
        </div>
      </section>
    </div>
  );
} 