import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import logo from "../images/netflixLogo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "70px" }} component="header">
      <Container sx={{ height: "100%" }}>
        <Grid
          container
          sx={{ height: "100%" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link to="/">
              <Typography variant="h4" component="p" color="#fff">
                Movie App
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Avatar
              src={logo}
              alt="avatar-img"
              sx={{ height: "60px", width: "70px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
