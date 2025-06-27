import React, { useState, useEffect } from 'react';
import AssessmentForm from './assessment/AssessmentForm';

const assessmentQuestions = [
  'Is your cloud spending aligned with your expectations, and is it predictable each month?',
  'Have you successfully reduced technical debt and redirected your spending towards innovations that propel your business forward?',
  'Are you taking advantage of the soft benefits of cloud adoption, such as flexibility, scalability, availability, and recoverability?',
  'Do you have a clear understanding of your cloud security posture and your risk exposure?',
  'Are you effectively using your cloud partners to drive innovation and accelerate time to market?'
];

const assessmentPopupContent = {
  title: 'VirtuSwift Cloud Journey Self-Assessment',
  intro: `As many organizations progress in their cloud journeys, the architectural and migration decisions made, operational models used, and the pace of cloud innovation can leave teams feeling underwhelmed or uncertain about their investments. Ask yourself:`,
  questions: assessmentQuestions,
  outro: `If you answered "no" to any of these questions, you're not alone. Take our quick self-assessment and get VirtuSwift's expert guidance on turning your cloud vision into reality.`
};

const AssessmentPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('assessmentShown')) {
      const timer = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem('assessmentShown', 'true');
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;
  // If expanded, show modal overlay centered
  if (expanded) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(30, 34, 60, 0.38)',
        zIndex: 2200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 0,
          boxShadow: '0 8px 32px rgba(35,61,196,0.13)',
          width: 600,
          height: '90vh',
          minWidth: 0,
          padding: 0,
          position: 'relative',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <button
            onClick={() => setExpanded(false)}
            style={{
              position: 'absolute',
              top: 12,
              right: 16,
              background: 'transparent',
              border: 'none',
              color: '#3a3dc4',
              fontSize: 26,
              cursor: 'pointer',
              padding: 0,
              lineHeight: 1,
              zIndex: 3,
            }}
            aria-label="Close assessment popup"
          >
            ×
          </button>
          <AssessmentForm />
        </div>
      </div>
    );
  }
  // Not expanded: show vertical bar at right
  return (
    <div style={{
      position: 'fixed',
      bottom: 300,
      right: 32,
      zIndex: 2100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      minWidth: 0,
      width: 'auto',
      pointerEvents: 'auto',
    }}>
      <div style={{ position: 'relative', width: 48, height: 220 }}>
        <button
          onClick={() => setVisible(false)}
          aria-label="Close assessment bar"
          style={{
            position: 'absolute',
            top: 4,
            right: 4,
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: 22,
            cursor: 'pointer',
            zIndex: 2,
            padding: 0,
            lineHeight: 1,
          }}
        >
          ×
        </button>
        <button
          onClick={() => setExpanded(true)}
          style={{
            background: '#3a3dc4',
            color: '#fff',
            border: 'none',
            borderRadius: 0,
            width: 48,
            height: 220,
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontSize: 14,
            fontWeight: 700,
            boxShadow: '0 4px 16px rgba(35,61,196,0.13)',
            cursor: 'pointer',
            textAlign: 'center',
            letterSpacing: 2,
            transition: 'background 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'uppercase',
            lineHeight: 1.2,
            padding: 0,
            wordBreak: 'break-word',
          }}
        >
          Take the VirtuSwiftAssessment
        </button>
      </div>
    </div>
  );
};

export default AssessmentPopup; 