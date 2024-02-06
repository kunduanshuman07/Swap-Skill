import React from 'react'
import styled from 'styled-components'
import { Box, Button, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TeachBgImg from "../assets/TeachBgImg.jpg";
import LogoImg from "../assets/Logo.png";
const TeachHome = () => {
    return (
        <Root>
            <Box className='home-container'>
                <Box className='home-right-container'>
                    <Box className='home-right-content'>
                        <img src={TeachBgImg} alt='bgimg' className='home-right-img' />
                    </Box>
                    <Box className='home-right-content-left'>
                        <img src={LogoImg} alt='bgimg' className='home-right-logo' />
                        <Typography className='hmrg-header'>Swap your Skills</Typography>
                    </Box>
                </Box>
                <Box className='home-left-container'>
                    <Box className='left-h-header'>
                        <Typography className='header-text'>Unlock Your Teaching Potential on Swap Skill</Typography>
                        <Typography className='header-con'>As a teacher on Swap Skill, you have the power to:</Typography>
                    </Box>
                    <Box className='left-footer'>
                        <Button className='footer-btn-text' startIcon={<DashboardIcon />}>Create and customize your teaching profile</Button>
                        <Button className='footer-btn-text' startIcon={<DashboardIcon />}>Set your teaching skills and expertise</Button>
                        <Button className='footer-btn-text' startIcon={<DashboardIcon />}>Offer a variety of courses or lessons</Button>
                        <Button className='footer-btn-text' startIcon={<DashboardIcon />}>Manage your teaching schedule</Button>
                        <Button className='footer-btn-text' startIcon={<DashboardIcon />}>Receive reviews and ratings from students</Button>
                    </Box>
                </Box>
            </Box>
        </Root>
    )
}

const Root = styled.div`
.hmrg-header{
    font-size: 30px;
    font-weight: bold;
    color: #FF7426;
    margin-right: auto;
    margin-left: 20px;
}
.home-right-logo{
    width: 50px;
    height: 50px;
    margin-left: auto;
}
.home-right-content-left{
    display: flex;
    margin-top: 10px;
}
.home-right-img{
    width: 500px;
    height: 230px;
    border-radius: 10px;
    margin: 10px auto;
}
.home-right-content{
    display: flex;
    flex-direction: column;
}
.home-container{
    display: flex;
    width:90%;
    height: 410px;
    border-radius: 20px;
    margin-left: 160px;
}
.footer-btn-text{
    margin-right: auto;
    color: #0066CC;
    font-size: 12px;
    text-transform: none;
    margin-left: 10px;
    font-weight: bold;
}
.left-footer{
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 15px;
    border-radius: 20px;
}
.header-con{
    font-size: 18px;
    color: #dae5f7;
}
.header-text{
    font-size: 25px;
    color: white;
    font-weight: bold;
    margin: 5px auto;
}
.left-h-header{
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    border-bottom: 1px dashed #d0d7de;
}
.home-left-container{
    width: 40%;
    height: 370px;
    background-color: #3D3F54;
    margin: auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 10px;
}
.home-right-container{
    width: 60%;
    height: 350px;
    margin: auto;
    border-radius: 20px;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}
`

export default TeachHome