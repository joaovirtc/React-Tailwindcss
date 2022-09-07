import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

export default function Rotas() {
  return (
    <Routes>
      <Route exat path="/" element={<Login />} />
      <Route exat path="*" element={<Login />} />
      <Route exat path="/Home" element={<Home />} />
    </Routes>
  );
}
