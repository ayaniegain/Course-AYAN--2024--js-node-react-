import React, { useContext } from "react";
import Navigation from "./components/Navbar/Navigation";
import Home from "./page/Home";
import Context, { CounterContext } from "./context/Context";




function App() {

  return (
    <Context>
    <Navigation>
      <div className="min-h-screen">
        <Home />
      </div>
    </Navigation>
    </Context>
  );
}

export default App;
