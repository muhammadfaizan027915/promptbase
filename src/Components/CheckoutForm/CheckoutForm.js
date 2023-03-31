import { Alert, Button, Collapse, Grid } from "@mui/material";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [open, setOpen] = useState(false);
  const [, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const confirmPayment = async () => {
    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/checkout/success",
        },
      })
      .then(({ paymentIntent }) => {
        const status = paymentIntent.status;
        if (status) {
          setMessage(status);
          setOpen(true);
        }
      });
  };

  return (
    <Grid width={"60%"} padding="0rem 2rem 0 2rem" color={"black"}>
      <form
        onSubmit={confirmPayment}
        style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
      >
        <LinkAuthenticationElement
          onChange={(e) => setEmail(e.target?.value)}
        />
        <PaymentElement options={{ layout: "tabs" }} />

        <Collapse in={open}>
          {open ? <Alert severity="info">"message</Alert> : ""}
        </Collapse>
        <Button
          variant="contained"
          fullWidth
          sx={{
            fontFamily: "Finlandica,sans-serif",
          }}
          onClick={confirmPayment}
        >
          Pay
        </Button>
      </form>
    </Grid>
  );
};

export default CheckoutForm;
