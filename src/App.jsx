import React from "react";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-movie" element={<AddMovie />} />
    </Routes>
  );
};

export default App;
