import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export const Container = ({
  children,
  padding,
  margin,
  justifyContent,
  alignItems,
  style,
  ...props
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: justifyContent || "flex-start",
        alignItems: alignItems || "stretch",
        padding: padding || 0,
        margin: margin || 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
  ]),
  alignItems: PropTypes.oneOf(["stretch", "center", "flex-start", "flex-end"]),
  style: PropTypes.object,
};
