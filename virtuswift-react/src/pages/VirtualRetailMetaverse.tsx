import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartBar, faCogs, faCloud, faRocket, faCheckCircle, faSync, faDatabase, faLock, faMoneyBillWave, faProjectDiagram, faShoppingCart, faGlasses, faGlobe, faChartPie, faGamepad, faBrain, faEye, faShieldAlt, faUsers, faStore, faHome, faStethoscope, faBuilding, faCreditCard, faCube, faCoins, faCompass, faClock, faDollarSign, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

export default function VirtualRetailMetaverse() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative text-white py-20 px-4 mb-12 flex items-center justify-center min-h-[400px]" style={{ backgroundImage: "url('/assets/metashopping.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Revolutionize Shopping in the Metaverse</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">VirtuSwift crafts immersive 3D storefronts and retail journeys that captivate users, increase engagement, and drive digital sales in next-gen commerce environments.</p>
          <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">🛍 Create Your Virtual Storefront</Link>
        </div>
      </section>

      {/* Why Choose VirtuSwift for Virtual Retail? */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">🚀 Why Choose VirtuSwift for Virtual Retail?</h2>
            <p className="text-lg text-gray-700 mb-6">Looking to bring your brand into the metaverse? We design spatial shopping environments that mirror and elevate the in-store experience.</p>
            <h3 className="text-2xl font-bold text-[#3a3dc4] mb-4">Our Services Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faShoppingCart} className="text-[#008BCF] text-xl" /> 🛒 Interactive 3D Product Displays & Browsing</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faGlasses} className="text-[#3a3dc4] text-xl" /> 🪞 AR-Based Try-Ons and Virtual Fitting Rooms</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCreditCard} className="text-[#f05a28] text-xl" /> 💳 Seamless Checkout & Real-Time Analytics Integration</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCoins} className="text-[#008BCF] text-xl" /> 🧾 Blockchain-Powered Commerce: NFTs, Tokens, Smart Contracts</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">🚀 Start Your Virtual Commerce Strategy</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/metashopping1.png" alt="Virtual Retail Metaverse Illustration" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* The VirtuSwift Advantage */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full md:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">📈 The VirtuSwift Advantage</h2>
            <p className="text-lg text-gray-700 mb-6">Deliver retail experiences that feel real—and convert like never before.</p>
            <h3 className="text-xl font-bold mb-4 text-[#3a3dc4]">You Benefit From:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faCompass} className="text-[#3a3dc4] text-xl" /> 🧭 Immersive and Guided Shopping Journeys</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faClock} className="text-[#008BCF] text-xl" /> ⏱️ Higher Engagement & Session Durations</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faDollarSign} className="text-[#f05a28] text-xl" /> 💰 Enhanced Conversion Paths</li>
              <li className="flex items-center gap-3 text-gray-800 text-base"><FontAwesomeIcon icon={faWindowMaximize} className="text-[#008BCF] text-xl" /> 🪟 A Distinct Metaverse Brand Presence</li>
            </ul>
            <Link to="/contact" className="inline-block bg-[#f05a28] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#3a3dc4] hover:scale-105 transition text-lg">Sell Beyond Screens →</Link>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img src="/assets/metashopping.png" alt="VirtuSwift Virtual Retail Advantage" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </div>

      {/* Ready to Bring Your Store to the Virtual World? */}
      <div className="max-w-4xl mx-auto mb-16 px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🌐 Ready to Bring Your Store to the Virtual World?</h2>
        <p className="text-xl text-gray-600 mb-6">Let VirtuSwift help you launch a metaverse-ready shopping experience that delights and delivers.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/metashopping1.png" alt="Virtual Store Launch" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '250px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">🏪 Launch a Virtual Storefront</Link>
      </div>

      {/* Other Offerings in Metaverse Services */}
      <div className="max-w-4xl mx-auto mb-16 text-center px-4">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">🚀 Other Offerings in Metaverse Services</h2>
        <p className="text-xl text-gray-600 mb-6">Bridging Digital and Physical Worlds for Immersive Business Experiences</p>
        <p className="text-lg text-gray-700 mb-8">Our Metaverse offerings bring the future of engagement to life. From interactive environments to data-powered backends, we help brands, retailers, and enterprises thrive in virtual ecosystems — creating new revenue streams and unforgettable digital experiences.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20 px-4">
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faGlasses} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🕶️ Virtual Reality (VR) and Augmented Reality (AR) Development</h4>
            <p className="text-gray-600 text-sm">Deliver immersive experiences that captivate. We design and develop VR and AR solutions for training, entertainment, marketing, and enterprise simulations — giving your audience unforgettable ways to connect, learn, and engage.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faDatabase} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🗄️ Data Warehousing and Integration</h4>
            <p className="text-gray-600 text-sm">Power your metaverse presence with reliable data. We centralize and integrate all user, product, and behavioral data to ensure seamless analytics, real-time personalization, and cross-platform optimization.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCogs} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">⚙️ Application and Database Management</h4>
            <p className="text-gray-600 text-sm">Keep your virtual ecosystems running smoothly. Our team manages all metaverse-related applications and databases, providing real-time performance monitoring, updates, and scalability for large virtual environments.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">💰 Data Monetization Strategies</h4>
            <p className="text-gray-600 text-sm">Turn virtual interactions into real value. We help you analyze user behavior, segment audiences, and create monetizable data products and immersive ad formats — transforming traffic into revenue.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faCloud} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">☁️ Cloud Migration and Integration</h4>
            <p className="text-gray-600 text-sm">Move your metaverse operations to the cloud for speed, scale, and reliability. We ensure seamless integration of virtual platforms, real-time sync with other enterprise systems, and secure, scalable infrastructure.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow border-l-4 border-[#3a3dc4]">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-2xl text-[#3a3dc4] mt-1" />
          <div>
            <h4 className="font-semibold text-lg mb-1 text-gray-800">🌐 Internet of Things (IoT) Solutions</h4>
            <p className="text-gray-600 text-sm">Merge physical and virtual with IoT. We connect real-world sensors and devices to your metaverse applications, enabling live data feeds, environment interaction, and hybrid experiences that feel truly next-gen.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 pb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-gray-900">💡 Ready to Enter the Metaverse with Purpose?</h2>
        <p className="text-xl text-gray-600 mb-6">Let's co-create immersive, data-driven, and scalable virtual experiences that put your brand at the forefront of innovation.</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/metashopping.png" alt="VirtuSwift Metaverse Journey" className="max-w-2xl w-full h-auto object-cover rounded-xl shadow-lg" style={{ maxHeight: '220px' }} />
        </div>
        <Link to="/contact" className="inline-block bg-[#3a3dc4] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#f05a28] hover:scale-105 transition text-lg">👉 Start Your Metaverse Journey →</Link>
      </div>
    </div>
  );
} 