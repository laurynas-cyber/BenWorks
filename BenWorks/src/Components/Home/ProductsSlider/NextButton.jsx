import { useSwiper } from "swiper/react";
import { MdArrowForwardIos } from "react-icons/md";

export default function NextButton() {
  const swiper = useSwiper();

  return <button onClick={() => swiper.slideNext()}>Next</button>;
  // return <MdArrowForwardIos className="slider_next_arrow"/>;
}
