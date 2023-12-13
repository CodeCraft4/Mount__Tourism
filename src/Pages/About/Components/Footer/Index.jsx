import React from "react";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

const FooterArea = () => {
  return (
    <div>
      <Box
        position={"relative"}
        bgcolor={"#212121"}
        width={"100%"}
        mt={{ md: 250, sm: 300, xs: 480 }}
        top={40}
        p={8}
      >
        <Grid container alignItems={"center"}>
          <Grid item md={6} sm={6} color={"white"} alignItems={"center"}>
            <Typography>
              @2035 by Mount sleet <br />
              Powered by <Link to={"#"}>Wix</Link>{" "}
            </Typography>
          </Grid>
          <Grid item md={6} sm={4} color={"white"}>
            <Box
              display={{ xs: "block", sm: "flex", md: "flex" }}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box>
                <List>
                  <ListItem>
                    <Link to={"#"}>ABOUT</Link>
                  </ListItem>
                  <ListItem>
                    <Link to={"#"}>TRAILS</Link>
                  </ListItem>
                  <ListItem>
                    <Link to={"#"}>NEWS</Link>
                  </ListItem>
                  <ListItem>
                    <Link to={"#"}>CONTACT</Link>
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem>
                    <Link to="#">Facebook</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Whatsapp</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Instagram</Link>
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ width: { xs: "130%" }, display: { sm: "none" } }}
                >
                  Book Now
                </Button>
                <br />
                <br />
                <Link to="#">
                  <KeyboardArrowUpIcon fontSize="large" sx={{ mt: 9 }} />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FooterArea;
