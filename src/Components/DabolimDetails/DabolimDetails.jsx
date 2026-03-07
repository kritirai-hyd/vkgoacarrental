"use client"
import React from 'react'
import styles from './DabolimDetails.module.css'
import Link from 'next/link'
import About from '../About/About'
import Blog from '../Blog/Blog'
import Faq from '../Faq/Faq'
import Reviews from '../Reviews/Reviews'
import Services from '../Services/Services'
import Image from 'next/image'
import m from "../../assets/images/mopa-airport-mopa-goa-190526.webp";
import useLenis from "../hooks/useLenis";
import { FaCar, FaShieldAlt, FaHeadset, FaMapMarkerAlt, FaStar, FaCheckCircle } from 'react-icons/fa';

const DabolimDetails = () => {
   useLenis();
  return (
    <>
      {/* Modern Header */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Dabolim Airport</h1>
            <p className={styles.heroSubtitle}>
              Premium Self Drive Cars in Goa - Start Your Journey Right at the Airport
            </p>
            <div className={styles.breadcrumb}>
              <Link href="https://vkgoacarrental.com/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.breadcrumbSeparator}>→</span>
              <span className={styles.breadcrumbCurrent}>Dabolim Airport - Self Drive Cars in Goa</span>
            </div>
          </div>
       
        </div>

      </div>

      {/* Main Content Section */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Image Section */}
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={m}
                  alt="Dabolim Airport Self Drive Car Rental in Goa"
                  className={styles.responsiveImage}
                  priority
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.badge}>
                    <FaCar className={styles.badgeIcon} />
                    <span>Premium Fleet</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className={styles.textSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Self Drive Cars</span>
                <h2 className={styles.sectionTitle}>Dabolim Airport Car Rental</h2>
                <div className={styles.rating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className={styles.starIcon} />
                  ))}
                  <span className={styles.ratingText}>4.9/5 (2,500+ Reviews)</span>
                </div>
              </div>

              <div className={styles.description}>
                <p>
                  At <strong>VKGoa Car Rental</strong>, we proudly offer the best Self Drive Car Rental service in Goa, 
                  directly from Dabolim Airport — the gateway to South Goa's vibrant beauty. Whether you're arriving 
                  for a business trip or a leisurely vacation, our fleet of top-quality, well-maintained self drive 
                  cars is ready and waiting.
                </p>

                <div className={styles.featuresGrid}>
                  <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>Zero Hidden Charges</span>
                  </div>
                  <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>Unlimited Kilometers</span>
                  </div>
                  <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>24/7 Support</span>
                  </div>
                  <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>Airport Pickup & Drop</span>
                  </div>
                </div>

                <p>
                  Our services are not only reliable and efficient, but also affordable and transparent. 
                  With round-the-clock support, VKGoa is the name thousands trust for car rentals in Goa. 
                  Our airport pickup and drop facility guarantees punctual delivery, so you never waste a 
                  moment of your trip.
                </p>
              </div>

              <div className={styles.ctaSection}>
                <button className={styles.primaryButton}>
                  Book Now
                </button>
                <button className={styles.secondaryButton}>
                  View Fleet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2>Why Choose VKGoa at Dabolim Airport</h2>
            <p>Experience the ultimate convenience with our premium services</p>
          </div>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaMapMarkerAlt className={styles.benefitIcon} />
              </div>
              <h3>Airport Location</h3>
              <p>Convenient pickup and drop facility right at Dabolim Airport terminal</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaShieldAlt className={styles.benefitIcon} />
              </div>
              <h3>Fully Insured</h3>
              <p>Comprehensive insurance coverage for complete peace of mind during your journey</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaHeadset className={styles.benefitIcon} />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support to assist you whenever you need help</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaCar className={styles.benefitIcon} />
              </div>
              <h3>Premium Fleet</h3>
              <p>Well-maintained, sanitized vehicles with regular quality checks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoContent}>
            <h2>Dabolim Airport - Self Drive Cars in Goa</h2>
            
            <div className={styles.infoText}>
              <p>
                <strong>VK Goa Car Rental</strong> makes it easy and convenient to book{' '}
                <strong>Self Drive Car Rental in Goa</strong>. We provide reliable self drive 
                and chauffeur-driven car rental services across Goa. Whether you're looking for 
                a luxury car, an economy model, or a family-friendly vehicle, we offer a wide 
                range of options to suit every budget and preference.
              </p>

              <div className={styles.highlightBox}>
                <h4>🚗 Your Safety is Our Priority</h4>
                <p>
                  All our vehicles are well-maintained, sanitized, and thoroughly quality-checked 
                  before each trip. We also offer professionally trained drivers for a smooth and 
                  secure journey.
                </p>
              </div>

              <p>
                Our goal is to provide flexible and travel-friendly{' '}
                <strong>Self Drive Car Rental Packages in Goa</strong> at the most competitive prices. 
                We offer both daily and monthly rental plans to match your travel needs.
              </p>

              <p>
                At <strong>VK Goa Car Rental</strong>, your comfort is our top priority. We guarantee 
                timely support and delivery, ensuring that you receive the car of your choice, exactly 
                when and where you need it. Our customer service is just a phone call away—whenever 
                you need assistance.
              </p>

              <div className={styles.bookingTip}>
                <h4>💡 Pro Tip</h4>
                <p>
                  We highly recommend booking in advance to ensure availability of the vehicle that 
                  best suits your needs, especially during peak season.
                </p>
              </div>

              <p className={styles.conclusion}>
                Choose <strong>VK Goa Car Rental</strong>—where service, safety, and satisfaction 
                come standard. Your perfect Goa adventure starts here!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Components */}
      <Services />
      <Reviews />
      <Blog />
      <Faq />
    </>
  )
}

export default DabolimDetails