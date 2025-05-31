import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import utilitiesBg from '../../assets/images/utilities-bg.jpg';

const Utilities: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Optimizing Meter-to-Cash with SAP IS-U"
      subtitle="How VirtuSwift empowered a leading utility provider to streamline operations and enhance customer engagement"
      description="VirtuSwift empowered a leading utility provider to streamline its meter-to-cash processes using SAP IS-U and S/4HANA Utilities. With over 20 years of SAP expertise, our team leveraged the VirtuSwift Control Platform (VSCP) to integrate smart meter data and enhance customer engagement. Facing challenges like billing inaccuracies and outages, the client needed a modern platform to improve efficiency and sustainability. Our solution reduced outages by 40% and boosted billing accuracy, driving operational excellence."
      backgroundImage={utilitiesBg}
      icon={faBolt}
      outcomes={[
        {
          title: "40% Fewer Outages",
          description: "IoT-enabled predictive maintenance minimized disruptions, improving service reliability."
        },
        {
          title: "25% Improved Billing Accuracy",
          description: "Smart meter integration ensured accurate billing, reducing disputes by 30%."
        },
        {
          title: "30% Higher Customer Engagement",
          description: "A customer portal enhanced user experience, increasing satisfaction."
        },
        {
          title: "20% Cost Reduction",
          description: "Optimized energy portfolio management lowered operational costs."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's utilities solutions transformed our operations.",
        author: "Utility CIO",
        role: "Leading Utility Provider"
      }}
      callToAction={{
        text: "Ready to energize your utility operations?",
        buttonText: "Contact Us Today"
      }}
      inlineIcons={[
        {
          icon: faBolt,
          label: "Smart Meter Integration"
        },
        {
          icon: faChartLine,
          label: "Energy Analytics"
        },
        {
          icon: faUsers,
          label: "Customer Portal"
        }
      ]}
    />
  );
};

export default Utilities;