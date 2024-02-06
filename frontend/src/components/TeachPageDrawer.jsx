import React from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SchoolIcon from '@mui/icons-material/School';
import DrawerItem from './DrawerItem';
const drawerWidth = 200;
const TeachPageDrawer = ({drawerTabState, setDrawerTabState}) => {
    return (
        <Root>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "#3D3F54", transition: 'width 350ms' },
                }}
            >
                <Toolbar />
                <Box sx={{ cursor: "pointer", marginTop: "20px" }}>
                    <List>
                        <DrawerItem setDrawerTabState={setDrawerTabState} icon={<HomeIcon />} text="Home" drawerTabState={drawerTabState}/>
                        <DrawerItem setDrawerTabState={setDrawerTabState} icon={<PermIdentityIcon />} text="Tutor" drawerTabState={drawerTabState}/>
                        <DrawerItem setDrawerTabState={setDrawerTabState} icon={<SchoolIcon />} text="Courses" drawerTabState={drawerTabState}/>
                    </List>
                </Box>
            </Drawer>
        </Root >
    )
}

const Root = styled.div`

`

export default TeachPageDrawer;

