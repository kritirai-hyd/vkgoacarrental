import React from "react";
import { Car, MapPin, Clock, Shield, Phone, MessageCircle } from 'lucide-react';
import styles from './Airport.module.css';

const Airport = () => {
  const features = [
    { icon: Car, text: "Wide range of vehicles" },
    { icon: MapPin, text: "Airport pickup & drop" },
    { icon: Clock, text: "24/7 service available" },
    { icon: Shield, text: "Fully insured cars" }
  ];

  const airports1 = [
    {
      name: "Dabolim Airport",
      code: "",
      image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: [
        "Looking for the best self drive car rentals at Goa Dabolim Airport? VKGOA Car Rental offers a seamless and reliable car rental experience for travelers arriving at Dabolim. Whether you're on a business trip or vacation, we make it easy to rent a car at Goa Airport without any hassles.",
        "We specialize in self drive car hire in Goa, offering a wide range of vehicles including hatchbacks, sedans, SUVs, and luxury cars—all available directly from Dabolim Airport pickup. With VKGOA Car Rental, you can enjoy complete freedom to explore popular beaches, hidden gems, and scenic drives throughout South Goa and North Goa."
      ]
    }
  ];
  const airports2 = [
  
    {
      name: "Mopa Airport",
    
      image: "https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: [
        "Self drive car rental is now growing and trending at Mopa Airport. If you're planning your holiday in Goa and want to enjoy northern Goa beaches, palaces, forts and temples, book a self drive car rental from VK Goa Car Rental.",
        "We have cars for rent in Mopa with fast pickup and drop facility. Make the most of your trip with a self-drive car rental from Mopa Airport. At VK Goa Car Rental, we provide a wide range of vehicles, from compact cars to SUVs, all available for quick pickup and drop-off at Mopa Airport."
      ]
    }
  ];
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.headerBackground}></div>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            Airport Self Drive in Goa
          </h1>
          <p className={styles.subtitle}>
            Experience seamless car rental services at both Goa airports with premium vehicles and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Airport Sections */}
      {airports1.map((airport, index) => (
        <section 
          key={airport.code} 
          className={`${styles.airportSection} ${
            index % 2 === 0 ? styles.airportSectionWhite : styles.airportSectionGradient
          }`}
        >
          <div className={styles.airportContainer}>
            <h2 className={styles.airportTitle}>
              {airport.name}
            </h2>
            
            <div className={styles.airportGrid}>
               {/* Image Column */}
              <div className={`${styles.imageColumn} ${
                index % 2 === 1 ? styles.imageColumnReversed : ''
              }`}>
                <div className={styles.imageContainer}>
                  <span className={styles.airportBadge}>
                    {airport.name} {airport.code}
                  </span>
                  <img
                    src={airport.image}
                    alt={`Self drive car rental at ${airport.name}`}
                    className={styles.airportImage}
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className={`${styles.textColumn} ${
                index % 2 === 1 ? styles.textColumnReversed : ''
              }`}>
                {airport.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}

                <div className={styles.featuresGrid}>
                  {features.map((feature, fIndex) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={fIndex} className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                          <IconComponent size={20} />
                        </div>
                        <span className={styles.featureText}>{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

             
            </div>
            
          </div>
        </section>
      ))}
  {/* Airport Sections */}
      {airports2.map((airport, index) => (
        <section 
          key={airport.code} 
          className={`${styles.airportSection2} ${
            index % 2 === 0 ? styles.airportSectionWhite2 : styles.airportSectionGradient
          }`}
        >
          <div className={styles.airportContainer}>
            <h2 className={styles.airportTitle}>
              {airport.name}
            </h2>
            
            <div className={styles.airportGrid}>
              {/* Text Column */}
              <div className={`${styles.textColumn} ${
                index % 2 === 1 ? styles.textColumnReversed : ''
              }`}>
                {airport.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}

                <div className={styles.featuresGrid}>
                  {features.map((feature, fIndex) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={fIndex} className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                          <IconComponent size={20} />
                        </div>
                        <span className={styles.featureText}>{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Image Column */}
              <div className={`${styles.imageColumn} ${
                index % 2 === 1 ? styles.imageColumnReversed : ''
              }`}>
                <div className={styles.imageContainer}>
                  <span className={styles.airportBadge}>
                    {airport.name} {airport.code}
                  </span>
                  <img
                    src={airport.image}
                    alt={`Self drive car rental at ${airport.name}`}
                    className={styles.airportImage}
                  />
                </div>
              </div>
            </div>
            
          </div>
        </section>
      ))}
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            Ready to Explore Goa?
          </h2>
          <p className={styles.ctaText}>
            Book your self-drive car today and experience the freedom to explore Goa at your own pace. 
            Available at both Dabolim and Mopa airports.
          </p>
          
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              <Phone size={20} />
              Book Now
            </button>
            
            <button className={styles.secondaryButton}>
              <MessageCircle size={20} />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Airport;