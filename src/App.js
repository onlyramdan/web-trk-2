import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
// import side bar
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

import Beranda from "./pages/Beranda";
import Elibrary from "./pages/PinjamBuku";
import PinjamBarang from "./pages/PinjamBarang";
import PinjamRuang from "./pages/PinjamRuang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/PinjamBuku" element={<Elibrary />} />
        <Route path="/PinjamBarang" element={<PinjamBarang />} />
        <Route path="/PinjamRuang" element={<PinjamRuang />} />
      </Routes>
      {/* Navbar */}
      {/* Akhir Navbar */}
      {/* Sidebar */}

      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem style={{ textAlign: "center" }}>
            <Link to="/">
              <h3>Beranda</h3>
            </Link>
          </MenuItem>
          <SubMenu label="Peminajaman Barang">
            <MenuItem>
              <Link to="/PinjamBarang">Peminjaman Barang</Link>
            </MenuItem>
            <MenuItem>Riwayat Peminjaman</MenuItem>
          </SubMenu>
          <SubMenu label="E - Library">
            <MenuItem>
              <Link to="PinjamBuku">Peminjaman Buku</Link>
            </MenuItem>
            <MenuItem>Riwayat Peminjaman</MenuItem>
          </SubMenu>
          <SubMenu label="Peminjaman Ruangan">
            <MenuItem>
              <Link to="/PinjamRuang">Peminjaman Ruangan</Link>
            </MenuItem>
            <MenuItem>Riwayat Peminjaman</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      {/* Akhir Sidebar */}
    </BrowserRouter>
  );
}

export default App;
