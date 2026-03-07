'use client';
import React, { useState } from 'react';
import styles from './Contact.module.css';
import Link from 'next/link';
import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaCar, FaClock, FaShield } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "2a4813bf-45bc-4ea9-8808-15a50900af4d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We'll get back to you soon.");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Failed to send message. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.modernHeader}>
        <div className={styles.headerContent}>
          <h1>Contact Us</h1>
          <p>Get the best self-drive car rental experience in Goa. We're here to help you explore!</p>
          <div className={styles.breadcrumb}>
            <Link href="https://www.vkgoacarrental.com">Home</Link>
            <span className={styles.separator}>→</span>
            <span className={styles.current}>Contact</span>
          </div>
        </div>
        <div className={styles.headerShape}></div>
      </div>

      <div className={styles.modernContactArea}>
        <div className={styles.modernContainer}>
          {/* Heading */}
          <div className={styles.modernSectionHeading}>
            <span className={styles.sectionSubtitle}>Book Your Self-Drive Car</span>
            <h2>Ready to Explore Goa?</h2>
            <p>Contact us for the best self-drive car rental services in Goa. Flexible hours, great prices!</p>
          </div>

          <div className={styles.modernContactRow}>
            {/* Left: Contact Info */}
            <div className={`${styles.modernContactCol} ${styles.infoCol}`}>
              <div className={styles.sectionIntro}>
                <h3>Self-Drive Car Rental Info</h3>
                <p>Get in touch for quick car bookings and 24/7 road assistance</p>
              </div>

              <div className={styles.modernContactCard}>
                <div className={styles.iconWrapper}>
                  <FaLocationArrow className={styles.contactIcon} />
                </div>
                <div className={styles.contactContent}>
                  <h4>Our Location</h4>
                  <p>
                    <a
                      href="https://www.google.com/maps?q=Sateri+Plaza+No.T-2+Mapusa,+Goa+403507+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      Sateri Plaza No.T-2, Mapusa, Goa – 403507, India
                    </a>
                  </p>
                  <small>Convenient pickup location for self-drive cars</small>
                </div>
              </div>

              <div className={styles.modernContactCard}>
                <div className={styles.iconWrapper}>
                  <FaEnvelope className={styles.contactIcon} />
                </div>
                <div className={styles.contactContent}>
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:bookings@vkgoacarrental.com" className={styles.contactLink}>
                      bookings@vkgoacarrental.com
                    </a>
                  </p>
                  <small>For bookings and inquiries</small>
                </div>
              </div>

              <div className={styles.modernContactCard}>
                <div className={styles.iconWrapper}>
                  <FaPhoneAlt className={styles.contactIcon} />
                </div>
                <div className={styles.contactContent}>
                  <h4>Phone Number</h4>
                  <p>
                    <a href="tel:+918830616709" className={styles.contactLink}>
                      +91 88306 16709
                    </a>
                  </p>
                  <small>Call or WhatsApp for instant booking</small>
                </div>
              </div>

              <div className={styles.contactFeatures}>
                <div className={styles.featureItem}>
                  <span className={styles.featureDot}></span>
                  <span>24/7 Roadside Assistance</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureDot}></span>
                  <span>Flexible Rental Periods</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureDot}></span>
                  <span>Well-Maintained Cars</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureDot}></span>
                  <span>Free Delivery in Goa*</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureDot}></span>
                  <span>No Hidden Charges</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={`${styles.modernContactCol} ${styles.formCol}`}>
              <div className={styles.modernContactFormArea}>
                <form onSubmit={onSubmit}>
                  <div className={styles.modernFormRow}>
                    <div className={styles.inputGroup}>
                      <input 
                        type="text" 
                        name="name"
                        placeholder=" " 
                        required 
                        className={styles.modernInput}
                      />
                      <label className={styles.modernLabel}>Full Name*</label>
                    </div>
                    <div className={styles.inputGroup}>
                      <input 
                        type="email" 
                        name="email"
                        placeholder=" " 
                        required 
                        className={styles.modernInput}
                      />
                      <label className={styles.modernLabel}>Email Address*</label>
                    </div>
                  </div>
                  
                  <div className={styles.modernFormRow}>
                    <div className={styles.inputGroup}>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder=" " 
                        required 
                        className={styles.modernInput}
                      />
                      <label className={styles.modernLabel}>Phone Number*</label>
                    </div>
                    <div className={styles.inputGroup}>
                      <select 
                        name="car_type"
                        required 
                        className={styles.modernInput}
                        defaultValue=""
                      >
                        <option value="" disabled>Select Car Type</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="luxury">Luxury</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                      <label className={styles.modernLabel}>Preferred Car Type*</label>
                    </div>
                  </div>
                  
                  <div className={styles.modernFormRow}>
                    <div className={styles.inputGroup}>
                      <input 
                        type="date" 
                        name="start_date"
                        placeholder=" " 
                        required 
                        className={styles.modernInput}
                      />
                      <label className={styles.modernLabel}>Start Date*</label>
                    </div>
                    <div className={styles.inputGroup}>
                      <input 
                        type="date" 
                        name="end_date"
                        placeholder=" " 
                        required 
                        className={styles.modernInput}
                      />
                      <label className={styles.modernLabel}>End Date*</label>
                    </div>
                  </div>
                  
                  <div className={`${styles.inputGroup} ${styles.textareaGroup}`}>
                    <textarea 
                      name="message"
                      placeholder=" " 
                      rows="4" 
                      className={styles.modernTextarea}
                    ></textarea>
                    <label className={styles.modernLabel}>Additional Requirements (Optional)</label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`${styles.modernButton} ${isLoading ? styles.loading : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className={styles.buttonSpinner}></div>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        <FaCar className={styles.buttonIcon} />
                        Send Car Rental Inquiry
                      </>
                    )}
                  </button>
                  
                  {result && (
                    <div className={`${styles.resultMessage} ${
                      result.includes("successfully") ? styles.success : styles.error
                    }`}>
                      {result}
                    </div>
                  )}
                  
                  <div className={styles.formNote}>
                    <p>We typically respond within 30 minutes during business hours</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;