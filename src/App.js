import React from "react";
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

function App() {
	return (
		<Router>
			<MobileNavbar />
			<div id="main">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/brand">
						<Brand />
					</Route>
          			<Route exact path="/hotel">
            			<Hotel />
          			</Route>
          			<Route exact path="/room">
            			<Room />
          			</Route>
					<Route exact path="/faq">
            			<FAQ />
          			</Route>
					  
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
