import React from "react";
import { Grid, Typography, Link, Checkbox, TextareaAutosize } from "@mui/material";
import { imageContainerStyle, inputStyle, textStyle } from "../../App.Style";
import { Stack, styled } from "@mui/system";
import UserImage from "../UserImage/UserImage";

const headingStyle = {
  ...textStyle,
  fontSize: "0.8rem",
  fontWeight: "700",
};

const subHeadingStyle = {
  ...textStyle,
  fontSize: "0.8rem",
  fontWeight: "300",
  fontStyle: "italic",
};
const Input = styled("input")({
  ...inputStyle,
  border: "none",
  outline: "none",
  width: "50%",
  fontFamily: "Finlandica,sans-serif",
});

const Label = styled("label")({
  fontSize: "2rem",
  fontWeight: "bold",
  cursor: "pointer",
});

const ProfileEdit = ({setEdit}) => {
  return (
    <Grid container my={"2rem"} spacing={2} direction="column">
      <Grid item>
        <Typography sx={headingStyle}>Profile Picture</Typography>
        <Typography sx={subHeadingStyle}>
          Upload a picture to display on your profile.
        </Typography>
        <Stack direction="row" spacing={2} my="1rem">
          <UserImage />
          <Label htmlFor="upload-img" style={imageContainerStyle}>
            +
          </Label>
          <Input type="file" id="upload-img" style={{ display: "none" }} />
        </Stack>
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Banner</Typography>
        <Typography sx={subHeadingStyle}>
          Images must be 2:1 aspect ratio and at least 800px wide.
        </Typography>
        <Label
          htmlFor="upload-img"
          style={{
            ...imageContainerStyle,
            margin: "0.5rem 0",
            width: "200px",
            height: "100px",
            borderRadius: "none",
          }}
        >
          +
        </Label>
        <Input type="file" id="upload-img" style={{ display: "none" }} />
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Username</Typography>
        <Typography sx={subHeadingStyle}>
          You can update your username in your{" "}
          <Link sx={{ ...textStyle, cursor: "pointer" }} underline="none">
            Account Settings
          </Link>
        </Typography>
        <Typography
          sx={{ ...textStyle, fontSize: "1.1rem", fontWeight: "500" }}
        >
          @muhammadfaizan027915
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Bio</Typography>
        <Typography sx={subHeadingStyle}>Tell the world about you.</Typography>
        <TextareaAutosize
          placeholder="Hi! I am a prompt engineer specialising in DLL-E."
          rows={5}
          style={{
            ...inputStyle,
            height: "auto",
            border: "none",
            outline: "none",
            width: "50%",
            fontFamily: "Finlandica,sans-serif",
          }}
        />
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Twitter</Typography>
        <Typography sx={subHeadingStyle}>Your twitter usename</Typography>
        <Input type="text" placeholder="tinyprojectsdev" />
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Instargam</Typography>
        <Typography sx={subHeadingStyle}>Your twitter usename.</Typography>
        <Input type="text" placeholder="tinyprojectsdev" />
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Youtube</Typography>
        <Typography sx={subHeadingStyle}>Your youtube account link.</Typography>
        <Input type="text" placeholder="https://www.youtube.com/user" />
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Website</Typography>
        <Typography sx={subHeadingStyle}>
          Your personal website, enter the full url.
        </Typography>
        <Input type="text" placeholder="https://www.tinyprojects.dev" />
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Allow messages</Typography>
        <Typography sx={subHeadingStyle}>
          Allow other users to message you.
        </Typography>
        <Checkbox disableRipple sx={{ color: "white" }} />
      </Grid>
      <Grid item>
        <Typography sx={headingStyle}>Accept Custom Prompt Jobs</Typography>
        <Typography sx={subHeadingStyle}>
          You must have 5 sales across your prompts to be eligible to accept
          custom prompt requests.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileEdit;
