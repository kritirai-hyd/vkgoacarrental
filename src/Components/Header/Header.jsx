"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const servicesRef = useRef(null);
  const mobileServicesRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target) &&
        mobileServicesRef.current &&
        !mobileServicesRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className={styles.scrollText}>
        <ul className={styles.scrollList}>
          <li>
            <span className={styles.scrollStar}>
              🚫 Restricted - Due to RTO guidelines, taking the vehicle outside
              the Goa state is not permitted.
            </span>
          </li>
          <li>
            <span className={styles.scrollStar}>
              🚫 Restricted - Due to RTO guidelines, taking the vehicle outside
              the Goa state is not permitted.
            </span>
          </li>
          <li>
            <span className={styles.scrollStar}>
              🚫 Restricted - Due to RTO guidelines, taking the vehicle outside
              the Goa state is not permitted.
            </span>
          </li>
          <li>
            <span className={styles.scrollStar}>
              🚫 Restricted - Due to RTO guidelines, taking the vehicle outside
              the Goa state is not permitted.
            </span>
          </li>
        </ul>
      </div>
      
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          {/* Logo */}
          <div className={styles.brandLogo}>
            <Link href="/" onClick={closeMenu}>
              <Image
                className={styles.vkLogo}
                src={logo}
                width={200}
                height={80}
                alt="Vihan Logo"
                priority
              />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className={styles.hamburger}>
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Link href="/" className={styles.navLink} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/self-drive/goa-car-rental-about" className={styles.navLink} onClick={closeMenu}>
              About
            </Link>
            <Link href="/self-drive/goa-car-rental" className={styles.navLink} onClick={closeMenu}>
              Car rental
            </Link>
            
            {/* Dropdown */}
            <div className={styles.dropdown} ref={servicesRef}>
              <button
                className={styles.dropdownToggle}
                onClick={() => toggleDropdown("services")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "services"}
              >
                Airport{" "}
                <span className={`${styles.arrow} ${openDropdown === "services" ? styles.arrowUp : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </span>
              </button>
              {openDropdown === "services" && (
                <div className={styles.dropdownMenu}>
                  <Link
                    href="/goa-airport/dabolim-selfdrive-car-rental"
                    className={styles.dropdownItem}
                    onClick={closeMenu}
                  >
                    Dabolim Airport
                  </Link>
                  <Link
                    href="/goa-airport/mopa-selfdrive-car-rental"
                    className={styles.dropdownItem}
                    onClick={closeMenu}
                  >
                    Mopa Airport
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/blogs" className={styles.navLink} onClick={closeMenu}>
              Blog
            </Link>
            <Link
              href="/self-drive/goa-car-rental-contact"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <Link href="/" className={styles.mobileNavItem} onClick={closeMenu}>
              Home
            </Link>
            <Link
              href="/self-drive/goa-car-rental-about"
              className={styles.mobileNavItem}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link href="/self-drive/goa-car-rental" className={styles.mobileNavItem} onClick={closeMenu}>
              Car rental
            </Link>
            
            {/* Mobile Dropdown */}
            <div className={styles.mobileDropdown} ref={mobileServicesRef}>
              <button
                className={styles.mobileDropdownToggle}
                onClick={() => toggleDropdown("services")}
              >
                Airport
                <span className={`${styles.arrow} ${openDropdown === "services" ? styles.arrowUp : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </span>
              </button>
              {openDropdown === "services" && (
                <div className={styles.mobileDropdownMenu}>
                  <Link
                    href="/goa-airport/dabolim-selfdrive-car-rental"
                    className={styles.mobileDropdownItem}
                    onClick={closeMenu}
                  >
                    Dabolim Airport
                  </Link>
                  <Link
                    href="/goa-airport/mopa-selfdrive-car-rental"
                    className={styles.mobileDropdownItem}
                    onClick={closeMenu}
                  >
                    Mopa Airport
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/blogs" className={styles.mobileNavItem} onClick={closeMenu}>
              Blog
            </Link>
            <Link
              href="/self-drive/goa-car-rental-contact"
              className={styles.mobileNavItem}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;