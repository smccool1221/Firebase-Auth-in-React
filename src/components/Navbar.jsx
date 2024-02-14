import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../fonts.css';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-blue-200 w-full p-4'>
    <h1 className='text-center text-4xl font-bold font-Pangolin'> {/* Apply Pangolin font here */}
      Make a Quiz
    </h1>
    {user?.displayName ? (
      <button onClick={handleSignOut}>Logout</button>
    ) : (
      <Link to='/signin'>Sign In</Link>
    )}
  </div>
  );
};

export default Navbar;