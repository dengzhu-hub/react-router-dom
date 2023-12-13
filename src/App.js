import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Vans from "./components/Vans";
import "./server";
import VansDetails from "./components/VansDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={Layout}>

        <Route index path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
        <Route path="/vans/:id" element={<VansDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
