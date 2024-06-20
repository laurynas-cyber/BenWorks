import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import NavList from "./NavList";

function Navigation() {
  const [navbar, setNavbar] = useState(true);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth > 950) {
      setNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  function handeleBar() {
    setNavbar(!navbar);
  }

  return (
    <>
      <nav>
        <div className="logo">BenWorks</div>
        {navbar ? (
          <GiHamburgerMenu className="bar" onClick={handeleBar} />
        ) : (
          <IoMdClose className="bar" onClick={handeleBar} />
        )}

        <ul className="NavUl">
          <li>Products</li>
          <li>Contact Us</li>
          <li>About</li>
          <li>Home</li>
        </ul>
      </nav>
      <NavList />
    </>
  );
}

export default Navigation;
