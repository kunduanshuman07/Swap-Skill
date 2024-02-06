import React from 'react'
import { Box, Button, TextField, Typography, Dialog, DialogContent, DialogTitle, Grid, InputLabel, InputAdornment, IconButton } from '@mui/material'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GlobalStyles } from "@mui/system";
const ScrollbarStyles = (
    <GlobalStyles
        styles={{
            '*::-webkit-scrollbar': {
                width: '0.3em'
            },
            '*::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: '#252A40',
            }
        }}
    />
);
const EditProfileDialog = ({ onCloseModal }) => {
    return (
        <>
            {ScrollbarStyles}
            <Dialog open fullWidth>
                <DialogTitle style={{ display: "flex", backgroundColor: "#252A40", color: "white" }}>
                    <Typography style={{ fontWeight: "bold", fontSize: "18px", margin: "auto 0px" }}>Edit your Tutor Profile</Typography>
                    <Button onClick={onCloseModal} sx={{ marginLeft: "auto", textTransform: "none", color: "#FF7426", fontWeight: "bold" }}>Close</Button>
                </DialogTitle>
                <DialogContent>
                    <Root>
                        <Box className='container'>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <InputLabel className='labels' required>Relevant Experience <span className='label-help'>(Maximum 4)</span></InputLabel>
                                    <Button className='add-skill' endIcon={<AddIcon />}>Add Experience</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className='labels' required>Primary Skills & Frameworks <span className='label-help'>(Maximum 4)</span></InputLabel>
                                    <Button className='add-skill' endIcon={<AddIcon />}>Add Skill</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className='labels' required>Secondary Skills & Frameworks <span className='label-help'>(Maximum 4)</span></InputLabel>
                                    <Button className='add-skill' endIcon={<AddIcon />}>Add Skill</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className='labels' required>About <span className='label-help'>(Maximum 100 words)</span></InputLabel>
                                    <TextField variant='standard' placeholder='About' fullWidth multiline/>
                                </Grid>
                                <Grid item xs={12} lineHeight={2.5}>
                                    <InputLabel className='labels' required>Social Links</InputLabel>
                                    <TextField variant='standard' placeholder='Linkedin' fullWidth
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton size='small'>
                                                        <LinkedInIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        sx={{
                                            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                border: "2px solid #d0d7de"


                                            }
                                        }}
                                    />
                                    <TextField variant='standard' placeholder='Github' fullWidth
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton size='small'>
                                                        <GitHubIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField variant='standard' placeholder='Email' fullWidth
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton size='small'>
                                                        <EmailIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex" }}>
                                    <Button className='cancel' variant='outlined'>Cancel</Button>
                                    <Button className='update' variant='contained'>Update</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Root>
                </DialogContent>
            </ Dialog>
        </>
    )
}

const Root = styled.div`
.cancel{
    margin-right: auto;
    text-transform: none;
    font-weight: bold;
    color: #FF7426;
    border: 1px solid #FF7426;
}
.update{
    margin-left: auto;
    text-transform: none;
    font-weight: bold;
    background-color: #FF7426;
    color: white;
    &:hover{
        background-color: #8c3a0d;
    }
}
.container{
    padding: 20px 10px;
}
.add-skill{
    text-transform: none;
    font-weight: bold;
    color: #FF7426;
}
    .labels{
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 5px;
    }
`

export default EditProfileDialog
