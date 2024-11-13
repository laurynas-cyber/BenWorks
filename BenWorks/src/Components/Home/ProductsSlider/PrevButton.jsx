import { useSwiper } from "swiper/react";
import { MdArrowBackIos } from "react-icons/md";
export default function PrevButton() {
  const swiper = useSwiper();

  return <button onClick={() => swiper.slidePrev()}>Prev</button>;
}
