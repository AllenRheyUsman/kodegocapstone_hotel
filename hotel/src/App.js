import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import './App2.css';

import Landing from './components/new/landing';
import Booking from './components/new/booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
