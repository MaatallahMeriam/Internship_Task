import React, { useState } from 'react';

function DeleteAccount() {
  const [selectedReason, setSelectedReason] = useState('');
  const [comments, setComments] = useState('');

  const handleReasonChange = (e) => {
    setSelectedReason(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Delete Your Account</h2>

      <p>We're sorry to see you go. It would be great if we could know the reason behind.</p>
      <form className="space-y-4">
      {!selectedReason && (
  <div className="flex items-center">
    <svg className="h-4 w-4 text-red-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a1 1 0 01-.707-.293l-8-8a1 1 0 010-1.414l8-8a1 1 0 011.414 1.414L3.414 10 10 16.586 16.586 10 10 3.414 11.414 2l8 8a1 1 0 010 1.414l-8 8A1 1 0 0110 18zm0-16a1 1 0 011 1v10a1 1 0 01-2 0V3a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
    <p className="text-red-500 text-xs mt-1"><strong>Please select one of the below reasons.</strong></p>
  </div>
)}

        <div>
          <div className="space-y-2">
            <div>
              <input
                type="radio"
                value="privacy"
                checked={selectedReason === 'privacy'}
                onChange={handleReasonChange}
                className="mr-2"
              />
              <label>I have privacy concerns.</label>
            </div>
            <div>
              <input
                type="radio"
                value="useful"
                checked={selectedReason === 'useful'}
                onChange={handleReasonChange}
                className="mr-2"
              />
              <label>I no longer find this useful.</label>
            </div>
            <div>
              <input
                type="radio"
                value="irrelevant"
                checked={selectedReason === 'irrelevant'}
                onChange={handleReasonChange}
                className="mr-2"
              />
              <label>I'm receiving irrelevant email contents.</label>
            </div>
            <div>
              <input
                type="radio"
                value="tooMany"
                checked={selectedReason === 'tooMany'}
                onChange={handleReasonChange}
                className="mr-2"
              />
              <label>I'm getting too many emails.</label>
            </div>
            <div>
              <input
                type="radio"
                value="others"
                checked={selectedReason === 'others'}
                onChange={handleReasonChange}
                className="mr-2"
              />
              <label>Others</label>
            </div>
          </div>
          
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Let us know if you've other comments.</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            rows="4"
            placeholder="Your comments (Optional)"
          />
          <p className="text-xs text-gray-500 text-right mt-1">Max. 2000 characters</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DeleteAccount;
