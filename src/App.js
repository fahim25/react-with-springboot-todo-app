import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/fcCounter/Login";
import Welcome from "./components/fcCounter/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="welcome" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
