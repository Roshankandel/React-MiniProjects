import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Error from "./Pages/Error";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
