import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPills, faShieldAlt, faFlask } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import pharmaceuticalsBg from '../../assets/images/pharam-bg.jpg';

const Pharmaceuticals: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Ensuring Compliance with SAP for Life Sciences"
      subtitle="How VirtuSwift helped a global pharmaceutical company achieve FDA compliance and streamline operations"
      description="VirtuSwift helped a global pharmaceutical company achieve FDA compliance and streamline operations with SAP solutions for chemicals and life sciences. With over 20 years of SAP expertise, our team used the VirtuSwift Control Platform (VSCP) to implement batch traceability and EHS compliance. Facing stringent regulatory requirements, the client needed a secure, compliant platform. Our solution delivered 100% compliance and reduced R&D costs by 20%, ensuring safety and quality."
      backgroundImage={pharmaceuticalsBg}
      icon={faPills}
      outcomes={[
        {
          title: "100% FDA Compliance",
          description: "GxP-ready cloud hosting met all regulatory standards."
        },
        {
          title: "30% Improved Traceability",
          description: "Batch serialization ensured end-to-end quality control."
        },
        {
          title: "20% Lower R&D Costs",
          description: "SAP PLM streamlined product development processes."
        },
        {
          title: "25% Reduced Risks",
          description: "EH&S compliance minimized environmental and safety risks."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's solutions ensured our compliance.",
        author: "Pharma CIO",
        role: "Global Pharmaceutical Company"
      }}
      callToAction={{
        text: "Ready to boost innovation in life sciences?",
        buttonText: "Contact Us Today"
      }}
      inlineIcons={[
        {
          icon: faShieldAlt,
          label: "Compliance Shield"
        },
        {
          icon: faPills,
          label: "Batch Traceability"
        },
        {
          icon: faFlask,
          label: "Lab Integration"
        }
      ]}
    />
  );
};

export default Pharmaceuticals;