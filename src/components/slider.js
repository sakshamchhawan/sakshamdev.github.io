import { Box } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components';
import Bounce from 'react-reveal';
import  Fade  from 'react-reveal';
import pics from "./pic/main.png"


const Title = styled.h1`
  font-size: 200px;
margin:-45%;
margin-left:5%;
text-align: left;
  color: black;
  
`;
const Titlet = styled.h1`
  font-size: 30px;
  text-align: left;
  color: black;
  
`;
function slider() {
    return (
        <div>
    
    <Box height="100vh" width="100vw" backgroundColor="yellow">
    <Fade left>
    <Titlet>saksham</Titlet>
    </Fade>
    <Fade right>
    <Box width="30vw" height="50px" margin="5%"marginTop="-5%"  float="right" display="flex"  justifyContent="  space-between">     
    <h3>About</h3> <h3>Skills</h3> <h3>Portfolio</h3> <h3>Contact us</h3>
    </Box>
    </Fade>
    <Box height="90vh" width="500px"  position="relative" left="60%" ><img src={pics}></img></Box>
    


               <Bounce zoom><Title> HE<br />LLO.</Title></Bounce>
                
            </Box>
        </div>
    )
}

export default slider
