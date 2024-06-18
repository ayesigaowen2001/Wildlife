import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard"; // Assuming you have a Dashboard component
import { AnimalProvider } from "./Data/StateManagement/animalContext";

const App: React.FC = () => {
  return (
    <AnimalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />{" "}
          {/* Redirect root to login */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AnimalProvider>
  );
};

export default App;
