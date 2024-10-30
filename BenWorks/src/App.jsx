import { useState, useEffect } from "react";
import { createContext } from "react";
import "../src/Styles/index.scss";
import Navigation from "./Components/Common/Navbar/Navigation";
import Banner from "./Components/Home/Banner";
import SectionInfo from "./Components/SectionInfo";
import MainProducts from "./Components/MainProducts";

export const ResponsiveContext = createContext();

function App() {
  const [isResponsive, setResponsive] = useState(
    window.innerWidth > 950 ? true : false
  );
  const [navbar, setNavbar] = useState(true);
  const [navbarScroll, setNavbarScroll] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 950) {
      setResponsive(true);
      setNavbar(true);
    } else setResponsive(false);
  };

  const scrollBar = () => {
    if (window.scrollY > 0) {
      setNavbarScroll(false);
    } else setNavbarScroll(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", scrollBar);
  });

  return (
    <>
      <ResponsiveContext.Provider value={{ responsive: isResponsive }}>
        <header>
          <Navigation
            navbar={navbar}
            navbarScroll={navbarScroll}
            setNavbar={setNavbar}
          />
          <Banner />
        </header>
      </ResponsiveContext.Provider>
    </>
  );
}

export default App;
