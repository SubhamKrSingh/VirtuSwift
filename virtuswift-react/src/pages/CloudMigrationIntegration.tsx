import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCheckCircle, faRocket, faCogs, faLock, faChartBar, faLightbulb, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function CloudMigrationIntegration() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] flex items-center justify-center bg-cover bg-center mb-16" style={{ backgroundImage: 'url(/assets/cloudmigration.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Seamlessly Transition to the Cloud</h1>
            <p className="text-lg md:text-xl mb-6">VirtuSwift ensures fast, secure, and disruption-free cloud migrations—rearchitecting your IT landscape for agility, performance, and future growth.</p>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg hover:bg-[#f05a28] transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold">Start Your Cloud Migration Journey</Link>
          </div>
        </div>
      </section>

      {/* Why Cloud Migration? */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Cloud Migration?</h2>
                <p className="text-gray-700 mb-6">Modern business demands flexibility, speed, and scale.<br/>Migrating to the cloud isn’t just about moving servers—it’s about transforming how your organization operates. Whether you’re moving from legacy infrastructure or optimizing hybrid environments, VirtuSwift helps you modernize with confidence and clarity.</p>
              </div>
              {/* Right: Image */}
              <div className="flex-1 w-full flex justify-center">
                <img src="/assets/cloudmigration1.png" alt="Why Cloud Migration" className="max-w-lg w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '325px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cloud Migration & Integration Services */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Cloud Migration & Integration Services</h2>
                <p className="text-gray-700 mb-6">We offer end-to-end cloud transformation:</p>
                <ul className="space-y-4 mb-8 list-disc pl-6">
                  <li className="text-gray-800 text-base">Cloud Migration Strategy & Planning</li>
                  <li className="text-gray-800 text-base">Rehost, Refactor, Replatform & Rebuild Models</li>
                  <li className="text-gray-800 text-base">Application and Database Migration</li>
                  <li className="text-gray-800 text-base">Hybrid and Multi-Cloud Integrations</li>
                  <li className="text-gray-800 text-base">CI/CD Pipeline Setup and DevOps Alignment</li>
                  <li className="text-gray-800 text-base">API Management and Legacy System Integration</li>
                  <li className="text-gray-800 text-base">Post-Migration Testing and Optimization</li>
                  <li className="text-gray-800 text-base">User Training and Change Management</li>
                </ul>
              </div>
              {/* Right: Image */}
              <div className="flex-1 w-full flex justify-center">
                <img src="/assets/cloudmigration2.png" alt="Cloud Migration & Integration Services" className="max-w-lg w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '325px' }} />
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
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4]" /> The VirtuSwift Advantage</h2>
          <p className="text-gray-700 mb-6">Why enterprises trust us to move mission-critical workloads:</p>
                <ul className="space-y-4 mb-8 list-disc pl-6">
            <li>100% Downtime-Minimized Approach</li>
            <li>Security-First Design with IAM and Data Encryption</li>
            <li>Industry-Specific Compliance Frameworks (GDPR, HIPAA, etc.)</li>
            <li>Deep Expertise in AWS, Azure, and GCP</li>
            <li>Cross-System Integration with APIs and Microservices</li>
            <li>Real-Time Monitoring and Rollback Protocols</li>
          </ul>
                <div className="text-center md:text-left mt-8">
            <span className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg text-lg">Cloud Done Right. At Scale. Without Surprises →</span>
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

      {/* SAP S/4HANA Migration Services Section */}
      <section className="bg-white py-16 px-4 md:px-0 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <span className="inline-block text-3xl mb-2"><FontAwesomeIcon icon={faLightbulb} className="text-[#3a3dc4]" /></span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Move to SAP S/4HANA with Confidence</h2>
            <p className="text-lg text-gray-700 mb-4">VirtuSwift accelerates your transition to SAP S/4HANA with minimal disruption and maximum business value. From system conversion to greenfield deployments—we deliver smart, scalable migrations aligned to your goals.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloudmigration3.png" alt="SAP S/4HANA Migration" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Plan Your S/4HANA Move</Link>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faCloud} /> Why Migrate to SAP S/4HANA Now?</h3>
            <p className="text-gray-700 mb-4">SAP ECC is nearing end-of-life. The time to act is now.<br/>SAP S/4HANA offers a future-ready, intelligent ERP platform built on the in-memory HANA database. Whether you want to improve performance, simplify your IT landscape, or unlock advanced analytics—VirtuSwift helps you migrate with precision and speed.</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} /> Our SAP S/4HANA Migration Services</h3>
            <p className="mb-2 font-medium">We Offer End-to-End Migration Paths:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>System Conversion (Brownfield Approach) – Upgrade your existing ECC to S/4HANA</li>
              <li>New Implementation (Greenfield) – Fresh, clean setup of S/4HANA aligned with best practices</li>
              <li>Selective Data Transition – Migrate relevant business data and processes only</li>
              <li>Landscape Transformation – Consolidate multiple SAP systems into one S/4HANA environment</li>
              <li>Readiness Assessment &amp; Business Case Development</li>
              <li>Data Migration, Validation &amp; Testing</li>
              <li>Post-Go-Live Hypercare Support</li>
            </ul>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloudmigration4.png" alt="SAP S/4HANA Migration Services" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
            </div>
            <div className="text-center mt-6">
              <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Request a Free Migration Assessment</Link>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faChartBar} /> The VirtuSwift Advantage</h3>
            <p className="mb-2 font-medium">Why Enterprises Choose Us for S/4HANA:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Deep SAP Domain Expertise across Industries</li>
              <li>Accelerated Timelines with SAP Activate Methodology</li>
              <li>Risk-Mitigation with Detailed Cutover Planning</li>
              <li>Data Integrity with ETL &amp; Validation Tools</li>
              <li>On-Premise, Private Cloud, or RISE with SAP Options</li>
              <li>Business Continuity with Zero Downtime Tools</li>
            </ul>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloudmigration5.png" alt="VirtuSwift S/4HANA Advantage" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
            </div>
            <div className="text-center mt-6">
              <span className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg text-lg">Transform with Speed. Operate with Confidence →</span>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Key Benefits of Migrating to S/4HANA</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Real-Time Reporting with Embedded Analytics</li>
              <li>Simplified Data Model &amp; Faster Transactions</li>
              <li>Intelligent Automation with AI/ML Extensions</li>
              <li>Seamless Integration with SAP BTP & Fiori</li>
              <li>Lower TCO with Cloud and Subscription Options</li>
              <li>Foundation for RISE with SAP, BTP, and Beyond</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Supporting Tools &amp; Accelerators</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>SAP Readiness Check Reports</li>
              <li>Custom Code Remediation Tools</li>
              <li>Data Cleansing and Archival Frameworks</li>
              <li>Test Automation and Regression Tools</li>
              <li>Change Management Playbooks</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Who We Work With</h3>
            <p className="mb-2">We support large enterprises, fast-scaling businesses, and public sector clients planning SAP modernization across:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Manufacturing</li>
              <li>Retail &amp; Consumer Goods</li>
              <li>Utilities &amp; Energy</li>
              <li>Automotive</li>
              <li>Healthcare</li>
              <li>Public Sector</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">S/4HANA Migration: Our Proven 5-Step Process</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li>Assess: Business impact, scope, cost estimation</li>
              <li>Plan: Migration approach, timeline, and readiness</li>
              <li>Prepare: Data, custom code, infrastructure setup</li>
              <li>Migrate: Execute technical migration and validations</li>
              <li>Optimize: Post-go-live support, analytics, and extensions</li>
            </ol>
          </div>
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Let’s Get Your SAP S/4HANA Migration on Track</h3>
            <p className="text-lg text-gray-600 mb-4">Book a personalized assessment session with our SAP team today.</p>
            <div className="flex justify-center mb-8">
              <img src="/assets/cloudmigration6.png" alt="SAP S/4HANA Migration on Track" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
            </div>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Start Your Migration Journey →</Link>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Related SAP Services from VirtuSwift</h3>
            <ul className="space-y-3 text-gray-800">
              <li><span className="font-bold">🚀 RISE with SAP Enablement</span><br/>Deploy SAP S/4HANA in a subscription model with managed services and business innovation in the cloud.</li>
              <li><span className="font-bold">⚙️ SAP System Modernization</span><br/>Upgrade legacy SAP modules, enhance UX with Fiori, and prepare your system for future extensibility.</li>
              <li><span className="font-bold">🔐 SAP Security &amp; Compliance</span><br/>Ensure role-based access, GRC integration, and ongoing compliance in your S/4HANA environment.</li>
              <li><span className="font-bold">📊 SAP Analytics Cloud Integration</span><br/>Embed real-time dashboards and planning workflows across S/4HANA for enterprise decision-making.</li>
              <li><span className="font-bold">🌐 SAP Business Technology Platform (BTP)</span><br/>Extend and innovate your SAP applications with low-code tools, APIs, and intelligent automation.</li>
            </ul>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            <span className="block">Migrate to SAP S/4HANA with VirtuSwift’s expert-led approach. Reduce risk, accelerate timelines, and unlock real-time intelligence with a seamless ERP transition.</span>
        </div>
      </div>
      </section>

      {/* Supported Cloud Environments */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faCogs} className="text-[#3a3dc4]" /> Supported Cloud Environments</h2>
                <ul className="space-y-2 mb-8 list-disc pl-6">
                  <li>Amazon Web Services (AWS)</li>
                  <li>Microsoft Azure</li>
                  <li>Google Cloud Platform (GCP)</li>
                  <li>Oracle Cloud Infrastructure (OCI)</li>
                  <li>Hybrid & Private Cloud (VMware, OpenStack, etc.)</li>
                </ul>
              </div>
              {/* Right: Image */}
              <div className="flex-1 w-full flex justify-center">
                <img src="/assets/cloudmulticloud2.png" alt="Supported Cloud Environments" className="max-w-lg w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '325px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Approaches We Support */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4]" /> Migration Approaches We Support</h2>
                <ul className="space-y-2 mb-8 list-disc pl-6">
                  <li>Lift & Shift (Rehosting with minimal changes)</li>
                  <li>Replatforming (Moving with slight optimization)</li>
                  <li>Refactoring (Modifying application architecture)</li>
                  <li>Rebuilding (Complete cloud-native redesign)</li>
                  <li>Hybrid Migration (Partial migration + on-prem coordination)</li>
                </ul>
              </div>
              {/* Right: Image */}
              <div className="flex-1 w-full flex justify-center">
                <img src="/assets/cloudmonitoring3.png" alt="Migration Approaches We Support" className="max-w-lg w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '325px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Built In */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
              {/* Left: Text Content */}
              <div className="flex-1 w-full md:pr-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faLock} className="text-[#3a3dc4]" /> Security & Compliance Built In</h2>
                <ul className="space-y-2 mb-8 list-disc pl-6">
                  <li>Secure identity and access management (IAM)</li>
                  <li>End-to-end data encryption</li>
                  <li>Regulatory compliance readiness (SOC 2, ISO, etc.)</li>
                  <li>Automated backup, rollback, and recovery policies</li>
                  <li>Monitoring tools for post-migration observability</li>
                </ul>
              </div>
              {/* Right: Image */}
              <div className="flex-1 w-full flex justify-center">
                <img src="/assets/cloudsecurity2.png" alt="Security & Compliance Built In" className="max-w-lg w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '325px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our 5-Step Migration Process */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2"><FontAwesomeIcon icon={faChartBar} className="text-[#3a3dc4]" /> Our 5-Step Migration Process</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-8">
            <li>Discovery & Assessment: Audit existing infrastructure, apps, and workflows.</li>
            <li>Migration Strategy Design: Define scope, cloud provider, budget, and compliance needs.</li>
            <li>Cloud Environment Setup: Configure network, IAM, security, and cloud services.</li>
            <li>Data & Application Migration: Execute secure data and workload migration.</li>
            <li>Testing, Go-Live & Optimization: Validate performance, address gaps, and enable scaling.</li>
          </ol>
        </div>
      </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Let’s Modernize Your Business in the Cloud</h2>
        <p className="text-lg text-gray-600 mb-6">From initial roadmap to full-stack cloud integration—VirtuSwift makes every step seamless.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/cloudmonitoring2.png" alt="Modernize Your Business in the Cloud" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book Your Free Cloud Assessment →</Link>
      </div>
        </div>
      </section>

      {/* Related Services You Might Need */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Related Services You Might Need</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
            <FontAwesomeIcon icon={faLightbulb} className="text-2xl text-[#3a3dc4] mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">Cloud Strategy & Consulting</h4>
              <p className="text-gray-600 text-sm">Design your future-state architecture and business-aligned cloud roadmap.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
            <FontAwesomeIcon icon={faDatabase} className="text-2xl text-[#3a3dc4] mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">Data Warehousing & Integration</h4>
              <p className="text-gray-600 text-sm">Build centralized cloud data lakes, pipelines, and analytics engines.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
            <FontAwesomeIcon icon={faLock} className="text-2xl text-[#3a3dc4] mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">Cloud Security & Compliance</h4>
              <p className="text-gray-600 text-sm">Ensure regulatory alignment and protect cloud workloads end-to-end.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
            <FontAwesomeIcon icon={faChartBar} className="text-2xl text-[#3a3dc4] mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">Data-Driven Decision Making</h4>
              <p className="text-gray-600 text-sm">Deploy BI dashboards, predictive models, and always-on analytics.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
            <FontAwesomeIcon icon={faCogs} className="text-2xl text-[#3a3dc4] mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">DevOps & Automation Enablement</h4>
              <p className="text-gray-600 text-sm">Accelerate delivery cycles with CI/CD, containerization, and IaC.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
            <FontAwesomeIcon icon={faCloud} className="text-2xl text-[#3a3dc4] mt-1" />
            <div>
              <h4 className="font-semibold text-lg mb-1 text-gray-800">IoT-Cloud Integration</h4>
              <p className="text-gray-600 text-sm">Connect smart devices to cloud platforms for real-time data and control.</p>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* SAP Partner Managed Cloud Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
              <span className="inline-block text-3xl mb-2"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4]" /></span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Run SAP in the Cloud—Simplified, Secure, and Fully Managed</h2>
              <p className="text-lg text-gray-700 mb-4">VirtuSwift delivers SAP Partner Managed Cloud (PMC) services to help you deploy, run, and optimize your SAP environment on hyperscale infrastructure—without the operational burden.</p>
              <div className="flex justify-center mb-8">
                <img src="/assets/cloudmonitoring4.png" alt="SAP in the Cloud" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
              </div>
              <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Explore Partner-Managed SAP Hosting</Link>
          </div>
          <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">What is SAP Partner Managed Cloud?</h3>
              <p className="text-gray-700 mb-4">SAP Partner Managed Cloud (PMC) enables businesses to consume SAP software as a service—delivered, hosted, and fully managed by a trusted SAP partner like VirtuSwift.<br/>You get the power of SAP S/4HANA, Business One, or Business ByDesign without needing to manage the infrastructure, licensing, maintenance, or operations.</p>
          </div>
          <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Why Choose VirtuSwift’s PMC Offering?</h3>
              <p className="mb-2">We take full accountability for the success of your SAP cloud journey—end-to-end.</p>
              <p className="mb-2 font-medium">Included in Our PMC Services:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>SAP License Procurement & Management</li>
                <li>Cloud Infrastructure (AWS, Azure, GCP, Private)</li>
                <li>SAP S/4HANA, Business One, or ByDesign Hosting</li>
                <li>24x7 SAP Basis & Technical Support</li>
                <li>Patching, Upgrades, and Maintenance</li>
                <li>Performance Monitoring and Optimization</li>
                <li>Backup, Disaster Recovery, and SLA Compliance</li>
                <li>Single Point of Contact (SPoC) for SAP Lifecycle</li>
            </ul>
              <div className="flex justify-center mb-8">
                <img src="/assets/cloudmigration7.png" alt="VirtuSwift PMC Offering" className="max-w-xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '260px' }} />
              </div>
              <div className="text-center mt-6">
                <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Book a Free PMC Readiness Assessment</Link>
            </div>
          </div>
          <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Key Business Benefits</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li><b>All-in-One Cloud + SAP + Support:</b> No juggling multiple vendors—VirtuSwift handles everything.</li>
                <li><b>Faster Time-to-Value:</b> Go live faster with pre-configured cloud SAP environments.</li>
                <li><b>Security & Compliance Built-In:</b> ISO, GDPR, SOC2-ready cloud environments with 24x7 protection.</li>
                <li><b>Lower TCO:</b> Eliminate infrastructure overhead and reduce internal support costs.</li>
                <li><b>Scalable Innovation:</b> Easily integrate AI, analytics, and custom extensions into your SAP stack.</li>
            </ul>
          </div>
          <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">VirtuSwift’s SAP PMC Model</h3>
            <table className="w-full text-left mb-4 border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                    <th className="p-2 border">Component</th>
                  <th className="p-2 border">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td className="p-2 border">Hosting</td>
                    <td className="p-2 border">On hyperscalers or private cloud, built for high availability</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Licensing</td>
                    <td className="p-2 border">SAP licensing under subscription, managed by VirtuSwift</td>
                </tr>
                <tr>
                    <td className="p-2 border">Support</td>
                    <td className="p-2 border">End-to-end SAP Basis and infrastructure management</td>
                </tr>
                <tr>
                    <td className="p-2 border">Operations</td>
                    <td className="p-2 border">Monitoring, patching, backups, and governance reporting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Security and Resilience First</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Identity & Role-Based Access Management</li>
                <li>Continuous Monitoring & Vulnerability Scanning</li>
                <li>DRaaS (Disaster Recovery as a Service)</li>
                <li>Compliant with ISO 27001, SOC2, and SAP standards</li>
                <li>Multi-factor authentication & secure key management</li>
              </ul>
          </div>
          <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">PMC Options We Support</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li><b>SAP S/4HANA Cloud, Private Edition:</b> Run your digital core in a partner-managed setup, ideal for enterprises.</li>
                <li><b>SAP Business One Cloud:</b> A great choice for fast-growing SMBs that need ERP without complexity.</li>
                <li><b>SAP Business ByDesign Cloud:</b> For mid-market companies seeking a full-suite SaaS ERP.</li>
            </ul>
          </div>
          <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">How We Deliver PMC Success</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
                <li>Assess – Review your SAP requirements and current infrastructure</li>
                <li>Design – Tailor a managed cloud setup for performance and compliance</li>
                <li>Deploy – Rapid provisioning and data migration by certified experts</li>
                <li>Manage – Ongoing SLA-driven support and cloud operations</li>
                <li>Optimize – Periodic reviews, patching, and business continuity testing</li>
            </ol>
          </div>
          <div className="mb-8 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Ready to Run SAP Without the Headaches?</h3>
              <p className="text-lg text-gray-200 mb-4">VirtuSwift’s Partner Managed Cloud gives you SAP as a fully managed service—secure, agile, and ready for growth.</p>
              <section className="py-8 bg-gradient-to-r from-[#232584] to-[#1c1c38] rounded-xl shadow-lg">
                <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">Schedule Your PMC Strategy Call →</Link>
              </section>
          </div>
          <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3a3dc4] mb-2">Related SAP Services by VirtuSwift</h3>
            <ul className="space-y-3 text-gray-800">
                <li><span className="font-bold">🔄 SAP S/4HANA Migrations</span><br/>Move from ECC or legacy ERPs to cloud-native SAP S/4HANA.</li>
                <li><span className="font-bold">🧠 SAP Automation Services</span><br/>Streamline workflows with smart automation and DevOps for SAP.</li>
                <li><span className="font-bold">📊 SAP Analytics & BI Solutions</span><br/>Make smarter decisions with pre-built dashboards and real-time KPIs.</li>
                <li><span className="font-bold">🛡️ SAP Cloud Security & Compliance</span><br/>Get audit-ready with secure, compliant SAP environments.</li>
            </ul>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
              <span className="block">Run SAP in the cloud without complexity. VirtuSwift’s SAP Partner Managed Cloud offers licensing, hosting, and 24x7 support under one service. Simplify your ERP journey today.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 