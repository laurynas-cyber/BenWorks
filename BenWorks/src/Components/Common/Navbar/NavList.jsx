// function NavList({ navbar, classname }) {
//   return (
//     <ul className={classname} style={{ right: navbar ? "-200px" : "0px" }}>
//       <li>Products</li>
//       <li>Contact Us</li>
//       <li>About</li>
//       <li>Home</li>
//     </ul>
//   );
// }

// export default NavList;

import { useContext } from "react";
import { ResponsiveContext } from "../../../App";

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
