import React, { useContext } from "react";
import Navigation from "./components/Navbar/Navigation";
import Home from "./page/Home";
import Context, { CounterContext } from "./context/Context";
import JaokeGenerator from "./project/JaokeGenerator";




function App() {

  return (
    <Context>
    <Navigation>
      <div className="min-h-screen">
        {/* <Home /> */}
        <JaokeGenerator/>
      </div>
    </Navigation>
    </Context>
  );
}

export default App;
