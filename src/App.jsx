import { BrowserRouter } from "react-router-dom";
import React from "react";

// import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Delivery from "./components/Delivery";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-screen bg-main bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Home />
      </div>
      <div className="bg-menu bg-cover bg-no-repeat bg-right">
        <Menu />
      </div>
      <div className="bg-foot bg-cover bg-no-repeat bg-center">
        <Delivery />
      </div>
    </BrowserRouter>
  );
};

export default App;
