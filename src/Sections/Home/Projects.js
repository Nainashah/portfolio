import React from "react";
import { Grid, Card, Stack } from "@mui/material";
import Project1 from "../../assets/images/project1.png";
import Project2 from "../../assets/images/project2.png";
import Project3 from "../../assets/images/project3.png";
import useResponsive from "../../Hooks/useResponsive";
const projectList = [
  {
    image: Project1,
    color: "#CBCBC7",
  },
  {
    image: Project2,
    color: "#595551",
  },
  {
    image: Project3,
    color: "#F2CD68",
  },
];

const Projects = () => {
   const isTablet= useResponsive("between","sm","sm","md");
  return (
    <Grid container direction={"row"} spacing={6} py={8}>
      {projectList.map((el, idx) => (
        <Grid item sm={12} md={4} key={idx}>
          <Card 
            sx={{ borderRadius: "10px", minHeight:isTablet? 321:221 , background: el.color, height:"100%", padding: 2 }}
            
          >
            <Stack alignItems={"center"} justifyContent={"center"} sx={{height: "100%", }}>
              <img
                src={el.image}
                style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
                alt="Project-1"
              />
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
