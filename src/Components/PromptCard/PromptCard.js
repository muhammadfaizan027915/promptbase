import { Card, CardMedia, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { textStyle } from "../../App.Style";

const CardHeader = styled("div")({
  maxWidth: "fit-content",
  background: "#222236",
  padding: "2px 5px",
  color: "white",
  borderRadius: "3px",
  position: "absolute",
  left: "10px",
  top: "10px",
});

const CardContent = styled("div")({
  display: "flex",
  flexFlow: "row",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
  width: "100%",
  padding: "5px",
  color: "white",
  background: "#000",
  borderRadius: "3px",
  position: "absolute",
  left: "0px",
  bottom: "0px",
});

const PromptCard = ({ id }) => {
  return (
    <Card
      sx={{
        maxWidth: "230px",
        height: "150px",
        overflow: "hidden",
        position: "relative",
        borderRadius: "6px",
        boxShadow: "none",
      }}
    >
      <Link to={`/checkout/${id}`}>
        <CardHeader>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Finlandica,sans-serif",
            }}
          >
            MidJourney
          </Typography>
        </CardHeader>

        <CardMedia
          component="img"
          image="/images/promptcard.png"
          sx={{ width: "100%", height: "100%" }}
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              ...textStyle,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "80%",
            }}
          >
            Coloring Book Mandala Animals
          </Typography>
          <Typography variant="body2" sx={textStyle}>
            $1
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PromptCard;
