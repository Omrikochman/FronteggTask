import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  useAuth,
  AdminPortal,
  ContextHolder,
  useAuthActions,
} from "@frontegg/react";

export const UserActionsCard = () => {
  const { user } = useAuth();
  const { switchTenant } = useAuthActions();

  const logout = () => {
    window.location.replace("http://localhost:3000/account/logout");
  };

  const showPortal = () => {
    AdminPortal.show();
  };

  const switchToTenant = (tenantId) => {
    switchTenant({ tenantId });
  };

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="subtitle1">Actions</Typography>
        <Divider sx={{ paddingBottom: "12px" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: "8px 0",
          }}
        >
          <Button variant="contained" onClick={() => alert(user?.accessToken)}>
            What is my access token?
          </Button>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Switch Tenant</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user?.tenantId}
              size="small"
              label="Switch Tenant"
              onChange={(e) => switchToTenant(e.target.value)}
            >
              {user?.tenantIds.map((id) => (
                <MenuItem key={id} value={id}>{id}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button variant="contained" onClick={() => console.log(user)}>
            print user to console
          </Button>

          <Button variant="contained" onClick={() => logout()}>
            Click to logout
          </Button>

          <Button variant="contained" onClick={showPortal}>
            Show Portal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};