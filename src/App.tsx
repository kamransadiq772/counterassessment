import React from 'react';
import './App.css';
import Counter from './Components/Counter.tsx';
import Multiplier from './Components/Multiplier.tsx';
import Devider from './Components/Devider.tsx';
import Subtractor from './Components/Subtractor.tsx';

const App: React.FC = () => {
  return (
    <div className='App' >
    <Counter />
    <Devider />
    <Multiplier />
    <Subtractor />
    </div>

  );
};

export default App;
