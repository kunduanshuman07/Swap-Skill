import { Box, Button, Card, Rating, Typography, CardContent, Grid} from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddCourseDialog from './AddCourseDialog';
const TutorCourses = () => {
  const [addCourseModal, setAddCourseModal] = useState(false);
  const handleClose = () => {
    setAddCourseModal(false);
  }
  return (
    <Root>
      <Box className='course-container'>
        <Box className='top-container'>
          <Button className='edit-skill' startIcon={<AddIcon />} onClick={()=>setAddCourseModal(true)}>Add New Course</Button>
          <Button className='filter' startIcon={<FilterAltIcon />}>Filter</Button>
          <Button className='sort' startIcon={<SwapVertIcon />}>Sort</Button>
        </Box>
        <Grid container spacing={2} className='grid-cont'>
          <Grid item xs={12}>
            <Card className='grid-cards'>
              <CardContent className='card-cont'>
                <Box className='grid-items'>
                  <Box className='header'>
                    <Box className='rating-header'>
                      <Rating value={4} readOnly size='small' className='rating' />
                    </Box>
                    <Button className='free-paid-btn'>Free</Button>
                  </Box>
                  <Box className='footer-one'>
                    <Typography className='course-name'>React.js</Typography>
                  </Box>
                  <Box className='status'>
                    <Button className='status-btn' variant='outlined'>Status: Test Approval Stage</Button>
                    <Typography className='rating-stud'>Upload Date : 06.10.2024</Typography>
                  </Box>
                </Box>
                <Box className='content-desc'>
                  <Typography className='content-header'>Key topics covered</Typography>
                  <Typography className="desc-con-text">○ Setting up a React development environment</Typography>
                  <Typography className="desc-con-text">○ Understanding React components and their lifecycle</Typography>
                  <Typography className="desc-con-text">○ Managing state and handling events in React applications</Typography>
                  <Typography className="desc-con-text">○ Routing and navigation with React Router</Typography>
                  <Typography className="desc-con-text">○ Working with forms and handling user input</Typography>
                  <Typography className="desc-con-text">○ Fetching data from APIs and integrating it into your React applications</Typography>
                  <Typography className="desc-con-text">○ State management using Redux for larger-scale applications</Typography>
                  <Typography className="desc-con-text">○ Testing React components for reliability and maintainability</Typography>
                  <Typography className="desc-con-text">○ Deploying React applications to production environments</Typography>
                  <Typography className="desc-con-text">○ Deploying React applications to production environments</Typography>
                </Box>
                <Box className='desc-header'>
                  <Button className='desc-btns' startIcon={<AccessTimeIcon />} variant='outlined'>Time Duration: 23h 5mins</Button>
                  <Button className='desc-btns' startIcon={<SubscriptionsIcon />} variant='outlined'>Learners joined: 4553</Button>
                  <Box className='actions'>
                    <Button className='edit' startIcon={<EditIcon />}>Edit</Button>
                    <Button className='delete' startIcon={<DeleteIcon />}>Delete</Button>
                  </Box>
                  <Button className='reviews' startIcon={<ReviewsIcon />}>Click to view reviews</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className='grid-cards'>
              <CardContent className='card-cont'>
                <Box className='grid-items'>
                  <Box className='header'>
                    <Box className='rating-header'>
                      <Rating value={4} readOnly size='small' className='rating' />
                    </Box>
                    <Button className='free-paid-btn'>Free</Button>
                  </Box>
                  <Box className='footer-one'>
                    <Typography className='course-name'>React.js</Typography>
                  </Box>
                  <Box className='status'>
                    <Button className='status-btn' variant='outlined'>Status: Test Approval Stage</Button>
                    <Typography className='rating-stud'>Upload Date : 06.10.2024</Typography>
                  </Box>
                </Box>
                <Box className='content-desc'>
                  <Typography className='content-header'>Key topics covered</Typography>
                  <Typography className="desc-con-text">○ Setting up a React development environment</Typography>
                  <Typography className="desc-con-text">○ Understanding React components and their lifecycle</Typography>
                  <Typography className="desc-con-text">○ Managing state and handling events in React applications</Typography>
                  <Typography className="desc-con-text">○ Routing and navigation with React Router</Typography>
                  <Typography className="desc-con-text">○ Working with forms and handling user input</Typography>
                  <Typography className="desc-con-text">○ Fetching data from APIs and integrating it into your React applications</Typography>
                  <Typography className="desc-con-text">○ State management using Redux for larger-scale applications</Typography>
                  <Typography className="desc-con-text">○ Testing React components for reliability and maintainability</Typography>
                  <Typography className="desc-con-text">○ Deploying React applications to production environments</Typography>
                  <Typography className="desc-con-text">○ Deploying React applications to production environments</Typography>
                </Box>
                <Box className='desc-header'>
                  <Button className='desc-btns' startIcon={<AccessTimeIcon />} variant='outlined'>Time Duration: 23h 5mins</Button>
                  <Button className='desc-btns' startIcon={<SubscriptionsIcon />} variant='outlined'>Learners joined: 4553</Button>
                  <Box className='actions'>
                    <Button className='edit' startIcon={<EditIcon />}>Edit</Button>
                    <Button className='delete' startIcon={<DeleteIcon />}>Delete</Button>
                  </Box>
                  <Button className='reviews' startIcon={<ReviewsIcon />}>Click to view reviews</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {addCourseModal && <AddCourseDialog onCloseModal={handleClose}/>}
    </Root>
  )
}

