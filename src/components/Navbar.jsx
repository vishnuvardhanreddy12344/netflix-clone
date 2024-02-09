import React from 'react'
import{Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div className='flex justify-between absolute items-center w-full p-2 z-50 '>
        <Link to="/">
            <h1 className='text-red-600 text-3xl cursor-pointer font-sans'>NETFLIX</h1>
        </Link>

    <div>
        <Link to="/login">
         <button className='pr-4'>login</button>
        </Link>

        <Link to="/signup">
            <button className='bg-red-600 cursor-pointer p-3 rounded px-6 py-2 text-white'>signup</button>
        </Link>
    </div>
      
    </div>
  );
};
                                 