import { useEffect, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useScroll, animated } from "@react-spring/web";
export default function Footer() {
  const { scrollYProgress } = useScroll();

  return (
    <footer className="section_footer">
      <animated.div
        className="footer_containers call_container"
        style={{
          position: "relative",

          opacity: scrollYProgress.to(
            (op) => `${parseFloat(op).toFixed(2) * 10 - 9}`
          ),
          right: scrollYProgress.to(
            (val) => `${2000 - (val * 2000).toFixed()}px`
          ),
        }}
      >
        <h3>Call us </h3>
        <span>Available on Monday - Sunday from 5:00 PM. </span>
        <a href="tel:+473337890" className="call_container_phone">
          <strong>+1234567890 </strong>
        </a>
      </animated.div>
      <animated.div
        className="footer_containers mail_container"
        style={{
          position: "relative",
          visibility: scrollYProgress.to(
            (op) => `${console.log(parseFloat(op).toFixed(2) * 10 - 9)}`
          ),
          opacity: scrollYProgress.to(
            (op) => `${parseFloat(op).toFixed(2) * 10 - 9}`
          ),
          // top: scrollYProgress.to(
          //   (val) => `${2000 - (val * 2000).toFixed()}px`
          // ),
        }}
      >
        <h3>Mail us </h3>
        <span>We will answer within 1 working day. </span>
        <a href="mailto: Theme@xclusiveliving.nl">
          <strong>Theme@xclusiveliving.nl </strong>
        </a>
      </animated.div>
      <animated.div
        className="footer_containers social_container"
        style={{
          position: "relative",

          opacity: scrollYProgress.to(
            (op) => `${parseFloat(op).toFixed(2) * 10 - 9}`
          ),
          left: scrollYProgress.to(
            (val) => `${2000 - (val * 2000).toFixed()}px`
          ),
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
