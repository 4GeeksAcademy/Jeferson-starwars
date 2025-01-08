import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";


import { Home } from "./views/home";
import injectContext from "./store/appContext";
import background from '../img/fondo1.jpg';
import { DetailsVehicles } from "./views/detailsVehicles";
import { DetailsPeoples } from "./views/detailsPeoples";
import { DetailsPlanets } from "./views/detailsPlanets";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div style={{
			backgroundImage: `url(${background})`,
			backgroundAttachment: 'fixed',
			backgroundSize: 'cover'
		}}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details-v/:id" element={<DetailsVehicles />} />
						<Route path="/details-p/:id" element={<DetailsPeoples />} />
						<Route path="/details-planets/:id" element={<DetailsPlanets />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
