import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faFileInvoiceDollar, faChartBar } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import publicSectorBg from '../../assets/images/publicsector-bg.jpg';

const PublicSector: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Modernizing Governance with SAP Public Sector Management"
      subtitle="How VirtuSwift enabled a municipality to enhance transparency and service delivery"
      description="VirtuSwift enabled a municipality to enhance transparency and service delivery with SAP Public Sector Management (PSM). With over 20 years of SAP expertise, our team used the VirtuSwift Control Platform (VSCP) to implement e-invoicing and budget tracking. Facing outdated systems and citizen demands, the client needed a modern platform. Our solution cut processing times by 30% and improved citizen trust, driving smart governance."
      backgroundImage={publicSectorBg}
      icon={faLandmark}
      outcomes={[
        {
          title: "30% Faster Processing",
          description: "E-invoicing streamlined procurement workflows."
        },
        {
          title: "100% Audit Compliance",
          description: "Transparent budget tracking met regulatory standards."
        },
        {
          title: "25% Improved Service Delivery",
          description: "Citizen-focused reporting boosted engagement."
        },
        {
          title: "20% Cost Savings",
          description: "Optimized operations reduced administrative costs."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's solutions improved our citizen services.",
        author: "Public Sector Director",
        role: "Municipality"
      }}
      callToAction={{
        text: "Modernize Public Sector Operations",
        buttonText: "Schedule a Consultation"
      }}
      inlineIcons={[
        {
          icon: faFileInvoiceDollar,
          label: "E-Invoicing"
        },
        {
          icon: faChartBar,
          label: "Budget Tracking"
        },
        {
          icon: faLandmark,
          label: "Public Sector Management"
        }
      ]}
    />
  );
};

export default PublicSector;