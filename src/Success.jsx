import React from "react";

const Success = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://i.postimg.cc/pTFsScVB/display2-removebg-preview.png"
        alt="logo"
        style={{
          width: "100px",
        }}
      />

      <button
        style={{
          border: "none",
          width: 120,
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "teal",
          color: "white",
          fontWeight: "600",
        }}
      >
        Successful
      </button>
      <p>Your order is being processed. Thanks for choosing theRack</p>
    </div>
  );
};

export default Success;
