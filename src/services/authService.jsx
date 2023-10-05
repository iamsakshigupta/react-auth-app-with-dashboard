// src/pages/Login.jsx
import React, { useState } from 'react';
import authService from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('dummy.dummy@dummy.com');
  const [password, setPassword] = useState('12345678');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const user = await authService.login(email, password);
      // Handle successful login (e.g., set user context)
      console.log('Logged in as:', user.email);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* ... (your form input fields) */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        {error && (
          <div className="text-red-600 text-center">{error}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
