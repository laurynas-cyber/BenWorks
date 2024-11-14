import { createContext, useState } from "react";

export const ProductContext = createContext();

export default function AllProducts() {
    const data = [
        {name:"Chair",
            price: "100",
            category: "Chairs", 
        }
    ]
  const [ProductsData, setProductData] = useState();
  return <div>ProductContext</div>;
}
