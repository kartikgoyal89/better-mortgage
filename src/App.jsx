import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Calc from "../pages/Calc/Calc";
import Start from "../pages/Start/Start";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/start" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
