import React, { useEffect, useState } from "react";
import { Switch, Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage"
import Dashboard from "./Dashboard";
import Overview from "./Dashboard/Overview";
function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<h1>LandingPage</h1>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Overview />}/>
          <Route path="plan" element={<h1>Plan</h1>}/>
          <Route path="transactions" element={<h1>Transactions</h1>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;
