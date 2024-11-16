import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import SearchItems from './components/SearchItems';
import { items } from './components/Data';
function App() {
  const [data, setData] = useState([...items]);
  console.log(data);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product items={data} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search/:term" element={<SearchItems />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default App;
