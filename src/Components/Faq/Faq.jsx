"use client";
import React, { useState } from 'react';
import data from './faq.json';
import styles from './Faq.module.css';
import Image from 'next/image';
import f from '../../assets/images/farrow.svg';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className={styles.faqBg}>
      <div className={styles.faqContainer}>
        <div className={styles.headerSection}>
          <h3 className={styles.faq}>Frequently Asked Questions</h3>
          <p className={styles.faqSubtitle}>
            Find answers to common questions about our car rental services
          </p>
        </div>

        <div className={styles.faqList}>
          {data.slice(0, 5).map((item, index) => (
            <div className={styles.faqItem} key={index}>
              <div 
                className={styles.faqQuestion} 
                onClick={() => handleToggle(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleToggle(index);
                  }
                }}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={`${styles.faqArrow} ${expandedIndex === index ? styles.open : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </span>
              </div>
              
              {expandedIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

   
      </div>
    </div>
  );
};

export default Faq;