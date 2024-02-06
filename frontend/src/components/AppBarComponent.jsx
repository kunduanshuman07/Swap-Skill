import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Avatar, Button, IconButton, Tooltip } from '@mui/material';
import styled from "styled-components";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InfoIcon from '@mui/icons-material/Info';
import Logo from "../assets/Logo.png";
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
export const AppBarComponent = ({ callFrom }) => {
    const navigate = useNavigate();
    const handleLearn = () => {
        navigate('/learn')
    }
    const handleTeach = () => {
        navigate('/teach')
    }
    const handleColab = () => {
        navigate('/colab')
    }
    return (
        <Root>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#FDF8EE", color: "#4D2C5E", boxShadow: "none", height: "50px" }}>
                    <Container maxWidth="xl" style={{ marginTop: "-6px" }}>
                        <Toolbar disableGutters>
                            {['Register', 'Login'].includes(callFrom) ?
                                <>
                                    <Box sx={{ ml: "auto" }}>
                                        <Tooltip title='About Us'>
                                            <IconButton className='about' >
                                                <InfoIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <Box>
                                        <Tooltip title='Contact Us'>
                                            <IconButton className='contact'>
                                                <ConnectWithoutContactIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </> : <Box className='tab-box'>
                                    <Box>
                                        <img src={Logo} alt="logo" width={20} height={20} className='logo' />
                                    </Box>
                                    <Box>
                                        <Button className='tabs' onClick={handleLearn}>Learn</Button>
                                    </Box>
                                    <Box>
                                        <Button className='tabs'>Active Sessions</Button>
                                    </Box>
                                    <Box>
                                        <Button className='tabs' onClick={handleTeach}>Teach</Button>
                                    </Box>
                                    <Box>
                                        <Button className='tabs' onClick={handleColab}>Colab</Button>
                                    </Box>
                                    <Box>
                                        <Button className='tabs'>Explore</Button>
                                    </Box>
                                    <Box>
                                        <Tooltip title='My Profile'>
                                            <IconButton className='avatar'>
                                                <Avatar style={{ width: "25px", height: "25px", backgroundColor: "#4D2C5E" }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <Box>
                                        <IconButton className='tabs'>
                                            <SettingsIcon style={{ fontSize: "16px" }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </Root>
    );
}

const Root = styled.div`
    .logo-style{
        cursor: pointer
    }
    .logo{
        margin-top: 15px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .logo-header{
        display: flex;
        flex-direction: column;
        margin-left: -5px;
    }
    .logo-text{
        color: black;
        font-size: 17px;
        padding: 5px 10px 5px 10px;
        border-radius: 20px;
        margin-left: 10px;
        font-weight: bold;
    }
    .logo-footer{
        margin-top: -10px;
        font-size: 10px;
        text-align: center;
        margin-left: 10px;
    }
    .about{
        text-transform: none;
        color: black;
    }
    .contact{
        text-transform: none;
        color: black;
    }
    .tab-box{
        margin: auto;
        display: flex;
    }
    .tabs{
        color: #4D2C5E;
        font-weight: bold;
        text-transform: none;
        margin: 10px;
        font-size: 12px;
    }
    .avatar{
        margin: 5px 0px 0px 50px;
    }
`

export default AppBarComponent;