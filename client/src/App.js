import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/about/About";
import { Hero } from "./Components/carousel/Hero";
import { countries } from "./Components/carousel/Data";
import Offer from "./Components/offer/Offer";
import Service from "./Components/service/Service";
import Aboutpage from "./Components/aboutpage/Aboutpage";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
import Scrolltotop from "./Components/pages/Scrolltotop";
import Product from "./Components/product/Product";
import Men from "./Components/men/Men";
import Women from "./Components/women/Women";
import Contact from "./Components/contact/Contact";
import Readmore from "./Components/productDetail/readmore/Readmore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Scrolltotop />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app">
                <Hero images={countries} />
                <About />
                <Offer />
                <Product />
                <Service />
              </div>
            }
          />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/readmore/:id" element={<Readmore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
