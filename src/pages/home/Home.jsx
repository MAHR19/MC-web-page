import { Box, Typography } from "@mui/material";
import { Cover } from "./Cover";

export const Home = () => {
    return(
     <Box
      height = '100vh'
      bgcolor = '#FFEEDB'
      >
        <Cover />

        <Box
         bgcolor = '#06070E'
         padding = '3rem'
         display = 'flex'
         alignItems = 'center'
         justifyContent = 'center'
         >
         <Typography
          variant = 'h6'
          color='primary'
          >
            Fotografia creativa
         </Typography>
        </Box>

        <Box
         bgcolor = '#FFEEDB'
         padding = '12rem'
         >
        
        </Box>
     </Box>
    );
}