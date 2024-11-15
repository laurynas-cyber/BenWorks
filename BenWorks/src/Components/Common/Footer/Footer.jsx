import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="section_footer">
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
      <div className="footer_containers social_container">
        <h3>Social Media</h3>
        <ul className="social_media_list">
          <li className="social_icons">
            <a href="https://www.facebook.com/" blank>
              <FaFacebook />
            </a>
          </li>
          <li className="social_icons">
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li className="social_icons">
            <a href="">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <div></div>
      </div>
    </footer>
  );
}
