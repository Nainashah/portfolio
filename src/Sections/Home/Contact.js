import { Grid, TextField, Typography,Button } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Box py={10} sx={{background:"#FFFCF5"}}>
    <Container >
    <Grid container direction={"row"} spacing={6} alignItems={"start"}>
      <Grid item md={6} xs={12}>
        <Stack spacing={3}>
            <TextField placeholder="Your Name" variant="filled"/>
            <TextField placeholder="Your Email" variant="filled"/>
            <TextField placeholder="Project Details" variant="filled" minRows={5} multiline/>
            <Button
            fullWidth={false}
            px={8}
            sx={{
              maxWidth: 200,
              textTransform: "capitalize",

              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "36px",
              /* identical to box height, or 200% */
              padding: "8px 25px",
              letterSpacing: "0.02em",
              borderRadius: 0,

              color: "#FFFFFF",
              background: "black",
              textAlign: "center",
            }}
          >
            Send Message
          </Button>
        </Stack>
      </Grid>
      <Grid item md={6} xs={12} justifyContent={"start"} alignItems={"start"}>
        <Typography sx={{fontFamily: "Inconsolata",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "44px",
                // lineHeight: "24px",
                /* or 43% */

                color: "#000000",}}>Let’s talk for something <br/>{"   "}
                <span
                  style={{
                    color: "#726FE6",
                    fontFamily: "Iceberg",
  
                    fontWeight: 400,
                  }}
                >
                  special
                </span> </Typography>
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
                I Seek to push the limits of creativity to create high engageing <br></br>
                user friendly and memporable intercative experiences
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

                  color: "#726FE6",
                }}
              >
              shahnaina1998@gmail.com  
              </Typography>
      </Grid>
    </Grid>
    </Container>
    </Box>
  );
};

export default Contact;
