import React, { useState } from 'react'
import { Box, Button, Grid, TextField, InputAdornment, IconButton, MenuItem } from '@mui/material'
import styled from 'styled-components'
import backgroundImage from "../assets/RegisterBackground.jpg"
import AppBarComponent from '../components/AppBarComponent'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
const RegisterPage = () => {
    const [infoState, setInfoState] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [age, setAge] = useState('');
    const [type, setType] = useState('');
    const [degree, setDegree] = useState('');
    const [exp, setExp] = useState('');
    const [skillone, setSkillOne] = useState('');
    const [skilltwo, setSkilltwo] = useState('');
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const yourProfileArray = [
        { label: 'First Name', state: firstName, setState: setFirstName },
        { label: 'Last Name', state: lastName, setState: setLastName },
        { label: 'Email', state: email, setState: setEmail },
        { label: 'Phone', state: phone, setState: setPhone },
        {
            label: 'Password',
            state: password,
            setState: setPassword,
        },
        {
            label: 'Confirm Password',
            state: confirmPassword,
            setState: setConfirmPassword,
        },
    ];

    const personalInformationArray = [
        { label: 'Age', state: age, setState: setAge },
        { label: 'Student or Professional', state: type, setState: setType },
        { label: 'Highest Qualification', state: degree, setState: setDegree },
        { label: 'Primary Skill 1', state: skillone, setState: setSkillOne },
        { label: 'Primary Skill 2', state: skilltwo, setState: setSkilltwo },
    ];
    const userType = [
        {
            label: "Student",
            value: "Student",
        },
        {
            label: "Professional",
            value: "Professional"
        }
    ];
    const handleProfileNext = () => {
        const profileData = {
            firstName, lastName, email, phone, password
        }
        console.log(profileData);
        setInfoState('pinfo')
    }
    const handlePersonalInfoNext = () => {
        const personalInfoData = {
            age, skillone, skilltwo, degree, exp, type
        }
        console.log(personalInfoData);
    }
    return (
        <Root>
            <AppBarComponent callFrom='Register'/>
            <Box className='container'>
                <img src={backgroundImage} alt='background' className='bg-img' />
                <Box className='content'>
                    <Box className='tabs'>
                        <Button className='profile-btn' onClick={() => setInfoState('profile')} style={{ backgroundColor: infoState === 'profile' ? '#646262' : "black" }}>Your Profile</Button>
                        <Button className='pinfo-btn' onClick={() => setInfoState('pinfo')} style={{ backgroundColor: infoState === 'pinfo' ? '#646262' : "black" }}>Personal Information</Button>
                    </Box>
                    <Box className='content-segment'>
                        {infoState === 'profile' ? <Box className='your-profile'>
                            <Grid container spacing={3} className='grid-container'>
                                {yourProfileArray.map((item, index) => (
                                    <Grid item xs={6} key={index}>
                                        <TextField
                                            placeholder={item.label}
                                            sx={{
                                                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                                    borderRadius: "10px",
                                                    border: "2px solid #d0d7de"


                                                }
                                            }}
                                            size='small'
                                            label={item.label}
                                            required
                                            fullWidth
                                            type={item.label === 'Password' ? showPassword ? "text" : "password" : "text"}
                                            InputProps={{
                                                endAdornment: (
                                                    item.label === 'Password' && <InputAdornment position="end">
                                                        <IconButton onClick={togglePasswordVisibility} size='small'>
                                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            value={item.state}
                                            onChange={(e) => item.setState(e.target.value)}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                            <Button className='next-btn' onClick={handleProfileNext}>Next</Button>
                        </Box> : <Box className='personal-info'>
                            <Grid container spacing={3} className='grid-container'>
                                {personalInformationArray.map((item, index) => (
                                    <Grid item xs={6} key={index}>
                                        <TextField
                                            placeholder={item.label}
                                            size='small'
                                            label={item.label}
                                            required
                                            fullWidth
                                            select={item.label === 'Student or Professional'}
                                            sx={{
                                                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                                    borderRadius: "10px",
                                                    border: "2px solid #d0d7de"

                                                }
                                            }}
                                            value={item.state}
                                            onChange={(e) => item.setState(e.target.value)}
                                        >
                                            {item.label === 'Student or Professional' &&
                                                userType.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    </Grid>
                                ))}
                                {type === 'Professional' && (
                                    <Grid item xs={6}>
                                        <TextField
                                            placeholder='Years of Experience'
                                            size='small'
                                            label='Years of Experience'
                                            required
                                            fullWidth
                                            type='text'
                                            sx={{
                                                '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                                    borderRadius: '10px',
                                                    border: "2px solid #d0d7de"

                                                },
                                            }}
                                            value={exp}
                                            onChange={(e) => setExp(e.target.value)}
                                        />
                                    </Grid>
                                )}
                            </Grid>
                            <Button className='next-btn' onClick={handlePersonalInfoNext}>Next</Button>
                        </Box>}

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
 .content{
    display: flex;
    flex-direction : column;
    background-color: white;
    height: 350px;
    width: 600px;
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
 .tabs{
    margin-top: 5px;
    display: flex;
 }
 .profile-btn{
    width: 290px;
    background-color: black;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    color: white;
    height: 50px;
    border-radius: 10px;
    text-transform: none;
    margin: auto;
    font-weight: bold;
 }
 .pinfo-btn{
    width: 290px;
    background-color: black;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    color: white;
    height: 50px;
    border-radius: 10px;
    text-transform: none;
    margin: auto;
    font-weight: bold;
 }
 .your-profile{
    width: 90%;
    margin: 40px 0px 0px 30px;
    display: flex;
    flex-direction: column;
 }
 .personal-info{
    width: 90%;
    margin: 40px 0px 0px 30px;
    display: flex;
    flex-direction: column;
 }
 .next-btn{
    margin: 30px auto;
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
`

export default RegisterPage
