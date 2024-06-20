import { useState } from "react";
import "./index.scss";

import Navigation from "./Components/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navigation />
      </header>
    </>
  );
}

export default App;
