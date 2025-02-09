import AnimatedText from '@/components/text'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='m-10 mt-5'>
        <h1>
            <AnimatedText text= 'Questions' className='text-4xl italic' preStyle='text-4xl italic' />
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">A Reversed Prophecy in the Sands of 2024
                <Link href='/question1' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">From Dunes to Courts: A Name That Binds Two Worlds
                <Link href='/question2' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">Beef, Bars, and a Poet’s Lament – A Singular Truth
                <Link href='/question3' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">From Torch to Tower: A Number’s Legacy in Time
                <Link href='/question4' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">Blades, Banter, and a Grinning Revelation
                <Link href='/question5' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
            <div className='flex flex-col gap-9 mt-10'>
                <div className="flex flex-col text-xl border-4 reletive border-[#11f800] py-5 px-7">Pixels, Legends, and a Date with Destiny
                <Link href='/question6' className='font-bold absolute right-14'>Attempt Now</Link>
                </div>
            </div>
        </h1>
    </div>
  )
}

export default Page