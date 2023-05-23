import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';

export default function Test() {
  return (
    <div>
      <h1>Test Component</h1>
      <p>This is a test component to demonstrate React Router usage.</p>
      <button>
        <Link to="/">Go to Home</Link>
      </button>
      <button>
        <Link to="/about">Go to About</Link>
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
