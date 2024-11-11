import React from "react";
import { useAuth } from "@frontegg/react";
import { Profile } from "./Profile";
import { Login } from "./Login";

export const Home = () => {
  const { isAuthenticated } = useAuth();

  return <div>{isAuthenticated ? <Profile /> : <Login />}</div>;
};
