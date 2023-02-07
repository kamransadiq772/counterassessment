import { useState,useEffect } from "react";
import React from 'react';

const Devider: React.FC = () => {
    const [first, setfirst] = useState('1')
    const [data, setdata] = useState(0)

    const handleChange = (e) => {
        e.preventDefault()
        setfirst(e.target.value)
    }

    window.addEventListener("change",(function(e){
        setdata(parseFloat(first)/Number(localStorage.getItem('counter')))
     }).bind(this));
     
     useEffect(()=>{
        setdata(parseFloat(first)/Number(localStorage.getItem('counter')))
     },[first])
  return (
    <>
    <h5 style={{textAlign:'center', margin:'0px'}} >Devider</h5>
    <div className="container">
        <div className="inner">
            <input type='number' onChange={(e)=>{handleChange(e)}} />
            <div className="dispalyValue">{data}</div>
        </div>
    </div>
    </>
  );
};

export default Devider;