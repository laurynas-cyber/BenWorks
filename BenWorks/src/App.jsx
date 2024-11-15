import "../src/Styles/index.scss";
import Footer from "./Components/Common/Footer/Footer";
import Navigation from "./Components/Common/Navbar/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
