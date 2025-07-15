import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBell, faBolt, faSync, faCheckCircle, faCloud, faRocket, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: faChartLine,
    title: '24/7 Monitoring',
    desc: 'Continuous performance monitoring and predictive alerts for your cloud environment.'
  },
  {
    icon: faBolt,
    title: 'Proactive Optimization',
    desc: 'Automated tuning and resource allocation for maximum efficiency.'
  },
  {
    icon: faBell,
    title: 'Predictive Alerts',
    desc: 'Get notified before issues impact your business.'
  },
  {
    icon: faSync,
    title: 'Cost Optimization',
    desc: 'Reduce spend with intelligent workload placement and usage analysis.'
  },
];

const process = [
  {
    step: 1,
    title: 'Setup & Baseline',
    desc: 'We configure monitoring tools and establish performance baselines.'
  },
  {
    step: 2,
    title: 'Continuous Monitoring',
    desc: 'Real-time tracking of metrics, logs, and user experience.'
  },
  {
    step: 3,
    title: 'Alerting & Response',
    desc: 'Automated alerts and rapid response to anomalies.'
  },
  {
    step: 4,
    title: 'Optimization & Reporting',
    desc: 'Ongoing tuning and detailed reporting for continuous improvement.'
  },
];

export default function CloudMonitoringPerformanceOptimization() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center bg-cover bg-center mb-16" style={{ backgroundImage: 'url(/assets/cloudmonitoring1.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Cloud Monitoring & Performance Optimization</h1>
            <p className="text-lg md:text-xl mb-6">What if your cloud could tune itself? VirtuSwift delivers 24/7 monitoring, predictive alerts, and proactive optimization for peak performance and cost savings.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold">Optimize My Cloud →</Link>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faChartLine} className="text-[#3a3dc4]" /> Why VirtuSwift for Cloud Monitoring?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(f => (
              <li key={f.title} className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
                <FontAwesomeIcon icon={f.icon} className="text-2xl text-[#3a3dc4] mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-gray-800">{f.title}</h4>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-10 border-l-4 border-[#3a3dc4]">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Monitoring Process</h2>
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
        <div className="text-center mt-12">
          <section className="py-12 bg-gradient-to-r from-[#232584] to-[#1c1c38] text-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready for Proactive Cloud Optimization?</h2>
            <p className="text-lg text-gray-200 mb-6">Let VirtuSwift keep your cloud environment efficient, secure, and cost-effective — 24/7.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition transform duration-200">Get Started</Link>
          </section>
        </div>
      </div>
      {/* Intelligent Cloud Hosting Services Section */}
      <section className="bg-white py-16 px-4 md:px-0 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="inline-block text-3xl mb-2"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4]" /></span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Smarter Hosting for High-Performance Digital Operations</h2>
            <p className="text-lg text-gray-700 mb-4">VirtuSwift delivers intelligent, automated, and scalable cloud hosting solutions that optimize cost, performance, and security across your applications and workloads.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloudmonitoring2.png" alt="Cloud Monitoring Performance" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition transform duration-200">Deploy Smarter. Scale Faster.</Link>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faCloud} /> Why Intelligent Cloud Hosting?</h3>
            <p className="text-gray-700 mb-4">Traditional hosting slows down digital transformation. VirtuSwift’s intelligent cloud hosting platform combines automation, observability, and cost governance to deliver continuous performance with minimal manual intervention.<br/>Whether you're running SAP workloads, web apps, or enterprise APIs, we ensure your infrastructure adapts in real-time to demand, threats, and change.</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} /> Our Cloud Hosting Services Include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li><b>Fully Managed Hosting (AWS, Azure, GCP):</b> End-to-end cloud infrastructure management with automated provisioning, updates, and backups.</li>
              <li><b>AI-Powered Resource Scaling:</b> Use predictive analytics and auto-scaling to match resources to workload demand—without overpaying.</li>
              <li><b>High Availability & Disaster Recovery:</b> Multi-zone, multi-region hosting architectures with real-time failover and backup strategies.</li>
              <li><b>Cloud Cost Optimization & Billing Insights:</b> Automated rightsizing, reserved instance planning, and budget alerts with centralized cost dashboards.</li>
              <li><b>Monitoring, Logging & Observability:</b> Integrated telemetry, health checks, and proactive alerting for every component of your stack.</li>
              <li><b>DevOps Enablement & CI/CD Integration:</b> Support for GitOps, container orchestration (Kubernetes), and automated build/release pipelines.</li>
              <li><b>Security-First Hosting Architecture:</b> Zero-trust networking, identity and access control, and compliance (HIPAA, SOC2, ISO) baked in.</li>
            </ul>
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
              <img src="/assets/cloudmonitoring3.png" alt="Smarter Hosting" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
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
      {/* ManagecoreiQ+ on RISE with SAP Section */}
      <section className="bg-white py-16 px-4 md:px-0 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="inline-block text-3xl mb-2"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4]" /></span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Seamless, Proactive SAP Landscape Management — Powered by ManagecoreiQ+ on RISE with SAP</h2>
            <p className="text-lg text-gray-700 mb-4">VirtuSwift combines the power of SAP RISE with the automation of ManagecoreiQ+ to provide intelligent, secure, and always-on SAP system monitoring, management, and optimization.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloudmonitoring4.png" alt="SAP Landscape Management" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Modernize Your SAP Operations</Link>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">What Is ManagecoreiQ+ on RISE with SAP?</h3>
            <p className="text-gray-700 mb-4">ManagecoreiQ+ is an intelligent automation and monitoring platform designed specifically for managing SAP workloads in the cloud. When deployed with RISE with SAP, it delivers complete visibility, predictive performance management, and hands-free system operations.<br/>At VirtuSwift, we implement and manage ManagecoreiQ+ to provide customers with real-time insights, self-healing capabilities, and proactive support across their SAP S/4HANA and hybrid environments.</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Why Choose ManagecoreiQ+ with RISE?</h3>
            <p className="mb-2">RISE simplifies SAP transformation. ManagecoreiQ+ makes it resilient, intelligent, and future-ready.</p>
            <p className="mb-2 font-medium">Our Services Include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Complete setup of ManagecoreiQ+ with RISE on hyperscalers</li>
              <li>Real-time SAP health monitoring (24/7)</li>
              <li>Predictive issue detection and auto-remediation</li>
              <li>Automated system refreshes and patching</li>
              <li>Transparent dashboards with SLA compliance</li>
              <li>SAP Basis & OS monitoring from a single pane</li>
              <li>Built-in support for hybrid, multi-cloud SAP environments</li>
            </ul>
            <div className="text-center mt-6">
              <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">See a Live Monitoring Demo</Link>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">VirtuSwift’s Capabilities</h3>
            <p className="mb-2 font-medium">What You Get with Our ManagecoreiQ+ Integration</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Fully managed SAP infrastructure on RISE</li>
              <li>Proactive alerts and resolution (before downtime hits)</li>
              <li>Cost control and optimization through usage analytics</li>
              <li>SLA-based ticketing, audit-ready logs, and compliance visibility</li>
              <li>Reduced Basis admin overhead with automation</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">The Intelligent SAP Operations Stack</h3>
            <table className="w-full text-left mb-4 border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Component</th>
                  <th className="p-2 border">Function</th>
                  <th className="p-2 border">Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">ManagecoreiQ+ Agent</td>
                  <td className="p-2 border">Smart telemetry on SAP health & system KPIs</td>
                  <td className="p-2 border">Always-on visibility</td>
                </tr>
                <tr>
                  <td className="p-2 border">RISE with SAP</td>
                  <td className="p-2 border">Cloud-managed SAP ecosystem</td>
                  <td className="p-2 border">Unified modernization</td>
                </tr>
                <tr>
                  <td className="p-2 border">VirtuSwift Automation</td>
                  <td className="p-2 border">Custom scripts, remediation flows, auto-scaling</td>
                  <td className="p-2 border">Faster incident resolution</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Security & Governance You Can Trust</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Compliance with ISO, SOC2, and GDPR</li>
              <li>Role-based access and identity federation</li>
              <li>Encrypted log transport and retention</li>
              <li>Integration with hyperscaler security tools (AWS/Azure/GCP)</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">The VirtuSwift Advantage</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>24x7 SAP landscape monitoring</li>
              <li>Predictive alerts with real-time dashboards</li>
              <li>Lowered TCO through automation</li>
              <li>Dedicated SAP-certified consultants and Basis experts</li>
              <li>Direct escalation to SAP via RISE SLA bridge</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Your Path with VirtuSwift + ManagecoreiQ+</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li>Assessment & Onboarding: We audit your SAP environment and align goals with RISE capabilities.</li>
              <li>ManagecoreiQ+ Enablement: Install, configure, and tailor the ManagecoreiQ+ platform to your workloads.</li>
              <li>Monitoring & Automation Setup: Define KPIs, SLAs, alert triggers, and remediation scripts.</li>
              <li>Ongoing Optimization & Reporting: Continuously improve performance and reduce downtime risk.</li>
            </ol>
          </div>
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Take SAP Operations to the Next Level?</h3>
            <p className="text-lg text-gray-600 mb-4">Let VirtuSwift help you maximize your investment in RISE with SAP using ManagecoreiQ+.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloudmonitoring5.png" alt="Take SAP Operations to the Next Level" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition transform duration-200">Schedule a Free SAP Landscape Review →</Link>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Related SAP Services from VirtuSwift</h3>
            <ul className="space-y-3 text-gray-800">
              <li><span className="font-bold">🚀 RISE with SAP Modernization Services</span><br/>Streamline and migrate legacy SAP systems to RISE with full cloud readiness.</li>
              <li><span className="font-bold">🛡️ SAP Security and Compliance Automation</span><br/>Protect sensitive data and ensure compliance in SAP environments.</li>
              <li><span className="font-bold">🔄 SAP Basis Managed Services</span><br/>Offload daily operations to SAP-certified Basis experts with SLA-backed support.</li>
              <li><span className="font-bold">📊 SAP Analytics & Reporting Optimization</span><br/>Unlock deeper business insights with integrated reporting tools.</li>
            </ul>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <span className="block">Manage your RISE with SAP landscape proactively with ManagecoreiQ+ and VirtuSwift. Enable predictive monitoring, automation, and zero-downtime SAP operations.</span>
          </div>
        </div>
      </section>
    </div>
  );
} 