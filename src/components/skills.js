
import React from 'react'
import styled from 'styled-components';
import { Box, Button } from '@chakra-ui/react'
import  Fade  from 'react-reveal';
const Title = styled.h1`
  font-size: 3.5em;
  margin:0%;
  text-align: center;
  color: black;
`;
const Head = styled.h1`
  font-size: 2.5em;
  text-align: Left;
  position:relative;
  left:10%;
  color:#F5A302;
`;
const Bu = styled.button`
  text-align: center;
height:40px;
width:70px;
border:1px solid black;
  color:#F5A302;
`;
function skills() {
    return (
        <div>
         <Box backgroundColor="" height="100vh" width="100vw" position="relative" border="2px solid black">
         <Fade up><Title>Skills</Title></Fade>
<Box height="5px" width="100px" backgroundColor="#F5A302"  margin="auto" />
            <Head>Development</Head>
            <Box display="flex" justifyContent="space-around" padding="30px">
                  
                <Bu>Html</Bu><Button>Html</Button><Button>Html</Button><br /><Button>Html</Button><Button>Html</Button>
            </Box>
            
            <Head>Design</Head>
            <Box display="flex" justifyContent="space-around" padding="30px">
                <Button>Html</Button><Button>Html</Button><Button>Html</Button><br /><Button>Html</Button><Button>Html</Button>
            </Box>
            </Box>
        </div>
    )
}

export default skills



