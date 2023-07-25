import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

export const NavOptions = () => {

   const [selectedTab, setSelectedTab] = useState(0);

   const handleTabChange = (event, newValue) => {
       setSelectedTab(newValue);
     };

    return(
     <Box
      marginLeft = '26rem'
      >
      
      <Tabs
       indicatorColor = 'secondary'
       textColor = "secondary"
       value={selectedTab} 
       onChange={handleTabChange}
       >
        <Tab label = 'Inicio'
         sx = {{
            textTransform : 'none',
            fontSize : '14px',
            color: selectedTab === 0 ? "primary" : "secondary",
         }}
         />

        <Tab label = 'Acerca de mi'
         sx = {{
            textTransform : 'none',
            fontSize : '14px',
            color: selectedTab === 0 ? "primary" : "secondary",
         }}
         />

      <Tab label = 'Portafolio'
         sx = {{
            textTransform : 'none',
            fontSize : '14px',
            color: selectedTab === 0 ? "primary" : "secondary",
         }}
         />
         <Tab label = 'Contactame'
         sx = {{
            textTransform : 'none',
            fontSize : '14px',
            color: selectedTab === 0 ? "primary" : "secondary",
         }}
         />

      </Tabs>
     </Box>
    );
}