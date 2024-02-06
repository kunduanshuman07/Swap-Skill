import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import TeacherImg from "../assets/Teacher-one.jpg";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import AdjustIcon from '@mui/icons-material/Adjust';
import EditProfileDialog from './EditProfileDialog';
const TeachTutor = () => {
  const [editProfile, setEditProfile] = useState(false);
  const handleEditProfile = () => {
    setEditProfile(true);
  }
  const handleClose = () => {
    setEditProfile(false);
  }
  return (
    <Root>
      <Box className='tt-container'>
        <Box className='left-box'>
          <Box className='content-box-one'>
            <Avatar className='avatar' src={TeacherImg} />
            <Button className='upload-photo-btn'>Edit Picture</Button>
          </Box>
          <Box className='content-box'>
            <Box className='content-header'>
              <Typography className='content-header-text'>About Me</Typography>
            </Box>
            <Typography className='content-items'>
              Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.
            </Typography>
          </Box>
          <Box className='content-box'>
            <Box className='content-header'>
              <Typography className='content-header-text'>Social Links</Typography>
            </Box>
            <Button className='content-item-btns' startIcon={<LinkedInIcon />}>https://linkedin.com</Button>
            <Button className='content-item-btns' startIcon={<GitHubIcon />}>https://github.com.com</Button>
            <Button className='content-item-btns' startIcon={<EmailIcon />}>kundu4coding@gmail.com</Button>
          </Box>

        </Box>
        <Box className='right-box'>
          <Box className='content-box'>
            <Box className='content-header'>
              <Typography className='content-header-text'>Experience</Typography>
            </Box>
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
          </Box>
          <Box className='content-box'>
            <Box className='skills'>
              <Typography className='skill-header'>Primary Skills & Frameworks</Typography>
              <Box className='primary-skills'>
                <Button className='skill'>React.js</Button>
                <Button className='skill'>Node.js</Button>
                <Button className='skill'>Express</Button>
                <Button className='skill'>SQL</Button>
              </Box>
              <Typography className='skill-header'>Secondary Skills & Frameworks</Typography>
              <Box className='secondary-skills'>
                <Button className='skill'>Python</Button>
                <Button className='skill'>Django</Button>
                <Button className='skill'>Vue.js</Button>
                <Button className='skill'>C++</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className='corner-box'>
          <Button className='edit-btn' onClick={handleEditProfile}>Edit Profile</Button>
          <Button className='infobox' startIcon={<InfoIcon />}>Your profile should be 100% complete for Teaching !</Button>
        </Box>
      </Box>
      {editProfile && <EditProfileDialog onCloseModal={handleClose}/>}
    </Root>
  )
}

const Root = styled.div`
.skill{
  text-transform: none;
  font-weight: bold;
}
.skills{
  margin-top: 5px;
}
.skill-header{
  font-size: 13px;
  font-weight: bold;
}
.exp-footer{
  font-size: 10px;
  margin-left: 30px;
  margin-top: -10px;
}
.exp-title{
  text-transform: none;
  font-weight: bold;
  color: #4D2C5E;
  font-size: 12px;
}
.experience{
  border-radius: 20px;
  margin-right: auto;
  margin-top: 5px;
}
.infobox{
  text-transform: none;
  font-weight: bold;
  font-size:7px;
  margin: auto;
  background-color: gray;
  color: white;
  &:hover{
    background-color: gray;
  color: white;
  }
}
.corner-box{
  width: 15%;
  margin-left: 10px;
  border: 1px solid #d0d7de;
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  border-radius: 20px;
}
.content-item-btns{
  font-size: 12px;
  color: #4D2C5E;
  margin-top: 5px;
  text-transform: none;
  height: 20px;
  padding: 0px;
  margin-right: auto;
}
.content-items{
  font-size: 12px;
  color: #4D2C5E;
  margin-top: 10px;
}
.edit-btn{
  text-transform: none;
  margin: auto auto 0px auto;
  background-color: #FF7426;
  color: white;
  font-weight: bold;
  text-transform: none;
  &:hover{
    background-color: #8c3a0d;
  }
}
.content-header-text{
  font-weight: bold;
  font-size: 15px;
  margin: auto 0px;
  color: #4D2C5E;
}
.content-header{
  display: flex;
}
.content-box{
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #d0d7de;
  border-radius: 10px;
}
.upload-photo-btn{
  text-transform: none;
  font-weight: bold;
  margin: auto 0px auto auto;
  height: 30px;
  color: #4D2C5E;
}
.avatar{
  width: 70px;
  height: 70px;
  margin-tigh: auto;
}
.content-box-one{
  display: flex;
  padding: 10px;
  margin-top: 10px;
}
.tt-container{
  display: flex;
  margin-left: 200px;
  width: 80%;
}
.left-box{
  width: 40%;
  height: 410px;
  border: 2px solid #d0d7de;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  border-radius: 20px;
  padding: 20px;
}
.right-box{
  width: 45%;
  height: 410px;
  border: 2px solid #d0d7de;
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  border-radius: 20px;
  padding: 20px;
}
`

export default TeachTutor