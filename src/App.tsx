import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './HomePage'
import Setting from './Setting';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/setting" element={<Setting />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
