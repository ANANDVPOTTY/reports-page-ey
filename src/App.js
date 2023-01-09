import "./App.css";

import Navbar1 from "./components/Navbar/Navbar1";
import Home from "./components/ReportsHome/ReportsHome";
import Test from "./components/Test/Test";

// import TestNav from "./components/Navbar/TestNav";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <TestNav /> */}
      <Navbar1 />
      <Home />
      {/* <Test /> */}
    </>
  );
}

export default App;
