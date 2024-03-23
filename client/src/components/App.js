import React, { useEffect, useState } from "react";
import { Switch, Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage"
import Dashboard from "./Dashboard";
function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<h1>LandingPage</h1>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;
