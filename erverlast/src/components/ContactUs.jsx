import React from "react";
import "./ContactUs.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import herosImage from "../assets/contact.avif";

const ContactUs = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    "I Shape Gray Paver Block",
    "Red And Yellow Interlocking Paver Block",
    "Red And White Interlocking Paver Block",
    "Car Parking Paver Block",
    "Rectangular Red Paver Blocks",
    "450x300x100",
    "L TYPE KERBSTONE",
    "Multicolored Concrete Kerbstone",
    "Round HD RCC Chamber Cover"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected: ${selectedOption}`);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="/everlast.webp" alt="Logo" />
          <span className="brand-name">Everlast</span>
        </div>
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/product">PRODUCT</Link>
          <Link to="/contact">CONTACT US</Link>
        </div>
      </nav>


      <section
        className="hero-section1"
        style={{ backgroundImage: `url(${herosImage})` }}
      >
        <div className="hero-content">
          <h1><span>CONTACT US</span></h1>

          <p className="contact1">We'd love to hear from you! Whether you have a question about our products, pricing, or need a custom quote —
            our team is here to help.</p>
          <p className="contact2">
            Reach out to us using the form below or call us directly. We usually respond within 24 hours.
          </p>
        </div>
      </section>

      <div className="contact-info-container">
        <div className="info-card">
          <div className="icon">📍</div>
          <h4>Office Address</h4>
          <p>Sr. No. 132, Mhasoba Vasti, Keshav Nagar Manjari Road, Manjari Budruk, Pune-411037, Maharashtra, India</p>
        </div>

        <div className="info-card">
          <div className="icon">🏭</div>
          <h4>Factory Address</h4>
          <p>Sr. No. 132, Mhasoba Vasti, Keshav Nagar Manjari Road, Manjari Budruk, Pune-411037, Maharashtra, India</p>
        </div>

        <div className="info-card">
          <div className="icon">📞</div>
          <h4>Call Us</h4>
          <p>+91 8047641270<br />
            78% Call Response Rate</p>
        </div>

        <div className="info-card">
          <div className="icon">✉️</div>
          <h4>Email</h4>
          <p>admin@everlast.com<br />
          </p>
        </div>
      </div>



      <div className="contact-container1">
        <div className="map-container1">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=18.534833,74.131444&z=15&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>



      <div className="product-selector-container">
        <div className="left-panel">

          <img src="/contactlogo.avif" alt="Everlast" className="product-img" />
        </div>
        <div className="right-panel">
          <h2 className="con">Tell us what you need, and we'll help you get quotes</h2>
          <h2>Select any one of them</h2>
          <form onSubmit={handleSubmit}>
            <div className="radio-grid">
              {options.map((option, index) => (
                <label key={index} className="radio-option">
                  <input
                    type="radio"
                    name="paverOption"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section contact">
            <h3 className="ftcon">CONTACT US</h3>
            <div className="footer-text">
              <p><strong>Company:</strong> Everlast</p>
              <p>Sr. No. 132, Mhasoba Vasti, Keshav Nagar Manjari Road,</p>
              <p>Manjari Bundruk, Manjari Budruk, Pune-411037,</p>
              <p>Maharashtra, India</p>
              <p><strong>Phone:</strong></p>
              <p>📞 +91 08047641270</p>
              <p><strong>Email:</strong></p>
              <p>📧 admin@everlast.com</p>
            </div>
          </div>

          <div className="footer-section links">
            <h3>QUICK LINKS</h3>
 <ul>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>
          <Link to="/product">🖼️ Gallery</Link>
        </li>
        <li>
          <Link to="/about">👥 About Us</Link>
        </li>
        <li>
          <Link to="/contact">✉️ Contact Us</Link>
        </li>
      </ul>
          </div>

          <div className="footer-section map">
            <h3 className="findus">FIND US</h3>
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=18.534833,74.131444&z=15&output=embed"
                width="200"
                height="180"
                style={{ border: '0', borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Everlast. All Rights Reserved.</p>
          <p>Developed by DW Innovations Pvt. Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
