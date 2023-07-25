import { Box, Button, Typography } from "@mui/material";
import back1 from '../images/back1.jpg'

export const Cover = () => {
    return(
        <>
         <Box
         padding = '20rem'
         sx = {{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backgroundImage : `url(${back1})`,
            backgroundPosition : 'center',
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover'
         }}
          
         />

        <Box
         position = 'absolute'
         top={1}
         left={0}
         right={0}
         bottom={74}
         display = 'flex'
         flexDirection = 'column'
         alignItems = 'center'
         justifyContent = 'center'
         padding = '15rem'
         sx = {{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundPosition : 'center',
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover'
         }}
          >

         

         <Typography
           variant = 'h1'
           textAlign= 'center'
           fontWeight = 'bold'
           color='primary'
           >
             Lorem ipsum dolor sit amet
          </Typography>

          <Button
           variant = "contained"
           href = "/Contacto"
           sx = {{
            backgroundColor : '#FFAD85',
            borderRadius : '0'
           }}
           >
            Contactame
          </Button>
        </Box>
       </>
    );
}