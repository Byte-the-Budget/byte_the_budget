import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage"
import Dashboard from "./Dashboard";
import Overview from "./Dashboard/Overview";
import Plan from "./Dashboard/Plan";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<h1>LandingPage</h1>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Overview />}/>
          <Route path="plan" element={<Plan />}/>
          <Route path="transactions" element={<h1>Transactions</h1>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;
