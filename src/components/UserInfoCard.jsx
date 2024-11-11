import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useAuth } from "@frontegg/react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import DateRangeIcon from "@mui/icons-material/DateRange";

export const UserInfoCard = () => {
  const { user } = useAuth();

  return (
    <Card  elevation={4}>
      <CardContent sx={{ gap: "8px" }}>
        <Typography variant="subtitle1">User Info</Typography>
        <Divider sx={{ paddingBottom: "12px" }} />
        <List>
          <ListItem>
            <ListItemIcon>
              <PersonIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={user?.name} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={user?.email} />
          </ListItem>
          {user?.metadata && <ListItem>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Metadata: " + user?.metadata} />
          </ListItem>}
          <ListItem>
            <ListItemIcon>
              <DateRangeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={user?.createdAt} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};