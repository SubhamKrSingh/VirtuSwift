import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCloud, faServer, faDatabase, faProjectDiagram, faChartLine, faCheckCircle, faRocket, faUsers, faBrain, faCalendarAlt, faMoneyBillWave, faLock, faGamepad, faEye, faLightbulb, faShieldAlt, faSync, faTools, faGlobe, faMobileAlt, faDesktop, faHeadset } from '@fortawesome/free-solid-svg-icons';

const tabs = ['Why Metaverse Solutions?', 'Our Services', 'Why VirtuSwift?'];

const heroSlides = [
  {
    image: '/assets/meta.png',
    title: 'Metaverse, VR & AR Solutions',
    subtitle: 'Design immersive digital experiences that connect, engage, and innovate. VirtuSwift builds enterprise-ready metaverse, VR, and AR environments.',
    cta: 'Book Your Consultation',
    ctaLink: '/contact?service=metaverse-vr-ar-solutions',
  },
];

export default function MetaverseVRSolutions() {
  const [activeTab, setActiveTab] = useState('Why Metaverse Solutions?');
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section Slider */}
      <section className="relative w-full h-[400px] overflow-hidden mb-0">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-[400px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center px-10 md:px-20 bg-black bg-opacity-40">
                <div className="text-white max-w-2xl text-center mx-auto drop-shadow-lg">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">{slide.subtitle}</p>
                  <Link to={slide.ctaLink} className="inline-block bg-[#3a3dc4] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">{slide.cta}</Link>
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
        {activeTab === 'Why Metaverse Solutions?' && (
          <>
            {/* Why Metaverse Solutions? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 w-full md:pr-8">
                  <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">WHY METAVERSE SOLUTIONS?</h3>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why Metaverse Solutions?</h2>
                  <p className="text-lg text-gray-700 mb-6">The metaverse is more than a trend—it's a new dimension of business transformation.</p>
                  <p className="text-gray-600 mb-6">At VirtuSwift, we empower enterprises to unlock the full potential of extended reality (XR) through Virtual Reality (VR), Augmented Reality (AR), and digital twin environments. From employee onboarding and customer experience to training and product visualization, our metaverse solutions enable the next generation of human interaction and business efficiency.</p>
                  <p className="text-lg text-gray-700 mb-6 font-semibold">Your future-ready customers, teams, and products already exist in the metaverse. We help you meet them there.</p>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/meta1.png" alt="Why Metaverse Solutions" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* How Metaverse & XR Drive Business Value */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">BUSINESS VALUE</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How Metaverse & XR Drive Business Value</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard icon={faEye} title="Immersive User Engagement" desc="Create interactive 3D environments that deepen customer and employee engagement." />
                <ValueCard icon={faUsers} title="Remote Collaboration" desc="Enable global teams to collaborate in real-time using immersive virtual environments." />
                <ValueCard icon={faBrain} title="Faster Learning & Retention" desc="Use XR to deliver high-impact learning with better retention through experiential modules." />
                <ValueCard icon={faTools} title="Smart Prototyping & Visualization" desc="Visualize buildings, products, and workflows in 3D before committing resources to physical builds." />
                <ValueCard icon={faLightbulb} title="Innovation Perception" desc="Establish your brand as a tech-forward leader with future-first immersive tools." />
                <ValueCard icon={faMoneyBillWave} title="Cost Savings Through Simulation" desc="Cut physical training, prototyping, and event costs by bringing them into immersive digital environments." />
              </div>
            </div>
          </>
        )}
        {activeTab === 'Our Services' && (
          <>
            {/* Our Metaverse & Immersive Technology Services */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR SERVICES</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Our Metaverse & Immersive Technology Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceSection number={1} title="Virtual Reality (VR) & Augmented Reality (AR) Development" desc="Custom VR/AR solutions for enterprise training, simulations, virtual showrooms, and interactive product experiences." />
                <ServiceSection number={2} title="Cloud Infrastructure Setup & Management" desc="Backend infrastructure to host immersive environments, 3D asset streaming, and real-time collaboration with high availability." />
                <ServiceSection number={3} title="Cloud Migration & Integration" desc="Migrate existing XR platforms to the cloud. Seamlessly integrate XR into your ERP, CRM, or LMS systems." />
                <ServiceSection number={4} title="Revolutionize Shopping in the Metaverse" desc="Immersive 3D storefronts and retail journeys that captivate users, increase engagement, and drive digital sales in next-gen commerce environments." />
                <ServiceSection number={5} title="SAP Support & Maintenance" desc="Add XR interfaces to your SAP workflows. Get full tech support for immersive analytics and SAP digital twin integrations." />
                <ServiceSection number={6} title="Internet of Things (IoT) + XR" desc="Create real-time digital twins by integrating sensor data and smart devices with VR/AR interfaces." />
              </div>
            </div>
            {/* How VirtuSwift Builds Immersive Ecosystems */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">OUR PROCESS</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">How VirtuSwift Builds Immersive Ecosystems</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center">
                {[
                  { step: 1, title: 'Explore & Ideate', desc: 'XR workshops to define use cases, business goals, and platform requirements.' },
                  { step: 2, title: 'Design & Build', desc: 'UX/UI prototyping, 3D asset creation, and environment building with iterative collaboration.' },
                  { step: 3, title: 'Integrate & Deploy', desc: 'XR is integrated with enterprise systems and deployed across user roles and platforms.' },
                  { step: 4, title: 'Support & Optimize', desc: 'We offer post-deployment tuning, device testing, and ongoing content management.' },
                ].map((s) => (
                  <div key={s.title} className="flex-1 flex flex-col items-center text-center bg-white rounded-lg p-6 shadow border-b-4 border-[#3a3dc4] mx-2 mb-4 md:mb-0 group transition">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3a3dc4] text-white text-2xl font-bold mb-2 group-hover:scale-110 transition">{s.step}</div>
                    <h4 className="font-semibold text-lg mb-1 text-gray-800">{s.title}</h4>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {activeTab === 'Why VirtuSwift?' && (
          <>
            {/* Why VirtuSwift for Metaverse & XR Services? */}
            <div className="max-w-6xl mx-auto mb-16 px-4">
              <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-xl shadow p-8">
                <div className="flex-1 w-full md:pr-8">
                  <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">WHY VIRTUSWIFT?</h3>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Why VirtuSwift for Metaverse & XR Services?</h2>
                  <p className="text-lg text-gray-700 mb-6">From ideation to deployment, VirtuSwift is your full-stack partner in building and scaling immersive environments that drive enterprise value.</p>
                  <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">What Sets VirtuSwift Apart</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faGamepad} className="text-[#3a3dc4] text-xl" /> Full-Stack XR Expertise: We handle concepting, UX, development, and deployment of immersive experiences under one roof.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faRocket} className="text-[#3a3dc4] text-xl" /> 3D-Ready Cloud Infrastructure: GPU-powered, latency-optimized, and built for immersive scale.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faSync} className="text-[#3a3dc4] text-xl" /> Enterprise-Grade Integration: We integrate XR solutions with your ERP, CRM, cloud stack, and security layers.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faGlobe} className="text-[#3a3dc4] text-xl" /> Multi-Platform Compatibility: Builds for Oculus, HoloLens, Android/iOS AR, WebXR, and desktop VR.</li>
                    <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faUsers} className="text-[#3a3dc4] text-xl" /> On-Demand XR Teams: Access top XR engineers, Unity/Unreal developers, and spatial designers when you need them.</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
                  <img src="/assets/meta2.png" alt="VirtuSwift Metaverse Partner" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
            {/* Final CTA */}
            <div className="text-center mt-16 pb-16">
              <div className="mb-4">
                <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest text-center">GET STARTED</h3>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight text-center">Ready to Enter the Metaverse?</h2>
              </div>
              <p className="text-xl text-gray-600 mb-6">Transform your business with immersive experiences that drive engagement and innovation.</p>
              <img src="/assets/meta3.png" alt="Enter the Metaverse" className="mx-auto mb-6 max-w-md w-full h-auto object-cover rounded-xl shadow-lg" />
              <Link to="/contact?service=metaverse-vr-ar-solutions" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Start Your Metaverse Journey</Link>
            </div>
          </>
        )}
      </div>

      {/* Explore More Services */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-extrabold text-[#3a3dc4] mb-2 uppercase tracking-widest">EXPLORE MORE</h3>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 leading-tight">Explore More Services We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExploreCard image="/assets/meta4.png" title="Digital Transformation Solutions" desc="End-to-end transformation with process automation, AI, cloud, and ERP modernization." link="/services/digital-transformation" />
          <ExploreCard image="/assets/meta.png" title="AI & Machine Learning Development" desc="Intelligent systems powered by predictive models, NLP, and real-time analytics." link="/services/ai-machine-learning" />
          <ExploreCard image="/assets/meta1.png" title="Software Development" desc="From SaaS apps to internal tools, we build secure, scalable, user-centric software." link="/services/application-web-development" />
          <ExploreCard image="/assets/meta2.png" title="IT Staffing Solutions" desc="On-demand hiring of developers, cloud architects, security experts, and more." link="/services/it-staffing-talent-solutions" />
          <ExploreCard image="/assets/meta3.png" title="Project Management Services" desc="Agile and waterfall-certified PMs to deliver projects efficiently, on time." link="/services/project-management" />
          <ExploreCard image="/assets/meta4.png" title="DevOps Services" desc="DevOps engineers streamline delivery with CI/CD pipelines and IAC." link="/services/devops" />
          <ExploreCard image="/assets/meta.png" title="Managed IT Services" desc="End-to-end infrastructure, cloud, and application support." link="/services/managed-it-services" />
          <ExploreCard image="/assets/meta1.png" title="Data Analytics & Monetization" desc="From dashboards to machine learning—turn data into profitable insights." link="/data-analytics-monetization" />
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow group hover:shadow-lg transition">
      <FontAwesomeIcon icon={icon} className="text-4xl mb-2 text-[#3a3dc4]" />
      <h4 className="font-bold mb-1 text-[#232584] text-lg">{title}</h4>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}

function ServiceSection({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col mb-4">
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{number}. {title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
      {number === 1 && (
        <Link to="/services/vr-ar-development" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 2 && (
        <Link to="/services/cloud-infrastructure" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 3 && (
        <Link to="/services/cloud-migration" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 4 && (
        <Link to="/services/virtual-retail-metaverse" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 5 && (
        <Link to="/services/server-and-storage-management" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
      {number === 6 && (
        <Link to="/services/iot-solutions" className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">View Detail</Link>
      )}
    </div>
  );
}

function ExploreCard({ image, title, desc, link }: { image: string; title: string; desc: string; link: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4] flex flex-col h-full">
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm flex-1">{desc}</p>
      <Link to={link} className="mt-4 inline-block bg-[#3a3dc4] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#f05a28] hover:scale-105 transition text-sm self-start">Learn More</Link>
    </div>
  );
} 