"use client";
import React, { useState } from 'react';
import { Star, Users, Luggage, Fuel, Gauge, ArrowRight, MessageCircle, Calendar, MapPin, User, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CarDetails.module.css';
import Services from '../Services/Services';
import cars from '../Cars/Cars.json'
const CarDetails = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    fullName: '',
    phone: '',
    email: ''
  });



  const handleBookNow = (car) => {
    setSelectedCar(car);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', { car: selectedCar, ...bookingForm });
    alert('Booking request submitted successfully! We will contact you shortly.');
  };

  const handleWhatsApp = (car) => {
    const message = `Hello, I'm interested in renting ${car.name} for ${car.price}/day.`;
    const phoneNumber = '918830616709'; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <section className={styles.asection}>
        <div className={styles.acontainer}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              Self Drive Cars in <span className={styles.titleHighlight}>Goa</span>
            </h1>
            <div className={styles.breadcrumb}>
              <span>Home</span>
              <span>→</span>
              <span className={styles.breadcrumbActive}>Self Drive Car Rental in Goa</span>
            </div>
          </div>  </div>
 </section>
      <section className={styles.section}>
          {/* Selected Car Detailed View */}
          {selectedCar && (
            <div className={styles.detailedView}>
              <div className={styles.detailedHeader}>
                <h2 className={styles.detailedTitle}>{selectedCar.name}</h2>
                <div className={styles.detailedPrice}>₹{selectedCar.price}/day</div>
              </div>
              
              <div className={styles.detailedContent}>
                <Image
                  src={selectedCar.image}
                  alt={selectedCar.name}
                  width={600}
                  height={400}
                  className={styles.detailedImage}
                />
                
                <div className={styles.detailedInfo}>
                  <p className={styles.detailedDescription}>{selectedCar.description}</p>
                  
                  <div className={styles.detailedFeatures}>
                    <div className={styles.detailedFeature}>
                      <Users className={styles.detailedFeatureIcon} />
                      <span className={styles.detailedFeatureText}>{selectedCar.seats} Seats</span>
                    </div>
                    <div className={styles.detailedFeature}>
                      <Luggage className={styles.detailedFeatureIcon} />
                      <span className={styles.detailedFeatureText}>{selectedCar.luggage} Capacity</span>
                    </div>
                    <div className={styles.detailedFeature}>
                      <Fuel className={styles.detailedFeatureIcon} />
                      <span className={styles.detailedFeatureText}>{selectedCar.fuelType}</span>
                    </div>
                    <div className={styles.detailedFeature}>
                      <Gauge className={styles.detailedFeatureIcon} />
                      <span className={styles.detailedFeatureText}>{selectedCar.mileage}</span>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div className={styles.bookingForm}>
                    <h3 className={styles.formTitle}>Book This Car</h3>
                    <form onSubmit={handleSubmitBooking}>
                      <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>
                            <MapPin size={16} /> Pickup Location
                          </label>
                          <input
                            type="text"
                            name="pickupLocation"
                            value={bookingForm.pickupLocation}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            placeholder="Enter pickup location"
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>
                            <MapPin size={16} /> Dropoff Location
                          </label>
                          <input
                            type="text"
                            name="dropoffLocation"
                            value={bookingForm.dropoffLocation}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            placeholder="Enter dropoff location"
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>
                            <Calendar size={16} /> Pickup Date
                          </label>
                          <input
                            type="datetime-local"
                            name="pickupDate"
                            value={bookingForm.pickupDate}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>
                            <Calendar size={16} /> Dropoff Date
                          </label>
                          <input
                            type="datetime-local"
                            name="dropoffDate"
                            value={bookingForm.dropoffDate}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>
                            <User size={16} /> Full Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={bookingForm.fullName}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>
                            <Phone size={16} /> Mobile No
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={bookingForm.phone}
                            onChange={handleInputChange}
                            className={styles.formInput}
                            placeholder="Enter your mobile number"
                            required
                          />
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                          <Mail size={16} /> Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={bookingForm.email}
                          onChange={handleInputChange}
                          className={styles.formInput}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <button type="submit" className={styles.bookNowButton}>
                        Confirm Booking
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedCar(null)}
                style={{
                  background: 'none',
                  border: '2px solid #2563eb',
                  color: '#2563eb',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontWeight: '600',
                  marginTop: '1rem'
                }}
              >
                ← Back to All Cars
              </button>
            </div>
          )}

          {/* Introduction Section */}
          {!selectedCar && (
            <>
              <div className={styles.introSection}>
                <div className={styles.introHeader}>
                  <h2 className={styles.introTitle}>CAR RENTALS IN GOA</h2>
                </div>

                <div className={styles.content}>
                  <p className={styles.paragraph}>
                    Be it an official tour or a vacation trip, cabs in Goa are the most preferred mode of conveyance.
                    And when these cabs are booked from us, it becomes an assurance of punctuality and reliability.
                    We offer car rentals in Goa on both hourly and package rates.
                  </p>
                  
                  <p className={styles.paragraph}>
                    Goa is a lively state with a rich history, fascinating landscape, buoyant culture, and endearing people.
                    Perhaps the best way of exploring the state from north to south is by road in a car.
                    Our cars are well maintained and the drivers are courteous.
                  </p>
                </div>

                <div className={styles.featuresGrid}>
                  <div className={`${styles.featureCard} ${styles.featureBlue}`}>
                    <h3 className={`${styles.featureTitle} ${styles.featureTitleBlue}`}>WEEKLY BOOKING</h3>
                    <p className={styles.featureText}>
                      Self drive car booking in Goa is usually done on a weekly or minimum couple days basis.
                      We hire out cars for daily, monthly, and weekly usage. Book a self drive car and enjoy 
                      unlimited kilometres of drive with friends and family anywhere and everywhere in Goa.
                    </p>
                  </div>

                  <div className={`${styles.featureCard} ${styles.featureGreen}`}>
                    <h3 className={`${styles.featureTitle} ${styles.featureTitleGreen}`}>PACKAGE BOOKING</h3>
                    <p className={styles.featureText}>
                      There are occasions when it becomes necessary for entire day booking of cars.
                      We offer attractive rates for car hire for entire day in Goa on demand.
                      You might also opt for Goa car packages while visiting North Goa or South Goa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Car Grid */}
              <div className={styles.carSection}>
                <h2 className={styles.carTitle}>
                  Our <span className={styles.carTitleHighlight}>Premium Fleet</span>
                </h2>
                
                <div className={styles.carGrid}>
                  {cars.map((car) => 
                  {
                    const img = require(`../../assets/images/${car.image}`)
               return (                         <article key={car.id} className={styles.carCard}>
                      <div className={styles.carImageWrapper}>
                        <Image
                          src={img}
                          alt={car.name}
                          width={300}
                          height={200}
                          className={styles.carImage}
                        />
                        
                        {car.offer && (
                          <span className={styles.offerBadge}>{car.offer}</span>
                        )}
                   
                      </div>

                      <div className={styles.carInfo}>
                        <h3 className={styles.carName}>{car.name}</h3>
                             
                        <span className={`${styles[car.transmission.toLowerCase()]}`}>
                          {car.transmission}
                        </span>
                        <div className={styles.rating}>
                          <div className={styles.stars}>
                            {[...Array(Math.floor(car.rating))].map((_, i) => (
                              <Star key={i} className={styles.starFilled} />
                            ))}
                            {car.rating % 1 !== 0 && <Star className={styles.starHalf} />}
                          </div>
                          <span className={styles.reviewText}>
                            ({car.reviews} reviews)
                          </span>
                        </div>

                        {/* Car Features */}
                        <div className={styles.carFeaturesGrid}>
                          <div className={styles.carFeature}>
                            <Users className={styles.carFeatureIcon} />
                            <span>{car.seats} seats</span>
                          </div>
                          <div className={styles.carFeature}>
                            <Luggage className={styles.carFeatureIcon} />
                            <span>{car.luggage}</span>
                          </div>
                          <div className={styles.carFeature}>
                            <Fuel className={styles.carFeatureIcon} />
                            <span>{car.fuelType}</span>
                          </div>
                          <div className={styles.carFeature}>
                            <Gauge className={styles.carFeatureIcon} />
                            <span>{car.mileage}</span>
                          </div>
                        </div>

                        <div className={styles.priceWrapper}>
                          <span className={styles.priceLabel}>Starting from</span>
                          <div className={styles.price}>
                            ₹{car.price}
                            <span className={styles.priceUnit}>/day</span>
                          </div>
                        </div>

                        <div className={styles.cardButtons}>
                        <Link href={`/self-drive/goa-car-rental/${car.id}`}>
                        <button 
                           
                            className={styles.detailsButton}
                          >
                             Get Details
                            <ArrowRight className={styles.buttonIcon} />
                          </button>
                          </Link>
                          <button 
                            onClick={() => handleWhatsApp(car)}
                            className={styles.whatsappButton}
                          >
                            <MessageCircle className={styles.buttonIcon} />
                          </button>
                        </div>
                      </div>
                    </article>
)})}
                </div>
              </div>
            </>
          )}
      <Services />
     </section>
    </>
  );
};

export default CarDetails;