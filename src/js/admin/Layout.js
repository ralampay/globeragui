import React from "react";
import Sidebar from "../Sidebar";

export default Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar/>
      <div className="app-main-section">
        <main className="container-fluid p-3">
          {children}
        </main>
      </div>
    </div>
  );
}
