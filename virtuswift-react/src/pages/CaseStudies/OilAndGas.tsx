import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOilWell, faChartLine, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
import manufacturingBg from '../../assets/images/manufacturing-bg.jpg';

const OilAndGas: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Digital Transformation in Oil & Gas"
      subtitle="How VirtuSwift helped a major energy company optimize operations and reduce costs"
      description="VirtuSwift partnered with a leading oil and gas company to implement a comprehensive digital transformation strategy. By integrating IoT sensors with real-time analytics and blockchain-based supply chain tracking, we helped the client achieve significant operational efficiencies, reduce environmental impact, and improve safety metrics. Our solution addressed the challenges of aging infrastructure, data silos, and regulatory compliance while positioning the client for future growth in a rapidly evolving energy landscape."
      backgroundImage={manufacturingBg}
      icon={faOilWell}
      outcomes={[
        {
          title: "30% Reduction in Operational Costs",
          description: "Our IoT sensor integration and predictive maintenance solution reduced unplanned downtime and operational costs by 30%."
        },
        {
          title: "25% Improved Production Efficiency",
          description: "Real-time analytics and digital twin technology optimized production processes, increasing efficiency by 25%."
        },
        {
          title: "40% Enhanced Regulatory Compliance",
          description: "Automated reporting and blockchain verification improved compliance processes and reduced audit time by 40%."
        },
        {
          title: "50% Faster Decision Making",
          description: "Centralized data platform with executive dashboards enabled 50% faster strategic decision making across operations."
        },
        {
          title: "20% Reduced Carbon Footprint",
          description: "Smart monitoring and optimization systems helped reduce emissions and environmental impact by 20%."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's digital transformation solution has revolutionized how we operate, giving us unprecedented visibility and control.",
        author: "Operations Director",
        role: "Global Energy Corporation"
      }}
      callToAction={{
        text: "Discover How Digital Transformation Can Optimize Your Oil & Gas Operations",
        buttonText: "Schedule a Free Consultation"
      }}
      inlineIcons={[
        {
          icon: faOilWell,
          label: "Oil & Gas Solutions"
        },
        {
          icon: faChartLine,
          label: "Real-time Analytics"
        },
        {
          icon: faFileInvoiceDollar,
          label: "Cost Optimization"
        }
      ]}
    />
  );
};

export default OilAndGas;