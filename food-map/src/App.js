// import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Footer from "./components/Footer";
import CustomerDashboard from "./components/CustomerDashboard";
import { Routes, Route } from "react-router-dom";
import RestaurentReg from "./components/RestaurentReg";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/restaurent" element={<RestaurentReg />} /> */}
        <Route path="/customer" element={<CustomerDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
