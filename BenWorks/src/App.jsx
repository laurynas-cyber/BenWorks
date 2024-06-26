import { useState, useEffect } from "react";
import { createContext } from "react";
import "./index.scss";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import SectionInfo from "./Components/SectionInfo";

export const ResponsiveContext = createContext();

function App() {
  const [isResponsive, setResponsive] = useState(
    window.innerWidth > 950 ? true : false
  );
  const [navbar, setNavbar] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 950) {
      setResponsive(true);
      setNavbar(true);
    } else setResponsive(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <ResponsiveContext.Provider value={{ responsive: isResponsive }}>
        <header>
          <Navigation navbar={navbar} setNavbar={setNavbar} />
          <Banner />
          <SectionInfo />
        </header>
      </ResponsiveContext.Provider>
    </>
  );
}

export default App;
