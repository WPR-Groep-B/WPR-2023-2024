import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Privacy from "../pages/Privacy"
import Login from "../pages/Login"
import RegisterStart from "../pages/RegisterStart"
import RegisterInfo from "../pages/RegisterInfo"
import RegisterAccount from "../pages/RegisterAccount"
import AboutUs from "../pages/AboutUs"
import OnderzoekAanmaken from "../pages/OnderzoekAanmaken"

function Pages() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="registerStart" element={<RegisterStart />} />
        <Route path="registerInfo" element={<RegisterInfo />} />
        <Route path="registerAccount" element={<RegisterAccount />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/onderzoekaanmaken" element={<OnderzoekAanmaken />} />
        </Routes>
  );
}

export default Pages;