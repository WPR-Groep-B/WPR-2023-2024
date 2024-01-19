import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Privacy from "../pages/Privacy"
import Login from "../pages/Login"
import RegisterStart from "../pages/RegisterStart"
import RegisterInfo from "../pages/RegisterInfo"
import RegisterAccount from "../pages/RegisterAccount"
import AboutUs from "../pages/AboutUs"
import RegisterBeperking from "../pages/RegisterBeperking"
import ResearchOverview from "../pages/ResearchOverview"
import ResearchJoin from "../pages/ResearchJoin"
import ChatPage from "../pages/ChatPage"
// import Account from "../pages/Account"


function Pages() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onderzoekbeheer" element={<ResearchOverview />} />
        <Route path="/onderzoekaanmelden" element={<ResearchJoin />} />
        <Route path="/register-start" element={<RegisterStart />} />
        <Route path="/register-info" element={<RegisterInfo />} />
        <Route path="/register-account" element={<RegisterAccount />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/register-beperking" element={<RegisterBeperking />} />
        {/*<Route path="/mijn-account" element={<Account />} /> */}
        </Routes>
  );
}

export default Pages;