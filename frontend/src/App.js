import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/home";
import LoginPage from "./pages/loginPage/login";

function App() {
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
