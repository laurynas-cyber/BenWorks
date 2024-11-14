import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, A11y } from "swiper/modules";

// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "../../../Styles/components/sliders/homeslider.scss";
import "../../../Styles/mediascreen.scss";
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="home_products_swiper"
      >
        <SwiperSlide>
          <div className="home_slider_card">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_slider_card">2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_slider_card">3</div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="home_slider_card">4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_slider_card">5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home_slider_card">6</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
