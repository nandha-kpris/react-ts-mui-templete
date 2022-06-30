import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CustomizedSnackbars from "./components/AdvanceSnackbar";
import CustomDrawer, { DrawerHeader } from "./components/CustomDrawer";
import NavBar from "./components/NavBar";
import { useAppDispatch, useAppSelector } from "./hooks";
import { openSnackbar, closeSnackbar } from "./redux/features/snackBarSlice";
import Home from "./pages/home";
import DashBoard from "./pages/dashBoard";
import TablePage from "./pages/table";
import SignIn from "./pages/login";
import PrivateRoute from "./components/AuthRoute";
import PrivateRoutes from "./components/AuthRoute";

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
        path='/'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      /> */}
      <Route element={<PrivateRoutes />}>
        <Route path="/pages/home" element={<Home />} />
      </Route>

      <Route path="/pages/dashBoard" element={<DashBoard />} />
      <Route path="/pages/table" element={<TablePage />} />
    </Routes>
  );
}

export default App;
