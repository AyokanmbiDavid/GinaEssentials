import { Suspense } from 'react';
import './index.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import Login from './LoginRegister/Login';
import Register from './LoginRegister/Register';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductSearch from './ProductSearch/ProductSearch';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <ProductSearch />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
