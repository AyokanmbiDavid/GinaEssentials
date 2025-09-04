import { useState, Suspense } from 'react';
import './index.css'
import Header from './Header/Header';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import { Routes,Route } from 'react-router-dom';
import Login from './Login&Register/Login';
import Register from './Login&Register/Register';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductSearch from './ProductSearch/ProductSearch';

function App () {
  
  return (
    <>
    <Suspense>
    <Header />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/' element={<Home />}/>
        <Route path='/details' element={<ProductDetails />}>
          <Route  path=':id' element={<ProductDetails/>}/>
        </Route>
      <Route path='/search' element={<ProductSearch />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </Suspense>
    </>
  )
}

export default App;
