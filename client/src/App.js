import React from 'react';
import {Router, Routes, Route, Link} from "react-router-dom"

// Import Pages
import NavBar from './components/Nav/NavBar';
import HomePage from './containers/HomePage';
import ContactPage from './containers/ContactPage';
import ShopPage from './containers/ShopPage';
import ShopCeramicsPage from './containers/ShopCeramicsPage';
import ShopCanvasPage from './containers/ShopCanvasPage';
import GalleryPage from './containers/GalleryPage';

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/shop/ceramics" element={<ShopCeramicsPage/>}/>
        <Route path="/shop/canvas" element={<ShopCanvasPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
      </Routes>
    </>
  );
};

export default App;
