import categories from "../../../../../back/data/categories.js";
import decors from "../../../../../back/public/img/decors.avif";
import chair from "../../../../../back/public/img/barstoelen.webp";
import tables from "../../../../../back/public/img/table.avif";

export default function CategoriesSection() {
  return (
    <section className="categories_container">
      {categories.map((c, i) => (
        <div className="category" key={i}>
          <div className="category_bubble">
            
          </div>
          <div className="category_name_container">
            <a className="category_name" href="">
              {c.name}
            </a>
            <div className="category_name_line"></div>
          </div>
        </div>
      ))}
      <div className="category">
        <div className="category_bubble"></div>
        <div className="category_name_container">
          <a className="category_name" href="">
            Enviroment
          </a>
          <div className="category_name_line"></div>
        </div>
      </div>
    </section>
  );
}
