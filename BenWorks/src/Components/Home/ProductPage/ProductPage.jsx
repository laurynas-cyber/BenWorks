import { useParams } from "react-router-dom";

export default function ProductPage() {
  const params = useParams();

  return (
    <section className="product_page_container">
      ProductPage id:{params.id}
    </section>
  );
}
