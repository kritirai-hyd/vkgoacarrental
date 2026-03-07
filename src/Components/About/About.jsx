import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";
import s from "../../assets/images/self-drive-car-rental-goa.png";
import { FaCar, FaUsers, FaMapMarkerAlt, FaStar, FaCheck, FaArrowRight } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: <FaCar />, value: '500+', label: 'Cars Available', suffix: 'Vehicles' },
    { icon: <FaUsers />, value: '10K+', label: 'Happy Customers', suffix: 'Clients' },
    { icon: <FaMapMarkerAlt />, value: '25+', label: 'Pickup Locations', suffix: 'Spots' },
    { icon: <FaStar />, value: '4.8', label: 'Average Rating', suffix: 'Stars' }
  ];

  const features = [
    { icon: <FaCheck />, text: 'Wide Range of Vehicles' },
    { icon: <FaCheck />, text: '24/7 Customer Support' },
    { icon: <FaCheck />, text: 'Flexible Pricing Plans' },
    { icon: <FaCheck />, text: 'Airport Pickup & Drop' },
    { icon: <FaCheck />, text: 'No Hidden Charges' },
    { icon: <FaCheck />, text: 'Easy Online Booking' }
  ];

  return (
    <>
      <section className={styles.whyChooseUs}>
        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.floatingOrb1}></div>
          <div className={styles.floatingOrb2}></div>
          <div className={styles.floatingOrb3}></div>
        </div>
        
        <div className={styles.aboutContainer}>
          {/* Section Title */}  <p className={styles.subheading}>About Company</p>
         
          <div className={styles.sectionHeader}>
             
            <div className={styles.titleWrapper}>
                <h2 className={styles.heading}>
                <span className={styles.headingGradient}>Why Choose Us</span>
                <span className={styles.headingShadow}>Why Choose Us</span>
              </h2>
              <div className={styles.titleUnderline}></div>
            </div>
          </div>

          {/* Content Row */}
          <div className={styles.contentRow}>
            {/* Image Column */}
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image
                    src={s}
                    alt="Self Drive Car Rental in Goa"
                    className={styles.responsiveImg}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Image Badge */}
                <div className={styles.imageBadge}>
                  <div className={styles.badgeIcon}>🏆</div>
                  <div className={styles.badgeContent}>
                    <span className={styles.badgeTitle}>Goa's Best</span>
                    <span className={styles.badgeSubtitle}>Since 2015</span>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className={styles.floatingElement1}></div>
                <div className={styles.floatingElement2}></div>
              </div>
            </div>

            {/* Text Column */}
            <div className={styles.textColumn}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                  Discover the true beauty of Goa with the freedom and flexibility of self drive car rentals from VK Goa Car Rentals. Whether you're planning a short weekend escape or a longer coastal adventure, our Goa car rental services allow you to explore the vibrant beaches, serene villages, and historic landmarks at your own pace — no chauffeurs, no time restrictions.
           
                
              
                  With a wide range of well-maintained vehicles, from hatchbacks to premium sedans and SUVs, you can choose the perfect car to match your travel style. Drive along the scenic roads of North Goa or venture into the tranquil interiors of South Goa, all while enjoying the convenience of renting a car in Goa hassle-free.
                </p>

                <div className={styles.featuresGrid}>
                  {features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <div className={styles.featureIcon}>
                        {feature.icon}
                      </div>
                      <span className={styles.featureText}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link href="/self-drive/goa-car-rental-about/" className={styles.ctaButton}>
                  <span className={styles.buttonText}>About VK Goa Car Rentals</span>
                  <div className={styles.buttonIcon}>
                    <FaArrowRight />
                  </div>
                  <div className={styles.buttonShadow}></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.backgroundPattern}></div>
        <div className={styles.container}>
          <div className={styles.journeyHeader}>
            <h2 className={styles.journeyHeading}>
              <span>Our Journey</span>
              <span className={styles.journeySubtitle}>In Numbers</span>
            </h2>
            <p className={styles.journeyDescription}>Years of excellence in providing premium car rental services across Goa</p>
          </div>
          
          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statBox}>
                <div className={styles.statContent}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statMain}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statSuffix}>{stat.suffix}</div>
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
                <div className={styles.statGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;