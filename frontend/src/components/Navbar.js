import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import '../App.css';
function Navbar() {
  const navigate=useNavigate();
  const logoutUser=()=>{
      localStorage.removeItem('token');
      navigate("/login");
  }
  return (
    <nav className="navbar">
      <h1 className="logo">Shop Easy New</h1>
      <div className='nav-links'>
       
        <Link to="/" className="nav-item">Home 🏠</Link>
        <Link to="/cart" className="nav-item">Cart 🛒</Link>
        <Link to="/admin" className="nav-item">Admin 👤</Link>
        {/*<Link to="/order" className="nav-item">Your Order</Link>*/}
        <button className="logout-btn" style={{color:"blue",fontSize:"20px",padding:"20px"}} onClick={logoutUser}>Logout</button>


        </div>

        
   
    </nav>
  );
}

export default Navbar;