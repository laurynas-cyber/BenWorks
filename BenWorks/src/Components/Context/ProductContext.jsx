import { createContext, useState } from "react";
import chair from "../../assets/chair2.jpg";
import bucks from "../../assets/Bucks3.jpg";
import cuttingGoose from "../../assets/Cuttingboard2.jpg";
import cuttingLove from "../../assets/test.jpg";
export const ProductContext = createContext();

export default function AllProducts({ children }) {
  const data = [
    {
      id: 3,
      name: "Cutting board Goose",
      img: cuttingGoose,
      price: "10,00",
      category: ["Cutting Boards", "Inside"],
      onStock: false,
    },
    {
      id: 2,
      name: "Bucks",
      img: bucks,
      price: "15,00",
      category: ["Decors"],
      onStock: true,
    },
    {
      id: 4,
      name: "Cutting board",
      img: cuttingLove,
      price: "10,00",
      category: ["Cutting Boards", "Inside"],
      onStock: true,
    },
    {
      id: 1,
      name: "Chair",
      img: chair,
      price: "100,00",
      category: ["Chairs", "Outside"],
      onStock: true,
    },
  ];
  const [ProductsData, setProductData] = useState(data);
  return (
    <ProductContext.Provider value={{ ProductsData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
}
