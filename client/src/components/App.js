import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext"; 
import Nav from "./Nav"; 

function App() {
  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <h1>Home Page</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
            {/* Placeholder for our login component */}
          </Route>
          <Route path="/signup">
            <h1>Signup</h1>
            {/* Placeholder for our signup component */}
          </Route>
          {/* Define other routes here */}
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
