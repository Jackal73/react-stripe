import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const KEY =
  "pk_test_51KOtvLAN05eIhtIj1iz7Ajp76EUwp5NorezDTrub1s2g1BnYDtwD1Q9QwsXZp172uwICnxYGzkNCgTWSAER58oI100QqAdGTzF";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 3000,
        });
        console.log(res.data);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="theRack"
          image="https://i.postimg.cc/pTFsScVB/display2-removebg-preview.png"
          billingAddress
          shippingAddress
          description="Your total is $30"
          amount={3000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
