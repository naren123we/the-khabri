import React from 'react'
import { useState } from 'react'
import spinner from './Fading line.gif'
const About = () => {

  const [load3,setload3]=useState(true)
  setTimeout(()=>{
     setload3(false)
  },1000)
  return (
    <div className='flex flex-col p-5'>
         {load3&& <img className='h-[100px] w-[100px] mx-auto my-5' src={spinner}></img>}
        </div>
  )
}

export default About