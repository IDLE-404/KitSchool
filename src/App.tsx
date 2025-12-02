import React from "react";
import Home from "./views/home/Home.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthForm from "./views/AuthFrom/AuthForm.page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AuthForm" element={<AuthForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
