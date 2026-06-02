import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function OrderPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  
  const incomingProduct = location.state?.product || { id: "", price: 0 };

  
  const [form, setForm] = useState({
    customer_name: "",
    address: "",
    phone: "",
    product: incomingProduct.id, 
    quantity: 1,
    total: incomingProduct.price  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm(prevForm => {
      const updatedForm = { ...prevForm, [name]: value };
      
     
      if (name === 'quantity') {
        updatedForm.total = value * (incomingProduct.price || 0);
      }
      return updatedForm;
    });
  };

  const placeOrder = (e) => {
    e.preventDefault(); 

    axios.post("http://127.0.0.1:8000/api/order/", form)
      .then(() => {
        alert("Order placed successfully!");
        navigate("/"); 
      })
      .catch(err => {
        console.log("Django Error Response:", err.response?.data);
        alert("Error placing order. Please check console.");
      });
  };

  return (
    <div>
      <h2>Confirm Your Order</h2>
      
      <form onSubmit={placeOrder}>
       
        <div>
          <label>Name:</label>
          <input type="text" name="customer_name" onChange={handleChange} required />
        </div>

        <div>
          <label>Address:</label>
          <input type="text" name="address" onChange={handleChange} required />
        </div>

        <div>
          <label>Phone:</label>
          <input type="text" name="phone" onChange={handleChange} required />
        </div>

       
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" min="1" value={form.quantity} onChange={handleChange} required />
        </div>

        
        <div>
          <p>Product ID: {form.product || "No product selected"}</p>
          <p>Grand Total: ₹{form.total}</p>
        </div>

        <button type="submit">Place your order</button>
      </form>
    </div>
  );
}

export default OrderPage;