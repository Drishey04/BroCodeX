import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage/home";
import LoginPage from "./pages/loginPage/login";

function App() {
  const theme = useMemo(() => createTheme(themeSettings("light")));
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
