import { Button, Grid, Typography, Box, Card, Tab, Tabs } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { Container, Stack } from "@mui/system";
import Project1 from "../../assets/images/project1.png";
import Project2 from "../../assets/images/project2.png";
import Project3 from "../../assets/images/project3.png";
import React from "react";

const PortfolioProjects = [
  {
    image: Project1,
    title: "VPN App Design",
    subtitle: "VPN/Mobile App",
    color: "#CBCBC7",
  },
  {
    image: Project2,
    title: "Medical website Design",
    subtitle: "Website/Landing page",
    color: "#595551",
  },
  {
    image: Project3,
    title: "Finance dashboard Design",
    subtitle: "Finance web App",
    color: "#F2CD68",
  },
  {
    image: Project1,
    title: "Real estate website",
    subtitle: "Website/Landing page",
    color: "#99B719",
  },
  {
    image: Project2,
    title: "NFT Dashboard Design",
    subtitle: "NFT/web App",
    color: "#0C7CDB",
  },
  {
    image: Project3,
    title: "Habit Tracker App",
    subtitle: "Habit Mobile App",
    color: "#FF7771",
  },
];

const MyPortfolio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ px: {md:"100px"},py:{xs:"50px",md:"100px"} }} id="projects">
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Typography
          variant="h3"
          textAlign={"center"}
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
          Let’s have a look at <br />
          my {"   "}
          <span
            style={{
              color: "#726FE6",
              fontFamily: "Iceberg",

              fontWeight: 400,
            }}
          >
            portfolio .
          </span>
        </Typography>
        <Typography
          my={5}
          variant="subtitle1"
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "28px",
            /* or 156% */

            color: "#595551",
            textAlign: "center",
          }}
        >
          I Seek to push the limits of creativity to create high engageing{" "}
          <br />
          user friendly and memporable intercative experiences
        </Typography>
        <Box sx={{maxWidth:{xs:320, sm:680}}}>
        <Tabs 
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All" />
          <Tab label="Web Design" />
          <Tab label="Mobile App" />
          <Tab label="Dashboard" />
          <Tab label="Branding" />
        </Tabs>
        </Box>

        {/* <Stack direction={"row"} spacing={4}>
          <Button
            variant="filled"
            sx={{
              background: "black",
              color: "white",
              padding: "10px 30px",
              textTransform: "capitalize",
            }}
          >
            All
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              padding: "10px 30px",
              textTransform: "capitalize",
            }}
          >
            Web Design
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              padding: "10px 30px",
              textTransform: "capitalize",
            }}
          >
            Mobile App
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              padding: "10px 30px",
              textTransform: "capitalize",
            }}
          >
            Dashbord
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              padding: "10px 30px",
              textTransform: "capitalize",
            }}
          >
            Branding
          </Button>
        </Stack> */}
        <Grid container direction={"row"} spacing={4} mt={5}>
          {PortfolioProjects.map((el, idx) => (
            <Grid item md={4} sm={6} xs={12}>
              <Card
                sx={{
                  borderRadius: "10px",
                  height: "221px",
                  background: el.color,
                }}
              >
                <Stack p={3}>
                  <img
                    src={el.image}
                    style={{ maxHeight: "100%", maxWidth: "100%" }}
                    alt="Project-1"
                  />
                </Stack>
              </Card>
              <Stack
                py={2}
                direction={"row"}
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Stack direction={"column"} justifyContent={"space-between"}>
                  <Typography
                    variant={"h3"}
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "30px",
                      /* identical to box height */

                      color: "#000000",
                    }}
                  >
                    {el.title}
                  </Typography>
                  <Typography
                    variant="subtitle"
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: "14px",
                      lineHeight: "21px",
                      /* identical to box height */

                      color: "#514C4C",
                    }}
                  >
                    {el.subtitle}
                  </Typography>
                </Stack>

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
            </Grid>
          ))}
        </Grid>
        <Stack marginTop={6}>
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
              textAlign: "center",
            }}
          >
            View More
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MyPortfolio;
