import React from "react";
import { Grid, Link, Stack, Typography } from "@mui/material";
import { linkStyle, textStyle } from "../../App.Style";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      height="300px"
    >
      <Typography variant="body2" sx={textStyle} textAlign="center">
        &copy; PromptBase 2023
      </Typography>

      <Stack spacing={2} direction="row">
        <Link sx={linkStyle}>FAQ</Link>
        <Link sx={linkStyle}>Contact</Link>
        <Link sx={linkStyle}>Privacy</Link>
      </Stack>

      <Stack spacing={2} direction="row" justifyContent="center">
        <Link sx={linkStyle}>
          <InstagramIcon />
        </Link>
        <Link sx={linkStyle}>
          <TwitterIcon />
        </Link>
      </Stack>
    </Grid>
  );
};

export default Footer;
