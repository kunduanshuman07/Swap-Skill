import React, { useState } from 'react'
import { Box, Button, Grid, TextField, InputAdornment, IconButton, Typography } from '@mui/material'
import styled from 'styled-components'
import backgroundImage from "../assets/RegisterBackground.jpg"
import AppBarComponent from '../components/AppBarComponent'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Logo from "../assets/Logo.png";
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Root>
            <AppBarComponent callFrom='Login'/>
            <Box className='container'>
                <img src={backgroundImage} alt='background' className='bg-img' />
                <Box className='content'>
                    <Box className='header'>
                        <img src={Logo} alt="logo" width={30} height={30} />
                        <Typography className='logo'>Swap Skill</Typography>
                    </Box>
                    <Box className='content-segment'>
                        <Box className='your-profile'>
                            <Grid container spacing={3} className='grid-container'>
                                <Grid item xs={12}>
                                    <TextField placeholder='Email' size='small' label='Email' required fullWidth sx={{
                                        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                            borderRadius: '10px',
                                            border: "2px solid #d0d7de"

                                        },
                                    }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField placeholder='Password' size='small' label='Password' required fullWidth
                                        type={showPassword ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={togglePasswordVisibility} size='small'>
                                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        sx={{
                                            '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                                borderRadius: '10px',
                                                border: "2px solid #d0d7de"

                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button className='next-btn'>Login</Button>
                            <Typography className='new-user'>New here? <span className='register' onClick={() => navigate('/register')}>Register</span></Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Root>
    )
}

const Root = styled.div`
 .container{
    display: flex;
  }
 .bg-img{
    position: absolute;
    height: 100%;
    width: 100%;
 }
 .header{
    margin: 10px 130px;
    display: flex;
 }
 .logo{
    margin-top: 5px;
    font-weight: bold;
    margin-left: 10px;
 }
 .content{
    display: flex;
    flex-direction : column;
    background-color: white;
    height: 320px;
    width: 400px;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: none;
    padding: 0px;
 }
 .content-segment{
    display: flex;
 }
 .your-profile{
    width: 90%;
    margin: 30px 0px 0px 20px;
    display: flex;
    flex-direction: column;
 }
 .next-btn{
    margin: 50px auto 0px auto;
    background-color: black;
    color: white;
    width: 100px;
    text-transform: none;
    border-radius: 10px;
    padding: 5px 15px;
    border: 2px solid black;
    font-weight: bold;
    &:hover{
        color: black;
    }
 }
 .new-user{
    margin: 10px auto;
    font-size: 13px;
 }
 .register{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    font-size: 14px;
 }
`

export default LoginPage
