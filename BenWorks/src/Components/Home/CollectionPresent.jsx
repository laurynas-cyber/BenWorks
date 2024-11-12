import bucks from "../../assets/Bucks.jpg";

export default function CollectionPresent() {
  return (
    <section className="collection_present_container">
      <div className="collection_present_green_field">
        <h2>Natural wood brings life to your home</h2>
        <p>
          In our assortment you can find different type of furnitures used for
          inside and outside house.
        </p>
        <p className="collection_present_smallertext">
          For any custom wishes, contact us and we will discuss how can
          we realise it
        </p>
        <div className="collection_present_btns">
            <a href="">Discover products</a>
            <a href="">Contact Us</a>
        </div>
      </div>
      <div className="collection_present_img_container">
        <img src={bucks} alt="" />
      </div>
    </section>
  );
}
