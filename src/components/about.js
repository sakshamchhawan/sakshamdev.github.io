import React from 'react'
import { Box } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import styled from 'styled-components';
import Bounce from 'react-reveal';
import  Fade  from 'react-reveal';
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram,AiFillTwitterCircle } from "react-icons/ai";
import pics from "./pic/photo.svg";
const Title = styled.h1`
  font-size: 3.5em;
  margin:0%;
  text-align: center;
  color: black;
`;
const Para = styled.h1`
  font-size: 1.5em;
margin:23%;
margin-left:50%;
  text-align: left;
font-weight:100;
  color: black;
`;
const Head = styled.h1`
  font-size: 2.5em;
margin:-25%;
margin-left:50%;
text-align: left;
  color:#F5A302;
`;
function aboutus() {
    return (
        <div id='about'>
        <Box backgroundColor="" height="100vh" width="100wh" position="relative">
           
        <Fade up> <Title> About</Title> 
        <Box height="5px" width="100px" backgroundColor="#F5A302"  margin="auto" />
         <Box borderRadius="50%" height="300px" width="300px" backgroundColor="#F5A302"  position="relative" left="10%" ><img src={pics} alt='oops'></img></Box>
        
           <Head> I'am Saksham Chhawan<br /><Badge colorScheme="black">web dev</Badge></Head>
            <pic></pic>
           </Fade>
           <Bounce up>
           <Para>Highly eperienced in web design and development knowladge, produing quality work</Para>
           <Box position="relative" left="50%" marginTop="-20%" justifyContent="space-around">
           <AiFillTwitterCircle size="30px" color='#00ACEE'/>
           <BsFacebook size="30px" color='#3B5998' />
           <FaLinkedin size="30px" color='#0E76A8' />
           <AiFillInstagram size="30px"/>
           </Box>
           </Bounce>
                    
            
            
            </Box>  

        </div>
    )
}

export default aboutus

