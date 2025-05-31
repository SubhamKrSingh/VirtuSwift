import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import financeBg from '../../assets/images/finance-bg.jpg';

const Finance: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Accelerating Financial Closes with SAP S/4HANA Finance"
      subtitle="How VirtuSwift transformed financial operations for a leading banking institution"
      description="VirtuSwift transformed financial operations for a leading banking institution with SAP S/4HANA Finance and Fioneer. With over 20 years of SAP expertise, our team used the VirtuSwift Control Platform (VSCP) to automate financial closes and ensure IFRS compliance. Facing lengthy close cycles and regulatory pressures, the client needed a modern platform. Our solution cut close times by 8 days and improved profitability by 15%, driving financial excellence."
      backgroundImage={financeBg}
      icon={faMoneyBillTrendUp}
      outcomes={[
        {
          title: "8-Day Faster Closes",
          description: "Automated financial close processes streamlined reporting."
        },
        {
          title: "15% Higher Profitability",
          description: "Real-time analytics optimized loan and asset management."
        },
        {
          title: "100% IFRS Compliance",
          description: "Robust configurations ensured regulatory adherence."
        },
        {
          title: "20% Cost Reduction",
          description: "Streamlined operations lowered TCO."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's finance solutions transformed our reporting.",
        author: "Banking CIO",
        role: "Leading Banking Institution"
      }}
      callToAction={{
        text: "Ready to accelerate your financial transformation?",
        buttonText: "Contact Us Today"
      }}
      inlineIcons={[
        {
          icon: faMoneyBillTrendUp,
          label: "Financial Analytics"
        },
        {
          icon: faShieldAlt,
          label: "Compliance Shield"
        },
        {
          icon: faChartLine,
          label: "Analytics Dashboard"
        }
      ]}
    />
  );
};

export default Finance;