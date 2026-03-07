import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Users,
  Luggage,
  Fuel,
  Gauge,
  Star,
  ArrowLeft,
  Phone
} from "lucide-react";

import styles from "./CarDetails.module.css";
import cars from "../../../../Components/Cars/Cars.json";
import CarCarousel from "@/Components/CarCrousel/CarCrousel";

export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id.toString(),
  }));
}

const CarDetailsPage = ({ params }) => {
  const { id } = params;
  const car = cars.find((car) => car.id.toString() === id);
   const img = require(`../../../../assets/images/${car.image}`)
  if (!car) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <div className={styles.errorIcon}>
            <ArrowLeft size={48} />
          </div>
          <h1 className={styles.errorTitle}>Car Not Found</h1>
          <p className={styles.errorText}>The car you're looking for doesn't exist.</p>
          <Link href="/self-drive/goa-car-rental" className={styles.primaryButton}>
            <ArrowLeft className={styles.buttonIcon} /> Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>{car.name}</h1>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}>→</span>
            <Link href="/self-drive/goa-car-rental" className={styles.breadcrumbLink}>Cars</Link>
            <span className={styles.breadcrumbSeparator}>→</span>
            <span className={styles.breadcrumbCurrent}>{car.name}</span>
          </nav>
        </div>
      </header>

      {/* Main */}
      <div className={styles.container}>
        <div className={styles.detailsContainer}>
          {/* Image Section */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src={img}
                alt={car.name}
                width={600}
                height={400}
                className={styles.carImage}
                priority
              />
              <span className={`${styles.transmissionTag} ${styles[car.transmission.toLowerCase()]}`}>
                {car.transmission}
              </span>
              {car.offer && <span className={styles.offerTag}>{car.offer}</span>}
            </div>

            {/* Specs */}
            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <Users />
                <div className={styles.specText}>
                  <span className={styles.specLabel}>Seats</span>
                  <span className={styles.specValue}>{car.seats} Persons</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <Luggage />
                <div className={styles.specText}>
                  <span className={styles.specLabel}>Luggage</span>
                  <span className={styles.specValue}>{car.luggage}</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <Fuel />
                <div className={styles.specText}>
                  <span className={styles.specLabel}>Fuel Type</span>
                  <span className={styles.specValue}>{car.fuelType}</span>
                </div>
              </div>

              <div className={styles.specItem}>
                <Gauge />
                <div className={styles.specText}>
                  <span className={styles.specLabel}>Fuel Capacity</span>
                  <span className={styles.specValue}>{car.fuelCapacity}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className={styles.infoSection}>
            <h2 className={styles.carTitle}>{car.name}</h2>
            <p className={styles.description}>{car.description}</p>

            <div className={styles.priceSection}>
              <div className={styles.priceGrid}>
                <div className={styles.priceItem}>
                  <div className={styles.priceIconWrapper}>
                    <span className={styles.priceIcon}>₹</span>
                  </div>
                  <div className={styles.priceContent}>
                    <div className={styles.priceLabel}>Daily Rate</div>
                    <div className={styles.priceValue}>₹{car.price} /day</div>
                  </div>
                </div>

                <div className={styles.priceItem}>
                  <div className={styles.priceIconWrapper} style={{background:"linear-gradient(135deg, #27b102 0%, #68d600 100%)"}}>
                    <Star className={styles.priceIcon} />
                  </div>
                  <div className={styles.priceContent}>
                    <div className={styles.priceLabel}>Rating</div>
                    <div className={styles.priceValue}>{car.rating}/5 ({car.reviews} reviews)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <Link
                href={`https://wa.me/918830616709?text=Hi, I'm interested in renting the ${car.name}`}
                className={styles.whatsappButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className={styles.buttonIcon} />
                Book on WhatsApp
              </Link>

              <Link
                href="tel:+918830616709"
                className={styles.primaryButton}
                style={{background:"linear-gradient(135deg, #ff6c01 0%, #fbff00 100%)"}}
              >
                <Phone className={styles.buttonIcon} />
                Call Now
              </Link>
            </div>

            <br />

            <Link href="/self-drive/goa-car-rental-contact/" className={styles.primaryButton}>
              <Phone className={styles.buttonIcon} />
              Check Availability
            </Link>
          </div>
        </div>
      </div>

      <CarCarousel />
    </>
  );
};

export default CarDetailsPage;