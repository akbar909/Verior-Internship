import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartBar from './components/CartBar';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import New from "./pages/New";
import OrderStatus from "./pages/OrderStatus";
import store from './store';


const App = () => {
  const [name, setName] = useState(() => {
  return localStorage.getItem('name') || '';
});

useEffect(() => {
  localStorage.setItem('name', name);
}, [name]);
  return (
    <Provider store={store}>
      <Router>
        <Navbar name={name} />
        <Routes>
          <Route path="/" element={<Hero setName={setName} />} />
          <Route path="/menu" element={<Menu name={name} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/new" element={<New name={name} />} />
          <Route path="/order/:orderId" element={<OrderStatus />} />
        </Routes>
        <CartBar />
      </Router>
    </Provider>
  )
}

export default App