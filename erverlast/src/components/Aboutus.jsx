import React from "react";
import "./Aboutus.css";
import { Link } from "react-router-dom";

const Aboutus = () => {

  const images = [
    '/image1.png',
    '/image2.png',
    '/image3.png',
    '/image4.png',
  ];

  const categories = [
    {
      title: 'Paver Block',
      count: '12 products available',
      image: '/data1.webp',
    },
    {
      title: 'U Drain',
      count: '1 products available',
      image: '/data7.webp',
    },
    {
      title: 'Manhole Cover',
      count: '3 products available',
      image: '/data3.webp',
    },
    {
      title: 'Rcc Manhole Cover And Frame',
      count: '2 products available',
      image: '/data4.webp',
    },
    {
      title: 'Chamber Cover',
      count: '1 product available',
      image: '/data8.webp',
    },
    {
      title: 'Red And Yellow Interlocking Paver Block',
      count: '1 product available',
      image: '/data6.webp',
    }
  ];

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


      <div className="about-container">
        <div className="about-image">
          <img src="/everlast.webp" alt="Everlast" />
        </div>
        <div className="about-text">
          <h2>ABOUT US</h2>
          <p>
            Established in <strong> 2009, Everlast </strong> is the best-known firm involved in <strong> Manufacturer & Wholesaler </strong>of
            products like <strong>Paver Block, Concrete Kerb Stone, Manhole Cover and many more.</strong>
          </p>
          <p>
            Under the supervision of our mentor<strong> Mr.Chirag Deshmukh,</strong> we have earned huge market expertise and knowledge in dealing with our clients. With a team of skilled professionals and a commitment to excellence, we ensure timely delivery,
            consistent quality, and customer satisfaction on every order. Whether it's residential walkways, commercial premises, industrial zones, or public infrastructure —
            we have the perfect solution to meet your paving needs.
          </p>
        </div>
      </div>




      <div className="company-gallery">
        <h2>COMPANY IMAGES</h2>
        <div className="image-grid">
          {images.map((src, index) => (
            <div className="image-card" key={index}>
              <img src={src} alt={`Company ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="category-container">
        <h2>BUSINESS SEGMENTS</h2>
        <div className="category-grid">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="category-info">
                <h3>{item.title}</h3>
                <p>{item.count}</p>
              </div>
            </div>
          ))}
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
              <li>🏠 Home</li>
              <li>🖼️ Gallery</li>
              <li>👥 About Us</li>
              <li>✉️ Contact Us</li>
            </ul>
          </div>

          <div className="footer-section map">
            <h3 className="ftfind">FIND US</h3>
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

export default Aboutus;
