import { useEffect, useState } from "react";
import bucks from "../../assets/Bucks.jpg";

export default function CollectionPresent() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="collection_present_container">
      <div className="collection_present_green_field">
        <h2>Natural wood brings life to your home</h2>
        <p>
          In our assortment you can find different type of furnitures used for
          inside and outside house.
        </p>
        <p className="collection_present_smallertext">
          For any custom wishes, contact us and we will discuss how can we
          realise it
        </p>
        <div className="collection_present_btns">
          <a href="">Discover products</a>
          <a href="">Contact us</a>
        </div>
      </div>
      <div className="collection_present_img_container">
        <img
          src={bucks}
          alt=""
          style={{
            transform: `translateY(${offsetY * 0.15}px)`, // Adjust the speed by changing multiplier (0.5 for slower, 1 for faster)
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
    </section>
  );
}
