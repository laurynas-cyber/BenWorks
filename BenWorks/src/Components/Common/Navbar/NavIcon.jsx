import React, { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

export default function NavIcon({ isHomePage }) {
  const { navbar, setNavbar, navbarScroll, isResponsive } =
    useContext(ResponsiveContext);
  function handeleBar() {
    setNavbar(!navbar);
  }
  return (
    <div className="custom_nav_icon" onClick={handeleBar}>
      <div
        className={"bars"}
        style={{
          backgroundColor: isHomePage
            ? (!navbarScroll || !navbar) && "var(--Seagreen)"
            : "var(--Seagreen)",
          top: !navbar && "-20px",
        }}
      ></div>
      <div
        className={"bars"}
        style={{
          backgroundColor: isHomePage
            ? (!navbarScroll || !navbar) && "var(--Seagreen)"
            : "var(--Seagreen)",
          transform: !navbar && "rotate(45deg)",
        }}
      ></div>
      <div
        className={"bars"}
        style={{
          backgroundColor: isHomePage
            ? (!navbarScroll || !navbar) && "var(--Seagreen)"
            : "var(--Seagreen)",
          transform: !navbar && "rotate(-45deg)",
          top: !navbar && "-11px",
        }}
      ></div>
    </div>
  );
}
