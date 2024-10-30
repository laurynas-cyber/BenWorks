import "../src/Styles/index.scss";
import Navigation from "./Components/Common/Navbar/Navigation";
import Banner from "./Components/Home/Banner";
import NavResponsive from "./Components/Context/ResponsiveContext.jsx";

function App() {
  return (
    <>
      <NavResponsive>
        <header>
          <Navigation />
          <Banner />
        </header>
      </NavResponsive>
    </>
  );
}

export default App;
