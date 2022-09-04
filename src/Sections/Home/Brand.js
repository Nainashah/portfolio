import { Box, Button, Container, Grid, Typography } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import React from "react";
import BrandImg from "../../assets/images/brands-img.png"

const Brand = () => {
  return (
  
    <Box sx={{backgroundColor:"#FFFFFF !important",height:"100%",width:"100%",}} py={5}>
        <Container>
    <Grid direction={"row"} container py={10} spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography
          variant={"h3"}
          sx={{
            fontFamily: "Inconsolata",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "48px",
            // lineHeight: "24px",
            /* or 43% */

            color: "#000000",
          }}
        >
          Working with the{" "}
          <span
            style={{
              color: "#726FE6",
              fontFamily: "Iceberg",

              fontWeight: 400,
            }}
          >
            best brand
          </span>{" "}
          across the globe.
        </Typography>
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
          I seek to push the limits of creativity to create high-engaging,user
          friendly and memorable interactive experiences.
        </Typography>

        <Button
          endIcon={<KeyboardArrowRightRoundedIcon />}
          sx={{
            textTransform: "capitalize",
            textDecoration: "underline",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "36px",
            /* identical to box height, or 200% */

            letterSpacing: "0.02em",

            color: "#000000",
          }}
        >
          All Brand
        </Button>
      </Grid>

      <Grid item xs={12} md={6} >
        <Box px={10}>
        <img src={BrandImg} style={{maxWidth:"100%", maxHeight:"100%",}}/>
        
        </Box>
       
      </Grid>
    </Grid>
    </Container>
    </Box>
   
  );
};

export default Brand;
