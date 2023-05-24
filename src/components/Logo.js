import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import useThemeSwitcher from './hooks/useThemeSwitcher';

const MotionLink = motion(Link);

const Logo = () => {
  const [mode, setMode] = useThemeSwitcher()
  return (
    <div className='flex items-center justify-center mt-2 md:mt-8 sm:mt-4 '>
        <MotionLink href='/'
        className=' h-16 md:h-10  text-dark flex items-center justify-center text-2xl xs:text-lg font-bold dark:text-light'
        whileHover={{color:["rgba(252,176,69,1)","#f5f5f5","#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212",],
        transition:{duration:1, repeat: Infinity}
    }}
        >&lt;AdeTunji &nbsp;/&gt;</MotionLink>
    </div>
  )
}

export default Logo