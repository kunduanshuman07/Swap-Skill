import React from 'react'
import { Box, Typography, Avatar } from "@mui/material";
import AvatarImg from "../assets/Teacher-one.jpg";
import styled from 'styled-components';
const ReviewsTutor = () => {
    return (
        <Root>
            <Box className='reviews'>
                <Box className='review-content'>
                    <Avatar src={AvatarImg} />
                    <Typography className='review'>Ayesha Bazmi is a results-driven Marketing Manager with a passion for leveraging innovative strategies to drive brand growth and customer engagement in the ever-evolving digital landscape. Feel free to reach me out for any specific queries.</Typography>
                </Box>
                <Box className='review-content'>
                    <Avatar src={AvatarImg} />
                    <Typography className='review'>Ayesha Bazmi is a results-driven Marketing Manager with a passion for leveraging innovative strategies to drive brand growth and customer engagement in the ever-evolving digital landscape. Feel free to reach me out for any specific queries.</Typography>
                </Box>
            </Box>
        </Root>
    )
}


const Root = styled.div`
.review{
    color: white;
    margin: auto 20px;
    font-size: 12px;
  }
  .review-content{
    display: flex;
    margin-right: auto;
    background-color: #3D3F54;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    border-radius: 20px;
    padding: 20px;
  }
  .reviews{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  
`


export default ReviewsTutor