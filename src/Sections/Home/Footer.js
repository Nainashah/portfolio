import { Grid, Typography, Stack, Card, Divider } from "@mui/material";

import React, { useState } from "react";
import TextButton from "../../Components/TextButton";
import { Box, Container } from "@mui/system";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  DribbbleLogo,
  BehanceLogo,
} from "phosphor-react";
import useResponsive from "../../Hooks/useResponsive";

const SocialList = [
  {
    title: "Facebook",
    subtitle: "Social Media Profile",
    icon: <FacebookLogo size={32} weight="fill" color="#5686E1" />,
  },
  {
    title: "Instagram",
    subtitle: "Social Media Profile",
    icon: <InstagramLogo size={32} weight="fill" color="#8D30F5" />,
  },
  {
    title: "Twitter",
    subtitle: "Social Media Profile",
    icon: <TwitterLogo size={32} weight="fill" color="#179AC3" />,
  },
  {
    title: "Professional Network Profile",
    subtitle: "Social Media Profile",
    icon: <LinkedinLogo size={32} weight="fill" color="#0A7698" />,
  },
  {
    title: "Dribbble",
    subtitle: "Design Sharing Profile",
    icon: <DribbbleLogo size={32} weight="fill" color="#B51DC1" />,
  },
  {
    title: "Behance",
    subtitle: "Design Sharing Profile",
    icon: <BehanceLogo size={32} weight="fill" color="#0021F5" />,
  },
];
const LINKS = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About Me",
    href: "#",
  },
  {
    title: "Skills",
    href: "#",
  },
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Services",
    href: "#",
  },
];

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useResponsive("up", "md");
  return (
    <Box py={10} sx={{ background: "#F2CD68" }} id="contact">
      <Container direction="row">
        <Typography
          sx={{
            fontFamily: "Inconsolata",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "44px",
            padding: "30px",
            // lineHeight: "24px",
            /* or 43% */

            color: "#000000",
          }}
        >
          Let’s{" "}
          <span
            style={{
              color: "#726FE6",
              fontFamily: "Iceberg",

              fontWeight: 400,
            }}
          >
            connect
          </span>{" "}
          there
          <br />
          {"   "}
        </Typography>
        <Grid container direction={"row"} spacing={5}>
          {SocialList.map((el, idx) => (
            <Grid item md={4} xs={12}>
              <Card sx={{ width: "100%", borderRadius: "8px", padding: "2px" }}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={1}
                  sx={{ padding: "15px 24px" }}
                >
                  <Stack>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "20px",
                        /* identical to box height */

                        color: "Black",
                      }}
                    >
                      {el.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 300,
                        fontSize: "14px",
                        lineHeight: "21px",
                        /* identical to box height */

                        display: "flex",
                        alignItems: "center",

                        color: "grey",
                      }}
                    >
                      {el.subtitle}
                    </Typography>
                  </Stack>

                  {el.icon}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Divider variant="fullWidth" sx={{ my: 10 }} />
        <Stack
          py={2}
          direction={isDesktop ? "row" : "column"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inconsolata",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "34px",
              /* identical to box height */

              color: "#000000",
            }}
          >
            Naina Shah
          </Typography>
          <Stack
            direction={isDesktop ? "row" : "column"}
            alignItems={"center"}
            spacing={2}
            sx={{ pt: { xs: 3, md: 0 } }}
          >
            {LINKS.map((el, idx) => (
              <TextButton
                key={idx}
                idx={idx}
                setActiveIndex={setActiveIndex}
                href={el.href}
                text={el.title}
                activeIndex={activeIndex}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
