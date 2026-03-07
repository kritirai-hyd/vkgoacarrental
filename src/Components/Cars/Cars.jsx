import React, {useState} from 'react';
import { Star, Users, Luggage, Fuel, Gauge, ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Cars.module.css';
import cars from './Cars.json'
const Cars = () => {
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
      <section className={styles.section}>
        <div className={styles.container}>
      


          {/* Car Grid */}
          <div className={styles.carSection}>
            <h2 className={styles.carTitle}>
              Our <span className={styles.carTitleHighlight}>Premium Fleet</span>
            </h2>
            
            <div className={styles.carGrid}>
              {cars.map((car) => {
                const img = require(`../../assets/images/${car.image}`)
      return(          <article key={car.id} className={styles.carCard}>
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
                        <span>{car.fuelCapacity}</span>
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
                      <Link 
                        href={`/self-drive/goa-car-rental/${car.id}`}
                        className={styles.detailsButton}
                      >
                        Get Details
                        <ArrowRight className={styles.buttonIcon} />
                      </Link>
                      
                      <button className={styles.whatsappButton}  onClick={() => handleWhatsApp(car)}
                          
                           >
                        <MessageCircle className={styles.buttonIcon} />
                      </button>
                    </div>
                  </div>
                </article>
      )
})}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cars;