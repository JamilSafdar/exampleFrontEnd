import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { tokenFetch } from "./utils";
import { LogOrSignForm } from "./components/logOrSignForm";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Settings } from "./components/settings";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    tokenFetch(setUser);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            user ? (
              <Home user={user} setUser={setUser} />
            ) : (
              <LogOrSignForm setUser={setUser} />
            )
          }
        />
        <Route
          path="/settings"
          element={<Settings user={user} setUser={setUser} />}
        />
      </Routes>
    </Router>
  );
};

export default App;