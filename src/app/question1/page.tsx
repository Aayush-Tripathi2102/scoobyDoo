import LetterAnimation from '@/components/LetterAnimation'
import AnimatedText from '@/components/text'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className="flex gap-2 ml-24 mt-10  text-2xl">
            [
            <AnimatedText text='0x01' preStyle=''/>
            ]
        </div>
        <div>
            <LetterAnimation>You stumble upon an old, seemingly ordinary image file while browsing an obscure forum. However,
            something about it feels unusual. The file size seems larger than expected, and a closer inspection reveals 
            subtle artifacts. Could there be more than meets the eye? Perhaps a hidden message lies within. 
            Can you uncover the secret concealed within the image?</LetterAnimation>
        </div>
        <div >
          <form action="" className='flex gap-2 items-center mt-20 mx-auto'>
            <input type="text" className='ml-64 bg-opacity-15 bg-[#11f800] rounded-none border-4 border-[#11f800] text-3xl outline-none focus:ring-0 uppercase focus:border-[#11f800] px-4 py-2' />
            <button className=''>
                <AnimatedText text="Submit" className = 'bg-[#11f800] transition-all text-black text-xl px-5 py-5' preStyle='bg-[#11f800] transition-all text-black  text-xl px-5 py-5'/>
            </button>
          </form>
        </div>
    </div>
  )
}

export default page