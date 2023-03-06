import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from "./pages/user/index";
import UserDetail from "./pages/user/_id";
import Places from "./pages/places/index";
import NewPlace from "./pages/places/new/index";
import TheNavigation from "./components/TheNavigation";
import UpdatePlace from "./pages/places/_id";

const App = () => {
  return (
    <BrowserRouter>
      <TheNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserDetail />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
