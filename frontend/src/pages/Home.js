import axios from "axios";
import React, { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";

function Home() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

   
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/?search=${search}`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [search]); 
    const addToCart = (product) => {
        axios.post("http://127.0.0.1:8000/api/cart/", {
            product: product.id,
            quantity: 1
        })
        .then(() => alert("Added to cart"))
        .catch(err => console.log("Error adding to cart", err));
    };

    return (
        <div className="home-container" style={{ textAlign: "center" }}>
            
            <input 
                type="text" 
                placeholder="Search products..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                style={{ padding: "10px", width: "300px", margin: "20px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            
            
            <div className="grid" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {products.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    products.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;






