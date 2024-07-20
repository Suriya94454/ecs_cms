import React, { useEffect } from "react";
import "../styles/sidebar.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Dashboard  from "../Pages/Dashboard";

function Admin({ handleLogout }) {
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    };
  }, []);

  return (
    <div>
      <BrowserRouter basename="/hrms">
        <Sidebar />
        <section className="home-section">
          <Header onLogout={handleLogout} />
          <div className="home-content" style={{ minHeight: "95vh" }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default Admin;
