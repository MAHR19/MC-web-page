import { useState } from "react";
import { AppBar, Toolbar, Box, Typography, Tabs, Tab } from "@mui/material";
import { NavOptions } from "./NavOptions";


export const NavBar = ( ) =>{
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
      };

    return(
        <AppBar
         position = 'fixed'
         sx = {{
            boxShadow : 'none'
         }}
         >
         <Toolbar>
          <Box>
           <Typography
            variant = 'h4'
            >
              LOGO
           </Typography>
        </Box>
         
         <NavOptions />
        
         </Toolbar>
        </AppBar>
    )
}