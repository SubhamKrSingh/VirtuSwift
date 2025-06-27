import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import AssessmentPopup from './components/AssessmentPopup';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AwsMigration from './pages/AwsMigration';
import Azure from './pages/Azure';
import CloudSecurity from './pages/CloudSecurity';
import Healthcare from './pages/Healthcare';
import Financial from './pages/Financial';
import Retail from './pages/Retail';
import Manufacturing from './pages/Manufacturing';
import SupplyChain from './pages/SupplyChain';
import SapServices from './pages/SapServices';
import Salesforce from './pages/Salesforce';
import Pharmaceutical from './pages/Pharmaceutical';
import Utilities from './pages/Utilities';
import PublicSector from './pages/PublicSector';
import Logistics from './pages/Logistics';
import OracleSolutions from './pages/OracleSolutions';
import MultiGoogleCloud from './pages/MultiGoogleCloud';
import MicrosoftDynamics from './pages/MicrosoftDynamics';
import IbmSystems from './pages/IbmSystems';
import SubmitRFP from './pages/SubmitRFP';

// Import case study pages
import FinanceCaseStudy from './pages/CaseStudies/Finance';
import ManufacturingCaseStudy from './pages/CaseStudies/Manufacturing';
import PharmaceuticalsCaseStudy from './pages/CaseStudies/Pharmaceuticals';
import RetailCaseStudy from './pages/CaseStudies/Retail';
import UtilitiesCaseStudy from './pages/CaseStudies/Utilities';
import OilAndGasCaseStudy from './pages/CaseStudies/OilAndGas';
import PublicSectorCaseStudy from './pages/CaseStudies/PublicSector';
import HealthcareCaseStudy from './pages/CaseStudies/Healthcare';
import HighTechCaseStudy from './pages/CaseStudies/HighTech';
import LogisticsCaseStudy from './pages/CaseStudies/Logistics';

// Helper to check if chatbot is open (by reading a class on body or a global state)
function useChatbotOpen() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setOpen(document.querySelector('.chatbot-container.open') !== null);
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    setOpen(document.querySelector('.chatbot-container.open') !== null);
    return () => observer.disconnect();
  }, []);
  return open;
}

const FloatingActionButtons: React.FC = () => {
  const location = useLocation();
  const chatbotOpen = useChatbotOpen();
  // Define paths for which the buttons should show
  const show =
    location.pathname.startsWith('/about') ||
    location.pathname.startsWith('/services') ||
    location.pathname.startsWith('/industries') ||
    location.pathname.startsWith('/case-studies');
  if (!show || chatbotOpen) return null;
  return (
    <div style={{
      position: 'fixed',
      right: 32,
      bottom: 200,
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      alignItems: 'flex-end',
      pointerEvents: 'auto',
    }}>
      {/* Contact Button */}
      <FABWithLabel
        icon={<img src={require('./assets/images/contactus.png')} alt="Contact" style={{ width: 25, height: 25, display: 'block', marginBottom: 6 }} />}
        label="Contact"
        to="/contact"
      />
      {/* Submit RFP Button */}
      <FABWithLabel
        icon={<img src={require('./assets/images/rfp.png')} alt="Submit RFP" style={{ width: 25, height: 25, display: 'block', marginBottom: 6 }} />}
        label="Submit RFP"
        to="/submit-rfp"
      />
    </div>
  );
};

const FABWithLabel: React.FC<{ icon: React.ReactNode; label: string; to: string }> = ({ icon, label, to }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: hovered ? 'space-between' : 'center',
          width: hovered ? 220 : 64,
          height: 64,
          borderRadius: 32,
          background: '#fff',
          boxShadow: '0 8px 32px rgba(35,61,196,0.13)',
          fontWeight: 600,
          fontSize: 20,
          padding: hovered ? '0 28px 0 24px' : 0,
          transition: 'width 0.25s cubic-bezier(.4,1.2,.4,1), background 0.2s',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        <span style={{
          opacity: hovered ? 1 : 0,
          marginRight: hovered ? 18 : 0,
          transition: 'opacity 0.18s, margin 0.18s',
          whiteSpace: 'nowrap',
          width: hovered ? 'auto' : 0,
          overflow: 'hidden',
          display: 'inline-block',
        }}>{label}</span>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      </div>
    </Link>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/aws-migration" element={<AwsMigration />} />
          <Route path="/services/azure" element={<Azure />} />
          <Route path="/services/cloud-security" element={<CloudSecurity />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/financial" element={<Financial />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/utilities" element={<Utilities />} />
          <Route path="/industries/pharmaceuticals" element={<Pharmaceutical />} />
          <Route path="/industries/public-sector" element={<PublicSector />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/services/supply-chain" element={<SupplyChain />} />
          <Route path="/services/sap" element={<SapServices />} />
          <Route path="/services/salesforce" element={<Salesforce />} />
          <Route path="/services/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="/services/oracle-solutions" element={<OracleSolutions />} />
          <Route path="/services/multi-google-cloud" element={<MultiGoogleCloud />} />
          <Route path="/services/microsoft-dynamics" element={<MicrosoftDynamics />} />
          <Route path="/services/ibm-systems" element={<IbmSystems />} />
          
          {/* Case Study Routes */}
          <Route path="/case-studies/finance" element={<FinanceCaseStudy />} />
          <Route path="/case-studies/manufacturing" element={<ManufacturingCaseStudy />} />
          <Route path="/case-studies/pharmaceuticals" element={<PharmaceuticalsCaseStudy />} />
          <Route path="/case-studies/retail" element={<RetailCaseStudy />} />
          <Route path="/case-studies/utilities" element={<UtilitiesCaseStudy />} />
          <Route path="/case-studies/oil-and-gas" element={<OilAndGasCaseStudy />} />
          <Route path="/case-studies/public-sector" element={<PublicSectorCaseStudy />} />
          <Route path="/case-studies/healthcare" element={<HealthcareCaseStudy />} />
          <Route path="/case-studies/high-tech" element={<HighTechCaseStudy />} />
          <Route path="/case-studies/logistics" element={<LogisticsCaseStudy />} />
          <Route path="/submit-rfp" element={<SubmitRFP />} />
        </Routes>
        <Chatbot />
        <AssessmentPopup />
        <FloatingActionButtons />
      </MainLayout>
    </Router>
  );
};

export default App;