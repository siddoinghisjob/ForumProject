import {Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/login/index.js";
import Register from "./components/register/index.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
