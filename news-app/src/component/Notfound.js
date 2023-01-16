import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
  <div className='text-center  my-14 '>
    
     <h1 className='text-2xl font-semibold text-black mx-5 mb-3 '>sorry !! this page doesn't exist</h1>
 <Link to='/'><h1 className=' text-lg  font-medium hover:scale-105 cursor-pointer hover:font-bold'>Back-To-Homepage</h1></Link> 
  </div>
  )
}

export default Notfound