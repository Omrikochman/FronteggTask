import React from "react";
import { Button } from "@mui/material";

export const Login = () => {

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Button variant="contained" onClick={() => window.location.replace("http://localhost:3000/account/login")}>
        Redirect to login
      </Button>
    </div>
  );
};