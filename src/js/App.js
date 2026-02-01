import React from "react";
import Home from "./Home";
import { isLoggedIn } from "./services/AuthService";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./admin/Login";
import AdminDashboard from "./admin/AdminDashboard";
import AdminSettings from "./admin/AdminSettings";

export default App = () => {
  const AdminIndexRedirect = () => {
    return isLoggedIn()
      ? <Navigate to="/admin/dashboard" replace/>
      : <Navigate to="/admin/login" replace/>;
  };

  const RequireAuth = ({ children }) => {
    return isLoggedIn()
      ? children
      : <Navigate to="/admin/login" replace/>;
  };

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/admin"
          element={<AdminIndexRedirect/>}
        />
        <Route
          path="/admin/login"
          element={<Login/>}
        />
        <Route
          path="/admin/dashboard"
          element={
            <RequireAuth>
              <AdminDashboard/>
            </RequireAuth>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <RequireAuth>
              <AdminSettings/>
            </RequireAuth>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" replace/>}
        />
      </Routes>
    </React.Fragment>
  );
}
