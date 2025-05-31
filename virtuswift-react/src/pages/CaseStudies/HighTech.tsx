import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRoute, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import highTechBg from '../../assets/images/hight-tech-bg.jpg';

const HighTech: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Streamlining R&D with SAP PLM"
      subtitle="How VirtuSwift empowered an electronics firm to accelerate product development"
      description="VirtuSwift empowered an electronics firm to accelerate product development with SAP Product Lifecycle Management (PLM). With over 20 years of SAP expertise, our team used the VirtuSwift Control Platform (VSCP) to integrate PLM and enable real-time component tracking. Facing long development cycles, the client needed a streamlined platform. Our solution reduced time-to-market by 25% and improved traceability by 30%, driving innovation."
      backgroundImage={highTechBg}
      icon={faLightbulb}
      outcomes={[
        {
          title: "25% Faster Time-to-Market",
          description: "PLM streamlined R&D processes."
        },
        {
          title: "30% Improved Traceability",
          description: "Real-time component tracking enhanced quality."
        },
        {
          title: "20% Cost Savings",
          description: "Smart warehousing with EWM optimized operations."
        },
        {
          title: "100% Compliance",
          description: "Global standards adherence minimized risks."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's solutions boosted our R&D.",
        author: "High-Tech VP",
        role: "Electronics Firm"
      }}
      callToAction={{
        text: "Accelerate High-Tech Innovation",
        buttonText: "Get Started"
      }}
      inlineIcons={[
        {
          icon: faLightbulb,
          label: "Product Lifecycle Management"
        },
        {
          icon: faRoute,
          label: "Component Tracking"
        },
        {
          icon: faWarehouse,
          label: "Smart Warehousing"
        }
      ]}
    />
  );
};

export default HighTech;