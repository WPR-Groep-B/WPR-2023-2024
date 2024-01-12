import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Privacy from "../pages/Privacy"
import Login from "../pages/Login"
import Register from "../pages/Register"
import RegisterName from "../pages/Registration/RegisterName"
import RegisterInfo from "../pages/Registration/RegisterInfo"
import RegisterAccount from "../pages/Registration/RegisterAccount"
import AboutUs from "../pages/AboutUs"
// import OnderzoekAanmaken from "../pages/OnderzoekAanmaken"
import ResearchOverview from "../pages/ResearchOverview"

function Pages() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="registerStart" element={<RegisterName />} />
        <Route path="registerInfo" element={<RegisterInfo />} />
        <Route path="registerAccount" element={<RegisterAccount />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/onderzoekaanmaken" element={<OnderzoekAanmaken />} /> */}
        <Route path="/onderzoeken" element={<ResearchOverview />} />
        </Routes>
  );
}

export default Pages;