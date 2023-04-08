import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Beranda from "./pages/Beranda";
import Elibrary from "./pages/Elibrary";
import PinjamBarang from "./pages/PinjamBarang";
import PinjamRuang from "./pages/PinjamRuang";

function App() {
  return (
    <BrowserRouter>
      {/* Sidebar */}

      {/* Akhir Sidebar */}
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Elibrary" element={<Elibrary />} />
        <Route path="/PinjamBarang" element={<PinjamBarang />} />
        <Route path="/PinjamRuang" element={<PinjamRuang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
