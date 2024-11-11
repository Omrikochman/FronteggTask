import React from "react";
import { useLoginWithRedirect } from "@frontegg/react";
import { Button } from "@mui/material";


export const Login = () => {
  const loginWithRedirect = useLoginWithRedirect();


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Button variant="contained" onClick={loginWithRedirect}>
        Redirect to login
      </Button>
    </div>
  );
};

