import "../src/Styles/index.scss";
import Navigation from "./Components/Common/Navbar/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
