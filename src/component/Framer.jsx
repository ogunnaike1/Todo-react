import React from 'react'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'

const Framer = () => {
  return (
    <div>
           <div className='flex items-center justify-center h-[100vh]'>
        <motion.h1 initial={{y:"100vh", scale:1}} transition={{delay:0.5, duration:2, type:'spring', stiffness:120}} animate={{y:0, scale:2}} className='text-red-600 text-[30px] font-[700]'>Framer</motion.h1>
        <motion.button whileHover={{scale:2, originX:0, color:"yellow"}} transition={{type:"spring", stiffness:300}} className='text-blue-500 text-[16px] font-[500] mt-[100px]'>show</motion.button>
    </div>
       
    </div

  )
}

export default Framer
