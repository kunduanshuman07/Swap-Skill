import { Box, Button} from '@mui/material';
import React, { useState } from 'react'
import PrefDialog from '../components/PrefDialog';
import styled from 'styled-components';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import TutorComponent from '../components/TutorComponent';
const LearnPage = () => {
  const [prefDialog, setPrefDialog] = useState(true);
  return (
    <Root>
      {prefDialog && <PrefDialog setPrefDialog={setPrefDialog} />}
      <Box className='top-container'>
        <Button className='edit-skill' startIcon={<DriveFileRenameOutlineIcon/>}>Edit Skill Preferrence</Button>
        <Button className='filter' startIcon={<FilterAltIcon/>}>Filters</Button>
        <Button className='sort' startIcon={<SwapVertIcon/>}>Sort</Button>
      </Box>
      <TutorComponent/>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  .top-container{
    display: flex;
    margin-left: 0px;
    border-bottom: 2px solid #d0d7de;

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
  
`

export default LearnPage

