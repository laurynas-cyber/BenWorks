import { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

function NavList({ navbar, navbarScroll }) {
  const { responsive } = useContext(ResponsiveContext);
  return (
    <ul
      className={responsive ? "NavUl" : "hidden"} // kodel neveikia transition
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
