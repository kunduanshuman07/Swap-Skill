import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import styled from 'styled-components';
const ExperienceTutor = () => {
    return (
        <Root>
            <Box className='experience'>
                <Box className='exp-header'>
                    <Button startIcon={<AdjustIcon />} className='exp-title'>Software Developer</Button>
                    <Typography className='exp-footer'>@Microsoft | 2020-2023</Typography>
                </Box>
                <Box className='exp-header'>
                    <Button startIcon={<AdjustIcon />} className='exp-title'>Software Developer</Button>
                    <Typography className='exp-footer'>@Microsoft | 2020-2023</Typography>
                </Box>
                <Box className='exp-header'>
                    <Button startIcon={<AdjustIcon />} className='exp-title'>Software Developer</Button>
                    <Typography className='exp-footer'>@Microsoft | 2020-2023</Typography>
                </Box>
                <Box className='exp-header'>
                    <Button startIcon={<AdjustIcon />} className='exp-title'>Software Developer</Button>
                    <Typography className='exp-footer'>@Microsoft | 2020-2023</Typography>
                </Box>
            </Box>
        </Root>
    )
}


const Root = styled.div`
.exp-footer{
    font-size: 10px;
    margin-left: 30px;
    margin-top: -10px;
  }
  .exp-title{
    text-transform: none;
    font-weight: bold;
    color: white;
    font-size: 16px;
  }
  .exp-header{
    margin: 10px auto 20px auto;
  }
  .experience{
    background-color: #3D3F54;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    width: 600px;
    margin: 20px auto;
  }
  
`


export default ExperienceTutor