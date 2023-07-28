import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/home";
import LoginPage from "./pages/loginPage/login";
import RegisterPage from "./pages/loginPage/register";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {

  const theme = useMemo(() => createTheme(themeSettings('light')));
  const isAuth = Boolean(useSelector((state) => state.token));


  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
