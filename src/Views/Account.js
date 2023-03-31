import React from "react";
import { Grid } from "@mui/material";
import AccountHead from "../Components/AccountHead/AccountHead";
import PromptsList from "../Components/PormptsList/PomptsList"

const Account = () => {
  return (
    <Grid container xl={8} lg={11} m="auto">
      <AccountHead />
      <PromptsList />
    </Grid>
  );
};

export default Account;
