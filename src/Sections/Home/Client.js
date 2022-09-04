import { Card, Container, Grid, Typography, Divider } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { Stack, Box } from "@mui/system";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import React from "react";

const cardlist = [
  {
    title:
      "Naina demontrates an excellent understanding of user needs and all of his designs are creative an d elegant in simplicity.He is very well thought out and have an excellent response to feedback.",
    subtitle: "James dell",
    position: "CEO & MD",
  },

  {
    title:
      "Naina demontrates an excellent understanding of user needs and all of his designs are creative an d elegant in simplicity.He is very well thought out and have an excellent response to feedback.",
    subtitle: "Juris  ketti",
    position: "founder & CEO",
  },
  {
    title:
      "Naina demontrates an excellent understanding of user needs and all of his designs are creative an d elegant in simplicity.He is very well thought out and have an excellent response to feedback.",
    subtitle: "Juris  ketti",
    position: "founder & CEO",
  },
];
const Client = () => {
  return (
    <Container sx={{ py: "50px" }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"end"}
      >
        <Stack direction="column">
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "60px",
              /* identical to box height */

              color: "#000000",
            }}
          >
            What my clients say
          </Typography>
          <Typography
            variant="subtitle"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: "22px",

              color: "#000000",
            }}
          >
            I seek to push the limits of creativity to create <br />{" "}
            high-engaging user friendly.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"end"}
          justifyContent={"flex-end"}
          py={2}
          spacing={4}
        >
          <Box
            alignItems={"end"}
            justifyContent={"end"}
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
          <Stack alignItems={"end"} justifyContent={"end"} sx={{ height: 40 }}>
            <Box
              sx={{
                borderRadius: "50%",
                width: 40,
                height: 40,
                background: "#ffffff",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ height: 40 }}
              >
                <ArrowOutwardRoundedIcon sx={{ color: "black" }} />
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Grid container spacing={4} mt={5}>
        {cardlist.map((el, idx) => (
          <Grid item md={4} xs={12} sm={6}>
            <Card sx={{ width: "100%", height: "317px", borderRadius: "8px" }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={4}
                sx={{ padding: "30px 20px  20px 20px" }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    background: "rgba(127, 119, 218, 0.3)",
                  }}
                >
                  <Stack
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ height: 40 }}
                  >
                    <FormatQuoteIcon sx={{ color: "#F2CD68" }} />
                  </Stack>
                </Box>
                <Divider sx={{ width: 190, alignItems: "center" }} />
              </Stack>
              <Stack
                direction={"row"}
                alignItems="center"
                spacing={3}
                sx={{ padding: "15px 24px" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "20px",
                    /* identical to box height */

                    color: "grey",
                  }}
                >
                  {el.title}
                </Typography>
              </Stack>
              <Stack sx={{ padding: "10px 20px" }} direction="row" spacing={2}>
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    background: "rgba(127, 119, 218, 0.3)",
                    alignItems: "end",
                    justifyContent: "end",
                  }}
                >
                  <Stack
                    direction={"row"}
                    alignItems="center"
                    justifyContent={"center"}
                    height="100%"
                  >
                    <SentimentSatisfiedAltIcon sx={{ color: "#F0B30C" }} />
                  </Stack>
                </Box>
                <Stack spacing={1}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "21px",
                      /* identical to box height */

                      display: "flex",
                      alignItems: "center",

                      color: "#000000",
                    }}
                  >
                    {el.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "18px",
                      /* identical to box height */

                      display: "flex",
                      alignItems: "center",

                      color: "#595551",
                    }}
                  >
                    {el.position}
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Client;
