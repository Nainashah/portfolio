import React from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";
import useResponsive from "../../Hooks/useResponsive";

const Overview = [
  {
    title: "100+",
    subtitle: "Projects Completed",
  },
  {
    title: "2",
    subtitle: "Startups",
  },
  {
    title: "99.96%",
    subtitle: "Satisfied Clients",
  },
];

const RecentWork = () => {
  const isDesktop = useResponsive("up", "md");
  const isTablet = useResponsive("between","sm","sm","md");
  return (
    <Grid container direction={"row"}>
      <Grid item sm={12} md={6}>
        <Stack spacing={3} direction={"row"} alignItems={"center"} justifyContent={ isTablet?"center":"start"}>
          <Box
            sx={{
              height: "4px",
              borderRadius: "8px",
              width: 70,
              background: "black",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Inconsolata",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "19px",
              /* identical to box height */

              color: "#000000",
            }}
          >
            My <span style={{ color: "#726FE6" }}>Recent work</span>
          </Typography>
        </Stack>
      </Grid>

      <Grid item sm={12} md={6}>
        <Stack
          sx={{ width: "100%", paddingTop: { xs: 4, md: 0 } }}
          alignItems={"center"}
          justifyContent="center"
        >
          <Stack
            direction={isDesktop ? "row" : "column"}
            spacing={8}
            justifyContent="flex-end"
            alignItems={isDesktop ? "center" : "start"}
          >
            {Overview.map((el, idx) => (
              <Stack key={idx}>
                <Typography
                  sx={{
                    fontFamily: "Inconsolata",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "24px",
                    /* or 133% */

                    color: "#000000",
                  }}
                  variant="subtitle1"
                >
                  {el.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Inconsolata",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "24px",
                    /* or 133% */

                    color: "#595551",
                  }}
                  variant="subtitle2"
                >
                  {el.subtitle}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RecentWork;
