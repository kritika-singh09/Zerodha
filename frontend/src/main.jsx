import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './landingpage/home/HomePage.jsx';
import Signup from './landingpage/signup/Signup.jsx';
import AboutPage from './landingpage/about/AboutPage.jsx';
import ProductPage from './landingpage/products/ProductPage.jsx';
import Pricing from './landingpage/pricing/PricingPage.jsx';
import SupportPage from './landingpage/support/SupportPage.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<SupportPage />} />
           <Route path="/*" element={<NotFound/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
