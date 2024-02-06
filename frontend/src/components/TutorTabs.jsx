import React from 'react'
import { Box, Button } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styled from 'styled-components';
const TutorTabs = ({ tabState, setTabState }) => {
  return (
    <Root>
      <Box className='tab-header'>
        <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'CourseDescription' ? '#FF7426' : 'white' }} onClick={() => setTabState('CourseDescription')}>Course Description</Button>
        <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'PersonalInfo' ? '#FF7426' : 'white' }} onClick={() => setTabState('PersonalInfo')}>Tutor Info</Button>
        <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'Experience' ? '#FF7426' : 'white' }} onClick={() => setTabState('Experience')}>Experience</Button>
        <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'TopSkills' ? '#FF7426' : 'white' }} onClick={() => setTabState('TopSkills')}>Top Skills</Button>
        <Button startIcon={<FiberManualRecordIcon />} className='tab-btns' style={{ color: tabState === 'Reviews' ? '#FF7426' : 'white' }} onClick={() => setTabState('Reviews')}>Reviews</Button>
      </Box>
    </Root>
  )
}


const Root = styled.div`
  .tab-btns{
    text-transform: none;
    color: white;
    margin: 5px 10px;
  }
  .tab-header{
    display: flex;
    margin: 5px 42px;
  }
  
`


export default TutorTabs