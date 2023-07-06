import Home from "./Pages/Home";
import Pakistanifood from './Pages/PakistaniFood'
import FastFood from "./Pages/FastFood";
import Pizza from "./Pages/Pizza";
import DessertsAndBakes from "./Pages/DessertsAndBakes";
import HomeChefs from "./Pages/HomeChefs";
import IceCreamAndShakes from "./Pages/IceCreamAndShakes";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/pakistani-food" element={<Pakistanifood/>}/>
        <Route path="/fast-food" element={<FastFood/>}/>
        <Route path="/pizza" element={<Pizza/>}/>
        <Route path="/desserts-and-bakes" element={<DessertsAndBakes/>}/>
        <Route path="/home-chefs" element={<HomeChefs/>}/>
        <Route path="/icecream-and-shakes" element={<IceCreamAndShakes/>}/>

      </Routes>
    </>
  );
}

export default App;
