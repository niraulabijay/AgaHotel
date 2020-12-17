import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./assets/css/style.css";
import MobileNavbar from "./components/MobileNavbar";
import Brand from "./pages/Brand";
import About from "./pages/About";
import Hotel from "./pages/Hotel";
import Room from "./pages/Room";
import FAQ from "./pages/FAQ";
import AgaBrand from "./pages/AgaHotel/AgaBrand";
import Register from "./pages/Register";
import HotelBluBrand from "./pages/HotelBlu/HotelBluBrand";
import LyfeBrand from "./pages/LyfeInn/LyfeBrand";
import EarthBrand from "./pages/EarthInn/EarthBrand";
import Supply from "./pages/Supply/Supply";
import BrandGlobal from "./pages/Brand/BrandGlobal";
import Franchise from "./pages/Franchise";
import ContactUs from "./pages/ContactUs";
import Reward from "./pages/Reward";

function App() {
  useEffect(() => {
    document.getElementById("mySidenav").style.width = "0";
  }, []);
  return (
    <Router>
      <MobileNavbar />
      <div id="main">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route exact path="/reward">
            <Reward />
          </Route>
          <Route exact path="/hotel/:destination_id">
            <Hotel />
          </Route>
          <Route exact path="/hotel/all">
            <Hotel />
          </Route>
          <Route exact path="/room">
            <Room />
          </Route>
          <Route exact path="/faq/:blocks?">
            <FAQ />
          </Route>
          <Route exact path="/brand/:slug">
            <BrandGlobal />
          </Route>
          <Route exact path="/franchise">
            <Franchise />
          </Route>
          <Route exact path="/supply">
            <Supply />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/brandSection">
            <Home brand="brand" />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
