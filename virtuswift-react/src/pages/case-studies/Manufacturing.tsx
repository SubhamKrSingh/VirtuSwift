import React from 'react';
import CaseStudyTemplate from '../../components/CaseStudyTemplate';
import { 
  faIndustry, 
  faGears, 
  faBoxes,
  faChartLine,
  faTablet,
  faWifi
} from '@fortawesome/free-solid-svg-icons';

// Import background image
import manufacturingBg from '../../assets/images/manufacturing-bg.jpg';

const ManufacturingCaseStudy: React.FC = () => {
  const caseStudyData = {
    title: "Transforming Manufacturing with SAP S/4HANA",
    subtitle: "How VirtuSwift helped a global automotive OEM achieve digital excellence",
    description: `VirtuSwift partnered with a global automotive OEM to modernize its operations through
      a greenfield SAP S/4HANA implementation, driving efficiency and scalability. With over
      20 years of SAP expertise, our team leveraged the VirtuSwift Control Platform (VSCP)
      to deliver a seamless migration, eliminating legacy complexities and enabling real-time
      insights. Facing challenges like fragmented supply chains and outdated ERP systems,
      the client sought a digital core to support Industry 4.0 initiatives. Our solution unified
      production, procurement, and logistics, positioning the client as a leader in smart manufacturing.`,
    backgroundImage: manufacturingBg,
    icon: faIndustry,
    outcomes: [
      {
        title: "35% Faster Order Processing",
        description: "By implementing S/4HANA's in-memory analytics, we streamlined order-to-delivery cycles, reducing processing times by 35% and improving customer satisfaction."
      },
      {
        title: "20% Lower Inventory Costs",
        description: "Our VMI integration with SAP reduced inventory costs by 20%, ensuring just-in-time delivery for critical components."
      },
      {
        title: "25% Reduced Production Delays",
        description: "SAP Digital Manufacturing Cloud (DMC) provided live production insights, cutting delays by 25% and enhancing decision-making."
      },
      {
        title: "30% Improved Worker Productivity",
        description: "Role-based Fiori apps improved worker productivity by 30%, reducing training time and errors through intuitive interfaces."
      },
      {
        title: "40% Less Equipment Downtime",
        description: "IoT integration with SAP reduced equipment downtime by 40%, extending asset life and lowering maintenance costs."
      },
      {
        title: "15% Overall Cost Reduction",
        description: "The client achieved a 15% overall cost reduction and strengthened its competitive edge through our comprehensive solution."
      }
    ],
    testimonial: {
      quote: "VirtuSwift's S/4HANA solution transformed our factory floor, bringing us into the future of manufacturing.",
      author: "John Smith",
      role: "VP of Manufacturing Operations"
    },
    callToAction: {
      text: "Discover How SAP Can Transform Your Manufacturing",
      buttonText: "Schedule a Free Consultation"
    },
    inlineIcons: [
      {
        icon: faGears,
        label: "S/4HANA Implementation"
      },
      {
        icon: faBoxes,
        label: "VMI Integration"
      },
      {
        icon: faChartLine,
        label: "Real-time Analytics"
      },
      {
        icon: faTablet,
        label: "Fiori UX"
      },
      {
        icon: faWifi,
        label: "IoT Integration"
      }
    ]
  };

  return <CaseStudyTemplate {...caseStudyData} />;
};

export default ManufacturingCaseStudy; 