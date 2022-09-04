import React from "react";
import {
  Avatar,
  AvatarGroup,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import HeroImage from "../../assets/images/hero.png";
import { faker } from "@faker-js/faker";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useResponsive from "../../Hooks/useResponsive";

const Clients = () => {
  const isDesktop = useResponsive("up", "md");
  
  return (
    <Stack
      sx={{ py: { xs: 3, md: 0 } }}
      direction={"row"}
      alignItems="center"
      spacing={1}
    >
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
        <Avatar alt="Travis Howard" src={faker.image.avatar()} />
        <Avatar alt="Cindy Baker" src={faker.image.avatar()} />
        <Avatar alt="Agnes Walker" src={faker.image.avatar()} />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography
        variant="caption"
        align={"justify"}
        sx={{
          fontFamily: "Inconsolata",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "17px",

          color: "#000000",
        }}
      >
        10K+ <br />
        Worldwide Clients
      </Typography>
    </Stack>
  );
};

const Main = () => {
  const isDesktop = useResponsive("up", "md");
  const isTablet = useResponsive("between","sm","sm","md");
  return (
    <Grid container direction="row" mt={2} id="about">
      <Grid item md={6} sm={12} >
        <Stack sx={{ height: "100%" }} justifyContent="center">
          {/* Typography */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Inconsolata",
              fontStyle: "normal",
              fontWeight: 900,
              fontSize: "54px",
              lineHeight: "63px",

              color: "#000000",
            }}
          >
            Solving
            <span
              style={{
                fontFamily: "Iceberg",

                fontWeight: 400,

                color: "#726FE6",
              }}
            >
              {" "}
              modern problems{" "}
            </span>{" "}
            through Thoughtful{" "}
            <span
              style={{
                fontFamily: "Iceberg",

                fontWeight: 400,

                color: "#726FE6",
              }}
            >
              Engineering
            </span>
          </Typography>
          {/* subtitle */}
          <Typography
            my={3}
            variant="subtitle1"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "28px",
              /* or 156% */

              color: "#595551",
            }}
          >
            I strive to push limits of what’s possible by developing scalable,
            highly engaging & user friendly mobile & web applications
          </Typography>

          {/* Stack => Button, Stack (=> AvatarGroup, Typography) */}
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button
              sx={{
                borderRadius: "8px",
                textTransform: "capitalize",
                background: "#726FE6",
                boxShadow: "0px 4px 24px 10px rgba(0, 0, 0, 0.25)",
                padding: "8px 24px",
                fontWeight: 500,
                minWidth:150,
               minHeight:60,
                
              }}
              px={5}
              disableElevation
              variant="contained"
              fullWidth={false}
              startIcon={<LinkedInIcon />}
            >
              Hire Me
            </Button>
            {/*  */}
            { (isTablet || isDesktop) && <Clients />}

          </Stack>
          {!(isTablet || isDesktop) && <Clients />}

          {/*  */}
        </Stack>
      </Grid>
      <Grid item md={6} sm={12} alignItems="center" justifyContent={"flex-end"}>
        {/* Image */}
        <img
          alt="naina shah"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          src={HeroImage}
        />
      </Grid>
    </Grid>
  );
};

export default Main;
