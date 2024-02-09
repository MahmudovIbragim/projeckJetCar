import { Route } from "react-router-dom";
import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Routes } from "react-router-dom";
import HomeSection from "../pages/homeSection/HomeSection";
import LandRover from "../pages/landRover/LandRover";
import Bmw from "../pages/bmw/Bmw";
import Mercedes from "../pages/mercedes/Mercedes";
import Prosche from "../pages/porsche/Prosche";

const Layout = () => {
  return (
    <div className={scss.Layout}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeSection/>}/>
            <Route path="/landrover" element={<LandRover/>}/>
            <Route path="/bmw" element={<Bmw/>}/>
            <Route path="/mercerdes" element={<Mercedes/>}/>
            <Route path="/porsche" element={<Prosche/>}/>
          </Routes>
        </main>
        <Footer/>
    </div>
  );
};

export default Layout;
