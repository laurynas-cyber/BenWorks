import React from "react";
import Banner from "./Banner/Banner.jsx";
import CategoriesSection from "./Categories/CategoriesSection.jsx";

export default function HomeLayout() {
  return (
    <div className="content_width">
      <Banner />
      <CategoriesSection />
    </div>
  );
}
