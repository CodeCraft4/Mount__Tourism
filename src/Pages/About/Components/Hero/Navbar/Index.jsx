import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar stickyHeader sx={{ bgcolor: "black", p: 2 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            <Link
              to={"/home"}
              style={{ fontSize: 25, color: "white", textDecoration: "none" }}
            >
              Mount Sleet
            </Link>
          </Typography>
          <Box display={"flex"}>
            <List sx={{ display: { xs: "none", md: "flex" } }}>
              <ListItem>
                <Link to={"/about"} style={linkStyle}>
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link to={"/trails"} style={linkStyle}>
                  Trails
                </Link>
              </ListItem>
              <ListItem>
                <Link to={"/news"} style={linkStyle}>
                  News
                </Link>
              </ListItem>
              <ListItem>
                <Link to={"/contact"} style={linkStyle}>
                  Contact
                </Link>
              </ListItem>
            </List>
            <Button
              color="error"
              sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
            >
              <AccountCircleIcon />
              LogIn
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};
