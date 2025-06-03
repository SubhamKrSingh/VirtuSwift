import React, { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What industries does VirtuSwift specialize in?",
    answer: "We serve a wide range of industries including manufacturing, retail, finance, healthcare, utilities, oil & gas, high-tech, and the public sector. Our solutions are tailored for industry-specific challenges."
  },
  {
    question: "Do you offer global support and implementation?",
    answer: "Yes. VirtuSwift operates delivery centers in the U.S., Europe, and Asia, offering 24/7 support with localized expertise and scalable delivery models."
  },
  {
    question: "Can you help migrate our SAP systems to the cloud?",
    answer: "Absolutely. We specialize in SAP cloud migrations across AWS, Microsoft Azure, and Google Cloud. Our VirtuSwift Control Platform (VSCP) ensures seamless transitions with minimal downtime."
  },
  {
    question: "How does VirtuSwift ensure security and compliance?",
    answer: "We're ISO 27001 certified and implement end-to-end encryption, RBAC, and automated auditing. Our solutions comply with GDPR, HIPAA, and other global standards."
  },
  {
    question: "What is the VirtuSwift Control Platform (VSCP)?",
    answer: "VSCP is our proprietary automation platform that reduces deployment times by up to 50%, ensures zero-downtime migrations, and integrates intelligent monitoring, testing, and compliance into all SAP projects."
  },
  {
    question: "Do you support RISE with SAP and SAP BTP?",
    answer: "Yes. We help clients adopt and optimize RISE with SAP and build intelligent extensions using SAP Business Technology Platform (BTP) for innovation and agility."
  },
  {
    question: "What are the benefits of working with VirtuSwift?",
    answer: "• SAP Gold Partner with 500+ certified consultants\n• Proven results: up to 35% faster processes, 30% cost reduction\n• Industry-specific accelerators and tools\n• End-to-end ownership from strategy to support"
  },
  {
    question: "Can you provide references or case studies?",
    answer: "Yes! Visit our Case Studies section to explore real-world examples across industries, including measurable results in efficiency, compliance, and cost savings."
  },
  {
    question: "What SAP modules and services do you support?",
    answer: "We cover S/4HANA, SAP CAR, IS-U, IS-H, PLM, Logistics Business Network, Fiori UX, SAP Analytics Cloud, DevOps, integration, archiving, and much more."
  },
  {
    question: "How can I get started with VirtuSwift?",
    answer: "You can start by scheduling a free consultation or reaching out via our Contact page. We'll assess your needs and tailor a digital transformation strategy that fits your goals."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#7c3a5c]">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-lg text-gray-500 mb-12">
          Can't find the answer you're looking for? Reach out to our customer support team.
        </p>
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              style={{
                transition: 'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: mounted ? `${index * 80}ms` : '0ms',
              }}
              className="mb-6"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left bg-white rounded-2xl shadow transition-all duration-300 p-8 border-l-4 focus:outline-none ${
                  openIndex === index
                    ? 'border-[#f05a28]' // animate border color
                    : 'border-transparent hover:shadow-lg'
                }`}
                aria-expanded={openIndex === index}
                style={{
                  transition: 'border-color 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s',
                }}
              >
                <div className={`text-2xl font-bold mb-2 ${openIndex === index ? 'text-[#1a1a1a]' : 'text-[#232584]'}`}
                  style={{ transition: 'color 0.3s cubic-bezier(.4,0,.2,1)' }}
                >
                  {item.question}
                </div>
                <div
                  className={`text-lg text-gray-700 leading-relaxed transition-all duration-500 ${
                    openIndex === index
                      ? 'max-h-96 opacity-100 mt-2'
                      : 'max-h-0 opacity-0 overflow-hidden h-0'
                  }`}
                  style={{
                    transition: 'max-height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s cubic-bezier(.4,0,.2,1), margin-top 0.5s',
                  }}
                >
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">
                      {line.startsWith('•') ? (
                        <span className="flex items-center gap-2">
                          <span className="text-[#f05a28]">•</span>
                          {line.substring(1)}
                        </span>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 