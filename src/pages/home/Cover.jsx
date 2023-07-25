import { Box, Button, Typography, Grid, Link } from "@mui/material";
import back1 from '../images/back1.jpg'

export const Cover = () => {
    return(
        <Box
         marginTop = '7rem'
         display = 'flex'
         justifyContent = 'start'
         alignItems = 'start'
         >
          <Grid
           container
           spacing = {2}
           >
           <Grid
            item
            md = {6}
            >
            <Typography
             variant = 'h1'
             fontSize = '3rem'
             textAlign = 'start'
             fontWeight = 'bold'
             sx = {{
              marginLeft : '22px'
             }}
             >
              Fotografía creativa <br /> tu mejor opcion
            </Typography>

            <Box
             padding = '1rem'
             marginLeft = '12px'
             >
             <Button
              variant = 'contained'
              sx = {{
               backgroundColor : '#FFAD85',
               borderRadius : '0',
               "&:hover": {
                  backgroundColor: "#FF8E5A", // Cambia el color al hacer hover
                },
              }}
              >
               Contactame
             </Button>
               
            </Box>

            

           </Grid>

           <Grid
            item
            md = {6}
            >
            <Box
             padding = '10rem'
             bgcolor = 'grey'
             marginBottom = '2rem'         
             marginRight = '4rem'    
             sx = {{}}
             >
          

            </Box>

           </Grid>

          </Grid>
         
         
       </Box>
    );
}