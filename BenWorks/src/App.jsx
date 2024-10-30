import "../src/Styles/index.scss";
import Navigation from "./Components/Common/Navbar/Navigation";
import Banner from "./Components/Home/Banner";
import NavResponsive from "./Components/Context/ResponsiveContext.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavResponsive>
        <Navigation />
        <Outlet />
        {/* <Banner /> */}
      </NavResponsive>
    </>
  );
}

export default App;
