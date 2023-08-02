import React from "react";
import { Box } from "@mui/material";
import Nav from "../pages/Nav/Nav";


function Layout(props) {

  return (
    <Box>
      <Nav/>
      <Box 
       style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column", marginTop:"-70px"}}>
        {props.children}
      </Box>
    </Box>
  );
}

export default Layout;
