import React from 'react'
import { Link } from 'react-router-dom'
import news from './news.jpg'

const Article = ({source,set}) => {
   function push(){
    set({source})
   }
 
   
  return (
   
  <Link to='/coarticle'>  <div  className='flex flex-col xl:w-[310px] w-[300px] max-h-[365px] xl:mx-2 sm:mx-5 shadow-lg rounded-xl sm:hover:scale-105 sm:mb-10 mb-8 cursor-pointer' onClick={push} >
      {source.urlToImage? <img src={source.urlToImage} className=" h-[265px] rounded-xl" alt='img'/>:
      <img src={news} className=" h-[280px] rounded-xl" alt='img'/>
    }
       <p className='text-lg font font-semibold p-3'>{`${source.title.length<100?source.title:source.title.slice(0,97)}....`}</p>
      </div>
      </Link>
  )
  }

export default Article