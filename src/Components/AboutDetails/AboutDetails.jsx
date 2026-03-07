"use client";
import React from 'react';
import Link from 'next/link';
import { Car, Shield, Clock, Users } from 'lucide-react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Faq from '../Faq/Faq';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import useLenis from "../hooks/useLenis";
import styles from './AboutDetails.module.css';

const AboutDetails = () => {
  useLenis();

  const features = [
    {
      icon: Car,
      title: "Wide Vehicle Selection",
      description: "Choose from luxury cars, economy models, and family-friendly vehicles to suit every budget and preference."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All vehicles are well-maintained, sanitized, and thoroughly quality-checked before each trip for your safety."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our customer service is just a phone call away whenever you need assistance during your rental period."
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Experienced and certified drivers available for a smooth and secure chauffeur-driven experience."
    }
  ];

  return (
    <>
      {/* About Header */}
      <div className={styles.aboutHeader}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <div className={styles.breadcrumb}>
          <Link href="https://vkgoacarrental.com/" className={styles.homeLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>→</span>
          <span className={styles.breadcrumbCurrent}>About Us</span>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Main Content Section */}
      <section className={styles.carRentalSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            VK Goa Car Rental offers Affordable Self Drive Cars in Goa
          </h2>
          
          <div className={styles.content}>
            <p className={styles.paragraph}>
              VK Goa Car Rental makes it easy and convenient to book{' '}
              <span className={styles.highlight}>Self Drive Car Rental in Goa</span>. 
              We provide reliable self drive and chauffeur-driven car rental services across Goa. 
              Whether you're looking for a luxury car, an economy model, or a family-friendly vehicle, 
              we offer a wide range of options to suit every budget and preference.
     
              Our goal is to provide flexible and travel-friendly{' '}
              <span className={styles.highlight}>Self Drive Car Rental Packages in Goa</span>{' '}
              at the most competitive prices. We offer both daily and monthly rental plans to 
              match your travel needs.
          
              At VK Goa Car Rental, your comfort is our top priority. We guarantee timely support 
              and delivery, ensuring that you receive the car of your choice, exactly when and 
              where you need it. Our customer service is just a phone call away—whenever you 
              need assistance.
      
              Your safety and your family's safety are extremely important to us. That's why all 
              our vehicles are well-maintained, sanitized, and thoroughly quality-checked before 
              each trip. We also offer professionally trained drivers for a smooth and secure journey.
       
              When you{' '}
              <span className={styles.strongHighlight}>Self Drive Rent a Car in Goa</span>{' '}
              from VK Goa Car Rental, you're not just getting a vehicle—you're getting quality 
              service, dependable support, and a team committed to making your journey smooth 
              and memorable. We work only with experienced and certified drivers when you choose 
              a chauffeur-driven option.

              Our goal is to ensure your trip to Goa is hassle-free and enjoyable. Whether you're 
              here on vacation or business, our team is ready to help you choose the perfect rental 
              vehicle. We highly recommend booking in advance to ensure availability of the vehicle 
              that best suits your needs.
        
              Choose VK Goa Car Rental—where service, safety, and satisfaction come standard.
            </p>
          </div>

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <IconComponent />
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Ready to Explore Goa?</h3>
            <p className={styles.ctaText}>
              Book your self-drive car today and experience the freedom to explore Goa at your own pace.
            </p>
            <Link href="/book-now" className={styles.ctaButton}>
              Book Your Car Now
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <Reviews />
      <Blog />
      <Faq />
    </>
  );
};

export default AboutDetails;