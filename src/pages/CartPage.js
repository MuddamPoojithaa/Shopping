import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import axios from "axios";
import "../cartpage.css"; // Add CSS file for styling


const CartPage = () => {
  const { cartItems, removeFromCart, totalAmount, updateItemQuantity } = useCart();

  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post("http://localhost:3001/upload-cart", { cartItems });
      console.log("Cart uploaded:", response.data);

      const projectsResponse = await axios.post("http://localhost:3001/add-to-projects", { cartItems });
      console.log("Added to projects.json:", projectsResponse.data);

      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="container cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {/* Cart Items Section */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <div className="item-quantity">
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          {/* Price Details Section */}
          <div className="price-details">
            <h3>PRICE DETAILS</h3>
            <div className="price-item">
              <span>Price ({cartItems.length} items)</span>
              <span>₹{(totalAmount).toFixed(2)}</span>
            </div>
            <div className="price-item">
              <span>Discount</span>
              <span>- ₹{(totalAmount * 0.2).toFixed(2)}</span>
            </div>
            <div className="price-item">
              <span>Delivery Charges</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="total-amount">
              <span>Total Amount</span>
              <span>₹{(totalAmount * 0.8).toFixed(2)}</span>
            </div>
            <p className="savings">You will save ₹{(totalAmount * 0.2).toFixed(2)} on this order.</p>
            <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
