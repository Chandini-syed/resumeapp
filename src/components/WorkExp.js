import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function BasicTextFields() {
 return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Job details </h1>
      <TextField id="outlined-basic" label="Enter job details" variant="outlined" />
      <TextField id="outlined-basic" label="Enter organisation name" variant="outlined" />
    </Box>
  );
 }
