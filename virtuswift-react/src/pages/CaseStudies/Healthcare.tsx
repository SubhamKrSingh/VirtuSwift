import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faShieldAlt, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import healthcareBg from '../../assets/images/healthcare-bg.jpg';

const Healthcare: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Unifying Patient Care with SAP IS-H"
      subtitle="How VirtuSwift helped a hospital chain unify patient records and achieve HIPAA compliance"
      description="VirtuSwift helped a hospital chain unify patient records and achieve HIPAA compliance with SAP IS-H and HL7/FHIR integration. With over 20 years of SAP expertise, our team used the VirtuSwift Control Platform (VSCP) to streamline scheduling and claims processing. Facing fragmented data and compliance challenges, the client needed a secure platform. Our solution accelerated claims by 30% and reduced costs by 20%, improving patient outcomes."
      backgroundImage={healthcareBg}
      icon={faHospital}
      outcomes={[
        {
          title: "30% Faster Claims Processing",
          description: "HL7/FHIR integration streamlined workflows."
        },
        {
          title: "100% HIPAA Compliance",
          description: "Secure data archiving met regulatory standards."
        },
        {
          title: "20% Cost Reduction",
          description: "Optimized administrative processes lowered TCO."
        },
        {
          title: "25% Improved Care Coordination",
          description: "Unified patient data enhanced outcomes."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's solutions improved our patient care.",
        author: "Hospital CIO",
        role: "Healthcare Provider"
      }}
      callToAction={{
        text: "Enhance Healthcare with SAP",
        buttonText: "Request a Demo"
      }}
      inlineIcons={[
        {
          icon: faHospital,
          label: "Medical Records"
        },
        {
          icon: faShieldAlt,
          label: "HIPAA Compliance"
        },
        {
          icon: faExchangeAlt,
          label: "HL7/FHIR Integration"
        }
      ]}
    />
  );
};

export default Healthcare;