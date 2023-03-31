import { Box } from "@mui/material";
import React from "react";
import { imageContainerStyle } from "../../App.Style";

const UserImage = ({ style }) => {
  return (
    <Box
      sx={{
        ...style,
        ...imageContainerStyle,
      }}
    >
      <img src="/images/logo.png" alt="profile" style={{ width: "90px" }} />
    </Box>
  );
};

export default UserImage;
