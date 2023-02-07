import React from 'react';
import './all.css'
import {increment,decrement} from '../utils/helpers'

const Counter: React.FC = () => {
    const item = localStorage.getItem('counter')
    const [first, setfirst] = React.useState(localStorage.getItem('counter'))

    window.addEventListener("change",(function(e){
        setfirst(localStorage.getItem('counter'))
     }).bind(this));

  return (
    <>
    <h5 style={{textAlign:'center', margin:'0px'}} >Counter</h5>
    <div className="container">
        <div className="inner">
            <button onClick={increment} className='incButton left' >+</button>
            <input className='inp' disabled value={first ? first : '0'} />
            <button onClick={decrement} className='incButton right' >-</button>
        </div>
    </div>
    </>
  );
};

export default Counter;