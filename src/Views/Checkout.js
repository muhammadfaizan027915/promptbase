import { Grid } from "@mui/material";
import CheckoutInfo from "../Components/CheckoutInfo/CheckoutInfo";
import Payment from "../Components/Paymnet/Payment";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  height: "100vh",
  padding: "3rem 0",
};

const Checkout = () => {
  return (
    <Grid container direction="row">
      {/* Checkout Information */}
      <Grid
        item
        xl={6}
        lg={6}
        sx={{
          ...containerStyle,
          justifyContent: "flex-end",
        }}
      >
        <CheckoutInfo />
      </Grid>

      {/* Strip Paymnet */}
      <Grid
        item
        xl={6}
        lg={6}
        sx={{
          ...containerStyle,
          justifyContent: "flex-start",
          background: "white",
        }}
      >
        <Payment />
      </Grid>
    </Grid>
  );
};

export default Checkout;
