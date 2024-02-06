import { Box } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import PersonalInfoTutor from '../components/PersonalInfoTutor';
import ExperienceTutor from '../components/ExperienceTutor';
import SkillTutor from '../components/SkillTutor';
import ReviewsTutor from '../components/ReviewsTutor';
import TutorTabs from '../components/TutorTabs';
import TutorIntro from '../components/TutorIntro';
import { useParams } from 'react-router-dom';
import CourseDescription from '../components/CourseDescription';
const TutorPage = () => {
  const {tutorId} = useParams();
  const [tabState, setTabState] = useState('CourseDescription');
  return (
    <Root>
      <Box className='container'>
        <Box className='left-container'>
          <TutorIntro tutorId={tutorId}/>
        </Box>
        <Box className='right-container'>
          <TutorTabs tabState={tabState} setTabState={setTabState} />
          {tabState === 'CourseDescription' &&
            <CourseDescription />
          }
          {tabState === 'PersonalInfo' &&
            <PersonalInfoTutor />
          }
          {tabState === 'Experience' &&
            <ExperienceTutor />
          }
          {tabState === 'TopSkills' &&
            <SkillTutor />
          }
          {tabState === 'Reviews' &&
            <ReviewsTutor />
          }
        </Box>
      </Box>
    </Root>
  )
}

const Root = styled.div`
  .container{
    display: flex;
    width: 100%;
  }
  .right-container{
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: #252A40;
    border-radius: 20px;
    padding: 10px;
    min-height: 420px;
    max-height: 420px;
  }
  .left-container{
    width: 30%;
    display: flex;
    flex-direction: column;
  }
  
  
`

export default TutorPage