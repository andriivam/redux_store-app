import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Carts from './Components/Pages/Carts';
import BookHeader from './Components/BookHeader/BookHeader';

function App() {



  return (
    <div className="container">
      <Router>
        <BookHeader numItems={5} total={210} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
