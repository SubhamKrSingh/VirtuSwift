import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121927] text-white border-t border-[#D3D6E8]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/Png-02.png" alt="VirtuSwift Logo" className="h-10 w-auto mr-3 rounded" />
              <h3 className="text-xl font-bold">VirtuSwift</h3>
            </div>
            <p className="text-gray-400">
              Leading provider of innovative IT solutions and staffing services, helping businesses achieve digital transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/aws-migration" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">AWS Migration</Link></li>
              <li><Link to="/azure" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">Azure Solutions</Link></li>
              <li><Link to="/cloud-security" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">Cloud Security</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">All Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link to="/healthcare" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">Healthcare</Link></li>
              <li><Link to="/financial" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">Financial Services</Link></li>
              <li><Link to="/retail" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">Retail</Link></li>
              <li><Link to="/manufacturing" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">Manufacturing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              123 Tech Avenue<br />
              Suite 500<br />
              San Francisco, CA 94107<br />
              United States<br />
              <br />
              Phone: +1 (555) 123-4567<br />
              Email: info@virtuswift.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#D3D6E8] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VirtuSwift. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#3a3dc4] transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 