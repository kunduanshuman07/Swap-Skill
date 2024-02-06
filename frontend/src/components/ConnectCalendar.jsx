import * as React from 'react';
import styled from 'styled-components';
import { Box, Button, Typography } from '@mui/material';
import Calendar from './Calendar';
import dayjs from 'dayjs';
import AddCardIcon from '@mui/icons-material/AddCard';
const ConnectCalendar = () => {
  const [value, setValue] = React.useState(dayjs());
  return (
    <Root>
      <Box className='calendar-container'>
        <Box className='calendar'>
          <Button endIcon={<AddCardIcon />} className='schedule-btn'>Schedule a Session</Button>
          <Calendar value={value} setValue={setValue} />
        </Box>
        <Box className='events'>
          <Box className='event-header'>
            <Typography className='event-header-text'>Scheduled Events</Typography>
          </Box>
          <Box className='event-content'>
            <Box className='event-content-header'>
              <Typography className='date-selection'>Selected Date : 01.02.2024 Thursday</Typography>
            </Box>
            <Box className='event-desc'>
              <Box className='event'>
                <Typography className='event-text'>React Hooks</Typography>
                <Typography className='event-time'>3:30 p.m - 4:30 p.m</Typography>
              </Box>
              <Box className='event'>
                <Typography className='event-text'>Javascript Basics</Typography>
                <Typography className='event-time'>4:30 p.m - 5:30 p.m</Typography>
              </Box>
              <Box className='event'>
                <Typography className='event-text'>Javascript Frontline</Typography>
                <Typography className='event-time'>5:30 p.m - 6:30 p.m</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Root>
  );
}

const Root = styled.div`
.calendar-container{
  display: flex;
  margin-left: 180px;
}
.event-text{
  color: white;
  font-size: 14px;
  font-weight: bold;
}
.event-time{
  color: white;
  font-size: 10px;
}
.event{
  display: flex;
  flex-direction: column;
  background-color: #3D3F54;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
}
.event-desc{
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;
}
.date-selection{
  font-size: 15px;
  font-weight: bold;
}
.event-content{
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  max-height: 370px;
  overflow: hidden;
}
.event-header-text{
  font-size: 20px;
  font-weight: bold;
  color: #FF7426;
}
.event-header{
  display: flex;
  flex-direction: column;
}
.events{
  width: 50%;
  margin-top: -60px;
  margin-left: 50px;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  border-radius: 20px;
  padding: 20px;
  min-height: 450px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.schedule-btn{
  font-size: 14px;
  font-weight: bold;
  text-transform: none;
  color: #252A40;
  background-color: white;
  padding: 0px 10px;
  margin: 0px auto;
  &:hover{
    color: white;
  }
}
.calendar{
  background-color: #252A40;
  border-radius: 20px;
  padding: 10px;
  color: white;
  margin-top: -20px;
  width: 50%;
  height: 370px;
  display: flex;
  flex-direction: column;
}
`

export default ConnectCalendar;
