import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
// import Drawer
import MiniDrawer from "./component/MuiDrawer";
// Import Pages
import Beranda from "./pages/Beranda";
import Elibrary from "./pages/PinjamBuku";
import PinjamBarang from "./pages/PinjamBarang";
import PinjamRuang from "./pages/PinjamRuang";

function App() {
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <BrowserRouter>
        {/* Drawer */}
        <Box></Box>
        <MiniDrawer />
        {/* Akhir Drawer */}
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/PinjamBuku" element={<Elibrary />} />
          <Route path="/PinjamBarang" element={<PinjamBarang />} />
          <Route path="/PinjamRuang" element={<PinjamRuang />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
