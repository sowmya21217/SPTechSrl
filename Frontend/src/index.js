import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Services from './Pages/Services/Service';
import Career from './Pages/Career/Career';
import Contacts from './Pages/Contacts/Contacts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path= "About" element ={<About />} />   
    <Route path= "Services" element ={<Services />} /> 
    <Route path= "Career" element ={<Career />} /> 
    <Route path= "Contacts" element ={<Contacts />} /> 
  </Routes>
</BrowserRouter> 

);
