import React from "react";
import { cardStyle, textStyle } from "../App.Style";
import {Card, CardContent, Typography } from "@mui/material";

const Error = () => {
  return (
    <Card
      sx={{...cardStyle, margin: "5rem auto"}}
    >
      <CardContent>
        <Typography
          variant={"h3"}
          sx={{ ...textStyle, fontSize: "3rem", fontWeight: "bold" }}
        >
          This page is not available
        </Typography>
        <Typography variant={"body2"} sx={{ ...textStyle, fontSize: "1.1rem" }}>
          Page is under development!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Error;
