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
import Healthcare from './pages/Healthcare';
import Financial from './pages/Financial';
import Retail from './pages/Retail';
import Manufacturing from './pages/Manufacturing';
import SupplyChain from './pages/SupplyChain';
import SapServices from './pages/SapServices';
import SapMigrationsManagedServices from './pages/SapMigrationsManagedServices';
import SapDrivenInsights from './pages/SapDrivenInsights';
import SapCloudPlatformDevelopment from './pages/SapCloudPlatformDevelopment';
import SapIntegrationThirdParty from './pages/SapIntegrationThirdParty';
import SapIntelligentTechnologiesAI from './pages/SapIntelligentTechnologiesAI';
import SapTechnicalOperationsSecurity from './pages/SapTechnicalOperationsSecurity';
import SapModernizationStrategicTransformation from './pages/SapModernizationStrategicTransformation';
import CustomSoftwareDevelopment from './pages/CustomSoftwareDevelopment';
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
import CloudStrategyConsulting from './pages/CloudStrategyConsulting';
import CloudStrategyAndConsulting from './pages/CloudStrategyAndConsulting';
import CloudInfrastructureSetupManagement from './pages/CloudInfrastructureSetupManagement';
import CloudMigrationIntegration from './pages/CloudMigrationIntegration';
import CloudSecurityCompliance from './pages/CloudSecurityCompliance';
import CloudBackupDisasterRecovery from './pages/CloudBackupDisasterRecovery';
import CloudIot from './pages/CloudIot';
import CloudMonitoringPerformanceOptimization from './pages/CloudMonitoringPerformanceOptimization';
import MultiCloudHybridCloudSolutions from './pages/CloudMulticloud';
import DataWarehousingAndIntegration from './pages/DataWarehousingAndIntegration';
import DataAnalyticsMonetization from './pages/DataAnalyticsMonetization';
import DataStrategyAndPlanning from './pages/Datastrategyandplanning';
import DataMonetizationStrategies from './pages/DataMonetizationStrategies';
import ApplicationAndDatabaseManagement from './pages/ApplicationAndDatabaseManagement';
import CloudMigrationAndIntegration from './pages/CloudMigrationAndIntegration';
import IoTSolutions from './pages/IoTSolutions';
import DataDrivenDecisionMaking from './pages/DataDrivenDecisionMaking';
import DevOpsServices from './pages/DevOpsServices';
import CICDPipelines from './pages/CICDPipelines';
import DigitalTransformationSolutions from './pages/DigitalTransformationSolutions';
import BusinessProcessOptimization from './pages/BusinessProcessOptimization';
import DigitalStrategyDevelopment from './pages/DigitalStrategyDevelopment';
// import UserExperienceDesign from './pages/UserExperienceDesign';
// import DataAnalyticsVisualization from './pages/DataAnalyticsVisualization';
// import ServerAndStorageManagement from './pages/ServerAndStorageManagement';
import ApplicationWebDevelopment from './pages/ApplicationWebDevelopment';
import RoboticProcessAutomation from './pages/RoboticProcessAutomation';
import ChangeManagementTraining from './pages/ChangeManagementTraining';
import CybersecurityDataPrivacy from './pages/CybersecurityDataPrivacy';
import ErpImplementation from './pages/ErpImplementation';
import ITStaffingTalentSolutions from './pages/ITStaffingTalentSolutions';
import ITRecruitmentTalentAcquisition from './pages/ITRecruitmentTalentAcquisition';
import ManagedITServices from './pages/ManagedITServices';
import ProjectManagementServices from './pages/ProjectManagementServices';
import ProjectPlanningScopeManagement from './pages/ProjectPlanningScopeManagement';
import ITInfrastructureManagement from './pages/ITInfrastructureManagement';
import MetaverseVRSolutions from './pages/MetaverseVRSolutions';
import VRARDevelopment from './pages/VRARDevelopment';
import VirtualRetailMetaverse from './pages/VirtualRetailMetaverse';
import CustomApplicationDevelopment from './pages/CustomApplicationDevelopment';
import AerospaceAndDefense from './pages/AerospaceAndDefense';
import Aviation from './pages/Aviation';
import ConstructionAndInfrastructure from './pages/ConstructionAndInfrastructure';
import ConsumerProducts from './pages/ConsumerProducts';
import EnergyAndNaturalResources from './pages/EnergyAndNaturalResources';
import Agribusiness from './pages/Agribusiness';

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
          <Route path="/services/cloud-security" element={<CloudSecurityCompliance />} />
          <Route path="/services/cloud-security-and-compliance" element={<CloudSecurityCompliance />} />
          <Route path="/services/devops" element={<DevOpsServices />} />
          <Route path="/cicd-pipelines" element={<CICDPipelines />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/financial" element={<Financial />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/utilities" element={<Utilities />} />
          <Route path="/industries/pharmaceuticals" element={<Pharmaceutical />} />
          <Route path="/industries/public-sector" element={<PublicSector />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/aerospace-defense" element={<AerospaceAndDefense />} />
          <Route path="/industries/aviation" element={<Aviation />} />
          <Route path="/industries/construction-infrastructure" element={<ConstructionAndInfrastructure />} />
          <Route path="/industries/consumer-products" element={<ConsumerProducts />} />
          <Route path="/industries/energy" element={<EnergyAndNaturalResources />} />
          <Route path="/industries/energy/agribusiness" element={<Agribusiness />} />
          <Route path="/services/supply-chain" element={<SupplyChain />} />
          <Route path="/services/sap" element={<SapServices />} />
          <Route path="/services/sap-migrations-managed-services" element={<SapMigrationsManagedServices />} />
          <Route path="/services/sap-driven-insights" element={<SapDrivenInsights />} />
          <Route path="/services/sap-cloud-platform-development" element={<SapCloudPlatformDevelopment />} />
          <Route path="/services/sap-integration-third-party" element={<SapIntegrationThirdParty />} />
          <Route path="/services/sap-intelligent-technologies-ai" element={<SapIntelligentTechnologiesAI />} />
          <Route path="/services/sap-technical-operations-security" element={<SapTechnicalOperationsSecurity />} />
          <Route path="/services/sap-modernization-strategic-transformation" element={<SapModernizationStrategicTransformation />} />
          <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/services/salesforce" element={<Salesforce />} />
          <Route path="/services/pharmaceutical" element={<Pharmaceutical />} />
          <Route path="/services/oracle-solutions" element={<OracleSolutions />} />
          <Route path="/services/multi-google-cloud" element={<MultiGoogleCloud />} />
          <Route path="/services/microsoft-dynamics" element={<MicrosoftDynamics />} />
          <Route path="/services/ibm-systems" element={<IbmSystems />} />
          <Route path="/services/cloud-strategy-consulting" element={<CloudStrategyConsulting />} />
          <Route path="/services/cloud-strategy-and-consulting" element={<CloudStrategyAndConsulting />} />
          <Route path="/services/cloud-infrastructure" element={<CloudInfrastructureSetupManagement />} />
          <Route path="/services/cloud-migration" element={<CloudMigrationIntegration />} />
          <Route path="/services/cloud-security" element={<CloudSecurityCompliance />} />
          <Route path="/services/cloud-backup" element={<CloudBackupDisasterRecovery />} />
          <Route path="/services/cloud-iot" element={<CloudIot />} />
          <Route path="/services/cloud-monitoring" element={<CloudMonitoringPerformanceOptimization />} />
          <Route path="/services/multi-cloud" element={<MultiCloudHybridCloudSolutions />} />
          <Route path="/services/data-warehousing" element={<DataWarehousingAndIntegration />} />
          <Route path="/data-analytics-monetization" element={<DataAnalyticsMonetization />} />
          <Route path="/services/data-strategy-and-planning" element={<DataStrategyAndPlanning />} />
          <Route path="/services/data-warehousing-and-integration" element={<DataWarehousingAndIntegration />} />
          <Route path="/services/data-monetization" element={<DataMonetizationStrategies />} />
          <Route path="/services/application-and-database-management" element={<ApplicationAndDatabaseManagement />} />
          <Route path="/services/cloud-migration-and-integration" element={<CloudMigrationAndIntegration />} />
          <Route path="/services/iot-solutions" element={<IoTSolutions />} />
          <Route path="/services/data-driven-decision-making" element={<DataDrivenDecisionMaking />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformationSolutions />} />
          <Route path="/services/business-process-optimization" element={<BusinessProcessOptimization />} />
          <Route path="/services/digital-strategy-development" element={<DigitalStrategyDevelopment />} />
          <Route path="/services/application-web-development" element={<ApplicationWebDevelopment />} />
          <Route path="/services/robotic-process-automation" element={<RoboticProcessAutomation />} />
          <Route path="/services/change-management-training" element={<ChangeManagementTraining />} />
          <Route path="/services/cybersecurity-data-privacy" element={<CybersecurityDataPrivacy />} />
          <Route path="/services/erp-implementation" element={<ErpImplementation />} />
          <Route path="/services/it-staffing-talent-solutions" element={<ITStaffingTalentSolutions />} />
          <Route path="/services/it-recruitment-talent-acquisition" element={<ITRecruitmentTalentAcquisition />} />
          <Route path="/services/managed-it-services" element={<ManagedITServices />} />
          <Route path="/services/project-management" element={<ProjectManagementServices />} />
          <Route path="/services/project-planning-scope-management" element={<ProjectPlanningScopeManagement />} />
          <Route path="/services/it-infrastructure-management" element={<ITInfrastructureManagement />} />
          <Route path="/services/metaverse-vr-ar-solutions" element={<MetaverseVRSolutions />} />
          <Route path="/services/vr-ar-development" element={<VRARDevelopment />} />
          <Route path="/services/virtual-retail-metaverse" element={<VirtualRetailMetaverse />} />
          <Route path="/services/custom-application-development" element={<CustomApplicationDevelopment />} />
          
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