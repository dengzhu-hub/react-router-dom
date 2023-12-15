import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import "./server";
import VansDetails from "./pages/vans/VansDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/vans/HostVans";
import HostVanDetail from "./pages/vans/HostVanDetail";
import HostVansLayout from "./components/HostVansLayout";
import HostVanInfo from "./pages/vans/HostVanInfo";
import HostVanPrice from "./pages/vans/HostVanPrice";
import HostVanPhotos from "./pages/vans/HostVanPhotos";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/vans" element={<Vans />}></Route>
          <Route path="/vans/:id" element={<VansDetails />}></Route>

          {/* host route  */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="vans" element={<HostVans />}></Route>
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route element={<HostVansLayout />}>
                <Route index element={<HostVanInfo />}></Route>
                <Route path="price" element={<HostVanPrice />}></Route>
                <Route path="photos" element={<HostVanPhotos />}></Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
