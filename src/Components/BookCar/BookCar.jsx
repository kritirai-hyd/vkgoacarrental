import React, { useState } from 'react';
import styles from './BookCar.module.css';

const BookCar = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    carType: '',
    fname: '',
    phone: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const carOptions = [
    { value: 'Hyundai Verna Automatic', label: 'Hyundai Verna Automatic', price: '₹2,500/day', image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { value: 'Hyundai Verna Manual', label: 'Hyundai Verna Manual', price: '₹2,200/day', image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { value: 'Mahindra Thar Convertible Auto', label: 'Mahindra Thar Convertible Auto', price: '₹4,500/day', image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { value: 'Mahindra Thar Manual', label: 'Mahindra Thar Manual', price: '₹4,000/day', image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { value: 'Toyota Innova Crysta', label: 'Toyota Innova Crysta', price: '₹3,500/day', image: 'https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { value: 'Maruti Suzuki Swift Automatic', label: 'Maruti Suzuki Swift Automatic', price: '₹1,800/day', image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // If car type is being selected, update selected car
    if (name === 'carType') {
      const selectedCarInfo = carOptions.find(car => car.value === value);
      setSelectedCar(selectedCarInfo);
    }
  };

  const handleCarSelect = (car) => {
    setFormData(prevState => ({
      ...prevState,
      carType: car.value
    }));
    setSelectedCar(car);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDateTimeFocus = (fieldName) => {
    // This would typically open a datetime picker
    // For demo purposes, we'll just set a placeholder value
    if (!formData[fieldName]) {
      const now = new Date();
      const formattedDate = now.toISOString().slice(0, 16).replace('T', ' ');
      setFormData(prevState => ({
        ...prevState,
        [fieldName]: formattedDate
      }));
    }
  };

  if (isSubmitted) {
    return (
      <section className={styles.bookingSection}>
        <div className={styles.container}>
          <div className={styles.successMessage}>
            <h3 className={styles.successTitle}>Booking Request Submitted!</h3>
            <p>Thank you for your booking request. We will contact you shortly to confirm your reservation.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Book Self Drive Car Rental</h1>
          <p className={styles.subtitle}>
            Fill in the details below to book your perfect self-drive car in Goa
          </p>
        </div>

        <div className={styles.bookingContainer}>
          {/* Booking Form */}
          <div className={styles.rentDetailsBox}>
            <form onSubmit={handleSubmit}>
              <div className={styles.rentDetailsItem}>
                <label htmlFor="pickuplocation">Pickup Location</label>
                <input
                  id="pickuplocation"
                  className={styles.formControl}
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter pickup location"
                />
              </div>

              <div className={styles.rentDetailsItem}>
                <label htmlFor="dropofflocation">Dropoff Location</label>
                <input
                  id="dropofflocation"
                  className={styles.formControl}
                  type="text"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter dropoff location"
                />
              </div>

              <div className={styles.rentDetailsItem}>
                <label htmlFor="pickup-date">Pickup Date & Time</label>
                <input
                  id="pickup-date"
                  className={styles.formControl}
                  type="text"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  onFocus={() => handleDateTimeFocus('pickupDate')}
                  required
                  placeholder="yyyy/mm/dd 00:00"
                  readOnly
                />
              </div>

              <div className={styles.rentDetailsItem}>
                <label htmlFor="dropoff-date">Dropoff Date & Time</label>
                <input
                  id="dropoff-date"
                  className={styles.formControl}
                  type="text"
                  name="dropoffDate"
                  value={formData.dropoffDate}
                  onChange={handleInputChange}
                  onFocus={() => handleDateTimeFocus('dropoffDate')}
                  required
                  placeholder="yyyy/mm/dd 00:00"
                  readOnly
                />
              </div>

              <div className={styles.rentDetailsItem}>
                <label htmlFor="carType">Select Car Type</label>
                <select
                  id="carType"
                  className={styles.selectControl}
                  name="carType"
                  value={formData.carType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Car</option>
                  {carOptions.map((car) => (
                    <option key={car.value} value={car.value}>
                      {car.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.rentDetailsItem}>
                <label htmlFor="fname">Full Name</label>
                <input
                  id="fname"
                  className={styles.formControl}
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.rentDetailsItem}>
                <label htmlFor="phone">Mobile No</label>
                <input
                  id="phone"
                  className={styles.formControl}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className={styles.rentDetailsItem}>
                <label htmlFor="email857">Email</label>
                <input
                  id="email857"
                  className={styles.formControl}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className={styles.rentDetailsSearch}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting && <span className={styles.spinner}></span>}
                  {isSubmitting ? 'Processing...' : 'Book Now'}
                </button>
                <div className={`${styles.waitingText} ${isSubmitting ? styles.show : ''}`}>
                  Please wait...
                </div>
              </div>
            </form>
          </div>

          {/* Car Info Section */}
          <div className={styles.carInfoSection}>
            <h3 className={styles.carInfoTitle}>Available Cars</h3>
            <div className={styles.carList}>
              {carOptions.map((car) => (
                <div
                  key={car.value}
                  className={`${styles.carItem} ${
                    selectedCar?.value === car.value ? styles.selected : ''
                  }`}
                  onClick={() => handleCarSelect(car)}
                >
                  <img
                    src={car.image}
                    alt={car.label}
                    className={styles.carImage}
                  />
                  <div className={styles.carDetails}>
                    <div className={styles.carName}>{car.label}</div>
                    <div className={styles.carType}>Self Drive</div>
                  </div>
                  <div className={styles.carPrice}>{car.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCar;