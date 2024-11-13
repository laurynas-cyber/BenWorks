import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, A11y } from "swiper/modules";

// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "../../../Styles/components/sliders/homeslider.scss";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

export default function MainSlider() {
  const swiper = {
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  };

  return (
    <section className="home_products_slider_container">
      <Swiper
        modules={[Navigation, Pagination, A11y, FreeMode]}
        spaceBetween={5}
        slidesPerView={3}
        slidesPerGroup={2}
        freeMode={true}
        keyboard={swiper.keyboard}
        navigation
        pagination={swiper.pagination}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="home_products_swiper"
      >
        {/* <NextButton />
        <PrevButton /> */}
        <SwiperSlide>
          <div className="home_slider_card">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_slider_card">2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_slider_card">3</div>
        </SwiperSlide>
        {/* <SwiperSlide>
          {({ isActive }) => (
            <div className="home_slider_card">
              Current slide is {isActive ? "active" : "not active"}
            </div>
          )}
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="home_slider_card">4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_slider_card">5</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
