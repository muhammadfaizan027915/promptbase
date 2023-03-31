import React from "react";
import { Box, Link, Grid, Stack } from "@mui/material";
import { styleBtn } from "../../App.Style";
import UserImage from "../UserImage/UserImage";

const buttonStyle = {
  ...styleBtn,
  padding: "5px 10px",
  background: "white",
};

const ProfilePicture = ({ edit, setEdit }) => {
  return (
    <Grid container direction={"column"} xl={12}>
      <Grid
        item
        sx={{
          background: "#393954",
          height: "200px",
          width: "inherit",
          position: "relative",
        }}
      >
        <UserImage
          style={{
            position: "absolute",
            left: "15px",
            bottom: "-60px",
          }}
        />
      </Grid>
      <Grid px={"1rem"}>
        <Box sx={{ width: "100%", position: "relative", padding: "1rem 0" }}>
          {edit === false ? (
            <Link
              sx={{ ...buttonStyle, position: "absolute", right: "0px" }}
              onClick={() => setEdit(true)}
            >
              Edit Profile
            </Link>
          ) : (
            <Stack
              direction={"row"}
              spacing={2}
              sx={{ position: "absolute", right: "0px" }}
            >
              <Link sx={buttonStyle} onClick={() => setEdit(false)}>
                Edit
              </Link>
              <Link
                sx={{
                  ...buttonStyle,
                  border: "1px solid white",
                  background: "transparent",
                  color: "white",
                }}
                onClick={() => setEdit(false)}
              >
                Cancel
              </Link>
            </Stack>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfilePicture;
