import { Box, IconButton, Avatar, Typography, TextField, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileDrawer from "../components/ProfileDrawer";
import BasicInfo from '../components/BasicInfo';
import Account from '../components/Account';
const AccountProfilePage = () => {
  const [profileTab, setProfileTab] = useState('basicinfo');
  return (
    <Root>
      <Box className='container'>
        <Box className='top-container'>
          <InputLabel For='fileInput' style={{marginTop: "20px"}}>
            <IconButton color='inherit' component='span'>
              <Avatar className='avatar-style'>
                AK
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
    width: 112.9%;
    height: 250px;
    background-color: #01264a;
    display: flex;
    margin-left: -76px;
    margin-top: -80px;
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
    margin-top: 70px;
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