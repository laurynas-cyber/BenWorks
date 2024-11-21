import NavList from "./NavList";
import { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";
import NavIcon from "./NavIcon";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { navbar, setNavbar, navbarScroll, isResponsive } =
    useContext(ResponsiveContext);

  return (
    <>
      <nav
        style={{
          backgroundColor: isHomePage
            ? (!navbar || !navbarScroll) && "#e6eed6"
            : "#e6eed6",
        }}
      >
        <div className="logo">BenWorks</div>
        {!isResponsive && (
          <NavIcon className="custom_nav_icon" isHomePage={isHomePage} />
        )}

        <NavList
          navbar={navbar}
          navbarScroll={navbarScroll}
          isHomePage={isHomePage}
        />
      </nav>
    </>
  );
}

export default Navigation;
