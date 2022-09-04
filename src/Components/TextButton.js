import React from "react";
import { Button } from "@mui/material";
const TextButton = (props) => {

  const active = props.activeIndex===props.idx;
  
  return (
    <>
      <Button
        onClick={() => {
          props.setActiveIndex(props.idx);
        }}
        sx={{
          fontFamily: "Inconsolata",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "17px",
          lineHeight: "21px",
          textTransform: "capitalize",
          borderBottom: active? " 1px solid #538Bf7" :"",
          
          borderRadius:0,

          /* identical to box height */

          color: active ? "#538Bf7" : "#595551",
        }}
        href={props.href}
      >
        {props.text}
      </Button>
    </>
  );
};
export default TextButton;
