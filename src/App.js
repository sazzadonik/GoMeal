import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashBoard from './components/dashBoard/DashBoard';
import FoodOrder from './components/foodOrder/FoodOrder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/foodOrder" element={<FoodOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
