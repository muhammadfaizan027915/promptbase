import React from "react";
import { cardStyle, textStyle } from "../App.Style";
import { Card, CardContent, Typography } from "@mui/material";

const Success = () => {
  return (
    <Card sx={{ ...cardStyle, margin: "5rem auto" }}>
      <CardContent>
        <Typography
          variant={"h3"}
          sx={{ ...textStyle, fontSize: "3rem", fontWeight: "bold" }}
        >
          Payment Successfully Completed
        </Typography>
        <Typography variant={"body2"} sx={{ ...textStyle, fontSize: "1.1rem" }}>
          Prompt is now available in your profile!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Success;
