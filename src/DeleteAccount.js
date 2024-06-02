import React, { useState } from 'react';

function DeleteAccount() {
  const [selectedReason, setSelectedReason] = useState('');
  const [comments, setComments] = useState('');

  const handleReasonChange = (e) => {
    setSelectedReason(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Delete Your Account</h2>
      <p>We're sorry to see you go. It would be great if we could know the reason behind.</p>
      <form className="space-y-4">
        <div>
          <p className="block text-sm font-medium text-gray-700">Please select one of the below reasons.</p>
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
          {!selectedReason && <p className="text-red-500 text-xs mt-1">Please select a reason.</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Let us know if you have other comments.</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            rows="4"
            placeholder="Your comments (Optional)"
          />
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
