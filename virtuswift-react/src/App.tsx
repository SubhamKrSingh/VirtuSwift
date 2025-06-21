import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';

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
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;