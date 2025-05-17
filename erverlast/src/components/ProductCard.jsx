import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-detail-container">
      <div className="image-section">
        <img src={product.image} alt={product.name} />

      </div>

      <div className="info-section">
        <h2>{product.name}</h2>
        <p className="price">
          ₹ <strong>{product.price}</strong>/sq ft{" "}
          <a href="#">Get Latest Price</a>
        </p>
        <p className="min-order">
          Minimum Order Quantity:{" "}
          <strong>{product.minOrder} sq ft</strong>
        </p>

        <table className="product-table">
          <tbody>
            <tr>
              <td>Thickness</td>
              <td>{product.thickness}</td>
            </tr>
            <tr>
              <td>Material</td>
              <td>{product.material}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>{product.color}</td>
            </tr>
            <tr>
              <td>Shape</td>
              <td>{product.shape}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td>{product.dimensions}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{product.type}</td>
            </tr>
          </tbody>
        </table>

        <p className="product-description">{product.description}</p>
        <Link to="/contact">
          <button className="interest-button">Yes, I am interested!</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
