import Link from 'next/link'
import React from 'react'
import AnimatedText from './text'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-5 items-center'>
        <div className="logo flex items-center">
            <AnimatedText text='Android Club' className='text-3xl' preStyle='text-3xl'/>
        </div>
        <div className="sign">
            <button className=''>
                <AnimatedText text="Sign in" className = 'bg-[#11f800] hover:bg-[#3ade2e] transition-all text-black text-xl px-5 py-3' preStyle='bg-[#11f800] hover:bg-[#3ade2e] transition-all text-black text-xl px-5 py-3'/>
            </button>
        </div>
    </div>
  )
}

export default Navbar