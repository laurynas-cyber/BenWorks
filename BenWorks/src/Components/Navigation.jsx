import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { ResponsiveContext } from "../App";
import NavList from "./NavList";

function Navigation({ navbar, setNavbar }) {
  const { responsive } = useContext(ResponsiveContext); // sito nereikia cia pavyzdys

  function handeleBar() {
    setNavbar(!navbar);
  }

  return (
    <>
      <nav style={{ backgroundColor: !navbar && "#e6eed6" }}>
        <div className="logo">BenWorks</div>
        {navbar ? (
          <GiHamburgerMenu className="bar" onClick={handeleBar} />
        ) : (
          <IoMdClose className="bar barClose" onClick={handeleBar} />
        )}
        <NavList classname={"NavUl"} />
        <NavList navbar={navbar} classname={"hidden"} />
      </nav>
    </>
  );
}

export default Navigation;
