import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
const CourseDescription = () => {
    return (
        <Root>
            <Box className='desc-container'>                
                <Box className='desc-content'>
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
                </Box>
                <Box className='desc-header'>
                    <Button className='desc-btns' startIcon={<AccessTimeIcon />}>Time Duration: 23h 5mins</Button>
                    <Button className='desc-btns' startIcon={<SubscriptionsIcon />}>Learners joined: 4553</Button>
                </Box>
            </Box>
        </Root>
    )
}


const Root = styled.div`
.desc-con-text{
    font-size: 12px;
    color: white;
    margin-top: 5px;
}
.desc-container{
    display: flex;
}
.desc-header{
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: #3D3F54;
    padding: 20px;
    border-radius: 20px;
    height: 130px;
}
.desc-btns{
    margin: auto;
    text-transform: none;
    font-weight: bold;
    font-size: 15px;
    color: #20ebfa;
}
.desc-content{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: #3D3F54;
    padding: 20px;
    border-radius: 20px;
    margin-top: 20px;
}
.content-header{
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-align: center;
}
`


export default CourseDescription