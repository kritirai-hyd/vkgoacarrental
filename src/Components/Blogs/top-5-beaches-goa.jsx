"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blogs.module.css";

const Top5Beaches = () => {
  const router = useRouter();

  const blogPost = {
    id: 2,
    title: "Top 5 Beaches You Must Visit in Goa: From Popular Shores to Hidden Gems",
    excerpt: "Discover Goa's most stunning beaches that offer everything from vibrant parties to serene solitude. Our curated list helps you find the perfect beach for your dream vacation.",
    content: `
      <p>Goa's coastline stretches over 100 kilometers, dotted with some of the most beautiful beaches in the world. But with so many options, how do you choose which ones to visit? We've curated the ultimate list of must-visit beaches that showcase the diversity and beauty of Goa's shoreline.</p>
      
      <h2>1. Palolem Beach - The Picturesque Paradise</h2>
      
      <p>Located in South Goa, Palolem is often described as the most beautiful beach in Goa. This crescent-shaped bay with its calm, clear waters and soft white sand is surrounded by coconut palms, creating a picture-perfect tropical setting.</p>
      
      <h3>Why Visit Palolem:</h3>
      <ul>
        <li><strong>Serene Atmosphere:</strong> Perfect for relaxation and escaping crowds</li>
        <li><strong>Dolphin Spotting:</strong> Regular boat tours to see dolphins in their natural habitat</li>
        <li><strong>Beautiful Sunsets:</strong> Spectacular evening views over the Arabian Sea</li>
        <li><strong>Beach Huts:</strong> Stay in charming beachfront cottages</li>
        <li><strong>Butterfly Beach:</strong> Accessible by boat for a more secluded experience</li>
      </ul>
      
      <h3>Best For:</h3>
      <p>Couples, families, photographers, and those seeking peace and natural beauty</p>
      
      <h3>Tips:</h3>
      <p>Visit during weekdays to avoid weekend crowds from nearby cities. Don't miss the fresh seafood at the beach shacks.</p>
      
      <h2>2. Calangute Beach - The Queen of Beaches</h2>
      
      <p>As Goa's largest and most commercial beach, Calangute offers an energetic atmosphere with plenty of activities, shopping, and dining options. It's the perfect blend of natural beauty and modern amenities.</p>
      
      <h3>Why Visit Calangute:</h3>
      <ul>
        <li><strong>Water Sports Hub:</strong> Parasailing, jet-skiing, banana boat rides</li>
        <li><strong>Vibrant Shacks:</strong> Numerous beach restaurants and bars</li>
        <li><strong>Shopping Paradise:</strong> Beach markets selling everything from clothes to souvenirs</li>
        <li><strong>Lifeguard Services:</strong> Safe swimming with professional supervision</li>
        <li><strong>Central Location:</strong> Easy access to other North Goa attractions</li>
      </ul>
      
      <h3>Best For:</h3>
      <p>First-time visitors, adventure seekers, shoppers, and those who love vibrant atmospheres</p>
      
      <h3>Tips:</h3>
      <p>Bargain hard at the markets. Visit early morning for peaceful walks or late afternoon for sunset views.</p>
      
      <h2>3. Agonda Beach - The Peaceful Retreat</h2>
      
      <p>For those seeking tranquility away from the crowds, Agonda offers a pristine, three-kilometer stretch of untouched beauty. This beach is less developed, maintaining its natural charm and peaceful ambiance.</p>
      
      <h3>Why Visit Agonda:</h3>
      <ul>
        <li><strong>Quiet Environment:</strong> Minimal commercial activity</li>
        <li><strong>Turtle Nesting Site:</strong> Olive Ridley turtles nest here (November-March)</li>
        <li><strong>Long Walks:</strong> Perfect for uninterrupted beach strolls</li>
        <li><strong>Yoga Retreats:</strong> Several wellness centers offering yoga and meditation</li>
        <li><strong>Stargazing:</strong> Clear night skies away from city lights</li>
      </ul>
      
      <h3>Best For:</h3>
      <p>Nature lovers, yoga enthusiasts, writers, and anyone needing digital detox</p>
      
      <h3>Tips:</h3>
      <p>Carry cash as ATM access is limited. Book beach huts in advance during peak season.</p>
      
      <h2>4. Anjuna Beach - The Bohemian Vibe</h2>
      
      <p>Famous for its Wednesday flea market and trance parties, Anjuna retains its hippie charm while offering a unique blend of natural beauty and alternative culture.</p>
      
      <h3>Why Visit Anjuna:</h3>
      <ul>
        <li><strong>Historic Significance:</strong> Original hippie destination from the 60s</li>
        <li><strong>Flea Market:</strong> Wednesday market with international vendors</li>
        <li><strong>Rock Formations:</strong> Unique red cliffs and rock formations</li>
        <li><strong>Nightlife:</strong> Beach parties and live music venues</li>
        <li><strong>International Cuisine:</strong> Diverse food options from around the world</li>
      </ul>
      
      <h3>Best For:</h3>
      <p>Backpackers, party lovers, shoppers, and those interested in Goa's alternative culture</p>
      
      <h3>Tips:</h3>
      <p>Visit on Wednesday for the famous flea market. Explore the rocky northern end for photography.</p>
      
      <h2>5. Morjim Beach - The Russian Hideaway</h2>
      
      <p>Known as "Little Russia" due to its popularity among Russian tourists, Morjim offers a unique cultural experience alongside natural beauty and wildlife conservation efforts.</p>
      
      <h3>Why Visit Morjim:</h3>
      <ul>
        <li><strong>Olive Ridley Sanctuary:</strong> Protected turtle nesting area</li>
        <li><strong>International Flavor:</strong> Russian restaurants and signage</li>
        <li><strong>Less Crowded:</strong> More space compared to popular northern beaches</li>
        <li><strong>Chapora River:</strong> Beautiful backwaters and river activities</li>
        <li><strong>Bird Watching:</strong> Rich birdlife in the surrounding areas</li>
      </ul>
      
      <h3>Best For:</h3>
      <p>Cultural explorers, wildlife enthusiasts, and those seeking a unique Goan experience</p>
      
      <h3>Tips:</h3>
      <p>Respect the turtle nesting areas. Try authentic Russian cuisine at the local cafes.</p>
      
      <blockquote>
        "Each Goan beach has its own personality - from the lively energy of Calangute to the peaceful serenity of Agonda. The real magic happens when you find the beach that speaks to your soul."
      </blockquote>
      
      <h2>Beach Comparison Guide</h2>
      
      <h3>Crowd Levels:</h3>
      <ul>
        <li><strong>Most Crowded:</strong> Calangute, Baga</li>
        <li><strong>Moderate:</strong> Anjuna, Palolem</li>
        <li><strong>Least Crowded:</strong> Agonda, Morjim, Butterfly Beach</li>
      </ul>
      
      <h3>Best Time to Visit:</h3>
      <ul>
        <li><strong>November-February:</strong> Perfect weather, all beaches accessible</li>
        <li><strong>March-May:</strong> Hot but good for water sports</li>
        <li><strong>June-September:</strong> Monsoon season, some beaches may have rough waters</li>
        <li><strong>October:</strong> Shoulder season, less crowds</li>
      </ul>
      
      <h2>Essential Beach Tips</h2>
      
      <h3>Safety First:</h3>
      <ul>
        <li>Swim only in designated safe zones with lifeguards</li>
        <li>Heed warning flags on beaches</li>
        <li>Beware of strong currents, especially during monsoon</li>
        <li>Keep valuables secure or in hotel safe</li>
      </ul>
      
      <h3>Beach Etiquette:</h3>
      <ul>
        <li>Respect local customs and dress appropriately away from beach areas</li>
        <li>Clean up after yourself - don't litter</li>
        <li>Bargain politely at markets</li>
        <li>Respect wildlife and nesting areas</li>
      </ul>
      
      <h3>What to Pack:</h3>
      <ul>
        <li>High SPF sunscreen and after-sun lotion</li>
        <li>Beach towel or mat</li>
        <li>Reusable water bottle</li>
        <li>Beach bag with waterproof case for phone</li>
        <li>Hat and sunglasses</li>
        <li>Beach-appropriate footwear</li>
      </ul>
      
      <h2>Getting Around the Beaches</h2>
      
      <p>The best way to explore multiple beaches is by renting a:</p>
      <ul>
        <li><strong>Self-drive car:</strong> Maximum flexibility (₹1200-₹2500/day)</li>
        <li><strong>Scooter/motorcycle:</strong> Easy parking, fun experience (₹300-₹500/day)</li>
        <li><strong>Taxi:</strong> Comfortable but more expensive (₹2000-₹3500/day)</li>
        <li><strong>Local buses:</strong> Budget option but less convenient</li>
      </ul>
      
      <p>Most beaches in North Goa are within 30-60 minutes of each other, while South Goa beaches are more spread out but generally less crowded.</p>
    `,
    image: "/images/top5-beaches-goa.jpg",
    author: {
      name: "Punit Rai",
      avatar: "/images/author-priya.jpg",
      bio: "Goa beach expert with 6+ years of exploring every shoreline. Passionate about sustainable tourism and helping travelers find their perfect beach escape."
    },
    publishDate: "2024-01-25",
    readTime: "15 min read",
    tags: ["Goa Beaches", "Palolem", "Calangute", "Agonda", "Anjuna", "Morjim", "Beach Guide"],
    category: "Goa Destinations"
  };

  const recentPosts = [
    {
      id: 1,
      title: "Exploring Goa in a Self Drive Car: The Ultimate Freedom Experience",
      image: "/images/exploring-goa-self-drive.jpg",
      date: "2024-01-20",
      slug: "self-drive-goa"
    },
    {
      id: 3,
      title: "Monsoon Magic: Why Goa is Beautiful in the Rains",
      image: "/images/monsoon-goa.jpg",
      date: "2024-01-12",
      slug: "monsoon-goa-beauty"
    },
    {
      id: 4,
      title: "Goa on a Budget: Smart Travel Tips for 2024",
      image: "/images/budget-goa.jpg",
      date: "2024-01-08",
      slug: "goa-budget-tips"
    }
  ];

  const categories = [
    { name: "Goa Destinations", count: 12 },
    { name: "Beach Guides", count: 8 },
    { name: "Travel Experiences", count: 15 },
    { name: "Travel Tips", count: 10 },
    { name: "Adventure Travel", count: 6 }
  ];

  const relatedPosts = [
    {
      id: 5,
      title: "Top 10 Hidden Beaches in Goa Only Locals Know About",
      excerpt: "Discover secret shores and secluded coves that most tourists never find in Goa.",
      image: "/images/hidden-beaches-goa.jpg",
      date: "2024-01-15",
      readTime: "10 min read",
      slug: "hidden-beaches-goa"
    },
    {
      id: 6,
      title: "Beach Safety in Goa: Essential Tips Every Tourist Should Know",
      excerpt: "Stay safe while enjoying Goa's beautiful beaches with our comprehensive safety guide.",
      image: "/images/beach-safety-goa.jpg",
      date: "2024-01-18",
      readTime: "8 min read",
      slug: "goa-beach-safety"
    }
  ];

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className={styles.blogPost}>
      {/* Floating Background Elements */}
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>
      <div className={styles.floatingElement}></div>

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <Link href="/blogs" className={styles.breadcrumbLink}>
          Blog
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{blogPost.title}</span>
      </nav>

      <div className={styles.blogContent}>
        {/* Main Article */}
        <main className={styles.article}>
          <div className={styles.articleHeader}>
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className={styles.articleImage}
            />
            <div className={styles.imageOverlay}>
              <div className={styles.readTimeBadge}>
                {blogPost.readTime}
              </div>
            </div>
          </div>
          
          <div className={styles.articleContent}>
            <div className={styles.articleMeta}>
              <div className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {new Date(blogPost.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              <div className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {blogPost.readTime}
              </div>
              
              <div className={styles.metaItem}>
                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                By {blogPost.author.name}
              </div>
            </div>

            <h1 className={styles.articleTitle}>{blogPost.title}</h1>
            
            <p className={styles.articleExcerpt}>{blogPost.excerpt}</p>
            
            <div 
              className={styles.articleBody}
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            <div className={styles.articleTags}>
              {blogPost.tags.map((tag, index) => (
                <Link key={index} href={`/blogs?tag=${tag.toLowerCase().replace(' ', '-')}`} className={styles.tag}>
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Share Section */}
            <div className={styles.shareSection}>
              <h4 className={styles.shareText}>Share this beach guide with fellow travelers:</h4>
              <div className={styles.shareButtons}>
                <button 
                  className={`${styles.shareButton} ${styles.shareButtonFacebook}`}
                  onClick={() => handleShare('facebook')}
                  aria-label="Share on Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                
                <button 
                  className={`${styles.shareButton} ${styles.shareButtonTwitter}`}
                  onClick={() => handleShare('twitter')}
                  aria-label="Share on Twitter"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                
                <button 
                  className={`${styles.shareButton} ${styles.shareButtonLinkedin}`}
                  onClick={() => handleShare('linkedin')}
                  aria-label="Share on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                
                <button 
                  className={`${styles.shareButton} ${styles.shareButtonWhatsapp}`}
                  onClick={() => handleShare('whatsapp')}
                  aria-label="Share on WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Author Widget */}
          <div className={styles.sidebarWidget}>
            <h3 className={styles.widgetTitle}>About the Author</h3>
            <div className={styles.authorInfo}>
              <img
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                className={styles.authorAvatar}
              />
              <div className={styles.authorDetails}>
                <h4 className={styles.authorName}>{blogPost.author.name}</h4>
                <p className={styles.authorBio}>{blogPost.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Recent Posts Widget */}
          <div className={styles.sidebarWidget}>
            <h3 className={styles.widgetTitle}>Recent Guides</h3>
            <div className={styles.recentPosts}>
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`} className={styles.recentPost}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.recentPostImage}
                  />
                  <div className={styles.recentPostContent}>
                    <h4 className={styles.recentPostTitle}>{post.title}</h4>
                    <span className={styles.recentPostDate}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories Widget */}
          <div className={styles.sidebarWidget}>
            <h3 className={styles.widgetTitle}>Explore Categories</h3>
            <div className={styles.categoryList}>
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={`/blogs?category=${category.name.toLowerCase().replace(' ', '-')}`}
                  className={styles.categoryItem}
                >
                  <span>{category.name}</span>
                  <span className={styles.categoryCount}>{category.count}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      <section className={styles.relatedPosts}>
        <h2 className={styles.relatedTitle}>More Beach Adventures</h2>
        <div className={styles.relatedGrid}>
          {relatedPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className={styles.relatedCard}>
              <img
                src={post.image}
                alt={post.title}
                className={styles.relatedCardImage}
              />
              <div className={styles.relatedCardContent}>
                <h3 className={styles.relatedCardTitle}>{post.title}</h3>
                <p className={styles.relatedCardExcerpt}>{post.excerpt}</p>
                <div className={styles.relatedCardMeta}>
                  <span>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Top5Beaches;