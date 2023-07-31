import React from 'react';
import { useState } from 'react';
import NavBarLogged from '../navbar/NavBarLogged';
import {
  Box, ImageList,
} from "@mui/material";
import {
  Container,
  Typography,
  TextField,
  IconButton,Button, Grid, styled
} from "@mui/material";
import itineray from '../../assets/itinerary.jpg';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayFns } from '@mui/lab/AdapterDayFns'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { flexbox } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './styles.css';
// import { Button, Grid, makeStyles } from '@material-ui/core';


const SubmitButton = styled(Button)({
  backgroundColor: 'black',
  color: 'white',
  width: '100%',
  borderRadius: '1rem',
});


const Itinerary = () => {
  const [textFields, setTextFields] = useState(['']);

  const handleAddTextField = () => {
    setTextFields((prevTextFields) => [...prevTextFields, '']);
  };

  const handleTextFieldChange = (index, value) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index] = value;
    setTextFields(updatedTextFields);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };


  return (
     <Box className="Hello" sx={{display: 'flex', justifyContent:'center',  p:20,height: '100vh', backgroundAttachment: 'fixed', width: '100vw', backgroundImage: `url(${itineray})`, backgroundRepeat:"no-repeat" ,backgroundSize:'cover'}}>
      <Box sx={{fontWeight: 'bold'}}>
        <Typography variant="h1" gutterBottom sx={{color: 'white'}}>
          The new way to plan your next trip
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color: 'white'}}>
          Create a fully customized day-by-day for free.
        </Typography>
      </Box>
      <form id='form' onSubmit={handleSubmit}>
      <Typography variant="h3" gutterBottom sx={{display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>
        Itinerary planner
      </Typography>
      <Grid container spacing={2}>
        {textFields.map((textFieldValue, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              fullWidth
              value={textFieldValue}
              onChange={(e) => handleTextFieldChange(index, e.target.value)}
              label={`Enter destination ${index + 1}`}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <IconButton color="primary" onClick={handleAddTextField}>
            <AddCircleOutlineIcon />
            <Typography>
              Add destintion
            </Typography>
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['SingleInputDateRangeField']}>
              <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
        <SubmitButton type="submit">Submit</SubmitButton>
        </Grid>
        {/* You can add more form fields here if needed */}
      </Grid>
      {/* Add your submit button or other form elements here */}
    </form>
      </Box> 
  )
}


export default Itinerary;