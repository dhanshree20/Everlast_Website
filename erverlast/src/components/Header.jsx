import React from "react";
import "./Header.css";
import herosImage from "../assets/img5.jpg";
import { Link } from "react-router-dom";

const Header = () => {

  const products = [
    {
      id: 1,
      name: "Paver Block",
      category: "Short Blast Paver Block I Shape Gray Paver Block Red And Yellow Interlocking Paver Block",
      image: "./product1.webp",
    },
    {
      id: 2,
      name: "I Shape Paver Block",
      category: "Gray I Shape Paver Block",
      image: "./product2.webp",
    },
    {
      id: 3,
      name: "Red And Yellow Interlocking Paver Block",
      image: "./product3.webp",
    },
    {
      id: 4,
      name: "Red And White Interlocking Paver Block",
      image: "./product4.webp",
    },
    {
      id: 5,
      name: "Yellow Interlocking Paver Blocks",
      image: "./product5.webp",
    },
    {
      id: 6,
      name: "Chequered Tiles",
      category: "Red Square Chequered Tiles",
      image: "./product9.webp",
    },
    {
      id: 7,
      name: "Multicolored Concrete Kerbstone",
      image: "./product8.webp",
    },
    {
      id: 8,
      name: "L Type Kerbstone",
      image: "./product7.webp",
    },
    {
      id: 9,
      name: "U Drain",
      category: "Precast U Drain 300 x 300",
      image: "./product10.webp",
    },
    {
      id: 10,
      name: "Chamber Cover",
      category: "2x2 hd, Chamber Cover With Frame",
      image: "./product11.webp",
    },
  ];

  return (
    <div>
      {/* Part 1 */}
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
        className="hero-section"
        style={{ backgroundImage: `url(${herosImage})` }}
      >
        <div className="hero-content4">
          <h1><span>Welcome to Everlast!</span></h1>

          <p>We are a trusted manufacturer of high-quality <strong>Paver Blocks</strong> and
            <strong> Concrete Kerb Stones</strong>, serving residential, commercial, and industrial projects.</p>
          <div className="hero-buttons">
            <Link to="/product">
              <button className="btn-primary">Explore Our Products</button>
            </Link>
          </div>
        </div>
      </section>

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
          <Link to="/about">
            <button className="learn-btn">Learn More</button>
          </Link>

        </div>
      </div>


      <div className="featured-products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.sale && <span className="badge">Sale</span>}
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
            </div>
          ))}
        </div>
        <Link to="/product">
          <button className="learn-btn1">View More Details</button>
        </Link>
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

export default Header;
