import React from "react";
import "./Product.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Product = () => {
  const productData = [
    {
      name: "Short Blast Paver Block",
      image: "product1.webp",
      price: 43,
      minOrder: 1000,
      thickness: "60 mm",
      material: "Concrete",
      color: "Grey",
      shape: "Square",
      brand: "Everlast",
      dimensions: "200*200*60 MM",
      type: "Outdoor",
      description: "Short Blast Paver Block"
    },
    {
      name: "I Shape Gray Paver Block",
      image: "product2.webp",
      price: 37,
      thickness: "60 mm",
      material: "Concrete",
      color: "Gray",
      shape: "I Shape",
      brand: "Everlast",
      dimensions: "225*112.5*60 MM",
      type: "Outdoor",
      description: "Durable I-shaped interlocking block"
    },
    {
      name: "Red And Yellow Interlocking Block",
      image: "product3.webp",
      price: 38,
      minOrder: 1200,
      thickness: "60 mm",
      material: "Concrete",
      color: "Red & Yellow",
      shape: "Wave",
      brand: "Everlast",
      dimensions: "220*110*60 MM",
      type: "Outdoor",
      description: "Red And Yellow Interlocking Block"
    },
    {
      name: "Red And White Interlocking Block",
      image: "product4.webp",
      price: 36,
      minOrder: 1500,
      thickness: "60 mm",
      material: "Concrete",
      color: "Red & White",
      shape: "Rectangular",
      brand: "Everlast",
      dimensions: "250*150*80 MM",
      type: "Outdoor",
      description: "Red And White Interlocking Block"
    },
    {
      name: "Yellow Interlocking Paver Blocks",
      image: "product5.webp",
      price: 36,
      minOrder: 900,
      thickness: "60 mm",
      material: "Concrete",
      color: "Yellow",
      shape: "Rectangular",
      brand: "Everlast",
      dimensions: "200*100*60 MM",
      type: "Outdoor",
      description: "Yellow Interlocking Paver Blocks"
    }
  ];

  const productD = [
    {
      name: "450x300x100",
      image: "product6.webp",
      price: 100,
      minOrder: 1000,
      thickness: "35 mm",
      material: "Concrete",
      color: "Grey",
      shape: "Square",
      brand: "Everlast",
      dimensions: "200*200*60 MM",
      type: "Outdoor",
      description: "450x300x100"
    },
    {
      name: "L Type Kerbstone",
      image: "product7.webp",
      price: 500,
      thickness: "45 mm",
      material: "Concrete",
      color: "Gray",
      shape: "L Shape",
      brand: "Everlast",
      dimensions: "1000x350x125",
      type: "Outdoor",
      description: "L Type Kerbstone"
    },
    {
      name: "Multicolored Concrete Kerbstone",
      image: "product8.webp",
      price: 400,
      minOrder: 1200,
      thickness: "35 mm",
      material: "Concrete",
      color: "Yellow, Blue & Red",
      shape: "Wave",
      brand: "Everlast",
      dimensions: "220*110*60 MM",
      type: "Outdoor",
      description: "Multicolored Concrete Kerbstone"
    }

  ];


  const images = [
  "/images/image1.jpg",
  "/images/image5.avif",
  "/images/image3.avif",
  "/images/image4.avif",
];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, []); 
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
        className="hero-section2"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div>
          <h1 className="hero-content1">PRODUCTS & SERVICES</h1>

          <p className="hero-content2">Established in <strong>2009</strong>, <strong>Everlast</strong> is the best-known firm involved in <strong>Manufacturer & Wholesaler</strong> of products like <strong>Paver Block, Concrete Kerb Stone, Manhole Cover and many more.</strong></p>
        </div>
      </section>


      <div className="product-box">
        <h3 className="category-title">Paver Block</h3>
        <p className="category-desc">
          Pioneers in the industry, we offer I Shape Gray Paver Block, Red And Yellow Interlocking Paver Block, Red And White Interlocking Paver Block, Car Parking Paver Block and Rectangular Red Paver Blocks from India.
        </p>
        <div>
          {productData.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>

      <div className="product-box">
        <h3 className="category-title">Concrete Kerb Stone</h3>
        <p className="category-desc">
          Providing you the best range of 450x300x100, L TYPE KERBSTONE and Multicolored Concrete Kerbstone with effective & timely delivery.
        </p>
        <div>
          {productD.map((product, index) => (
            <ProductCard product={product} key={index} />
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

export default Product;
