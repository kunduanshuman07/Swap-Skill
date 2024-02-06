import { Avatar, Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import CodeEditor from "./CodeEditor";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import { useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
const languageOptions = [
    {
        label: "Javascript",
        value: "javascript",
    },
    {
        label: "C++",
        value: "cpp",
    },
    {
        label: "Python",
        value: "python",
    },
]
const ColabEditor = () => {
    const [theme, setTheme] = useState('vs-dark')
    const navigate = useNavigate();
    const handleLeaveRoom = () => {
        navigate('/colab')
    }
    return (
        <Root>
            <Box className='container'>
                <Box className='left'>
                    <Typography className='header'>Code Editor</Typography>
                    <Typography className='joined-users'>Language</Typography>
                    <Box className='language'>
                        <TextField size='small' variant='outlined' select fullWidth
                            sx={{
                                ".css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":{
                                    color: "white"
                                },
                                ".css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon::after":{
                                    color: "white"
                                },
                                ".css-953pxc-MuiInputBase-root-MuiInput-root":{
                                    color: "white"
                                },
                                ".css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input ": {
                                   background: "white"
                                }
                            }}
                        >
                            {languageOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box className='joined-users'>
                        <Typography className='joined-users'>Joined users</Typography>
                        <Box className='avatars'>
                            <Avatar className='avatar' variant='rounded'>AK</Avatar>
                            <Avatar className='avatar' variant='rounded'>MC</Avatar>
                        </Box>
                    </Box>
                    <Box className='set-theme'>
                        <Typography className='joined-users'>Editor Theme</Typography>
                        <Button className='light' startIcon={<LightModeIcon />} onClick={()=>setTheme('light')} style={{color: theme==='light'?"yellow": "white"}}>Light</Button>
                        <Button className='dark' startIcon={<ModeNightIcon />} onClick={()=>setTheme('vs-dark')} style={{color: theme==='vs-dark'?"#34eb6b": "white"}}>Dark</Button>
                    </Box>
                    <Box className='footer'>
                        <Button className='invite' variant='contained' startIcon={<ScreenShareIcon />}>Invite</Button>
                        <Button className='leave' variant='contained' startIcon={<ExitToAppIcon />} onClick={handleLeaveRoom}>Leave Room</Button>
                    </Box>
                </Box>
                <Box className='right'>
                    <CodeEditor theme={theme} />
                </Box>
            </Box>
        </Root>
    )
}

const Root = styled.div`
.light{
    text-transform: none;
    font-weight: bold;
    color: white;
}
.dark{
    text-transform: none;
    font-weight: bold;
    color: white;
}
.set-theme{
    margin-top: 30px;
}
.invite{
    text-transform: none;
    font-weight: bold;
    margin-top: 10px;
    background-color: #20ebfa;
    padding: 5px 10px;
    color: black;
    &:hover{
        color: white;
    }
}
.leave{
    text-transform: none;
    margin-top: 10px;
    font-weight: bold;
    background-color:#20ebfa;
    color: black;
    &:hover{
        color: white;
    }
}
.footer{
    margin-top: auto;
    display: flex;
    flex-direction: column;
}
.avatars{
    display: flex;
}
.joined-users{
    color: #FF7426;
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
}
.avatar{
    width: 40px;
    height: 40px;
    background-color: #c42bb2;
    margin-top: 10px;
    margin-left: 4px;
}
.language{
    margin-top: 20px;
    // background-color: white;
    // padding: 5px;
    border-radius: 10px;
}
.header{
    color: #20ebfa;
    font-weight: bold;
    font-size: 20px;
    border-bottom: 2px solid gray;
}
.container{
    display: flex;
    width: 100%;
    padding: 0px;
}
.left{
    width: 20%;
    position: fixed;
    background-color: #252A40;
    height: 510px;
    left: 0%;
    top: 9%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    cursor: pointer;
}
.right{
    width: 80%;
    position: fixed;
    left: 20%;
    top: 9%;
}
`

export default ColabEditor