import React from "react";
import { Email, Settings } from "@mui/icons-material";
import {
  Typography,
  Stack,
  IconButton,
  Grid,
  Link,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { textStyle, styleBtn, dividerStyle } from "../../App.Style";

const AccountHead = () => {
  return (
    <Grid container spacing={0}>
      <Grid container justifyContent="space-between">
        <Typography
          sx={{ ...textStyle, fontSize: "3rem", fontWeight: "500" }}
          variant={"h2"}
        >
          Account
        </Typography>
        <Stack direction="row">
          <IconButton>
            <Email sx={{ ...textStyle, fontSize: "2.5rem" }} />
          </IconButton>
          <IconButton>
            <Settings sx={{ ...textStyle, fontSize: "2.5rem" }} />
          </IconButton>
        </Stack>
      </Grid>
      <Grid container justifyContent="space-between" mt={"3rem"}>
        <Typography
          sx={{ ...textStyle, fontSize: "2rem", fontWeight: "500" }}
          variant={"h3"}
        >
          Selling
        </Typography>

        <Stack direction="row" spacing={3}>
          <Link
            sx={styleBtn}
            component={React.forwardRef((props, ref) => (
              <RouterLink to="/profile" ref={ref} {...props} />
            ))}
          >
            Public Profile
          </Link>
          <Link
            sx={styleBtn}
            component={React.forwardRef((props, ref) => (
              <RouterLink to="/connectbank" ref={ref} {...props} />
            ))}
          >
            Connect Bank
          </Link>
        </Stack>
      </Grid>
      <Divider sx={{ ...dividerStyle, margin: "3rem auto" }} />
    </Grid>
  );
};

export default AccountHead;
