import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import InfoIcon from '@mui/icons-material/Info';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import { useNavigate } from 'react-router-dom';
const ColabPage = () => {
  const navigate = useNavigate();
  const handleJoin = () =>{
    const colabId = "xyz123"
    navigate(`/colab/${colabId}`)
  }
  return (
    <Root>
      <Box className='container'>
        <Typography className='header'>SSkill Code Editor</Typography>
        <Box className='cont'>
          <Box className='left'>
            <Button className='info-btn'>"Discover the freedom to code together or solo on our platform! Our collaborative coding space lets you work seamlessly with others on shared projects or focus independently on your coding goals. Join us to explore a dynamic and supportive coding community, where creativity knows no bounds!"</Button>
          </Box>
          <Box className='right'>
            <Typography className='colab-id'>Your Colab Id:</Typography>
            <Button className='id' startIcon={<FlipCameraAndroidIcon/>}>#xyz123</Button>
            <Button className='join' startIcon={<JoinFullIcon/>} onClick={handleJoin}>Join</Button>
            <Button className='share' startIcon={<InfoIcon/>} endIcon={<EmergencyShareIcon/>} variant='outlined'>You can share this code for code colab</Button>
          </Box>
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
.share{
  text-transform: none;
  font-size: 10px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
}
.join{
  background-color: #FF7426;
    color: white;
    margin: 20px auto;
    width: 100px;
    text-transform: none;
    &:hover{
      background-color: #8c3a0d;
    }
}
.id{
  background-color: #34eb6b;
  color: white;
  font-weight: bold;
  text-transform: none;
  &:hover{
    background-color: #34eb6b;
    color: white;
  }
  margin-top: 20px;
}
.cont{
  display: flex;
}
.colab-id{
  margin: 10px auto;
  color: white;
  font-weight: bold;
}
.info-btn{
  color: white;
  text-transform: none;
}
.right{
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
}
.left{
  width: 40%;
  background-color: #3D3F54;
  padding: 10px;
  border-radius: 20px;
  margin-left: 20px;
}
  .container{
    width: 60%;
    height: 400px;
    background-color: #252A40;
    border-radius: 20px;
    cursor: pointer;
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .header{
    color: #FF7426;
    font-weight: bold;
    margin: 20px auto;
  }
`

export default ColabPage