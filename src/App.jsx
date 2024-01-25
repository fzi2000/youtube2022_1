import React, { useContext } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import './Style.scss';
import Chat from "./components/Chat";
// import VideoPage from "./components/VideoPage";
import Video from "./components/Video";

function App() {

  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) return <Navigate to="/login" />
    return children;
  }

  return <Router>
    {/* <Switch> */}
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/video" element={<Video />} />
      <Route path="/chat" component={<Chat/>} />
    </Routes>
    {/* </Switch> */}
  </Router>;
}

export default App;
