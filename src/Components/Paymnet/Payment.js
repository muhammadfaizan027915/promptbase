import config from "../../Config";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useEffect, useState } from "react";

const Payment = () => {
  const dumyAmount = 10324.32;
  const stripe = loadStripe(config.publishKey);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/create-payment-key", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: dumyAmount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secrect));
  }, []);

  return (
    <>
      {clientSecret ? (
        <Elements
          stripe={stripe}
          options={{
            appearance: {
              theme: "stripe",
              variables: {
                fontFamily:
                  "Helvetica Neue,Ubuntu,sans-serif",
                borderRadius: "5px",
              },
            },
            clientSecret,
          }}
        >
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        ""
      )}
    </>
  );
};

export default Payment;
