import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './lib/Clock';

function App() {

  const [clock, setClock] = useState<Clock>();
  
  useEffect(() => {
    if (clock) {
      clock.start();
    }
  }, [clock])

  const startClock = () => {
    const clock = new Clock(new AudioContext());
    clock.start();
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={startClock}>Start</button>
      </header>
    </div>
  );
}

export default App;
