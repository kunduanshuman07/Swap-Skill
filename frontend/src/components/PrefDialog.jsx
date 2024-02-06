import React, { useState } from 'react'
import { Box, Button, TextField, Typography, Dialog, DialogContent } from '@mui/material'
import styled from 'styled-components'

const PrefDialog = ({setPrefDialog}) => {
   const [skill, setSkill] = useState('');
   const handleExplore = () => {
      setPrefDialog(false);
   }
   return (
      <Dialog open>
         <DialogContent>
            <Root>
               <Box className='container'>
                  <Box className='content'>
                     <Box className='header'>
                        <Typography className='header-text'>Add Skills</Typography>
                     </Box>
                     <Box className='skill-field'>
                        <TextField
                           variant='standard'
                           placeholder='Add skill'
                           label='Add skill'
                           size='small'
                           value={skill}
                           sx={{
                              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                 borderRadius: "10px",
                                 border: "2px solid #d0d7de"
                              }
                           }}
                           fullWidth
                           onChange={(e) => setSkill(e.target.value)}
                        />
                     </Box>
                     <Box className='next'>
                        <Button className='next-button' variant='contained' color='inherit' onClick={handleExplore}>Start Learning</Button>
                     </Box>
                  </Box>
               </Box>
            </Root>
         </DialogContent>
      </ Dialog>
   )
}

const Root = styled.div`
 .container{
    display: flex;
  }
  .content{
   display: flex;
   flex-direction: column;
   margin: auto;
   padding: 10px;
   border-radius: 20px;
  }
  .header-text{
   font-size: 25px;
   font-weight: bold;
   // border-bottom: 2px solid #d0d7de;
   text-align: center;
   padding-bottom: 10px;
  }
  .purpose-field{
   margin: 30px auto 0px auto;
   width: 300px;
  }
  .skill-field{
   margin: 20px auto 0px auto;
   width: 300px;
  }
  .next{
   margin: 40px auto 10px auto;
  }
  .next-button{
   font-weight: bold;
   border-radius: 10px;
   text-transform: none;
  }
`

export default PrefDialog
