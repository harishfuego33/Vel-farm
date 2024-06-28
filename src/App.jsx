import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Farm from "./pages/farm";
import Product from "./pages/product";
import About from "./pages/about";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
