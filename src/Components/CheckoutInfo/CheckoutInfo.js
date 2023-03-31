import React from "react";
import { styled } from "@mui/system";
import { ArrowBack } from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const body2Style = {
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif",
  fontSize: {xl: "1.1rem", lg: "0.9rem"},
};

const headingStyle = {
  ...body2Style,
  fontWeight: "600",
  fontSize: "2.5rem",
  margin: "1rem 0",
};

const linkStyle = {
  ...body2Style,
  color: "gray",
  fontSize: "0.8rem",
  textDecoration: "underline",
};

const ImageContainer = styled("div")({
  maxWidth: "300px",
  height: "auto",
  borderRadius: "6px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
});

const CheckoutInfo = () => {
  const navigate = useNavigate();
  return (
    <Grid width={"60%"} padding="2rem 2rem 2rem 0">
      <Link
        sx={{
          ...body2Style,
          gap: "5px",
          color: "white",
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          marginBottom: "1rem",
          textDecoration: "none",
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBack /> Back
      </Link>
      <Grid height={"fit-content"} maxWidth="400px">
        <Typography variant="body2" sx={{ ...body2Style, color: "#bab6b8" }}>
          Coloring Book Mandala Animals - Midjourney Prompt
        </Typography>
        <Typography variant="h3" sx={{ ...headingStyle }}>
          $ 1.99
        </Typography>
        <Typography variant="body2" sx={{ ...body2Style, color: "#bab6b8" }}>
          Coloring Book Mandala Animals - Midjourney Prompt
        </Typography>
      </Grid>
      <Grid height={"400px"} sx={{ display: "flex", alignItems: "center" }}>
        <ImageContainer>
          <img
            src="/images/promptcard.png"
            alt="prompt-img"
            style={{ width: "100%", height: "100%" }}
          />
        </ImageContainer>
      </Grid>
      <Typography
        variant="body2"
        sx={{ ...body2Style, fontSize: "0.9rem", color: "gray" }}
      >
        Prowered by stripe | &nbsp;
        <Link sx={linkStyle}>Terms</Link> <Link sx={linkStyle}>Privacy</Link>
      </Typography>
    </Grid>
  );
};

export default CheckoutInfo;
