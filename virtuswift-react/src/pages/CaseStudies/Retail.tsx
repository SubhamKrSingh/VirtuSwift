import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChartLine, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
// Import the image
import retailBg from '../../assets/images/retail-bg.jpg';

const Retail: React.FC = () => {
  return (
    <CaseStudyTemplate
      title="Boosting Retail Efficiency with SAP CAR and S/4HANA"
      subtitle="How VirtuSwift transformed a global fashion retail chain with SAP Customer Activity Repository and S/4HANA Retail modules"
      description="VirtuSwift collaborated with a global fashion retail chain to enhance inventory accuracy and customer experience using SAP Customer Activity Repository (CAR) and S/4HANA Retail modules. With over 20 years of SAP expertise, our team deployed the VirtuSwift Control Platform (VSCP) to integrate omni-channel data and streamline operations. Facing challenges like inconsistent inventory and fragmented customer insights, the client needed a unified platform to drive sales and loyalty. Our solution delivered real-time analytics and seamless POS integration, transforming retail operations."
      backgroundImage={retailBg}
      icon={faShoppingCart}
      outcomes={[
        {
          title: "98% Inventory Accuracy",
          description: "SAP CAR's real-time data unification improved inventory tracking, reducing stockouts by 30%."
        },
        {
          title: "25% Higher Conversions",
          description: "Dynamic pricing and promotion engines increased sales margins by 15%, boosting conversions."
        },
        {
          title: "Fiori-Based POS Integration",
          description: "Mobile-ready Fiori apps streamlined checkout, cutting transaction times by 20%."
        },
        {
          title: "Real-Time Customer Insights",
          description: "CAR's analytics enabled personalized marketing, improving customer retention by 25%."
        }
      ]}
      testimonial={{
        quote: "VirtuSwift's retail solutions redefined our customer experience.",
        author: "Retail CEO",
        role: "Global Fashion Retail Chain"
      }}
      callToAction={{
        text: "Ready to transform your retail operations with SAP?",
        buttonText: "Contact Us Today"
      }}
      inlineIcons={[
        {
          icon: faShoppingCart,
          label: "Omni-channel Retail"
        },
        {
          icon: faChartLine,
          label: "Analytics Dashboard"
        },
        {
          icon: faMobileAlt,
          label: "POS Integration"
        }
      ]}
    />
  );
};

export default Retail;