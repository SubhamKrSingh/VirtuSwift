import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faRoute, faHandshake } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import logisticsBg from '../../assets/images/logistics-bg.jpg';

const Logistics: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Enhancing Delivery with SAP Logistics Business Network"
      subtitle="How VirtuSwift optimized logistics for a global freight carrier"
      description="VirtuSwift optimized logistics for a global freight carrier using SAP Logistics Business Network (LBN). With over 20 years of SAP expertise, our team used the VirtuSwift Control Platform (VSCP) to provide real-time visibility and streamline operations. Facing delayed deliveries and inefficiencies, the client needed a networked solution. Our approach cut delivery times by 18% and reduced costs by 20%, driving supply chain excellence."
      backgroundImage={logisticsBg}
      icon={faTruck}
      outcomes={[
        {
          title: "18% Faster Deliveries",
          description: "LBN provided real-time logistics insights."
        },
        {
          title: "20% Cost Reduction",
          description: "Optimized operations lowered TCO."
        },
        {
          title: "30% Improved Supplier Performance",
          description: "Onboarding tools enhanced collaboration."
        },
        {
          title: "25% Higher Uptime",
          description: "Asset Intelligence Network (AIN) improved reliability."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's solutions transformed our supply chain.",
        author: "Logistics VP",
        role: "Global Freight Carrier"
      }}
      callToAction={{
        text: "Optimize Your Logistics with SAP",
        buttonText: "Learn More"
      }}
      inlineIcons={[
        {
          icon: faTruck,
          label: "Logistics Business Network"
        },
        {
          icon: faRoute,
          label: "Real-time Visibility"
        },
        {
          icon: faHandshake,
          label: "Supplier Collaboration"
        }
      ]}
    />
  );
};

export default Logistics;