import { Button } from "@mui/material";
import React from "react";

const GlobalButton = ({ children, sx, variant, ...rest }) => {
  return (
    <Button sx={sx} variant={variant} {...rest}>
      {children}
    </Button>
  );
};

export default GlobalButton;
