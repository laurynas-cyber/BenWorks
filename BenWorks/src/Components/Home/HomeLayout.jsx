import React from "react";
import Banner from "./Banner/Banner.jsx";
import CategoriesSection from "./Categories/CategoriesSection.jsx";
import CollectionPresent from "./CollectionPresent.jsx";
import MainSlider from "./ProductsSlider/MainSlider.jsx";

export default function HomeLayout() {
  return (
    <>
      <Banner />
      <CategoriesSection />
      <CollectionPresent />
      <MainSlider />
    </>
  );
}
