import React from 'react'
import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import AppBarComponent from '../components/AppBarComponent'
import LearnPage from '../pages/LearnPage';
import TeachPage from '../pages/TeachPage';
import TutorPage from "../pages/TutorPage";
import ConnectPage from '../pages/ConnectPage';
import ColabPage from '../pages/ColabPage';
import ColabEditor from '../components/ColabEditor';
const Userlayout = () => {
  return (
    <Root>
      <AppBarComponent callFrom='UserLayout'/>
      <main style={{ width: "100%" }}>
        <div className='content'>
          <Routes>
            <Route path='/learn' element={<LearnPage />}/>
            <Route path='/learn/:tutorId' element={<TutorPage />}/>
            <Route path='/learn/:tutorId/connect' element={<ConnectPage />}/>
            <Route path='/teach' element={<TeachPage />}/>
            <Route path='/colab' element={<ColabPage />}/>
            <Route path='/colab/:colabId' element={<ColabEditor />}/>
          </Routes>
        </div>
      </main>
    </Root>
  )
}
const Root = styled.div`
    display: flex;
    .content{
        flexGrow: 1.5;
        padding: 70px;
        overflowX: auto;
        overflowY: hidden;
    }
`
export default Userlayout