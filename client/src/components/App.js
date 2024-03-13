import React, { useEffect, useState } from "react";
import { Switch, Routes, Route } from "react-router-dom";
import PlaidIntegration from "./PlaidIntegration"
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>LandingPage</h1>}/>
      <Route path="/link-bank-account" element={<PlaidIntegration/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;
