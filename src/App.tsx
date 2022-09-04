import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import './App.css';
import SickLeaveColumns from './components/SickLeaveComponent/SickLeaveComponent'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/sickleave" />} />
        <Route path='/sickleave' element={<SickLeaveColumns />} />
        {/* !TODO add error page in case of wrong URL */}
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;