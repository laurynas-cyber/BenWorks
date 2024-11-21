import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, A11y } from "swiper/modules";
import { useScroll, animated } from "@react-spring/web";
import CallUs from "./CallUs";
import MailUs from "./MailUs";
import SocialUs from "./SocialUs";
export default function Footer() {
  const { scrollYProgress } = useScroll();

  const swiper = {
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // navigation: {
    //   nextEl: "custom_next",
    //   prevEl: "custom_prev",
    // },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      950: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <footer className="section_footer">
      <Swiper
        modules={[Navigation, Pagination, A11y, FreeMode]}
        spaceBetween={5}
        slidesPerView={3}
        breakpoints={swiper.breakpoints}
        navigation
        pagination={swiper.pagination}
        // className="home_products_swiper"
      >
        <SwiperSlide>
          <CallUs animated={animated} scrollYProgress={scrollYProgress} />
        </SwiperSlide>
        <SwiperSlide>
          <MailUs animated={animated} scrollYProgress={scrollYProgress} />
        </SwiperSlide>
        <SwiperSlide>
          <SocialUs animated={animated} scrollYProgress={scrollYProgress} />
        </SwiperSlide>
      </Swiper>
    </footer>
  );
}
