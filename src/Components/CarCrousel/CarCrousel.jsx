"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCommentDots, FaUsers } from "react-icons/fa";
import styles from "./CarCarousel.module.css";
import cars from "../Cars/Cars.json";

export default function CarCarousel() {
  const handleWhatsApp = (car) => {
    const url = `https://wa.me/?text=I'm interested in renting the ${car.name}`;
    window.open(url, "_blank");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Explore Our <span className={styles.titleHighlight}>Premium Fleet</span>
        </h2>

        <div className={styles.carGrid}>
          {cars.slice(0, 3).map((car) => {
            const img = require(`../../assets/images/${car.image}`)
          return ( 
             <article key={car.id} className={styles.carCard}>
              <div className={styles.carImageWrapper}>
                <Image
                  src={img}
                  alt={car.name}
                  width={300}
                  height={200}
                  className={styles.carImage}
                />
                {car.offer && <span className={styles.offerBadge}>{car.offer}</span>}
              </div>

              <div className={styles.carInfo}>
                <h3 className={styles.carName}>{car.name}</h3>

                <div className={styles.carFeaturesGrid}>
                  <div className={styles.carFeature}>
                    <FaUsers className={styles.carFeatureIcon} />
                    <span>{car.seats} seats</span>
                  </div>
                  {/* Add other features similarly */}
                </div>

                <div className={styles.priceWrapper}>
                  <span className={styles.priceLabel}>Starting from</span>
                  <div className={styles.price}>
                    ₹{car.price}
                    <span className={styles.priceUnit}>/day</span>
                  </div>
                </div>

                <div className={styles.cardButtons}>
                  <Link href={`/self-drive/goa-car-rental/${car.id}`} className={styles.detailsButton}>
                    Get Details <FaArrowRight className={styles.buttonIcon} />
                  </Link>
                  <button className={styles.whatsappButton} onClick={() => handleWhatsApp(car)}>
                    <FaCommentDots className={styles.buttonIcon} />
                  </button>
                </div>
              </div>
            </article>
          )})}
        </div>
      </div>
    </section>
  );
}