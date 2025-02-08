'use client';
import appwriteService from '@/appwrite/config';
import CustomInput from '@/components/CustomInput'
import AnimatedText from '@/components/text'
import React, { useState } from 'react'
import { account } from '@/appwrite/config';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()
    const [inputName, setInputName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const a = await appwriteService.login({email, password})
        const user = await account.get();
        if(user){
            setIsLoggedIn(true)
            window.location.href = "/";
        }
        console.log(user)
    };
    
  return (
    <>
        <div className='flex flex-col items-center mr-52 mt-20 '>
            <AnimatedText text='Sign-in' className='text-4xl' preStyle='text-4xl'/>
            <div className=''>
                <form action="" className='flex flex-col gap-5 justify-center items-center mt-5' onSubmit={handleSubmit}>
                    <CustomInput input={inputName} handleChange={handleNameChange} placeholder='Team Name'/>
                    <CustomInput input={email} type='email' handleChange={handleEmailChange} placeholder='Email'/>
                    <CustomInput input={password} type='password' handleChange={handlePasswordChange} placeholder='Password'/>
                    <button type='submit' className='mt-10 ml-[430px]'>
                        <AnimatedText text="Submit" className = 'bg-[#11f800] transition-all  text-black text-xl px-20 py-5' preStyle='bg-[#11f800] transition-all text-black  text-xl px-20 py-5'/>
                    </button>
                </form>              
            </div>
        </div>
    </>
  )
}

export default page