import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Privacy from "../pages/Privacy"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AboutUs from "../pages/AboutUs"
import OnderzoekAanmaken from "../pages/OnderzoekAanmaken"

function Pages() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/onderzoekaanmaken" element={<OnderzoekAanmaken />} />
        </Routes>
  );
}

export default Pages;