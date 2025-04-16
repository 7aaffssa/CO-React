import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/TpControl/Login';
import Products from './components/TpControl/Products';
import ProductDetail from './components/TpControl/ProductDetail';
import AddProduct from './components/TpControl/AddProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;