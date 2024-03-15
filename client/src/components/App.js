import React, { useEffect, useState } from "react";
import { Switch, Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage"

import LandingPage from "./Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App;
