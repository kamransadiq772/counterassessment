import React,{useState,useEffect} from 'react';

const Subtractor: React.FC = () => {
    const [first, setfirst] = useState('0')
    const [data, setdata] = useState(0)

    const handleChange = (e) => {
        e.preventDefault()
        setfirst(e.target.value)
    }

    window.addEventListener("change",(function(e){
        setdata(parseFloat(first)-Number(localStorage.getItem('counter')))
     }).bind(this));
     
     useEffect(()=>{
        setdata(parseFloat(first)-Number(localStorage.getItem('counter')))
     },[first])
  return (
    <>
    <h5 style={{textAlign:'center', margin:'0px'}} >Subtracter</h5>
    <div className="container">
        <div className="inner">
            <input type='number' onChange={(e)=>{handleChange(e)}} />
            <div className="dispalyValue">{data}</div>
        </div>
    </div>
    </>
  );
};

export default Subtractor;