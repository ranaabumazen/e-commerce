import * as React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Slider from "./Components/Slider/Slider";
import CatProduct from "./Components/CatProduct";
import Products from "./Components/Products";
export default function BasicButtons() {
  return (
    <div>
      <Header />
      <Navigation />
      <Slider />
      <Products />
      <CatProduct />
    </div>
  );
}
