import React from "react";
import { Box, Container } from "@mui/material";
import { HomeHeader } from "../Sections/Home";
import Main from "../Sections/Home/Main";
import RecentWork from "../Sections/Home/RecentWork";
import Projects from  "../Sections/Home/Projects"
import Brand from "../Sections/Home/Brand";
import Services from "../Sections/Home/Services";

import MyPortfolio from "../Sections/Home/MyPortfolio";
import Client from "../Sections/Home/Client";
import Contact from "../Sections/Home/Contact";
import Footer from "../Sections/Home/Footer";


const Home = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(236, 236, 255, 0.9) 0%, #FEF1C8 100%)",

      }}
    >
      <Container>
        <HomeHeader />
        <Main />
        <RecentWork/>
        <Projects/>
        </Container>
        <Brand/>
      
       <Services/>
       <MyPortfolio />
       <Client/>
      <Contact />
      <Footer/>

       
     
    </Box>
  );
};

export default Home;
