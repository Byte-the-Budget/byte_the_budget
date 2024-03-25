import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext"; 
import Nav from "./Nav";
import Dashboard from "./Dashboard"; // Make sure to import Dashboard
import Overview from "./Overview"; // Import Overview
import Plan from "./Plan"; // Import Plan
import NotFoundPage from "./NotFoundPage"; // Import NotFoundPage

function App() {
  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<h1>LandingPage</h1>} /> {/* Corrected Route for LandingPage */}
          <Route path="/dashboard" element={<Dashboard />}> {/* Dashboard Route */}
            <Route index element={<Overview />} /> {/* Nested Route for Overview */}
            <Route path="plan" element={<Plan />} /> {/* Nested Route for Plan */}
            <Route path="transactions" element={<h1>Transactions</h1>} /> {/* Transactions Route */}
          </Route>
          <Route path="/login" element={<h1>Login</h1>} /> {/* Corrected Route for Login */}
          <Route path="/signup" element={<h1>Signup</h1>} /> {/* Corrected Route for Signup */}
          <Route path="*" element={<NotFoundPage />} /> {/* Corrected Route for NotFoundPage */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
