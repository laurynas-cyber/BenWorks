import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import NavList from "./NavList";
import { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";
import NavIcon from "./NavIcon";

function Navigation() {
  const { navbar, setNavbar, navbarScroll, isResponsive } =
    useContext(ResponsiveContext);
  function handeleBar() {
    setNavbar(!navbar);
    console.log("click");
  }

  return (
    <>
      <nav style={{ backgroundColor: (!navbar || !navbarScroll) && "#e6eed6" }}>
        <div className="logo">BenWorks</div>
        {!isResponsive && <NavIcon className="custom_nav_icon" />}

        <NavList navbar={navbar} navbarScroll={navbarScroll} />
      </nav>
    </>
  );
}

export default Navigation;
