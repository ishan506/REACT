import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import tastyTrailsLogo from "./11png";

import Header from "../html";
import {card} from "../html";
import {footer} from "../html";
import {body} from "../html";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Restaurant, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */




 



// Footer component for footer section


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);