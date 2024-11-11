import React from "react";
import {
  useAuth,
} from "@frontegg/react";
import {
  Avatar,
} from "@mui/material";
import { UserActionsCard } from "./UserActionsCard";
import { UserInfoCard } from "./UserInfoCard";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{paddingBottom: "8px"}}>
          <Avatar
            alt={user?.name}
            src={user?.profilePictureUrl}
            sx={{
              width: "160px",
              height: "160px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 6px 10px",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <UserInfoCard />
          <UserActionsCard />
        </div>
      </div>
    </>
  );
};