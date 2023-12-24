import React from 'react'

export const Navbar = () => {
  return (
    <div className='bg-amber-300 flex justify-evenly text-amber-800'>
      <a href="#" className='no-underline text-base  p-1 hover:scale-105 '>Home</a>
      <a href="#" className='no-underline text-base  p-1 hover:scale-105 '>About</a>
      <a href="#" className='no-underline text-base  p-1 hover:scale-105 '>Events</a>
      <a href="#" className='no-underline text-base  p-1 hover:scale-105 '>Contact</a>
    </div>
  )
}
