import * as React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Rating,
  Box,
  Container,
} from "@mui/material";

function Login() {
  const [ratingValue, setRatingValue] = React.useState(2);
  const [userInput, setUserInput] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Rating:", ratingValue);
    console.log("User Input:", userInput);
    // Add your logic here to handle the form submission, e.g., sending data to the server
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          // marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Rating
            name="rating"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
          <TextField
            fullWidth
            id="user-input"
            label="Share your thoughts....."
            name="userInput"
            placeholder="Share your thoughts....."
            multiline
            rows={4}
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
