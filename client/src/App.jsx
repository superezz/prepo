import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./redux/userSlice.js";

export const ServerURL = "http://localhost:8000";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const result = await axios.get(ServerURL + "/api/user/current-user", {
          withCredentials: true,
        });
        dispatch(setUserInfo(result.data.user));
      } catch (error) {
        console.error("Error fetching current user:", error);
        dispatch(setUserInfo(null)); // Clear user info on error
      }
    };

    getCurrentUser();
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
