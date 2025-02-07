import Link from 'next/link'
import React from 'react'
import AnimatedText from './text'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-5 items-center'>
        <div className="logo flex items-center">
            
            <p className="text-3xl">Android Club</p>
        </div>
        <div className="sign">
            <button className='bg-[#11f800] text-black text-xl px-5 py-3'>
                <AnimatedText text="Sign in" className = 'text-black' preStyle='text-black'/>
            </button>
        </div>
    </div>
  )
}

export default Navbar