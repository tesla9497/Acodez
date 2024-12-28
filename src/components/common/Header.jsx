import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Star } from "@mui/icons-material";

import { useDrawer } from "../context/DrawerContext";

export const Header = () => {
  const { toggleDrawer } = useDrawer();

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Typography
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton color="inherit">
            <Star />
          </IconButton>
          <IconButton
            edge="end"
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              bgcolor: "lightgray",
              p: 1,
            }}
            size="small"
            color="inherit"
          >
            OP
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
