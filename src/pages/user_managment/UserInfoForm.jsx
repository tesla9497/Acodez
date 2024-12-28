import {
  Box,
  Checkbox,
  ListItemText,
  MenuItem,
  Radio,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { Container } from "../../components/core/Container";

const UserInfoForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Box flex={1}>
        <Typography variant="h5" mb={4}>
          User Information Form
        </Typography>
        <Box flex={1} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack display="flex" direction="column" gap={2}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    InputLabelProps={{ shrink: true }}
                    placeholder="Enter the name"
                    required
                    sx={{
                      minWidth: {
                        xs: "100%",
                        sm: "50%",
                        md: "35%",
                      },
                    }}
                  />
                )}
              />
              <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Date of Birth"
                    InputLabelProps={{ shrink: true }}
                    placeholder="DD/MM/YYYY"
                    required
                    sx={{
                      minWidth: {
                        xs: "100%",
                        sm: "50%",
                        md: "35%",
                      },
                    }}
                  />
                )}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="leaguesplayed"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Leagues Played"
                    placeholder="Leagues Played"
                    defaultValue={[]}
                    required
                    sx={{
                      minWidth: {
                        xs: "100%",
                        sm: "50%",
                        md: "35%",
                      },
                    }}
                    multiple
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {[
                      "LaLiga",
                      "Premier League",
                      "Serie A",
                      "Bundesliga",
                      "Ligue 1",
                    ].map((league) => (
                      <MenuItem key={league} value={league}>
                        <Checkbox
                          checked={field.value?.includes(league) ? true : false}
                        />
                        <ListItemText primary={league} />
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Status"
                    placeholder="Status"
                    required
                    sx={{
                      minWidth: {
                        xs: "100%",
                        sm: "50%",
                        md: "35%",
                      },
                    }}
                  >
                    {["Active", "Inactive"].map((status) => (
                      <MenuItem key={status} value={status}>
                        <Radio checked={field.value === status} />
                        <ListItemText primary={status} />
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Controller
                name="height"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Height"
                    required
                    sx={{
                      minWidth: {
                        xs: "100%",
                        sm: "50%",
                        md: "35%",
                      },
                    }}
                    InputProps={{
                      endAdornment: "m",
                    }}
                  />
                )}
              />
              <Controller
                name="position"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Position"
                    placeholder="Position"
                    required
                    sx={{
                      minWidth: {
                        xs: "100%",
                        sm: "50%",
                        md: "35%",
                      },
                    }}
                  >
                    {["Forward", "Backward", "Midfielder"].map((position) => (
                      <MenuItem key={position} value={position}>
                        <Radio checked={field.value === position} />
                        <ListItemText primary={position} />
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default UserInfoForm;
