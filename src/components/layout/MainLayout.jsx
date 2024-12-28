import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "../common/Header";
import { SideBar } from "../common/SideBar";

export const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideBar />
      <Box
        component="main"
        sx={{
          flex: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <main>
          <Outlet />
        </main>
      </Box>
    </Box>
  );
};
