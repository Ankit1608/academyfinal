import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header />
        <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
          <p>Dashboard</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
