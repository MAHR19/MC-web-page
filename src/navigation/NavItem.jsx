import { Tab } from "@mui/material";
import styled from "@emotion/styled";


const StyledTab = styled(Tab)({
    textTransform : 'none',
    fontSize : '15px'
})

export const NavItem = ( {label} ) =>{
    return(
        <StyledTab 
         label = {label}
         />
    );
}