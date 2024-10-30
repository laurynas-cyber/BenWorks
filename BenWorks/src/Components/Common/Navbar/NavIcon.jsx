import React, { useContext } from "react";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

export default function NavIcon() {
  const { navbar, setNavbar, navbarScroll, isResponsive } =
    useContext(ResponsiveContext);
  function handeleBar() {
    setNavbar(!navbar);
  }
  return (
    <div className="custom_nav_icon" onClick={handeleBar}>
      <div
        className={"bars"}
        style={{ backgroundColor: (!navbarScroll || !navbar) && "#090c02" }}
      ></div>
      <div
        className={"bars"}
        style={{ backgroundColor: (!navbarScroll || !navbar) && "#090c02" }}
      ></div>
      <div
        className={"bars"}
        style={{ backgroundColor: (!navbarScroll || !navbar) && "#090c02" }}
      ></div>
    </div>
  );
}
