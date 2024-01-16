import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Privacy from "../pages/Privacy"
import Login from "../pages/Login"
import RegisterStart from "../pages/RegisterStart"
import RegisterInfo from "../pages/RegisterInfo"
import RegisterAccount from "../pages/RegisterAccount"
import AboutUs from "../pages/AboutUs"
// import OnderzoekAanmaken from "../pages/OnderzoekAanmaken"
// import Account from "../pages/Account"

function Pages() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-start" element={<RegisterStart />} />
        <Route path="/register-info" element={<RegisterInfo />} />
        <Route path="/register-account" element={<RegisterAccount />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/*<Route path="/onderzoek-aanmaken" element={<OnderzoekAanmaken />} />
        <Route path="/mijn-account" element={<Account />} /> */}
        </Routes>
  );
}

export default Pages;