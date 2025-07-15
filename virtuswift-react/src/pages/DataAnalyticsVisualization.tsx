import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faChartLine, faCogs, faCloud, faRocket, faCheckCircle, faSync, faDatabase, faLock, faMoneyBillWave, faProjectDiagram, faUserShield, faLayerGroup, faChalkboardTeacher, faBrain, faUsers, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function DataAnalyticsVisualization() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/dataanalytics3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">See What Matters. Act with Precision.</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto drop-shadow">Drowning in data but starving for insight?<br/>VirtuSwift converts raw numbers into interactive stories that fuel confident decisions—from the boardroom to the front lines.</p>
          <Link to="/contact?service=data-analytics-visualization" className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg mb-4">Visualize Your Business Potential</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">🚀 Why Choose VirtuSwift for Data Analytics & Visualization?</h2>
            <p className="text-lg text-gray-700 mb-6">Because dashboards shouldn’t just look good—they should drive action.<br/>VirtuSwift builds tailored analytics environments that empower teams to explore data, monitor KPIs, and predict outcomes in real time.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartBar} className="text-[#008BCF] text-xl" /> Business Intelligence Implementation (Power BI, Tableau, Looker)</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#3a3dc4] text-xl" /> Executive and Operational Dashboard Design</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCogs} className="text-[#f05a28] text-xl" /> Self-Service Analytics Enablement</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-xl" /> Real-Time Metrics, Drilldowns & Advanced Data Modeling</li>
            </ul>
            <Link to="/contact?service=data-analytics-visualization-demo" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Request a Visualization Demo</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics1.png" alt="VirtuSwift Data Analytics" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">📈 The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">From spreadsheets to storytelling—make every dataset count.<br/>We deliver clarity across your business landscape so that data becomes your fastest path to impact.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">You Benefit From:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faChartLine} className="text-[#008BCF] text-xl" /> Live KPIs and Forecasting Models</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCloud} className="text-[#3a3dc4] text-xl" /> Cross-Functional Visibility & Insight</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#f05a28] text-xl" /> Improved Executive Decision Speed</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCheckCircle} className="text-[#008BCF] text-xl" /> Organization-Wide Data Literacy</li>
            </ul>
            <Link to="/contact?service=data-analytics-visualization-benefits" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">See Beyond the Numbers →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/dataanalytics2.png" alt="VirtuSwift Analytics Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Digital Transformation Offerings */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">🚀 Other Offerings in Digital Transformation</h2>
          <p className="text-xl text-gray-600 mb-10 text-center">Empowering Your Enterprise for Tomorrow</p>
          <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">Digital Transformation isn’t just a service—it’s a journey. Our wide spectrum of future-ready services is designed to help your business scale, innovate, and lead in a digital-first world. Explore our extended suite of offerings that cover every strategic pillar of transformation—designed to deliver value, efficiency, and growth.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Each of these can be a card with icon and short desc */}
            <ServiceCard icon={faChartLine} title="Digital Strategy Development" desc="Build your digital future on a solid blueprint. We help define actionable, long-term strategies tailored to your goals—aligning business, technology, and customer experience into one unified digital roadmap." />
            <ServiceCard icon={faCogs} title="Business Process Optimization" desc="Unlock higher productivity and reduce costs by reimagining and automating your workflows. We analyze your current operations and implement smart, scalable processes that maximize ROI." />
            <ServiceCard icon={faUsers} title="User Experience Design" desc="Delight your users at every touchpoint. We craft intuitive, visually compelling, and conversion-optimized experiences that keep your audience engaged and loyal." />
            <ServiceCard icon={faLaptopCode} title="Mobile and Web Application Development" desc="From concept to launch, we create high-performing mobile and web apps that drive user adoption, improve operations, and generate revenue—customized for your industry and business needs." />
            <ServiceCard icon={faMoneyBillWave} title="Data Monetization Strategies" desc="Turn data into dollars. We help identify untapped data assets, build frameworks to extract value, and implement models that generate new revenue streams from your existing data ecosystem." />
            <ServiceCard icon={faCloud} title="Cloud Migration and Integration" desc="Seamlessly shift your workloads to the cloud. Our team ensures secure, scalable, and downtime-free migration while integrating all your applications and data into a single cloud ecosystem." />
            <ServiceCard icon={faProjectDiagram} title="Internet of Things (IoT) Solutions" desc="Transform physical operations into intelligent systems. Our IoT solutions connect devices, collect data, and enable real-time decisions that revolutionize efficiency and customer experience." />
            <ServiceCard icon={faChartBar} title="Data-driven Decision Making" desc="Make smarter choices, faster. We implement data platforms and dashboards that give leaders real-time visibility and insights—powering decisions with confidence and clarity." />
            <ServiceCard icon={faSync} title="Robotic Process Automation (RPA)" desc="Let bots handle the boring stuff. We deploy RPA tools that automate repetitive tasks, improve accuracy, and free your team to focus on high-impact work." />
            <ServiceCard icon={faChalkboardTeacher} title="Change Management and Training" desc="Digital success requires people-first transformation. We guide your teams through change with structured training programs and support to ensure adoption, resilience, and long-term impact." />
            <ServiceCard icon={faLock} title="Cybersecurity and Data Privacy Solutions" desc="Stay protected in a digital world. We assess vulnerabilities, implement end-to-end security protocols, and ensure compliance with global privacy regulations to keep your data and reputation safe." />
            <ServiceCard icon={faDatabase} title="Data Warehousing and Integration" desc="Unify your data landscape. We build centralized, scalable data warehouses and integrate siloed systems to deliver clean, consistent, and reliable data for analysis." />
            <ServiceCard icon={faLayerGroup} title="Enterprise Resource Planning (ERP) Implementation" desc="Modernize your operations with the right ERP. We customize and implement scalable ERP systems that centralize your core business functions and drive operational agility." />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">💡 Ready to Accelerate Your Digital Journey?</h2>
        <p className="text-xl text-gray-600 mb-6">Let’s build something extraordinary together.</p>
        <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Book a Free Consultation →</Link>
        <div className="flex justify-center mt-8">
          <img src="/assets/dataanalytics4.png" alt="VirtuSwift Data Visualization" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full">
      <FontAwesomeIcon icon={icon} className="text-2xl text-[#3a3dc4] mb-3" />
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
    </div>
  );
} 