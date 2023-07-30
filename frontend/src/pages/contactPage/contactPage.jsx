import React from 'react';
import NavBarLogged from '../navbar/NavBarLogged';
import {
  Box, ImageList,
} from "@mui/material";
import {
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import FlexBetween from '../../components/FlexBetween';
import WidgetWrapper from '../../components/WidgetWrapper';
import bus from '../../assets/bus.png';
import axios from 'axios';
import { useNavigate } from 'react-router';




const ContactPage = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // const bodyData = JSON.stringify(event.currentTarget);
    console.log(data);

    // axios({
    //     method: "post",
    //     url: "http://localhost:5000/api/contacts",
    //     data: data,
    //     headers: { "Content-Type": "application/json",
    //     'Access-Control-Allow-Origin': '*',
    //     },
    //   })
    //     .then(function (response) {
    //       //handle success
    //       console.log(response);
    //       navigate('/home');
    //     })
    //     .catch(function (response) {
    //       //handle error
    //       console.log(response);
    //     });

        console.log({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
        });
      };

  return (
    <Box sx={{display: 'inline-block' ,width: '100%', height: '100%', justifyContent: 'center'}}>
    <NavBarLogged/>
    
    <Box sx={{ display: 'flex', flexDirection: 'column', maxwidth: '100%', mt: 10}}>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant="h2" gutterBottom>
          Get in touch with Us
        </Typography>
      </Box>
      <Box  component="form" noValidate onSubmit={handleSubmit} 
       sx={{ display: 'flex', justifyContent: 'center',boxShadow: 5, maxwidth: '100%', ml:30, mr:30}}
       >
        <Box>
            <Box
              sx={{ width: 439, height: 350 }}
              variant="quilted"
            >
            <img
                    alt="Contact us"
                    src={bus}
                    width="100%"
                  />
            </Box>
        </Box>
        <Box sx={{pr: 1}}>
          <TextField
          label="Name"
          placeholder="Your name"
          name='name'
          required
          fullWidth
          sx={{my: 1}}
        />
        <TextField
          label="Email"
          placeholder="Your email address"
          name='email'
          required
          fullWidth
          sx={{my: 1}}
        />
        <TextField
         rows={5}
          label="Message"
          placeholder="Your message"
          name='message'
          required
          fullWidth
          multiline
          sx={{my: 1}}
        />
        <Button variant="contained" type="submit" color="primary" sx={{my: 1}}>
          Send Message
        </Button>
        
      </Box>
      </Box>
      
    </Box>
    
        
    </Box>
    
  )

}

export default ContactPage;