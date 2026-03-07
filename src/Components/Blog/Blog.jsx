"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import a from '../../assets/images/goa-car-rental.png';
import b from '../../assets/images/self-drive-car-goa.png';
import c from '../../assets/images/beaches-goa.png';
import { FaCalendar, FaUser, FaArrowRight, FaClock } from "react-icons/fa";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: a,
      alt: "Top 10 Places to Visit in Goa with a Self-Drive Car",
      date: "2025-07-01",
      author: "admin",
      title: "Top 10 Places to Visit in Goa with a Self-Drive Car",
      excerpt: "Discover Goa's hidden gems with the freedom of a self-drive car. Explore scenic routes, quiet beaches, and local treasures on your own time.",
      readTime: "5 min read",
      href: "/blogs/top-10-places-to-visit-goa",
      category: "Travel Guide"
    },
    {
      id: 2,
      image: b,
      alt: "Self Drive vs Taxi in Goa: Which is Better for Tourists?",
      date: "2025-06-25",
      author: "goaexpert",
      title: "Self Drive vs Taxi in Goa: Which is Better for Tourists?",
      excerpt: "Thinking of how to get around in Goa? This guide compares the flexibility of self-drive cars with the convenience of taxis to help you choose.",
      readTime: "7 min read",
      href: "/blogs/top-5-beaches-goa",
      category: "Comparison"
    },
    {
      id: 3,
      image: c,
      alt: "Best Beaches in Goa to Explore by Self Drive Car",
      date: "2025-06-15",
      author: "editor",
      title: "Best Beaches in Goa to Explore by Self Drive Car",
      excerpt: "From Baga to Palolem, discover the top beaches that are easiest to access by car—perfect for a smooth and scenic coastal ride.",
      readTime: "6 min read",
      href: "/blogs/best-beaches-by-car-goa",
      category: "Beaches"
    }
  ];

  return (
    <section className={styles.blogSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>

      <div className={styles.blogContainer}>
        {/* Section Header */}
           <span className={styles.subtitle}>Latest Insights</span>
        
        <div className={styles.sectionHeader}>
          
          <div className={styles.titleWrapper}>
             <h2 className={styles.sectionTitle}>
              <span className={styles.titleGradient}>Our Blog</span>
              <span className={styles.titleShadow}>Our Blog</span>
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <p className={styles.sectionDescription}>
            Discover expert tips, travel guides, and insights about exploring Goa with the freedom of self-drive cars.
          </p>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              {/* Category Badge */}
              <div className={styles.categoryBadge}>{post.category}</div>
              
              {/* Image Container */}
              <div className={styles.imageContainer}>
                <Link href={post.href} className={styles.imageLink}>
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.blogImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.readMore}>
                      Read More <FaArrowRight className={styles.arrowIcon} />
                    </div>
                  </div>
                </Link>
                
                {/* Floating Elements */}
                <div className={styles.floatingDot1}></div>
                <div className={styles.floatingDot2}></div>
              </div>

              {/* Content */}
              <div className={styles.blogContent}>
                {/* Meta Information */}
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <FaCalendar className={styles.metaIcon} />
                    <span className={styles.metaText}>{post.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FaUser className={styles.metaIcon} />
                    <span className={styles.metaText}>{post.author}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FaClock className={styles.metaIcon} />
                    <span className={styles.metaText}>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={styles.blogTitle}>
                  <Link href={post.href} className={styles.titleLink}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className={styles.blogExcerpt}>{post.excerpt}</p>

                {/* CTA Button */}
                <Link href={post.href} className={styles.readMoreButton}>
                  <span>Read Article</span>
                  <FaArrowRight className={styles.buttonArrow} />
                  <div className={styles.buttonHover}></div>
                </Link>
              </div>

              {/* Card Glow Effect */}
              <div className={styles.cardGlow}></div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className={styles.buttonContainer}>
          <Link href="/blogs" className={styles.viewAllButton}>
            <span>View All Articles</span>
            <FaArrowRight className={styles.viewAllArrow} />
            <div className={styles.buttonShadow}></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;