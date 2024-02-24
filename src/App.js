import "./App.css"
import React, { useState, useEffect } from 'react';
import { Signin } from './pages/auth/Signin';
import { Signup } from './pages/auth/Signup';
import { Preview } from './pages/pocketNotes/Preview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './components/PrivateRoute';
import { PreventLoginRedirect } from "./components/PreventLoginRedirect";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    // Check if the access token exists in local storage
    if (JSON.parse(localStorage.getItem("acces_token"))) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <PreventLoginRedirect isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Signin />} />
          <Route
            exact path="/preview"
            element={
              <PrivateRoute>
                <Preview />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div >
  );
}





export default App;
