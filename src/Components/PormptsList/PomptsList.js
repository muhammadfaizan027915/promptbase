import React from "react";
import { Grid } from "@mui/material";
import PromptCard from "../PromptCard/PromptCard";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const PomptsList = () => {
  return (
    <Grid container gap={2} justifyContent="center">
      {list.map((item) => (
        <PromptCard key={item} id={item}/>
      ))}
    </Grid>
  );
};

export default PomptsList;
