import React from "react";
import Banner from "./Banner/Banner.jsx";
import CategoriesSection from "./Categories/CategoriesSection.jsx";
import CollectionPresent from "./CollectionPresent.jsx";
import MainSlider from "./ProductsSlider/MainSlider.jsx";
import AllProducts from "../Context/ProductContext.jsx";

export default function HomeLayout() {
  return (
    <AllProducts>
      <Banner />
      <CategoriesSection />
      <CollectionPresent />
      <MainSlider />
    </AllProducts>
  );
}
