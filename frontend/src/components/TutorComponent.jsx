import React from 'react'
import { Box, Button, Card, Rating, Typography, CardContent, IconButton, Grid } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import TeacherImg from "../assets/Teacher-one.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const TutorComponent = () => {
  const navigate = useNavigate();
  const handleConnectTutor = () => {
    const tutorId = 'xyz'
    navigate(`/learn/${tutorId}`);
  }
  return (
    <Root>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card className='grid-cards'>
            <CardContent>
              <Box className='grid-items'>
                <img src={TeacherImg} alt='tutor' className='tutor-img' />
                <Box className='header'>
                  <Typography className='tutor-name'>Matthew E. McNatt</Typography>
                  <Typography className='tutor-prof'>Professor @George Brown College</Typography>
                  <Box className='rating-header'>
                    <Rating value={4} readOnly size='small' className='rating' />
                    <Typography className='rating-stud'>4000+ Learners</Typography>
                  </Box>
                  <Button className='free-paid-btn'>Free</Button>
                </Box>
                <Box className='footer-one'>
                  <Typography className='course-name'>React.js</Typography>
                  <IconButton className='icon-btn'>
                    <LinkedInIcon className='linkedin' />
                  </IconButton>
                </Box>
                <Box className='footer-two'>
                  <Button className='timer' startIcon={<AccessTimeIcon />}>22h 30min</Button>
                  <Button className='subs' startIcon={<SubscriptionsIcon />}>150 Learners</Button>
                </Box>
                <Button className='connect' startIcon={<PreviewIcon />} onClick={handleConnectTutor}>View</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Root>
  )
}

const Root = styled.div`
  .grid-cards{
    padding: 0px;
    border-radius: 15px;
    margin-top: 10px;
  }
  .grid-items{
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .tutor-img{
    width: 300px;
    height: 170px;
    border-radius: 15px;
    margin: auto;
  }
  .header{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: auto;
    border-bottom: 2px dashed #d0d7de;
    padding: 0px 0px 10px 0px;
    width: 90%;
  }
  .tutor-name{
    font-size: 15px;
    font-weight: bold;
    color: #4D2C5E;
    margin-top: 10px;
  }
  .tutor-prof{
    font-size: 12px;
    color: #868686;
    font-weight: bold;
  }
  .rating-header{
    display: flex;
    margin-top: 10px;
  }
  .rating{
    margin-left: -4px;
  }
  .rating-stud{
    color: #868686;
    font-size: 10px;
    font-weight: bold;
    margin: 3px 10px;
  }
  .free-paid-btn{
    color:  #5d05a6;
    text-transform: none;
    font-weight: bold;
    margin-right: auto;
    width: 50px;
    font-size: 15px;
    padding: 0px;
    margin-top: 5px;
    margin-left: -16px;
  }
  .footer-one{
    margin-top: 10px;
    margin-left: 13px;
    display: flex;
  }
  .course-name{
    color: #FF7426;
    font-weight: bold;
    font-size: 16px;
  }
  .icon-btn{
    margin-left: auto;
    margin-top: -8px;
    margin-right: 5px;
  }
  .linkedin{
    color: #0565a6;
  }
  .footer-two{
    display: flex;
  }
  .timer{
    text-transform: none;
    font-weight: bold;
    color: #ACACAC;
    margin-left: 6px;
  }
  .subs{
    text-transform: none;
    font-weight: bold;
    color: #ACACAC;
    margin-left: 20px;
  }
  .connect{
    background-color: #FF7426;
    color: white;
    font-weight: bold;
    text-transform: none;
    width: 130px;
    border-radius: 20px;
    margin: 20px auto 0px auto;
    &:hover{
      background-color: #8c3a0d;
    }
  }
`
export default TutorComponent;