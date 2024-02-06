import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import styled from 'styled-components';
const SkillTutor = () => {
  return (
    <Root>
      <Box className='skills'>
        <Typography className='primary-skill-header'>Primary Skills & Frameworks</Typography>
        <Box className='primary-skills'>
          <Button className='skill'>React.js</Button>
          <Button className='skill'>Node.js</Button>
          <Button className='skill'>Express</Button>
          <Button className='skill'>SQL</Button>
        </Box>
        <Typography className='sec-skill-header'>Secondary Skills & Frameworks</Typography>
        <Box className='secondary-skills'>
          <Button className='skill'>Python</Button>
          <Button className='skill'>Django</Button>
          <Button className='skill'>Vue.js</Button>
          <Button className='skill'>C++</Button>
        </Box>
      </Box>
    </Root>
  )
}


const Root = styled.div`
.skill{
  color: white;
  font-weight: bold;
  text-transform: none;
}
.sec-skill-header{
  border-bottom: 1px solid #FF7426;
  width: 210px;
  font-size: 14px;
  color: white;
  margin-top: 20px;
  margin-left: 50px;
}
.primary-skill-header{
  border-bottom: 1px solid #FF7426;
  width: 190px;
  font-size: 14px;
  color: white;
  margin-top: 20px;
  margin-left: 50px;
}
.secondary-skills{
  background-color: #3D3F54;
  color: white;
  padding: 20px;
  width: 90%;
  margin: auto;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
}
.primary-skills{
  background-color: #3D3F54;
  color: white;
  padding: 20px;
  border-radius: 20px;
  width: 90%;
  margin: 20px auto;
}
.skills{
  display: flex;
  flex-direction: column;
}
  
`


export default SkillTutor