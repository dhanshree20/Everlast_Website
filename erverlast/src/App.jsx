
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import Header from "./components/Header";
import "./App.css";
import Aboutus from "./components/Aboutus";
import ContactUs from './components/ContactUs';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path ="/" Component={Header} />
          <Route path="/about" Component={Aboutus} />
          <Route path='/product' Component={Product} />
          <Route path="/contact" Component={ContactUs} />
        </Routes>
      </Router> 

    </div>
  );
}

export default App;
