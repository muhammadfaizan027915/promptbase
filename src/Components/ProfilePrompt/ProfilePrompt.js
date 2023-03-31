import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { textStyle, dividerStyle } from "../../App.Style";

const ProfilePrompt = () => {
  return (
    <Grid container direction="column" px="1rem" spacing="3rem">
      <Grid item>
        <Typography
          variant="h5"
          sx={{ ...textStyle, fontSize: "1.2rem", fontWeight: "600" }}
        >
          Most Popular Prompts by @muhammadfaizan027915
        </Typography>
        <Divider sx={{ ...dividerStyle, marginTop: "0.8rem" }} />
        <Typography sx={{ ...textStyle, padding: "0.7rem 0 0 0.7rem" }}>
          No results found
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="h5"
          sx={{ ...textStyle, fontSize: "1.2rem", fontWeight: "600" }}
        >
          Newest Prompts by @muhammadfaizan027915
        </Typography>
        <Divider sx={{ ...dividerStyle, marginTop: "0.8rem" }} />
        <Typography sx={{ ...textStyle, padding: "0.7rem 0 0 0.7rem" }}>
          No results found
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfilePrompt;
