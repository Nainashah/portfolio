import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import React from "react";
import useResponsive from "../../Hooks/useResponsive";
const services_list = [
  {
    index: "01",
    title: "UI/UX Design",
    skills: ["Web Design", "App Design", "Dashboard Design"],
  },
  {
    index: "02",
    title: "Development",
    skills: ["Web Development", "App Development"],
  },
  {
    index: "03",
    title: "Branding",
    skills: ["Brand Logo", "Brand Promotion"],
  },
];

const Services = () => {
  const isTablet = useResponsive("between","sm","sm","md");
  return (



<div id="services">

    
    <Box sx={{ background: "#FBFBE4" }} py={10} id="skills">
      <Container>
        <Grid container direction={"row"} >
          <Grid item sm={12} md={6} sx={{pb:{xs:3,md:0}}} px={isTablet && 6}>
            {services_list.map((el) => {
              return (
                <Box py={4}>
                  <Stack direction={"row"} alignItems={"center"} spacing={4} >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "24px",
                        lineHeight: "36px",
                        /* identical to box height */

                        color: "#000000",
                      }}
                    >
                      {el.index}
                    </Typography>
                    <Divider sx={{ width: { xs: 200, md: 400,sm:400 } }} />
                    <Box
                      sx={{
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        background: "#776EE4",
                      }}
                    >
                      <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{ height: 40 }}
                      >
                        <ArrowOutwardRoundedIcon sx={{ color: "#FFFFFF" }} />
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack direction={"row"} my={3}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "36px",
                        /* identical to box height */

                        color: "#000000",
                      }}
                    >
                      {el.title}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={4}>
                    {el.skills.map((elm) => (
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <CheckCircleRoundedIcon color="success" />

                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "12px",
                            lineHeight: "15px",
                            /* identical to box height */

                            color: "#000000",
                          }}
                        >
                          {elm}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              );
            })}
          </Grid>

          <Grid item sm={12} md={6} width={"100%"}>
            <Stack
              mx={6}
              direction={"column"}
              justifyContent={"center"}
              height={"100%"}
            >
              <Typography
                variant={"h3"}
                sx={{
                  fontFamily: "Inconsolata",
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "56px",
                  // lineHeight: "24px",
                  /* or 43% */

                  color: "#000000",
                }}
              >
                Solving problems <br />
                by the
                {"   "}
                <span
                  style={{
                    color: "#726FE6",
                    fontFamily: "Iceberg",

                    fontWeight: 400,
                  }}
                >
                  services
                </span>
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
                  I Seek to push the limits of creativity to create high
                  engageing user friendly and memporable intercative experiences
                </Typography>
              </Typography>
              <Button
                fullWidth={false}
                px={8}
                sx={{
                  maxWidth: 200,
                  textTransform: "capitalize",

                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "36px",
                  /* identical to box height, or 200% */
                  padding: "14px 25px",
                  letterSpacing: "0.02em",
                  borderRadius: 0,

                  color: "#FFFFFF",
                  background: "black",
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
};

export default Services;
