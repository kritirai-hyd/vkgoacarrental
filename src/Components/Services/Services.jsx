import React from 'react';
import styles from './Services.module.css';
import { FaMapMarkerAlt, FaCar, FaHeadset, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      heading: 'Pick up anywhere in Goa',
      title: 'Smart Pick Up',
      description: 'Pick up your car from any location in Goa - airports, hotels, or your preferred spot. Our seamless pickup process gets you on the road in minutes.',
      icon: <FaMapMarkerAlt className={styles.icon} />,
      badge: 'Flexible',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      heading: 'Drop off anywhere in Goa',
      title: 'Easy Drop Off',
      description: 'Complete your journey with convenience. Drop off your vehicle at any location across Goa. No extra charges for different pickup and drop locations.',
      icon: <FaCar className={styles.icon} />,
      badge: 'Convenient',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      heading: '24/7 Support',
      title: 'Premium Support',
      description: 'Round-the-clock customer support ready to assist you. Toll-free helpline, live chat, and instant assistance for any queries or emergencies.',
      icon: <FaHeadset className={styles.icon} />,
      badge: '24/7',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const features = [
    { icon: <FaShieldAlt />, text: 'Fully Insured' },
    { icon: <FaClock />, text: 'Quick Process' },
    { icon: <FaStar />, text: 'Premium Service' }
  ];

  return (
    <section className={styles.servicesSection} aria-label="Our Services">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Premium Services</h2>
        <p className={styles.sectionSubtitle}>Experience the future of car rentals with our innovative solutions</p>
      </div>
      
      <div className={styles.container}>
        {servicesData.map((service, index) => (
          <div className={styles.card} key={index}>
            {/* Feature Badge */}
            {service.badge && (
              <span className={styles.featureBadge}>{service.badge}</span>
            )}
            
            {/* Icon Container */}
            <div className={styles.iconContainer}>
              {service.icon}
            </div>

            {/* Content */}
            <div className={styles.content}>
              <h3 className={styles.heading}>{service.heading}</h3>
              <h4 className={styles.title}>{service.title}</h4>
              <p className={styles.description}>{service.description}</p>

              {/* Additional Features */}
              <div className={styles.featuresList}>
                {features.map((feature, idx) => (
                  <span key={idx} className={styles.featureItem}>
                    {feature.icon}
                    {feature.text}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button className={styles.ctaButton}>
                <span>Learn More</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Section Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
        <div className={styles.floatingCircle3}></div>
      </div>
    </section>
  );
};

export default Services;