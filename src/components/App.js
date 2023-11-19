import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App; 