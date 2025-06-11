import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
