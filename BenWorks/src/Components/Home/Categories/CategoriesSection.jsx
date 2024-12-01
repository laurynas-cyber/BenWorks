import categories from "../../../../../back/data/categories.js";
import decors from "../../../../../back/public/img/decors.avif";


export default function CategoriesSection() {
  return (
    <section className="categories_container">
      {categories.map((c, i) => (
        <div className="category" key={i}>
          <div className="category_bubble">
            <img
              src={decors}
              alt=""
              style={{ animationDelay: `0.${5 + i}s` }}
            />
          </div>
          <div className="category_name_container">
            <a className="category_name" href="">
              {c.name}
            </a>
            <div className="category_name_line"></div>
          </div>
        </div>
      ))}
    </section>
  );
}
