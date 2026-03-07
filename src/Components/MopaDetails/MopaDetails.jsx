"use client"
import React from 'react'
import styles from './MopaDetails.module.css'
import Link from 'next/link'
import About from '../About/About'
import Blog from '../Blog/Blog'
import Faq from '../Faq/Faq'
import Reviews from '../Reviews/Reviews'
import Services from '../Services/Services'
import Image from 'next/image'
import d from "../../assets/images/dabolim-airport-carrental.jpg";
import useLenis from "../hooks/useLenis";
import { FaCar, FaShieldAlt, FaHeadset, FaMapMarkerAlt, FaStar, FaCheckCircle, FaUmbrellaBeach, FaMap, FaClock } from 'react-icons/fa';

const MopaDetails = () => {
  useLenis();
  return (
    <>
      {/* Modern Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Mopa Airport</h1>
            <p className={styles.heroSubtitle}>
              Premium Self Drive Cars in North Goa - Start Your Adventure at Mopa International Airport
            </p>
            <div className={styles.breadcrumb}>
              <Link href="https://vkgoacarrental.com/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <span className={styles.breadcrumbSeparator}>→</span>
              <span className={styles.breadcrumbCurrent}>Mopa Airport - Self Drive Cars in Goa</span>
            </div>
          </div>
 
        </div>

      </div>

      {/* Main Content Section */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Text Content */}
            <div className={styles.textSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Mopa Airport</span>
                <h2 className={styles.sectionTitle}>Self Drive Car Rental at Mopa International Airport</h2>
                <div className={styles.rating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className={styles.starIcon} />
                  ))}
                  <span className={styles.ratingText}>4.9/5 (1,800+ Reviews)</span>
                </div>
              </div>

              <div className={styles.description}>
                <p>
                  Self drive car rental is now growing and trending nowadays in Mopa Airport. 
                  If you are planning your holiday in Goa and want to enjoy Northern Goa's beautiful 
                  beaches, palaces, forts, and temples, book a self drive car rental from{' '}
                  <strong>VK Goa Car Rental</strong>.
                </p>

                <div className={styles.featuresGrid}>
                  <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>Fast Pickup & Drop at Mopa</span>
                  </div>
                  <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>Explore North Goa Beaches</span>
                  </div>
                  <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>No Hidden Charges</span>
                  </div>
                  <div className={styles.featureItem}>
                    <FaCheckCircle className={styles.featureIcon} />
                    <span>24/7 Roadside Assistance</span>
                  </div>
                </div>

                <p>
                  Make the most of your trip with a self-drive car rental from Mopa Airport. 
                  Whether you're landing at Goa's Mopa International Airport (GOX) or already 
                  in the area, <strong>VK Goa Car Rental</strong> offers convenient and affordable 
                  self-drive cars for rent to help you explore North Goa's beautiful beaches, 
                  historic forts, vibrant markets, and serene temples.
                </p>

                <p>
                  At <strong>VK Goa Car Rental</strong>, we provide a wide range of vehicles, 
                  from compact cars to SUVs, all available for quick pickup and drop-off at 
                  Mopa Airport. Enjoy the freedom to travel at your own pace and discover 
                  popular spots like Arambol Beach, Vagator, Chapora Fort, Morjim, Ashwem, and more.
                </p>
              </div>

              <div className={styles.ctaSection}>
                <button className={styles.primaryButton}>
                  <FaCar className={styles.buttonIcon} />
                  Book Your Car Now
                </button>
                <button className={styles.secondaryButton}>
                  View All Vehicles
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={d}
                  alt="Mopa Airport Self Drive Car Rental in Goa"
                  className={styles.responsiveImage}
                  priority
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.badge}>
                    <FaMapMarkerAlt className={styles.badgeIcon} />
                    <span>Mopa Airport GOX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North Goa Destinations Section */}
      <section className={styles.destinationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2>Explore North Goa with Our Self Drive Cars</h2>
            <p>Discover the best destinations accessible from Mopa Airport</p>
          </div>
          
          <div className={styles.destinationsGrid}>
            <div className={styles.destinationCard}>
              <div className={styles.destinationIcon}>
                <FaUmbrellaBeach />
              </div>
              <h3>Arambol Beach</h3>
              <p>Famous hippie beach with vibrant culture and stunning sunsets</p>
              <span className={styles.distance}>~30 min drive</span>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destinationIcon}>
                <FaMap />
              </div>
              <h3>Chapora Fort</h3>
              <p>Historic fort with panoramic views of Vagator beach</p>
              <span className={styles.distance}>~25 min drive</span>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destinationIcon}>
                <FaUmbrellaBeach />
              </div>
              <h3>Vagator Beach</h3>
              <p>Picturesque beach with red cliffs and vibrant nightlife</p>
              <span className={styles.distance}>~20 min drive</span>
            </div>

            <div className={styles.destinationCard}>
              <div className={styles.destinationIcon}>
                <FaUmbrellaBeach />
              </div>
              <h3>Morjim & Ashwem</h3>
              <p>Serene beaches known for turtle nesting and Russian culture</p>
              <span className={styles.distance}>~35 min drive</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaClock className={styles.benefitIcon} />
              </div>
              <h3>Quick Airport Pickup</h3>
              <p>Fast and efficient pickup service right at Mopa Airport terminal</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaShieldAlt className={styles.benefitIcon} />
              </div>
              <h3>Fully Insured</h3>
              <p>Comprehensive insurance coverage for complete peace of mind</p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIconWrapper}>
                <FaHeadset className={styles.benefitIcon} />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support throughout your journey</p>
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
            <h2>Mopa Airport - Self Drive Cars in Goa</h2>
            
            <div className={styles.infoText}>
              <p>
                Self drive car rental in Goa is rapidly becoming the preferred choice for travelers 
                landing at Mopa Airport, thanks to its unmatched freedom, flexibility, and convenience. 
                If you're planning a holiday in Goa and want to explore the stunning beaches, vibrant 
                markets, ancient forts, and temples of North Goa at your own pace,{' '}
                <strong>VK Goa Car Rental</strong> is your trusted travel partner.
              </p>

              <div className={styles.highlightBox}>
                <h4>🚗 Why Choose Self Drive from Mopa Airport?</h4>
                <ul className={styles.benefitsList}>
                  <li>Complete freedom to explore North Goa at your own pace</li>
                  <li>Direct pickup from Mopa International Airport (GOX)</li>
                  <li>Wide range of vehicles from economy to premium SUVs</li>
                  <li>No waiting for taxis or public transport</li>
                  <li>Flexible rental periods - hourly, daily, or weekly</li>
                </ul>
              </div>

              <p>
                We provide reliable and affordable self drive car rental services directly from 
                Mopa Airport, ensuring a smooth start to your trip the moment you land. With a 
                wide fleet of well-maintained hatchbacks, sedans, and SUVs,{' '}
                <strong>VK Goa Car Rental</strong> guarantees comfort, cleanliness, and complete 
                control of your travel experience.
              </p>

              <div className={styles.bookingTip}>
                <h4>💡 Travel Smart with VK Goa</h4>
                <p>
                  Our fast pickup and drop service at Mopa Airport saves you time and eliminates 
                  the hassle of waiting for public transport or taxis. Whether you're traveling 
                  solo, with family, or in a group, we offer flexible packages with unlimited 
                  kilometers, no hidden charges, and 24/7 support.
                </p>
              </div>

              <p className={styles.conclusion}>
                Choose <strong>VK Goa Car Rental</strong> at Mopa Airport and experience Goa 
                the way it's meant to be—free, relaxed, and unforgettable. Your North Goa 
                adventure starts the moment you land at Mopa International Airport!
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

export default MopaDetails