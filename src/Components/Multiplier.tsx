import React,{useState,useEffect} from 'react';

const Multiplier: React.FC = () => {
    const [first, setfirst] = useState('0')
    const [data, setdata] = useState(0)

    const handleChange = (e) => {
        setfirst(e.target.value)
    }


    window.addEventListener("change",(function(e){
        setdata(Number(localStorage.getItem('counter'))*parseFloat(first))
     }).bind(this));

     useEffect(()=>{
        setdata(Number(localStorage.getItem('counter'))*parseFloat(first))
     },[first])

  return (
    <>
    <h5 style={{textAlign:'center', margin:'0px'}} >Multiplier</h5>
    <div className="container">
        <div className="inner">
            <input type='number' onChange={(e)=>{handleChange(e)}} />
            <div className="dispalyValue">{data}</div>
        </div>
    </div>
    </>
  );
};

export default Multiplier;