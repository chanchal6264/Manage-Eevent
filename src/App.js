import React from "react";
import Home from "./component/firstProject/Home";
import About from "./component/firstProject/About";
import Contact from "./component/firstProject/Contact";
import Navbal from "./component/firstProject/Navbal";
import Singin from "./component/firstProject/Singin";
import Gallery from "./component/firstProject/Gallery";
import Map from "./component/firstProject/Map";
import Footer from "./component/firstProject/Footer";
import SingnUp from "./component/firstProject/SingnUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./component/firstProject/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbal />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signin" element={<Singin />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/singup" element={<SingnUp />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
