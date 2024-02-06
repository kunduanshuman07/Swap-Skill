import { Avatar, Box, Button, TextField, Typography, InputAdornment, IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Person3Icon from '@mui/icons-material/Person3';
import HelpIcon from '@mui/icons-material/Help';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
const ConnectChat = () => {
  const navigate = useNavigate();
  const handleViewProfile = () => {
    navigate('/learn/xyz');
  }
  return (
    <Root>
      <Box className='connectchat-container'>
        <Box className='header'>
          <Avatar alt='Anshuman Kundu' src='' className='header-avatar'>MN</Avatar>
          <Box className='header-desc'>
            <Typography className='header-name'>Matthew E. McNatt</Typography>
            <Button startIcon={<FiberManualRecordIcon style={{ fontSize: "10px" }} />} className='avail-btn'>Available</Button>
          </Box>
          <Button className='course-desc' endIcon={<HelpIcon />}>React.js Course</Button>
          <Button startIcon={<Person3Icon style={{}} />} className='profile-btn' onClick={handleViewProfile}>View Profile</Button>
        </Box>
        <Box className='chat-container'>
          <Box className='tutor-chat'>
            <Box className='chat-desc-tutor'>
              <Typography className='chat-time'>11:47 p.m</Typography>
              <Typography className='tutor-msg'>Hi Anshuman Kundu!</Typography>
            </Box>
            <Avatar alt='Anshuman Kundu' src='' className='chat-avatar'>MN</Avatar>
          </Box>
          <Box className='stud-chat'>
            <Avatar alt='Anshuman Kundu' src='' className='chat-avatar'>AK</Avatar>
            <Box className='chat-desc-stud'>
              <Typography className='chat-time'>11:48 p.m</Typography>
              <Typography className='stud-msg'>Hi Mat!</Typography>
            </Box>
          </Box>
        </Box>
        <Box className='footer-container'>
          <TextField
            fullWidth
            size='small'
            placeholder='Type a message'
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size='small'>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            multiline
            sx={{
              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                borderRadius: "10px",
                borderBottom: "2px solid #0072EF"
              }
            }}
          />
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
.connectchat-container{
  displaY: flex;
  flex-direction: column;
  margin-left: 80px;
  cursor: pointer;
  margin-top: -80px;
}
.chat-avatar{
  margin: 7px 0px 0px 0px;
}
.stud-msg{
  margin: auto 10px;
  background-color: #cdebf7;
  padding: 2px 10px;
  font-size: 14px;
  border-radius: 10px;
}
.chat-desc-stud{
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}
.tutor-msg{
  margin: auto 10px;
  background-color: #d0d7de;
  padding: 2px 10px;
  font-size: 14px;
  border-radius: 10px;
  max-width: 500px;
  word-wrap: break-word;
}
.chat-time{
  font-size: 8px;
  color: #868686;
  font-weight: bold;
  margin: 0px auto;
}
.chat-desc-tutor{
  margin-right: 10px;
  display: flex;
  flex-direction: column;
}
.stud-chat{
  display: flex;
}
.tutor-chat{
  margin-left: auto;
  display: flex;
}
.stud-chat{
  margin-right: auto;
  margin-left: 30px;
}
.chat-container{
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 70px;
  width: 110%;
}
.footer-container{
  position: fixed;
  width: 80%;
  top: 85%;
  left: 18%;
  background-color: white;
  padding: 20px;
}
.header{
  display: flex;
  border-bottom: 1px solid #d0d7de;
  padding-bottom: 5px;
  position: fixed;
  width: 81%;
}
.header-avatar{
  width: 40px;
  height: 40px;
}
.header-name{
  margin: auto 15px;
  font-size: 15px;
  font-weight: bold;
}
.course-desc{
  margin: auto auto;
  font-size: 15px;
  font-weight: bold;
  text-transform: none;
  color: #FF7426;
}
.avail-btn{
  text-transform: none;
  color: green;
  font-weight: bold;
  margin-left: 10px;
  margin-top: -10px;
  font-size: 10px;
}
.profile-btn{
  margin-left: 20px;
  text-transform: none;
  font-weight: bold;
  font-size: 13px;
}
`

export default ConnectChat