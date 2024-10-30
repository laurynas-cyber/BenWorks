import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import NavList from "./NavList";
import { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

function Navigation() {
  const { navbar, setNavbar, navbarScroll } = useContext(ResponsiveContext);
  function handeleBar() {
    setNavbar(!navbar);
  }

  return (
    <>
      <nav style={{ backgroundColor: (!navbar || !navbarScroll) && "#e6eed6" }}>
        <div className="logo">BenWorks</div>
        {navbar ? (
          <GiHamburgerMenu
            className={"bar " + (!navbarScroll && "barScroll")}
            onClick={handeleBar}
          />
        ) : (
          <IoMdClose className="bar barClose" onClick={handeleBar} />
        )}
        <NavList navbar={navbar} navbarScroll={navbarScroll} />
      </nav>
    </>
  );
}

export default Navigation;
