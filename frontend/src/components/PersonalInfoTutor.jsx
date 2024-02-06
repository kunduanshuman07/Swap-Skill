import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
const PersonalInfoTutor = () => {
  return (
    <Root>
      <Box className='personal-info'>
        <Box className='personal-about'>
          <Typography className='personal-about-header'>About</Typography>
          <Typography className='about-text'>Ayesha Bazmi is a results-driven Marketing Manager with a passion for leveraging innovative strategies to drive brand growth and customer engagement in the ever-evolving digital landscape. Feel free to reach me out for any specific queries.</Typography>
        </Box>
        <Box className='social-link'>
          <Typography className='social-link-header'>Social Links</Typography>
          <Box className='icon-btns'>
            <Button className='icons' startIcon={<EmailIcon />}>abcdefgh@gmail.com</Button>
            <Button className='icons' startIcon={<LinkedInIcon />}>https://linkedin.com</Button>
            <Button className='icons' startIcon={<GitHubIcon />}>https://github.com</Button>
          </Box>
        </Box>
      </Box>
    </Root>
  )
}


const Root = styled.div`
  .icons{
    margin-right: auto;
    color: white;
    padding: 5px 10px;
    text-transform: none;
  }
  .icon-btns{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .social-link-header{
    border-bottom: 1px solid #FF7426;
    width: 80px;
    font-size: 14px;
  }
  .social-link{
    background-color: #3D3F54;
    color: white;
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
  }
  .about-text{
    font-size: 12px;
    margin-top: 20px;
  }
  .personal-about-header{
    border-bottom: 1px solid #FF7426;
    width: 40px;
    font-size: 14px;
  }
  .personal-about{
    background-color: #3D3F54;
    color: white;
    padding: 20px;
    border-radius: 20px;
  }
  .personal-info{
    padding: 20px;
  }
  
`


export default PersonalInfoTutor