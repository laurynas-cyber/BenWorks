import { useEffect, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useScroll, animated, useSpring } from "@react-spring/web";
export default function Footer() {
  const containerRef = useRef(null);
  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));
  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: "0" });
      } else {
        textApi.start({ y: "100%" });
      }
    },
    default: {
      immediate: true,
    },
  });

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  // const [scroll, setScroll] = useState(false);
  // const [pageHeight, setPageHeight] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollBar);
  //   const updatePageHeight = () => {
  //     setPageHeight(document.documentElement.scrollHeight);
  //   };
  //   updatePageHeight();
  //   window.addEventListener("resize", updatePageHeight);
  //   // console.log(scroll);
  //   return () => {
  //     window.removeEventListener("scroll", scrollBar);
  //     window.removeEventListener("resize", updatePageHeight);
  //   };
  // }, [scroll]);

  // const scrollBar = () => {
  //   console.log(scroll + window.innerHeight);
  //   setScroll(window.scrollY);
  //   // if (window.scrollY > 600) {
  //   //   setScroll(true);
  //   // } else {
  //   //   setScroll(false);
  //   // }
  // };

  // const calculateOpacity = (start, end) => {
  //   // return 1 - (scroll - start) / (end - start);
  //   if (pageHeight == scroll + window.innerHeight) {
  //     return 1;
  //   } else return 0;
  // };

  return (
    <footer className="section_footer" ref={containerRef}>
      {/* <div className="footer_containers call_container">
        <p>Current Page Height: {pageHeight}px</p>
      </div> */}
      <div className="footer_containers call_container">
        <h3>Call us </h3>
        <span>Available on Monday - Sunday from 5:00 PM. </span>
        <a href="tel:+473337890" className="call_container_phone">
          <strong>+1234567890 </strong>
        </a>
      </div>
      <div className="footer_containers mail_container">
        <h3>Mail us </h3>
        <span>We will answer within 1 working day. </span>
        <a href="mailto: Theme@xclusiveliving.nl">
          <strong>Theme@xclusiveliving.nl </strong>
        </a>
      </div>
      <animated.div
        className="footer_containers social_container"
        style={{
          position: "relative",
          left: scrollYProgress.to((val) => `${val * 100}px`),
        }}
      >
        <h3>Social media</h3>
        <ul className="social_media_list">
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebook className="social_icons" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FaInstagram className="social_icons" />
            </a>
          </li>
          <li>
            <a href="https://x.com/">
              <FaXTwitter className="social_icons" />
            </a>
          </li>
        </ul>
        <div></div>
      </animated.div>
    </footer>
  );
}
