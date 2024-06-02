import React from 'react';
import CreateAccount from './CreateAccount';
import DeleteAccount from './DeleteAccount';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-10 p-4">
      <CreateAccount />
      <DeleteAccount />
    </div>
  );
}

export default App;
