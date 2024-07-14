import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
