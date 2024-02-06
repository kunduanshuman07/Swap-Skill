import React from 'react'
import { ListItem, Typography, ListItemIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
const DrawerItem = ({ drawerTabState, setDrawerTabState, icon, text }) => {
    return (
        <Root>
            <ListItem
                className='list-item'
                onClick={() => setDrawerTabState(text)}
            >
                <ListItemIcon>
                    <IconButton className='icon-btn' style={{ color: drawerTabState === text && "#FF7426" }}>{icon}</IconButton>
                </ListItemIcon>
                <Typography className='text' style={{ color: drawerTabState === text && "#FF7426" }}>{text}</Typography>
            </ListItem>
        </Root>
    )
}

const Root = styled.div`
    .list-item{
        display: flex;
        // flex-direction: column;
    }
    .icon-btn{
        color: white;
        margin: auto;
    }
    .text{
        color: white;
        font-weight: bold;
        font-size: 15px;
        margin-left: 10px;
    }
`

export default DrawerItem