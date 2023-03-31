import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import ProfileBio from "../Components/ProfileBio/ProfileBio";
import ProfilePicture from "../Components/ProfilePicture/ProfilePicture";
import ProfilePrompt from "../Components/ProfilePrompt/ProfilePrompt";
import { styled } from "@mui/system";
import { styledLgBtn } from "../App.Style";
import ProfileEdit from "../Components/ProfileEdit/ProfileEdit";

const Container = styled("div")({
  width: "100%",
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
});

const Profile = () => {
  const [edit, setEdit] = useState(false);
  return (
    <Grid container xl={7.5} lg={9.5} m={"auto"}>
      <ProfilePicture edit={edit} setEdit={setEdit} />
      {edit === false ? <ProfileBio /> : <ProfileEdit />}
      <ProfilePrompt />
      <Container>
        <Link style={styledLgBtn} to={"/marketplace"}>
          Browse Marketplace
        </Link>
      </Container>
    </Grid>
  );
};

export default Profile;
