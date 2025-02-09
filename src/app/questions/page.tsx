import AnimatedText from '@/components/text'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='m-10 mt-5'>
        <h1>
            <AnimatedText text= 'Questions' className='text-4xl italic' preStyle='text-4xl italic' />
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">hello
                <Link href='#' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">hello
                <Link href='#' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">hello
                <Link href='#' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">hello
                <Link href='#' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">hello
                <Link href='#' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
        </h1>
    </div>
  )
}

export default page