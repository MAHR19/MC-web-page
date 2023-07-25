import { Box, Typography } from "@mui/material";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { Cover } from "./Cover";


export const Home = () => {
    return(
     <Box
      height = '100vh'
      bgcolor = '#FFEEDB'
      display = 'flex'
      flexDirection = 'column'
      alignContent = 'center'
      justifyContent = 'start'
      >
        <Cover />

        <Box
         bgcolor = '#06070E'
         padding = '2rem'
         display = 'flex'
         alignItems = 'center'
         justifyContent = 'center'
         >
         <PlaceOutlinedIcon
          color = "primary"
          />
          
         <Typography
          variant = 'h6'
          color='primary'
          >
            Apatzingan, Mich.
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