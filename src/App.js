import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar, Sidebar } from './components';
import { Ecommerce, Login } from './pages';

import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    // Perform your login logic here, and if successful, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Display the Login page */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* If authenticated, display the protected content */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div>
                  <div className='bg-white p-2 md:mx-6'>
                    <Navbar />

                  </div>
                  <div className="flex">
                    <div className='w-72'>
                    <Sidebar />
                    </div>
                    <div className="flex-grow w-full h-screen rounded-lg drop-shadow-xl p-10">
                      <Ecommerce />
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
