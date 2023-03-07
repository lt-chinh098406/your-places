import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Users from "./pages/user/index";
import NewPlace from "./pages/places/new/index";
import TheNavigation from "./components/TheNavigation";
import UserPlaces from "./pages/user/_id/index";
import AuthPage from "./pages/auth";
import UpdatePlace from "./pages/places/_id";
import { AuthContext } from "./context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <TheNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:userId/places" element={<UserPlaces />} />
            {isLoggedIn ? (
              <React.Fragment>
                <Route path="/places/new" element={<NewPlace />} />
                <Route path="/places/:placeId" element={<UpdatePlace />} />
              </React.Fragment>
            ) : (
              <Route path="/auth" element={<AuthPage />} />
            )}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
