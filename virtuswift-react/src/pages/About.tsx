import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faUniversity, faShoppingBag, faIndustry, faGraduationCap, faTruck, faBullseye, faRocket, faHandshake } from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="impressive-heading py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0076CE] text-center">About Us</h1>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="content-container animate-on-scroll">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2015, VirtuSwift began as a small startup with a big vision: to revolutionize the way
              businesses leverage technology. Over the past decade, we've grown into a global leader in IT
              solutions and staffing, helping companies across industries achieve their digital transformation
              goals. Our journey is built on a foundation of innovation, integrity, and a relentless
              commitment to our clients' success.
            </p>
          </div>
        </div>

        {/* Industries We Serve Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-8">
            Specialized solutions tailored for the unique requirements of various industries
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="industry-card bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <FontAwesomeIcon icon={faHospital} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Healthcare</h3>
            </div>
            <div className="industry-card bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <FontAwesomeIcon icon={faUniversity} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Finance</h3>
            </div>
            <div className="industry-card bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <FontAwesomeIcon icon={faShoppingBag} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Retail</h3>
            </div>
            <div className="industry-card bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <FontAwesomeIcon icon={faIndustry} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Manufacturing</h3>
            </div>
            <div className="industry-card bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Education</h3>
            </div>
            <div className="industry-card bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <FontAwesomeIcon icon={faTruck} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Logistics</h3>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Philosophy Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="vision-mission-card bg-white rounded-xl shadow p-8 flex flex-col items-center">
              <FontAwesomeIcon icon={faBullseye} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in IT solutions and staffing services, empowering businesses to achieve
                unparalleled success through virtuous innovation and swift execution.
              </p>
            </div>
            <div className="vision-mission-card bg-white rounded-xl shadow p-8 flex flex-col items-center">
              <FontAwesomeIcon icon={faRocket} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Deliver cutting-edge technology solutions that drive business transformation. Provide expertly
                screened talent across all tech stacks. Foster long-term partnerships through ethical practices
                and rapid service.
              </p>
            </div>
            <div className="vision-mission-card bg-white rounded-xl shadow p-8 flex flex-col items-center">
              <FontAwesomeIcon icon={faHandshake} className="text-4xl text-[#0076CE] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Philosophy</h3>
              <p className="text-gray-600">
                VirtuSwift operates on the principles of virtue and speed, combining moral excellence with swift
                execution. We believe in upholding integrity, accelerating success, and innovating responsibly.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-[#0076CE] text-white py-16 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-lg mb-6">
              Schedule a free consultation with our experts to discuss your project requirements.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#0076CE] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request a Consultation
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#0076CE] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 