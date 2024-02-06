import { Box, Button, Rating, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import styled from 'styled-components'
import PublishIcon from '@mui/icons-material/Publish';
const ConnectRating = () => {
    const [ratingValue, setRatingValue] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const handleSubmitReview = () => {
        console.log(ratingValue, reviewText);
    }
    return (
        <Root>
            <Box className='rate-container'>
                <Box className='rate-content'>
                    <Typography className='rate'>Drop a Rating !</Typography>
                    <Rating className='rating' value={ratingValue} onChange={(e)=> setRatingValue(e.target.value)}/>
                </Box>
                <Box className='review-content'>
                    <Typography className='write-review'>Write a Review !</Typography>
                    <TextField fullWidth size='small' multiline
                        value={reviewText}
                        onChange={(e)=>setReviewText(e.target.value)}
                        sx={{
                            '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                borderRadius: '10px',
                                border: "2px solid #d0d7de"
                            },
                        }}
                    />
                </Box>
                <Button className='submit' endIcon={<PublishIcon />} onClick={handleSubmitReview}>Submit</Button>
            </Box>
        </Root>
    )
}

const Root = styled.div`
    .rate-container{
        width: 400px;
        margin: -30px auto;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
        padding: 20px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    .rate-content{
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 20px;
    }
    .rate{
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
    }
    .rating{
        margin: auto;
    }
    .review-content{
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        padding: 10px;
        border-radius: 20px;
    }
    .write-review{
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
    }
    .submit{
        margin-top: 10px;
        color: #FF7426;
        font-weight: bold;
        text-transform: none;
        font-size: 20px;
    }
`

export default ConnectRating