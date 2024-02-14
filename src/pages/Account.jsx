import React from 'react';
import { UserAuth } from '../context/AuthContext';
import '../fonts.css';

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
<div className='w-[300px] mx-auto'>
  <h1 className='text-center text-5xl font-bold pt-12 mb-4 font-Pangolin'>Account</h1> 
  <div className="text-center">
    <p className="mt-2 ml-0 text-3xl text-left whitespace-nowrap font-Pangolin">Welcome, {user?.displayName}</p>
    {/* <button onClick={handleSignOut} className='border border-blue-200 bg-transparent text-blue-200 hover:text-white hover:bg-blue-200 py-3 px-6 mt-10 rounded-lg font-bold'>
      Logout
    </button> */}
  </div>
</div>




  
  );
};

export default Account;