import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./pages/user/index";
import UserDetail from "./pages/user/_id";
import Places from "./pages/places/index";
import TheNavigation from "./components/TheNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <TheNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserDetail />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
