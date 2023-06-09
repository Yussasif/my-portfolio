import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed md:absolute left-4 bottom-4 flex items-center jsutify-center overflow-hidden md:right-4 sm:-right-2 md:left-auto md:top-0 sm:-top-4 md:bottom-auto'>
        <div className=' w-48 md:w-[120px] h-auto flex items-center justify-center relative'>
            <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />

            <Link href='mailto:yusufowoade2@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark first-letter:
            
            dark:text-dark dark:bg-light hover:dark:text-light hover:dark:bg-dark hover:dark:border-light first-letter:
            md:w-12 md:h-12 md:text-[10px]
            ' >Hire Me</Link>

        </div>
    </div>
  )
}

export default HireMe