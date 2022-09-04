import { Stack, Typography, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import TextButton from "../../Components/TextButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useResponsive from "../../Hooks/useResponsive";
const LINKS = [
  {
    title: "About Me",
    href: "#about",
  },

  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isDesktop = useResponsive("up", "md");
  console.log("isDesktop", isDesktop);

  return (
    <>
      <Stack
        py={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {!isDesktop && (
          <IconButton>
            <MenuRoundedIcon />
          </IconButton>
        )}

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
        {isDesktop && (
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
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
        )}

        <Button
          startIcon={<WhatsAppIcon />}
          sx={{
            background: "black",
            borderRadius: "8px",
            textTransform: "capitalize",
          }}
          disableElevation
          variant="contained"
        >
          Ping Me
        </Button>
      </Stack>
    </>
  );
};

export default Header;
