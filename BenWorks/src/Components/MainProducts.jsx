import FilterProducts from "./FilterProducts";
import Products from "./Products";

function MainProducts() {
  return (
    <div className="mainContainer">
      <h2>Check out our maden products</h2>
      <FilterProducts />
      <Products />
    </div>
  );
}

export default MainProducts;
