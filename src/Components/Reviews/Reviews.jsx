"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import reviewData from "./Reviews.json";
import star from "../../assets/images/star.png";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      const cardWidth = 420 + 32; // card width + gap
      const amount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
      
      setCurrentIndex(prev => {
        if (direction === "left") {
          return prev > 0 ? prev - 1 : reviewData.length - 1;
        } else {
          return prev < reviewData.length - 1 ? prev + 1 : 0;
        }
      });
    }
  }, []);

  const scrollToIndex = useCallback((index) => {
    if (scrollRef.current) {
      const cardWidth = 420 + 32; // card width + gap
      scrollRef.current.scrollTo({ 
        left: index * cardWidth, 
        behavior: "smooth" 
      });
      setCurrentIndex(index);
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => scroll("right"), 4000);
    }
  }, [scroll, isAutoPlaying]);

  const stopAutoScroll = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  return (
    <section className={styles.featuredReview}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>
            Real experiences from real customers who chose VK Goa Car Rentals
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Left Arrow */}
          <button
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={() => scroll("left")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Previous reviews"
          >
            <svg 
              className={styles.arrowIcon} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>

          <div
            className={styles.carouselTrack}
            ref={scrollRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {reviewData.map((item, index) => {
              const reviewImg = require(`../../assets/images/${item.image}`);
              return (
                <div className={styles.reviewCard} key={item.id}>
                  <div className={styles.reviewContent}>
                    <div className={styles.quoteIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,17h3l2-4V7h-6v6h3M6,17h3l2-4V7H5v6h3"/>
                      </svg>
                    </div>
                    <p className={styles.reviewText}>{item.review}</p>
                  </div>
                  
                  <div className={styles.reviewFooter}>
                    <div className={styles.reviewerInfo}>
                      <div className={styles.reviewImgContainer}>
                        <Image
                          src={reviewImg}
                          alt={item.name}
                          className={styles.reviewImg}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className={styles.reviewDetails}>
                        <h4 className={styles.reviewName}>{item.name}</h4>
                        <span className={styles.reviewPara}>{item.para}</span>
                      </div>
                    </div>
                    <div className={styles.ratingSection}>
                      <Image 
                        src={star} 
                        alt="Rating stars" 
                        className={styles.starRating} 
                        width={120} 
                        height={24} 
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={() => scroll("right")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Next reviews"
          >
            <svg 
              className={styles.arrowIcon} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
        </div>

        {/* Scroll Indicators */}
        <div className={styles.scrollIndicators}>
          {reviewData.map((_, index) => (
            <div
              key={index}
              className={`${styles.scrollDot} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => scrollToIndex(index)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;