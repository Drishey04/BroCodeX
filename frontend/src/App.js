import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./pages/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
