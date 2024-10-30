import { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

function NavList({ navbar, navbarScroll }) {
  const { isResponsive } = useContext(ResponsiveContext);
  return (
    <ul
      className={isResponsive ? "NavUl" : "hidden"}
      style={{ right: navbar ? "-200px" : "0px" }}
    >
      <li className={!navbarScroll ? "barScroll" : "navLi"}>Products</li>
      <li className={!navbarScroll ? "barScroll" : "navLi"}>Contact Us</li>
      <li className={!navbarScroll ? "barScroll" : "navLi"}>About</li>
      <li className={!navbarScroll ? "barScroll" : "navLi"}>Home</li>
      <li className={!navbarScroll ? "barScroll" : "navLi"}>Login</li>
    </ul>
  );
}

export default NavList;
