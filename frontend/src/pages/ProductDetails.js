import {useState,useEffect} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import React from "react";
function ProductDetails(){
    const{id}=useParams()
    const[product,setProduct]=useState({});
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
        .then(res=>setProduct(res.data))
    },[id]);
     
    return(
        <div style={{padding:"30px"}}>
            <img src={product.image} alt="" style={{width:"300px"}}/>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <p>{product.stock}</p>
        </div>
    );

}
export default ProductDetails;