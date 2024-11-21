import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialUs({ animated, scrollYProgress }) {
  return (
    <animated.div
      className="footer_containers social_container"
      style={{
        position: "relative",

        opacity: scrollYProgress.to(
          (op) => `${parseFloat(op).toFixed(2) * 10 - 9}`
        ),
        left: scrollYProgress.to((val) => `${2000 - (val * 2000).toFixed()}px`),
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
  );
}
