import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import axios from "axios";
import { useEffect } from "react";

export const ServerURL = "http://localhost:8000";

function App() {
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const result = await axios.get(ServerURL + "/api/user/current-user", {
          withCredentials: true,
        });
        console.log("Current user data:", result.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    getCurrentUser();
  }, []); 
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
