import React, { useState } from "react";
import { Container } from "../../components/core/Container";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { FilterAlt, MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [showMore, setShowMore] = useState({});
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const rows = [
    {
      id: 1,
      user: "Lionel Messi",
      age: 37,
      leaguesPlayed: [
        "LaLiga",
        "Premier League",
        "Serie A",
        "Bundesliga",
        "Ligue 1",
      ],
      status: "Active",
      height: "1.70 m",
      position: "Forward",
    },
    {
      id: 2,
      user: "Cristiano Ronaldo",
      age: 39,
      leaguesPlayed: ["LaLiga", "Serie A", "Premier League"],
      status: "Active",
      height: "1.87 m",
      position: "Forward",
    },
  ];

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleShowMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMenuOpen = (event, row) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setSelectedRow(null);
  };

  const handleEdit = () => {
    navigate(`/user/${selectedRow.id}`);
    handleMenuClose();
  };

  const handleDelete = () => {
    // handle delete logic
    handleMenuClose();
  };

  return (
    <Container>
      <Box flex={1}>
        <Typography variant="h5" mb={4}>
          User Management
        </Typography>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={4}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <TextField
                  label="Search"
                  placeholder="Search by name, email, etc."
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
                <IconButton>
                  <FilterAlt />
                </IconButton>
              </Stack>
              <Button variant="outlined" onClick={() => navigate("/user/new")}>
                New
              </Button>
            </Stack>

            <TableContainer sx={{ mb: 3, border: "1px solid #ddd" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableCell align="left" sx={{ padding: "8px", width: 50 }}>
                      <Checkbox />
                    </TableCell>
                    <TableCell align="left" sx={{ fontWeight: "bold" }}>
                      User
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Age
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Leagues Played
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Status
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Height
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Position
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:nth-of-type(odd)": {
                            backgroundColor: "#f9f9f9",
                          },
                        }}
                      >
                        <TableCell align="left" sx={{ padding: "8px" }}>
                          <Checkbox />
                        </TableCell>
                        <TableCell align="left" sx={{ padding: "8px" }}>
                          {row.user}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "8px" }}>
                          {row.age}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "8px" }}>
                          <Stack
                            display="flex"
                            direction="row"
                            flexWrap="wrap"
                            gap={1}
                            maxWidth={300}
                          >
                            {row.leaguesPlayed
                              .slice(
                                0,
                                showMore[row.id] ? row.leaguesPlayed.length : 2
                              )
                              .map((league, index) => (
                                <Chip
                                  key={`${row.id}-${index}`}
                                  label={league}
                                  variant="outlined"
                                  sx={{ mr: 0.5 }}
                                />
                              ))}
                            {row.leaguesPlayed.length > 2 && (
                              <Chip
                                label={showMore[row.id] ? "Less" : "More..."}
                                variant="outlined"
                                color="primary"
                                onClick={() => toggleShowMore(row.id)}
                              />
                            )}
                          </Stack>
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "8px" }}>
                          <Chip
                            label={row.status}
                            color={
                              row.status === "Active" ? "success" : "warning"
                            }
                          />
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "8px" }}>
                          {row.height}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "8px" }}>
                          {row.position}
                        </TableCell>
                        <TableCell align="right" sx={{ padding: "8px" }}>
                          <IconButton
                            onClick={(event) => handleMenuOpen(event, row)}
                          >
                            <MoreVert />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPageOptions={[10, 20, 50]}
                sx={{
                  borderTop: "1px solid #ddd",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </TableContainer>
          </CardContent>
        </Card>
      </Box>

      {/* Context Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </Container>
  );
};

export default User;
