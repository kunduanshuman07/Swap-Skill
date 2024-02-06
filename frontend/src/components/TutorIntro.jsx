import React from 'react'
import { Typography, Avatar, Rating, Button, Box } from "@mui/material";
import AvatarImg from "../assets/Teacher-one.jpg";
import HubIcon from '@mui/icons-material/Hub';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const TutorIntro = ({tutorId}) => {
  const navigate = useNavigate();
  const handleConnect = () => {
    navigate(`/learn/${tutorId}/connect`)
  }
  return (
    <Root>
      <Box className='container'>
        <Avatar className='avatar' src={AvatarImg} alt='tutor' />
        <Typography className='tutor-name'>Matthew E. McNatt</Typography>
        <Typography className='tutor-prof'>Professor @George Brown College</Typography>
        <Rating value={4} size='small' readOnly className='rating' />
        <Typography className='course-name'>React.js</Typography>
        <Button className='connect' startIcon={<HubIcon />} onClick={handleConnect}>Connect</Button>
      </Box>
    </Root>
  )
}


const Root = styled.div`
.container{
  display: flex;
  flex-direction: column;
}
.avatar{
  width: 100px;
  height: 100px;
  margin: 0px auto;
}
.tutor-name{
  font-size: 16px;
  font-weight: bold;
  text-align:center;
  margin-top: 10px;
}
.course-name{
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #53068f;
}
.tutor-prof{
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #868686;
}
.rating{
  margin: 10px auto;
}
.linkdin{
  color: white;
}
.github{
  color: white;
}
.connect{
  background-color: #FF7426;
  color: white;
  font-weight: bold;
  text-transform: none;
  width: 130px;
  border-radius: 20px;
  margin: 10px auto 0px auto;
  &:hover{
    background-color: #8c3a0d;
  }
}
  
`


export default TutorIntro