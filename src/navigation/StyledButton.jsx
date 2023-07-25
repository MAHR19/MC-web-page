import { useState } from 'react';
import { Button, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';


const CustomButton = styled(Button)(({ selected }) => ({
  fontSize: '16px',
  textTransform: 'none',
  color: selected ? 'black' : 'inherit',
  borderBottom: selected ? '2px solid black' : 'none',
  '&:hover': {
    borderBottom: selected ? '2px solid black' : 'none',
  },
}));

export const NavItem = ( { text } ) =>{

  const [selected, setSelected] = useState(false);

  const handleButtonClick = () => {
    console.log('selected')
    setSelected(!selected);
  };

    return(

     <CustomButton
      onClick = {handleButtonClick}
      >
        {text}
     </CustomButton>
    );
}