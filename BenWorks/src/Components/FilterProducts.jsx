const FilterCategories = [
  "All",
  "Inside",
  "Outside",
  "Furnitures",
  "Household items",
  "Other",
];

function FilterProducts() {
  return (
    <div className="FilterContainer">
      <span>Filter products:</span>
      <div className="buttons">
        {FilterCategories.map((c, i) => (
          <button key={i} type="button" className="FilterBtns">
            {c}
            <div className="hoverstick"></div>
          </button>
        ))}
        {/* <button type="button" className="FilterBtns">
          All
          <div className="hoverstick"></div>
        </button>
        <button type="button" className="FilterBtns">
          Inside
          <div className="hoverstick"></div>
        </button>
        <button type="button" className="FilterBtns">
          Outside
          <div className="hoverstick"></div>
        </button>
        <button type="button" className="FilterBtns">
          Furnitures
          <div className="hoverstick"></div>
        </button>
        <button type="button" className="FilterBtns">
          Household items
          <div className="hoverstick"></div>
        </button>
        <button type="button" className="FilterBtns">
          Other
          <div className="hoverstick"></div>
        </button> */}
      </div>
    </div>
  );
}

export default FilterProducts;
