import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
import { Box, InputBase, Link } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import { inputStyle, linkStyle } from "../../App.Style";
import styled from "@emotion/styled";

const isActive = ({ isActive, isPending }) =>
  isActive
    ? {
        color: "#222236",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
      }
    : {};

const SearchIconWrapper = styled("a")(({ theme }) => ({
  padding: "0.4rem",
  height: "100%",
  backgroundColor: "white",
  position: "absolute",
  right: "0px",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0 6px 6px 0",
}));

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ background: "none", height: "70px", boxShadow: "none" }}
    >
      <Toolbar>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xl={1.4} lg={1.7}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <img
                src="/images/logo.png"
                alt="promptbase"
                style={{ height: "30px" }}
              />
              <Typography variant="h6" color="white" fontWeight="600">
                Prompt Base
              </Typography>
            </Stack>
          </Grid>
          <Grid item xl={6.4} lg={6.3}>
            <InputBase
              endAdornment={
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "#222236" }} />
                </SearchIconWrapper>
              }
              sx={inputStyle}
              placeholder="Search prompts"
              fullWidth
            />
          </Grid>
          <Grid item xl={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Link
                sx={linkStyle}
                component={React.forwardRef((props, ref) => (
                  <RouterLink
                    to={"/marketplace"}
                    ref={ref}
                    {...props}
                    style={isActive}
                  />
                ))}
              >
                Marketplace
              </Link>
              <Link
                sx={linkStyle}
                component={React.forwardRef((props, ref) => (
                  <RouterLink
                    to={"/generate"}
                    ref={ref}
                    {...props}
                    style={isActive}
                  />
                ))}
              >
                Generate
              </Link>
              <Link
                sx={linkStyle}
                component={React.forwardRef((props, ref) => (
                  <RouterLink
                    to={"/hire"}
                    ref={ref}
                    {...props}
                    style={isActive}
                  />
                ))}
              >
                Hire
              </Link>
              <Link
                sx={linkStyle}
                component={React.forwardRef((props, ref) => (
                  <RouterLink
                    to={"/account"}
                    ref={ref}
                    {...props}
                    style={isActive}
                  />
                ))}
              >
                Account
              </Link>
              <Link
                sx={linkStyle}
                component={React.forwardRef((props, ref) => (
                  <RouterLink
                    to={"/chat"}
                    ref={ref}
                    {...props}
                    style={isActive}
                  />
                ))}
              >
                Chat
              </Link>
              <Link
                sx={linkStyle}
                component={React.forwardRef((props, ref) => (
                  <RouterLink
                    to={"/sell"}
                    ref={ref}
                    {...props}
                    style={isActive}
                  />
                ))}
              >
                sell
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
