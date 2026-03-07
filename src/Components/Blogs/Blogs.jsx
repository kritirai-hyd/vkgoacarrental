"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blogs.module.css";
import { FaCalendar, FaUser, FaArrowRight, FaClock, FaTags } from "react-icons/fa";

import blogPosts from '../Blog/Blogs.json';

const Blogs = () => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Header Section */}
      <div className={styles.aboutHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Our Blog</h1>
          <p className={styles.breadcrumb}>
            <Link href="https://vkgoacarrental.com/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>→</span>
            <span className={styles.breadcrumbCurrent}>
              Blogs - Self Drive Cars in Goa
            </span>
          </p>
        </div>
        <div className={styles.headerOverlay}></div>
      </div>

      {/* Blog Section */}
      <section className={styles.blogSection}>
        {/* Animated Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.floatingOrb}></div>
          <div className={styles.floatingParticle}></div>
          <div className={styles.gradientBlob}></div>
        </div>

        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.headerBadge}>
            <FaTags className={styles.badgeIcon} />
            <span>Latest Articles</span>
          </div>

          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titlePrimary}>Insights &</span>
              <span className={styles.titleSecondary}> Guides</span>
            </h2>
            <div className={styles.titleDecoration}>
              <div className={styles.decorationLine}></div>
              <div className={styles.decorationDot}></div>
            </div>
            <p className={styles.sectionDescription}>
              Discover expert tips, travel guides, and insights about exploring Goa with the freedom of self-drive cars.
            </p>
          </div>

          {/* Blog Grid */}
          <div className={styles.blogGrid}>
            {blogPosts.map((post, index) => 
            {
              const img  = require(`../../assets/images/blogs/${post.image}`)
                 return(    
                         <article
                key={post.id}
                className={styles.blogCard}
                style={{ "--delay": index * 0.1 + "s" }}
              >
                {/* Card Glow Effect */}
                <div className={styles.cardGlow}></div>

                {/* Image Container */}
                <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                    <Link href={`/blogs/${post.url}`} className={styles.imageLink}>
                      <Image
                        src={img}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.blogImage}
                        placeholder="blur"
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.readMoreCta}>
                          <span>Read Full Article</span>
                          <FaArrowRight className={styles.ctaArrow} />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Category Badge */}
                  <div className={styles.categoryBadge}>Self Drive</div>

                  {/* Floating Elements */}
                  <div className={styles.floatingElement}></div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  {/* Meta Information */}
                  <div className={styles.metaInfo}>
                    <div className={styles.metaGroup}>
                      <div className={styles.metaItem}>
                        <FaCalendar className={styles.metaIcon} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <FaUser className={styles.metaIcon} />
                        <span>{post.username}</span>
                      </div>
                    </div>
                    <div className={styles.readTime}>
                      <FaClock className={styles.metaIcon} />
                      <span>5 min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={styles.blogTitle}>
                    <Link href={`/blogs/${post.url}`} className={styles.titleLink}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className={styles.blogExcerpt}>{post.description}</p>

                  {/* CTA Button */}
                  <Link href={`/blogs/${post.url}`} className={styles.ctaButton}>
                    <span>Continue Reading</span>
                    <div className={styles.buttonIcon}>
                      <FaArrowRight />
                    </div>
                    <div className={styles.buttonHoverEffect}></div>
                  </Link>
                </div>
              </article>
                 )
})}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;