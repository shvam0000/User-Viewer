import React from 'react';

const Hero = () => {
  return (
    <>
      <h1 className="text-3xl">Company Settings</h1>
      <div className="text-gray-600 my-9">
        <span className="px-4 rounded-l-lg border-2 border-gray py-2 shadow-lg hover:bg-gray-200">
          <button>General</button>
        </span>
        <span className="px-4 border-y-2 border-gray py-2 shadow-lg bg-gray-200 hover:bg-gray-200">
          <button>Users</button>
        </span>
        <span className="px-4 border-y-2 border-l-2 border-gray py-2 shadow-lg hover:bg-gray-200">
          <button>Plan</button>
        </span>
        <span className="px-4 border-y-2 border-l-2 border-gray py-2 shadow-lg hover:bg-gray-200">
          <button>Billing</button>
        </span>
        <span className="px-4 rounded-r-lg border-2 border-gray py-2 shadow-lg hover:bg-gray-200">
          <button>Integrations</button>
        </span>
      </div>
    </>
  );
};

export default Hero;
