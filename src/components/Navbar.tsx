'use client'
import React, { useEffect, useState } from 'react'
import AnimatedText from './text'
import { useRouter } from 'next/navigation'
import appwriteService from '@/appwrite/config'

const Navbar = () => {
  const [isLogIn, setIsLogIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkLogin = async () => {
      const b = await appwriteService.isLoggedIn()
      setIsLogIn(b)
    }
    checkLogin()
  }, [])

  const handleClick = () => {
    router.push('/sign-in')
  }

  // Function to log out the user and update state
  const handleLogout = async () => {
    await appwriteService.logout()
    setIsLogIn(false)
  }

  return (
    <div className='flex justify-between px-10 py-5 items-center'>
      <div className="logo flex items-center">
        <AnimatedText text='Android Club' className='text-3xl' preStyle='text-3xl'/>
      </div>
      <div className="sign">
        {isLogIn ? (
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white text-xl px-5 py-3">
            Logout
          </button>
        ) : (
          <button onClick={handleClick}>
            <AnimatedText text="Sign in" className = 'bg-[#11f800] hover:bg-[#3ade2e] transition-all text-black text-xl px-5 py-3' preStyle='bg-[#11f800] hover:bg-[#3ade2e] transition-all text-black text-xl px-5 py-3'/>
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
