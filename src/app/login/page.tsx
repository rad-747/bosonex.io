'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPopup({ show, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Example validation
    if (email === '' || password === '') {
      setError('Please fill out all fields');
      return;
    }
    // Add your login logic here
    console.log('Login', { email, password });
  };

  const handleSignUpClick = () => {
    onClose(); // Close the login popup when "Sign up" is clicked
  };

  return (
    show ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-96 relative">
          <button className="absolute top-2 right-4 text-gray-400 hover:text-gray-600" onClick={onClose}>
            X
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </form>

          <p className="mt-4 text-center">
            Dont have an account?{' '}
            <Link href="/signup" onClick={handleSignUpClick} target="_blank" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    ) : null
  );
}
