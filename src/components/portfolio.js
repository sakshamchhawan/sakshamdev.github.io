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
const Boxf = styled.div`
  background-color: black;
  width: 400px;
  height:200px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
`;
function portfolio() {
    return (
        <div>
              <Box backgroundColor="" height="100vh" width="100wh" position="relative">
                    <Fade up><Title>Portfolio</Title></Fade>
<Box height="5px" width="150px" backgroundColor="#F5A302"  margin="auto" />
                    <Box display="flex" flex-wrap="nowrap" justifyContent="center">
                        <Boxf>1</Boxf>
                        <Boxf></Boxf>
                        <Boxf></Boxf>
                        
                    </Box>
                    <Box display="flex" flex-wrap="nowrap" justifyContent="center">
                        <Boxf>1</Boxf>
                        <Boxf></Boxf>
                        <Boxf></Boxf>
                        
                    </Box>
              </Box>
        </div>
    )
}

export default portfolio