const Root = styled.div`
.reviews{
  text-transform: none;
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
  color: #8c3a0d;
}
.desc-header{
  margin: auto auto;
  display: flex;
  flex-direction: column;
  width: 30%;
}
.desc-btns{
  text-transform: none;
  font-size: 12px;
  font-weight: bold;
  margin: 5px auto;
}
.content-desc{
  margin: 10px 30px;
  background-color: #3D3F54;
  padding: 10px;
  border-radius: 20px;
  width: 50%;
}
.content-header{
  text-align: center;
  color: white;
  margin-bottom: 5px;
}
.desc-con-text{
  font-size: 10px;
  font-weight: bold;
  color: white;
}
.card-cont{
  display: flex;
}
.status{
    display: flex;
    flex-direction: column;
}
.status-btn{
    text-transform: none;
    margin: 10px auto 0px auto;
    color: black;
    font-weight: bold;
    border: 1px solid black;
}
    .course-container{
        // position: fixed;
        margin-left: 160px;
        margin-top: -20px;
        padding: 20px;
        width: 90%;
        cursor: pointer;
    }
    .grid-cards{
        margin-top: 10px;
    }
    .top-container{
        display: flex;
        width: 100%;
        
        background-color: white;
        border-radius: 20px;
      }
      .edit-skill{
        text-transform: none;
        font-weight: bold;
        color: #4D2C5E;
      }
      .filter{
        text-transform: none;
        font-weight: bold;
        color: #4D2C5E;
        margin-left: auto;
      }
      .sort{
        text-transform: none;
        font-weight: bold;
        color: #4D2C5E;
        margin-left: 20px;
      }
      .grid-container{
        padding-top: 15px;
      }
      .grid-cards{
        padding: 0px;
        border-radius: 15px;
      }
      .grid-items{
        display: flex;
        flex-direction: column;
        cursor: pointer;
        width: 30%;
        margin: 30px auto;
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
        font-size: 14px;
        font-weight: bold;
        margin: 14px 10px;
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
        font-size: 18px;
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
      .actions{
        display: flex;
        margin: auto;
        border: 1px solid #d0d7de;
        border-radius: 20px;
        margin-top: 20px;
      }
      .edit{
        font-weight: bold;
        text-transform: none;
        color: #FF7426;
        border-radius: 20px;
        // margin-top: 10px;
        margin-left: 10px;
      }
      .delete{
        color: #575657;
        font-weight: bold;
        text-transform: none;
        border-radius: 20px;
        // margin-top: 10px;
        margin-left: 10px;
      }
`

export default TutorCourses