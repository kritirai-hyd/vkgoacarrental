import React from 'react'
import './Position.css'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
const Position = () => {
  return (
    <>
    <div className="floating-contact">

  <div className="contact-item phone">
    <a href="tel:+918830616709">
      <FaPhoneAlt />
     &nbsp; <span>Call To Book Now</span>
    </a>
  </div>
</div>
    </>
  )
}

export default Position