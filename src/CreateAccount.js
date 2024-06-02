import React, { useState } from 'react';

function CreateAccount() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setError('Password must be at least 6 characters');
    } else {
      setError('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>
      <p>Create your account in a second to receive our latest news!</p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="At least 6 characters"
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Year of experience</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm">
            <option>Please Select</option>
            <option>1 Year</option>
            <option>2 Years</option>
            <option>3 Years</option>
          </select>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
          <label className="ml-2 block text-sm text-gray-900">Remember Me.</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
