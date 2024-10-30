import { createContext, useState, useEffect } from "react";

export const ResponsiveContext = createContext();

export default function NavResponsive({ children }) {
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
    <ResponsiveContext.Provider
      value={{
        isResponsive,
        navbar,
        navbarScroll,
        setNavbar,
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
}
