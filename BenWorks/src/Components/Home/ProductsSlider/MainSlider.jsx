import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, A11y } from "swiper/modules";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function MainSlider() {
  const { ProductsData } = useContext(ProductContext);
  const navigate = useNavigate();
  const swiper = {
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: "custom_next",
      prevEl: "custom_prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      480: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section id="home_products_slider_container">
      <h2>Check out assortment!</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y, FreeMode]}
        spaceBetween={5}
        slidesPerView={3}
        slidesPerGroup={2}
        freeMode={true}
        keyboard={swiper.keyboard}
        breakpoints={swiper.breakpoints}
        navigation
        pagination={swiper.pagination}
        className="home_products_swiper"
      >
        {/* horizontal */}
        {ProductsData.map((p, i) => (
          <SwiperSlide key={p.id}>
            <div
              className="home_slider_card"
              onClick={(_) => navigate(`/products/${p.id}`)}
            >
              <div className="home_slider_card_img_container">
                <img src={p.img} alt="" />
              </div>
              <div className="slider_card_product_info_cont">
                <span className="product_name">{p.name}</span>
                <span className="stock">
                  {p.onStock ? (
                    <>
                      <AiOutlineCheckSquare className="out_of_stock_icon" /> In
                      stock
                    </>
                  ) : (
                    <>
                      <AiOutlineCloseSquare className="out_of_stock_icon" />
                      Out of stock
                    </>
                  )}
                </span>
                <span>{p.price} £</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* vertical */}
        {/* {ProductsData.map((p, i) => (
          <SwiperSlide key={p.id}>
            <div className="home_slider_card">
              <div className="home_slider_card_img_container">
                <img src={p.img} alt="" />
              </div>
              <div className="slider_card_product_info_cont">
                <a href="" className="view_info_btn">View</a>
                <span className="product_name">{p.name}</span>
                <span className="stock">
                  {p.onStock ? (
                    <>
                      <AiOutlineCheckSquare className="out_of_stock_icon" /> In
                      stock
                    </>
                  ) : (
                    <>
                      <AiOutlineCloseSquare className="out_of_stock_icon" />
                      Out of stock
                    </>
                  )}
                </span>
                <span>{p.price} £</span>
              </div>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </section>
  );
}
