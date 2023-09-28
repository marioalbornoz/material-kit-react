import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';



export default function CagesForms(){
    return (
        <Stack
          component="form"
          sx={{
            width: '25ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue="Normal"
            variant="filled"
          />
        </Stack>
      );
}
