import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import {Home} from "./views/home";
import { Planet } from "./component/planet";
import { People } from "./component/people";
import { Vehicle } from "./component/vehicle";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const App = () => {
  const basename = process.env.BASENAME || "";
  
  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(App);











// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

// import { Planet } from "./component/planet";
// import { People } from "./component/people";
// import { Vehicle } from "./component/vehicle";
// import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

// //create your first component
// const Layout = () => {
// 	//the basename is used when your project is published in a subdirectory and not in the root of the domain
// 	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
// 	const basename = process.env.BASENAME || "";

// 	return (
// 		<div>
// 			<BrowserRouter basename={basename}>
// 				<ScrollToTop>
// 					<Navbar />
// 					<Routes>
// 						<Route path="/" element={<Home />} />
// 						<Route path="/demo" element={<Demo />} />
// 						<Route path="/single/:theid" element={<Single />} />
// 						<Route path="*" element={<h1>Not found!</h1>} />
// 					</Routes>
// 					<Footer />
// 				</ScrollToTop>
// 			</BrowserRouter>
// 		</div>
// 	);
// };

// export default injectContext(Layout);
