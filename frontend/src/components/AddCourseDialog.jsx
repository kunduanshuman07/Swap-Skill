import React from 'react'
import { Box, Button, TextField, Typography, Dialog, DialogContent, DialogTitle, Grid, InputLabel } from '@mui/material'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
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
const AddCourseDialog = ({ onCloseModal }) => {
    return (
        <>
            {ScrollbarStyles}
            <Dialog open fullWidth>
                <DialogTitle style={{ display: "flex", backgroundColor: "#252A40", color: "white" }}>
                    <Typography style={{ fontWeight: "bold", fontSize: "18px", margin: "auto 0px" }}>Add Course</Typography>
                    <Button onClick={onCloseModal} sx={{ marginLeft: "auto", textTransform: "none", color: "#FF7426", fontWeight: "bold" }}>Close</Button>
                </DialogTitle>
                <DialogContent>
                    <Root>
                        <Box className='container'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lineHeight={2.5}>
                                    <TextField variant='standard' placeholder='Course Title' fullWidth
                                        required
                                        sx={{
                                            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                border: "2px solid #d0d7de"
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} lineHeight={2.5}>
                                    <TextField variant='standard' placeholder='Duration' fullWidth
                                        required
                                        sx={{
                                            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                border: "2px solid #d0d7de"
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} lineHeight={2.5}>
                                    <TextField variant='standard' placeholder='Free or Paid' fullWidth
                                        required
                                        sx={{
                                            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                border: "2px solid #d0d7de"
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel className='labels' required>Key Points<span className='label-help'>(Maximum 10)</span></InputLabel>
                                    <Button className='add-skill' endIcon={<AddIcon />}>Add</Button>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", borderTop: "2px dashed #d0d7de", marginTop: "10px" }}>
                                    <Button className='cancel' variant='outlined'>Cancel</Button>
                                    <Button className='update' variant='contained'>Upload</Button>
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
    // margin-top: 10px;
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
    // margin-top: 10px;
}
.container{
    padding: 20px 10px 0px 10px;
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

export default AddCourseDialog
