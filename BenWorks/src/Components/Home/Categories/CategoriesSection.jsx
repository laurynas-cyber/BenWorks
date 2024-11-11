import React from "react";

export default function CategoriesSection() {
  return (
    <section className="categories_container">
          <div className="category">
        <div className="category_bubble"></div>
        <div className="category_name_container">
          <a className="category_name" href="">
            Enviroment
          </a>
          <div className="category_name_line"></div>
        </div>
      </div>
      <div className="category">
        <div className="category_bubble"></div>
        <div className="category_name_container">
          <a className="category_name" href="">
            Chairs
          </a>
          <div className="category_name_line"></div>
        </div>
      </div>
      <div className="category">
        <div className="category_bubble"></div>
        <div className="category_name_container">
          <a className="category_name" href="">
            Chairs
          </a>
          <div className="category_name_line"></div>
        </div>
      </div>
    </section>
  );
}
