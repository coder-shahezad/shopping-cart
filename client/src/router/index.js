import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default router;
