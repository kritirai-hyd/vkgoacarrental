"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Plane, Clock, Headphones, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import a from '../../assets/images/vk-goa-self-drive-car-rental-goa.png'
import b from '../../assets/images/vk-goa-self-drive-car-rental.png'
import c from '../../assets/images/vk-goa-self-drive-car-rental-in-goa.png'
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:a,
      heading: "Self Drive Car Rental in Goa",
      sub: "Enjoy the freedom to explore Goa with VK Self Drive Car Rentals. Affordable, reliable, and available across all major locations including Mopa Airport and Panjim.",
    },
    {
      id: 2,
      image: b,
      heading: "Premium Fleet of Well-Maintained Cars",
      sub: "Choose from our wide range of hatchbacks, sedans, SUVs, and luxury vehicles. All cars are regularly serviced and thoroughly cleaned for your safety.",
    },
    {
      id: 3,
      image: c,
      heading: "24/7 Support & Flexible Booking Options",
      sub: "Need assistance anytime? Our support team is available 24/7. Extend your rental period easily with our flexible booking system.",
    },
  ];

  const features = [
    { 
      icon: MapPin, 
      title: "Pan-Goa Locations", 
      description: "Pick-up & drop-off available across all major locations in Goa." 
    },
    { 
      icon: Plane, 
      title: "Airport Delivery", 
      description: "Get your car delivered at Mopa or Dabolim Airport – hassle-free!" 
    },
    { 
      icon: Clock, 
      title: "Flexible Bookings", 
      description: "Need more time? Extend your rental anytime with ease." 
    },
    { 
      icon: Headphones, 
      title: "24/7 Support", 
      description: "Our team is ready to assist you around the clock, day or night." 
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* HERO SECTION WITH CAROUSEL */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContainer}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${styles.slide} ${
                  index === currentSlide ? styles.slideActive : styles.slideInactive
                }`}
              >
                <div className={styles.slideImageContainer}>
                  <Image
                    src={slide.image}
                    width={100}
                    height={100}
                    alt={slide.heading}
                    className={`${styles.slideImage} ${
                      index === currentSlide ? styles.slideImageZoom : styles.slideImageNormal
                    }`}
                  />
                  <div className={styles.gradientOverlay}></div>
                </div>
                
                <div className={styles.content}>
                  <h1 className={styles.heading}>
                    {slide.heading}
                  </h1>
                  <p className={styles.subheading}>
                    {slide.sub}
                  </p>
                <Link href="/self-drive/goa-car-rental/">  <button className={styles.bookButton}>
                    Book Your Car Now
                    <ArrowRight className={styles.buttonIcon} size={20} />
                  </button></Link>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className={styles.carouselNav}>
            <button 
              className={styles.navButton}
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className={styles.navButton}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel Dots */}
          <div className={styles.carouselDots}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentSlide ? styles.dotActive : styles.dotInactive
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES SECTION */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <article key={index} className={styles.featureCard}>
                  {/* Top accent line */}
                  <div className={styles.accentLine}></div>
                  
                  {/* Hover effect overlay */}
                  <div className={styles.hoverOverlay}></div>
                  
                  <div className={styles.featureContent}>
                    <div className={styles.iconContainer}>
                      <IconComponent 
                        size={32} 
                        className={styles.icon}
                      />
                    </div>
                    <h2 className={styles.featureTitle}>
                      {feature.title}
                    </h2>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;