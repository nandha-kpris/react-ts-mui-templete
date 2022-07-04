import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CustomizedSnackbars from "./components/AdvanceSnackbar";
import CustomDrawer, { DrawerHeader } from "./components/CustomDrawer";
import NavBar from "./components/NavBar";
import { useAppDispatch, useAppSelector } from "./hooks";
import { openSnackbar, closeSnackbar } from "./redux/features/snackBarSlice";
import DashBoard from "./pages/dashBoard";
import TablePage from "./pages/table";
import SignIn from "./pages/login";
import PrivateRoute from "./components/AuthRoute";
// import PrivateRoute from "./components/AuthRoute/PrivateRoute";
import RegisterPage from "./pages/register";
import Layout from "./components/Layout";

function App() {
  const [drawerState, setDrawerState] = useState(false);
  const snackbar = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();
  const handledrawerOpen = () => {
    setDrawerState(true);
  };
  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/login" element={<SignIn />} />
      {/* <Route
        path="/pages/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      /> */}
      <Route
        path="/pages/dashBoard"
        element={
          <PrivateRoute>
            <DashBoard />
          </PrivateRoute>
        }
      />
      <Route
        path="/pages/table"
        element={
          <PrivateRoute>
            <TablePage />
          </PrivateRoute>
        }
      />
      <Route path="/pages/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
