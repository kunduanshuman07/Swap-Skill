import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import styled from 'styled-components';

const BasicInfo = () => {
  const [editMode, setEditMode] = useState({});
  const handleSaveEdit = (key) => {
    setEditMode((prevState) => ({ ...prevState, [key]: false }));
  }
  const handleCancelEdit = (key) => {
    setEditMode((prevState) => ({ ...prevState, [key]: false }));
  }
  const handleEdit = (key) => {
    setEditMode((prevState) => ({ ...prevState, [key]: true }));
  };
  const headersData = [
    { key: 'name', label: 'Name', defaultValue: 'Anshuman Kundu' },
    { key: 'gender', label: 'Gender', defaultValue: 'Male' },
    { key: 'age', label: 'Age', defaultValue: '23' },
    { key: 'location', label: 'Location', defaultValue: `Ranchi` },
    { key: 'education', label: 'Education', defaultValue: 'NIT Bhopal' },
    { key: 'employment', label: 'Employment', defaultValue: 'Employed' },
  ];

  // const educationOptions = [
  //   { value: 'Below High School', label: 'Below High School' },
  //   { value: 'High School', label: 'High School' },
  //   { value: 'Undergraduate', label: 'Undergraduate' },
  //   { value: 'Graduate', label: 'Graduate' },
  // ];

  // const employmentOptions = [
  //   { value: 'Unemployed', label: 'Unemployed' },
  //   { value: 'Selfemployed', label: 'Selfemployed' },
  //   { value: 'Employed', label: 'Employed' },
  // ];

  return (
    <Root>
      <Box className='container'>
        <Typography className='header'>Basic Info</Typography>
        {headersData.map((header) => (
          <Box key={header.key} className='basic-info-list'>
            <Typography className='field-header'>{header.label}</Typography>
            {editMode[header.key] ? <Box className='edit-box'>
              <TextField
                placeholder={`Your ${header.label.toLowerCase()}`}
                className='text-fields'
                size='small'
              />
              <Box className='actions'>
                <Button
                  className='save-btn'
                  onClick={() => handleSaveEdit(header.key)}
                  variant='contained'
                >
                  Save
                </Button>
                <Button
                  className='cancel-btn'
                  onClick={() => handleCancelEdit(header.key)}
                  variant='contained'
                  style={{ backgroundColor: '#d7e7fa' }}
                >
                  Cancel
                </Button>
              </Box>
            </Box> :
              <>
                <Typography className='field-details'>{header.defaultValue}</Typography>
                <Button className='edit-btn' onClick={() => handleEdit(header.key)}>
                  Edit
                </Button>
              </>
            }
          </Box>
        ))}
      </Box>
    </Root>
  );
};

const Root = styled.div`
    .container{
        width: 100%;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
        margin-top: -30px;
        background-color: white;
        border-radius: 5px;
        margin-left: -60px;
        padding: 10px 20px 10px 20px;
        display: flex;
        flex-direction: column;
        height: 400px;
        margin-bottom: 20px;
    }
    .header{
      font-weight: bold;
      color: #444444;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .basic-info-list{
      display: flex;
      border-bottom: 1px solid #d7e7fa;
      margin-bottom: 10px;
    }
    .field-header{
      margin-top: 10px;
      width: 240px;
      font-size: 14px;
    }
    .field-details{
      margin-top: 10px;
      width: 540px;
      font-size: 14px;
    }
    .edit-btn{
      text-transform: none;
    }
    .edit-box{
      display: flex;
      flex-direction: column;
      margin-left: -30px;
    }
    .actions{
      display: flex;
      margin-bottom: 5px;
      margin-left: -18px;
    }
    .text-fields{
      width: 300px;
      margin-bottom: 5px;
      margin-left: -18px;
    }
    .save-btn{
      text-transform: none;
      backgrund-color: #0072e5;
      height: 25px;
      font-size: 12px;
      font-weight: bold;
    }
    .cancel-btn{
      text-transform: none;
      color: #444444;
      height: 25px;
      margin-left: 10px;
      font-size: 12px;
      font-weight: bold;
    }
`

export default BasicInfo