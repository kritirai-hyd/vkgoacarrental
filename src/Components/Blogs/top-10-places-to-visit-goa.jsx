"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blogs.module.css";

const Top10 = () => {
  const router = useRouter();

  const blogPost = {
    id: 1,
    title: "Exploring Goa in a Self Drive Car: The Ultimate Freedom Experience",
    excerpt: "Discover the unparalleled joy of exploring Goa's hidden gems, pristine beaches, and vibrant culture at your own pace with a self-drive car rental.",
    content: `
      <p>Goa, India's beach paradise, is best experienced when you have the freedom to explore at your own rhythm. While taxis and tours have their place, nothing compares to the independence of a self-drive car. Imagine cruising along coastal roads with the windows down, stopping spontaneously at hidden beaches, and discovering local eateries that most tourists never find.</p>
      
      <h2>Why Self-Drive is the Best Way to Experience Goa</h2>
      
      <p>Goa's true magic lies beyond the popular tourist spots. With a self-drive car, you become the architect of your own adventure:</p>
      
      <ul>
        <li><strong>Complete Flexibility:</strong> Change your plans on a whim. Found a beautiful beach? Stop and enjoy it without worrying about taxi meters</li>
        <li><strong>Hidden Gems Access:</strong> Reach remote beaches, waterfalls, and villages that public transport can't access</li>
        <li><strong>Cost Effective:</strong> More affordable than hiring taxis for multiple days, especially for groups and families</li>
        <li><strong>Privacy and Comfort:</strong> Your car becomes your private space to store belongings, take breaks, and travel in comfort</li>
        <li><strong>Local Experience:</strong> Live like a local by exploring markets, cafes, and neighborhoods at your leisure</li>
      </ul>
      
      <h2>Top Self-Drive Routes in Goa You Can't Miss</h2>
      
      <h3>1. The Coastal Paradise Route</h3>
      <p><strong>Route:</strong> Panaji → Calangute → Baga → Anjuna → Vagator → Chapora Fort → Morjim → Ashwem → Arambol</p>
      <p>This iconic route takes you through North Goa's most famous beaches. Start early to catch the sunrise at Calangute, enjoy water sports at Baga, explore the hippie markets at Anjuna, and end with sunset views from Chapora Fort.</p>
      
      <h3>2. The Heritage and Culture Trail</h3>
      <p><strong>Route:</strong> Panaji → Old Goa → Divar Island → Ponda → Margao → Chandor</p>
      <p>Discover Goa's rich Portuguese heritage. Visit the magnificent churches of Old Goa (UNESCO World Heritage), take the ferry to Divar Island, explore spice plantations in Ponda, and see the grand mansions of Chandor.</p>
      
      <h3>3. The Southern Serenity Circuit</h3>
      <p><strong>Route:</strong> Margao → Colva → Benaulim → Varca → Cavelossim → Mobor → Betul → Cabo de Rama → Palolem → Agonda</p>
      <p>Experience the quieter, more pristine side of Goa. Southern beaches offer tranquility, luxury resorts, and breathtaking landscapes. Don't miss the stunning views from Cabo de Rama fort.</p>
      
      <blockquote>
        "The real Goa isn't found on tour buses or in crowded taxis. It's discovered when you take the wheel yourself, turn down an unknown lane, and find a beach that feels like it's yours alone."
      </blockquote>
      
      <h2>Essential Self-Drive Tips for Goa</h2>
      
      <h3>Documentation Requirements</h3>
      <ol>
        <li><strong>Valid Driving License:</strong> Indian license or International Driving Permit</li>
        <li><strong>ID Proof:</strong> Aadhar Card, Passport, or Voter ID</li>
        <li><strong>Age Requirement:</strong> Typically 21+ years with 1+ year driving experience</li>
      </ol>
      
      <h3>Road Safety Guidelines</h3>
      <ul>
        <li>Always wear seatbelts - it's the law and could save your life</li>
        <li>Goa has many narrow roads - drive cautiously and honk at blind curves</li>
        <li>Watch for two-wheelers - they're everywhere and often unpredictable</li>
        <li>Park only in designated areas to avoid towing</li>
        <li>Never drink and drive - penalties are severe</li>
      </ul>
      
      <h3>Best Time to Drive</h3>
      <p><strong>Early Mornings (6-9 AM):</strong> Beat the traffic and enjoy cool weather</p>
      <p><strong>Late Afternoons (3-6 PM):</strong> Perfect for beach-hopping and sunset views</p>
      <p><strong>Avoid:</strong> Lunch hours (1-3 PM) when roads are busy with locals commuting</p>
      
      <h2>Must-Visit Hidden Gems Accessible Only by Car</h2>
      
      <h3>1. Butterfly Beach</h3>
      <p>This secluded beach near Palolem is accessible only by boat or a short hike from the road. Perfect for a romantic picnic and dolphin spotting.</p>
      
      <h3>2. Netravali Wildlife Sanctuary</h3>
      <p>Escape the beaches and explore lush forests, waterfalls, and the famous bubbling lake of Netravali.</p>
      
      <h3>3. Galgibaga Turtle Beach</h3>
      <p>One of the few turtle nesting sites in Goa, this pristine beach offers tranquility and natural beauty.</p>
      
      <h3>4. Chorla Ghats</h3>
      <p>For nature lovers, the Western Ghats offer stunning viewpoints, waterfalls, and wildlife spotting opportunities.</p>
      
      <h2>Cost Breakdown: Self-Drive vs Traditional Taxis</h2>
      
      <p><strong>Self-Drive Car (24 hours):</strong> ₹1200-₹2500 depending on car type</p>
      <p><strong>Taxi (Full day tour):</strong> ₹2500-₹4000 for 8 hours/80km</p>
      <p><strong>Savings:</strong> 40-60% with self-drive, plus unlimited freedom</p>
      
      <h2>Booking Your Perfect Self-Drive Car</h2>
      
      <p>Choose your vehicle based on your travel needs:</p>
      <ul>
        <li><strong>Compact Hatchbacks:</strong> Perfect for couples, easy parking (₹1200-₹1800/day)</li>
        <li><strong>Sedans:</strong> Comfort for families, AC comfort (₹1800-₹2500/day)</li>
        <li><strong>SUVs:</strong> Groups, rough roads, luxury experience (₹2500-₹4000/day)</li>
      </ul>
      
      <p>Most rental companies offer:</p>
      <ul>
        <li>Free delivery and pickup</li>
        <li>24/7 roadside assistance</li>
        <li>Comprehensive insurance</li>
        <li>Multiple payment options</li>
      </ul>
    `,
    image: "/images/exploring-goa-self-drive.jpg",
    author: {
      name: "Priya Sharma",
      avatar: "/images/author-priya.jpg",
      bio: "Goa travel expert with 8+ years of experience exploring every corner of this paradise. Passionate about helping travelers discover the real Goa."
    },
    publishDate: "2024-01-20",
    readTime: "12 min read",
    tags: ["Self Drive Goa", "Goa Road Trip", "Car Rental Tips", "Goa Beaches", "Travel Guide"],
    category: "Travel Experiences"
  };

  const recentPosts = [
    {
      id: 2,
      title: "Top 10 Hidden Beaches in Goa Only Locals Know About",
      image: "/images/hidden-beaches-goa.jpg",
      date: "2024-01-15",
      slug: "hidden-beaches-goa"
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
    { name: "Travel Experiences", count: 15 },
    { name: "Self Drive Guides", count: 8 },
    { name: "Goa Destinations", count: 12 },
    { name: "Travel Tips", count: 10 },
    { name: "Adventure Travel", count: 6 }
  ];

  const relatedPosts = [
    {
      id: 5,
      title: "Understanding Goa's Traffic Rules: A Tourist's Guide",
      excerpt: "Navigate Goa's roads confidently with our comprehensive guide to local traffic rules and driving etiquette.",
      image: "/images/goa-traffic-guide.jpg",
      date: "2024-01-18",
      readTime: "8 min read",
      slug: "goa-traffic-rules-guide"
    },
    {
      id: 6,
      title: "Best Time to Visit Goa: Season by Season Breakdown",
      excerpt: "Plan your perfect Goan vacation with our detailed seasonal guide covering weather, festivals, and activities.",
      image: "/images/goa-seasons.jpg",
      date: "2024-01-10",
      readTime: "10 min read",
      slug: "best-time-visit-goa"
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
              <h4 className={styles.shareText}>Share this guide with fellow travelers:</h4>
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
        <h2 className={styles.relatedTitle}>Continue Your Goan Adventure</h2>
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

export default Top10;