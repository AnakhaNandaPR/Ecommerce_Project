import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ProductDetails from './pages/ProductDetails';
import OrderPage from './pages/OrderPage';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
         <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
         <Route path='/cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
         <Route path='/admin' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
         <Route path="/product/:id"  element={<ProductDetails/>}/>
         <Route path='/order' element={<OrderPage/>}/>
        </Routes>
        </BrowserRouter>
  );
}     
export default App;