import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './User/Header/Header';
import Footer from './User/Footer/Footer';
import Home from './User/Home/Home';
import Login from './User/Login/Login';
import Register from './User/Register/Register';
import { useNavigate } from 'react-router-dom';
import Cart from './User/Cart/Cart';
import ProductDetails from './User/ProductDetails/ProductDetails';

function App() {
  const Navigate = useNavigate()
  const checkLog = JSON.stringify(localStorage.getItem('userLogin')) 
  if(checkLog == true){
    Navigate('/home')
  } 

  return (
    <>
    <Header />
      <Routes>
        <Route path="/home" element={< Home/>} />
        <Route path="/" element={< Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/details/:id" element={<ProductDetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
