import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Toolbar,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { useDrawer } from "../context/DrawerContext";

const drawerWidth = 240;

const SideBarItems = [
  {
    id: 1,
    label: "List Item",
    icon: <StarIcon />,
    children: [
      {
        id: 2,
        label: "List Item 1",
        icon: <StarIcon />,
        path: "/",
      },
      {
        id: 3,
        label: "List Item 2",
        icon: <StarIcon />,
        path: "/user2",
      },
      {
        id: 4,
        label: "List Item 3",
        icon: <StarIcon />,
        path: "/user3",
      },
    ],
  },
];

export const SideBar = () => {
  const { isDrawerOpen } = useDrawer();
  const [openItems, setOpenItems] = useState({});

  const handleToggle = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Drawer
      variant="persistent"
      open={isDrawerOpen}
      sx={{
        width: isDrawerOpen ? drawerWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isDrawerOpen ? drawerWidth : 0,
          boxSizing: "border-box",
          transition: "width 0.3s ease",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <Box display="flex" width="100%" height={60} p={2} overflow="hidden">
          <Box alignSelf="start">
            <img
              src="https://via.placeholder.com/120x40"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
        <List>
          {SideBarItems.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem button onClick={() => handleToggle(item.id)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
                {item.children ? (
                  openItems[item.id] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )
                ) : null}
              </ListItem>
              {item.children && (
                <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((subItem) => (
                      <ListItem button sx={{ pl: 4 }} key={subItem.id}>
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText primary={subItem.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
