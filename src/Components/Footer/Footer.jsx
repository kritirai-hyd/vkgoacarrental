"use client";
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaCar,

  FaBlog,
  FaPhone,


  FaFileContract,
    FaHome,
  FaQuestionCircle,
  FaShieldAlt,

  FaUser
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const citiesData = [
    {
      state: "Kerala",
      cities: [
        "Cochin", "Cochin International Airport", "Calicut", 
        "Calicut International Airport", "Trivandrum", "Trivandrum International Airport",
        "Tirur", "Thalassery", "Kottayam", "Malappuram", "Kannur", "Kottakkal"
      ]
    },
    {
      state: "Tamilnadu",
      cities: [
        "Chennai", "Chennai Airport"
      ]
    },
    {
      state: "Telangana",
      cities: [
        "Hyderabad", "Hyderabad International Airport"
      ]
    },
    {
      state: "Karnataka",
      cities: [
        "Bangalore"
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About Us", href: "/self-drive/goa-car-rental-about", icon: <FaUser /> },
    { name: "Car Rental", href: "/self-drive/goa-car-rental", icon: <FaCar /> },
    { name: "Blog", href: "/blogs", icon: <FaBlog /> },
    { name: "Contact", href: "/self-drive/goa-car-rental-contact", icon: <FaPhone /> }
  ];

  const helpfulLinks = [
 {
    id: 1,
    name: "Airport",
    href: "/",
    icon: <FaHome />, // Represents home or main page
  },
  {
    id: 2,
    name: "FAQs",
    href: "/frequently-asked-questions",
    icon: <FaQuestionCircle />, // Represents questions/help
  },
  {
    id: 3,
    name: "Privacy Policy",
    href: "/privacy-policy",
    icon: <FaShieldAlt />, // Represents security/privacy
  },
  {
    id: 4,
    name: "Terms of Use",
    href: "/terms-and-conditions",
    icon: <FaFileContract />, // Represents terms or agreements
  },
  {
    id: 5,
    name: "Help",
    href: "/help",
    icon: <FaUser />, // Can represent help/user support
  }
  ];

  return (
    <>
      {/* Cities Section */}
      {/* <section className={styles.citiesSection}>
        <div className={styles.citiesContainer}>
          <div className={styles.citiesHeader}>
            <h2 className={styles.citiesTitle}>Self Drive Cars Across India</h2>
            <p className={styles.citiesSubtitle}>Explore our services in major cities and airports nationwide</p>
          </div>
          
          <div className={styles.citiesGrid}>
            {citiesData.map((stateData, index) => (
              <div key={index} className={styles.stateGroup}>
                <div className={styles.stateHeader}>
                  <div className={styles.stateIcon}>
                    <FaCar />
                  </div>
                  <h3 className={styles.stateName}>{stateData.state}</h3>
                </div>
                <div className={styles.cityList}>
                  {stateData.cities.map((city, cityIndex) => (
                    <Link 
                      key={cityIndex} 
                      href={`/${stateData.state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className={styles.cityLink}
                    >
                      <span className={styles.cityIcon}>
                        <FaCar />
                      </span>
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerContainer}>
            {/* Company Info */}
            <section className={`${styles.footerSection} ${styles.companySection}`}>
              <div className={styles.logoContainer}>
                <Image 
                  src={logo} 
                  width={200} 
                  height={80} 
                  alt="VK Goa Car Rentals Logo"
                  className={styles.logo}
                />
              </div>
              <p className={styles.companyDescription}>
                Experience the ease of renting self drive cars in Goa with VK Goa Car Rentals. 
                We provide freedom to explore the coastal state at your own pace. You can plan 
                your itinerary and stop at various tourist attractions or several off beaten 
                tracks without worrying about transportation.
              </p>
              
              <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/vkgoacarrental" className={styles.socialLink} aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://vkgoacarrental.com/" className={styles.socialLink} aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://vkgoacarrental.com/" className={styles.socialLink} aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/vk-goa-car-rental" className={styles.socialLink} aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://vkgoacarrental.com/" className={styles.socialLink} aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </section>

            {/* Quick Links */}
            <section className={styles.footerSection}>
              <h3 className={styles.sectionHeader}>Quick Links</h3>
              <ul className={styles.linksList}>
                {quickLinks.map((link, index) => (
                  <li key={index} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Helpful Links */}
            <section className={styles.footerSection}>
              <h3 className={styles.sectionHeader}>Helpful Links</h3>
              <ul className={styles.linksList}>
                {helpfulLinks.map((link, index) => (
                  <li key={index} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact & App Download */}
            <section className={styles.footerSection}>
              <h3 className={styles.sectionHeader}>Get in Touch</h3>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Address</span>
                    <span className={styles.contactValue}>
                      Sateri Plaza No.T-2 Mapusa, Goa. 403507 India
                    </span>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Email</span>
                    <Link href="mailto:support@vkgoacarrental.com" className={`${styles.contactValue} ${styles.contactLink}`}>
                      support@vkgoacarrental.com
                    </Link>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <FaPhoneAlt className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Phone</span>
                    <Link href="tel:+918830616709" className={`${styles.contactValue} ${styles.contactLink}`}>
                      +91 8830616709
                    </Link>
                  </div>
                </div>
              </div>

        
            </section>
          </div>
        </div>
  <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
    <Link href="https://www.vkgoacarrental.com">
           <p style={{textAlign:"center"}}>self drive car rental near me| vk goa car rental | self drive in mopa airport| vk goa car rental| self drive cars rentals in goa| self drive cars rental in goa| self drive car rental goa| self drive car rental in mopa airport| self drive car rental mopa airport| car rental goa| car rentals goa| self drive car rentals goa| self drive car rental goa| self drive car rental near me| self drive car rentals near me| self drive car rental in goa airport| self drive car rental goa airport| self drive rental dabolim airport| best self drive car rental in goa| self drive car rental in goa airport| self drive car rental in south goa| self drive car rental goa airport| book self drive car in goa| mopa airport self drive car rental| goa self drive car rental| self drive thar in goa| self drive car rental palolem beach| self drive car rental cola beach| self drive car rental varca beach| self drive car rental agonda beach| self drive car rental cavelossim beach| self drive cars in south goa|</p>
     </Link>     </div>
        </div>
        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <div className={styles.footerText}>
              <p>
                © 2022-{currentYear}{" "}
                <Link href="/" className={styles.brandLink}>
                  VK Goa Car Rentals
                </Link>
                . All rights reserved.
              </p>
            </div>
            <div className={styles.footerText}>
              <p>
                Designed and developed by{" "}
                <Link 
                  href="https://www.creativecoder.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.developerLink}
                >
                  Creative Coder
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;