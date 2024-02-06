import { Box, IconButton, Avatar, Typography, TextField, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileDrawer from "../components/ProfileDrawer";
import BasicInfo from '../components/BasicInfo';
import Account from '../components/Account';
import Privacy from '../components/Privacy';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
const AccountProfilePage = () => {
  const [profileTab, setProfileTab] = useState('basicinfo');
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Root>
      <Box className='container'>
        <Box className='top-container'>
          <InputLabel For='fileInput' style={{marginTop: "20px"}}>
            <IconButton color='inherit' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} component='span'>
              <Avatar className='avatar-style'>
                {isHovered && <CameraEnhanceIcon />}
              </Avatar>
            </IconButton>
          </InputLabel>
          <TextField
            id='fileInput'
            type='file'
            style={{ display: 'none' }}
          />
          <Box className='names'>
            <Typography className='name'>Anshuman Kundu</Typography>
            <Typography className='username'>IF username: kundu_anshuman</Typography>
          </Box>
        </Box>
        <Box className='bottom-container'>
          <Box className='bottom-left-container'>
            <ProfileDrawer profileTab={profileTab} setProfileTab={setProfileTab} />
          </Box>
          <Box className='tabs'>
            {profileTab === 'basicinfo' && <BasicInfo />}
            {profileTab === 'account' && <Account />}
            {profileTab === 'privacy' && <Privacy />}
          </Box>
        </Box>
      </Box>
    </Root>
  );
};


const Root = styled.div`
  .container{
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .top-container{
    width: 100%;
    height: 250px;
    background-color: #01264a;
    display: flex;
  }
  .bottom-container{
    display: flex;
    width: 95%;
  }
  .bottom-left-container{
    width: 30%;
  }
  .tabs{
    width: 70%;
  }
  .avatar-style{
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-top: 50px;
    margin-left: 130px;
  }
  .names{
    display: flex;
    flex-direction: column;
  }
  .name{
    margin-top: 120px;
    color: white;
    margin-left: 80px;
    font-size: 27px;
  }
  .username{
    margin-left: 80px;
    color: #a6a5a4;
    font-size: 14px;
  }
`

export default AccountProfilePage