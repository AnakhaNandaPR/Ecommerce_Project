import React from 'react';
import axios from "axios";
import {useState,useEffect} from "react";
import { 
  Typography, 
   Button ,
   Box
} from '@mui/material';
function CartPage() {
    const[cart,setCart]=useState([]);
    const fetchCart=()=>{
      axios.get("http://127.0.0.1:8000/api/cart/")
      .then(res=>setCart(res.data));
    }
    useEffect(()=>{
       fetchCart();
    },[]);
    const removeItem=(id) => {
      axios.delete(`http://127.0.0.1:8000/api/cart/${id}/`)
      .then(() => {
        alert("Item removed");
        fetchCart();
        
      })
    }
  return (
   
    <div className='cart-page'>
         <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3,textAlign:'center' }}>
        Shopping Cart
      </Typography>
        <h2>Cart Items</h2>
        {cart.map(item=>(
            <div className='cart-item' key={item.id}>
              <img src={item.product_image} alt={item.product_name} width="350"/>
              <h1>{item.product_name}</h1>
              <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                      Product ID: {item.product}
                    </Typography>
                <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity}
                    </Typography>
                    <Button 
              variant="outlined" 
              color="error" 
              size="small"
              onClick={() => removeItem(item.id)}
              sx={{ mb: 2 }}
            >
              Remove Item
            </Button>
                    
                <Box 
  sx={{ 
    width: '100%', 
    bgcolor: '#67816d',
    color: 'white', 
    py: 1, 
    overflow: 'hidden', 
    position: 'relative',
    borderRadius: 1.5,
    mb: 4
  }}
><Box
    component="div"
    sx={{
      display: 'inline-block',
      whiteSpace: 'nowrap',
      animation: 'ticker 20s linear infinite',
      '@keyframes ticker': {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' }
      },
      '&:hover': {
        animationPlayState: 'paused' // Pauses the text when the user hovers over it
      }
    }}
  >
    <Typography variant="body2" component="span" sx={{ fontWeight: 'medium', mx: 4 }}>
      🔥 Flash Sale: Use code DRF50 to get 50% off on your next purchase!
    </Typography>
    <Typography variant="body2" component="span" sx={{ fontWeight: 'medium', mx: 4 }}>
      🚚 Free delivery on all orders above ₹999!
    </Typography>
  </Box>
  </Box>
          
            </div>
            
        ))}
        
              <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: 1.5 }}>
                Proceed to Checkout
              </Button>

             

    </div>
  );
}

export default CartPage;