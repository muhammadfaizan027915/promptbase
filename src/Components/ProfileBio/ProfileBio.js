import React from "react";
import { Visibility, Favorite, LocalOffer } from "@mui/icons-material";
import { Grid, Typography, Stack } from "@mui/material";
import { textStyle } from "../../App.Style";

const styledTag = {
  ...textStyle,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  width: "fit-content",
};

const ProfileBio = () => {
  return (
    <Grid container direction="column" my="2rem" px={"1rem"} spacing={"0.5rem"}>
      <Grid item>
        <Typography
          vairant="h2"
          sx={{ ...textStyle, fontSize: "2rem", fontWeight: "500" }}
        >
          @muhammadfaizan027915
        </Typography>
      </Grid>
      <Grid item>
        <Stack direction="row" spacing="10px">
          <Typography variant="body2" sx={styledTag}>
            <Visibility fontSize="0.5rem" />0
          </Typography>
          <Typography variant="body2" sx={styledTag}>
            <Favorite fontSize="0.5rem" />0
          </Typography>
          <Typography variant="body2" sx={styledTag}>
            <LocalOffer fontSize="0.5rem" />0
          </Typography>

          <Stack direction="row" spacing={1} pl="10px">
            <Typography varitant="body2" sx={textStyle}>
              Joined:
            </Typography>
            <Typography
              varitant="body2"
              sx={{ ...textStyle, fontWeight: "500" }}
            >
              Jan 22, 2023
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid item>
        <Stack direction="row" spacing={2}>
          <Typography varitant="body2" sx={textStyle}>
            No reviews
          </Typography>
          <Typography varitant="body2" sx={textStyle}>
            0 Followings
          </Typography>
          <Typography varitant="body2" sx={textStyle}>
            0 Followers
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProfileBio;
