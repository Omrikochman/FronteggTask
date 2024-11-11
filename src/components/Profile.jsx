import React from "react";
import {
  useAuth,
  AdminPortal,
  ContextHolder,
  useAuthActions,
} from "@frontegg/react";
import { Avatar, Button, Typography } from "@mui/material";

export const Profile = () => {
  const { user } = useAuth();
  const { switchTenant } = useAuthActions();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const showPortal = () => {
    AdminPortal.show();
  };

  const switchToTenant = (tenantId) => {
    switchTenant({ tenantId });
  };

  const userData = JSON.parse(user?.metadata)

  console.log({userData})

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
        <div>
          <Avatar
            alt={user?.name}
            src={user?.profilePictureUrl}
            sx={{ width: "120px", height: "120px" }}
          />
        </div>
        <div>
          <Typography variant="subtitle1" gutterBottom>
            Logged in as: {user?.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Active Tenant: {user.tenantId}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
          </Typography>
        </div>
        <div>
          <Button variant="outlined" onClick={() => alert(user?.accessToken)}>
            What is my access token?
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Typography variant="subtitle1">Switch tenants</Typography>
          {user?.tenantIds.map((id) => (
            <Button
              variant={id === user?.tenantId ? "contained" : "outlined"}
              onClick={() => switchToTenant(id)}
              sx={{ padding: "8px" }}
            >
              {id}
            </Button>
          ))}
        </div>
        <div>
          <Button variant="outlined" onClick={() => console.log(user)}>
            print user to console
          </Button>
        </div>
        <div>
          <Button variant="outlined" onClick={() => logout()}>
            Click to logout
          </Button>
        </div>
        <div>
          <Button variant="outlined" onClick={showPortal}>
            Show Portal
          </Button>
        </div>
      </div>
    </>
  );
};
