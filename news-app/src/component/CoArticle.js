
import {useHistory} from 'react-router-dom'
import { useState } from 'react'
import spinner from './Fading line.gif'
import news from './news.jpg'
const CoArticle = ({article}) => {
        const history=useHistory()
    
      const [load2,setload2]=useState(true)
      setTimeout(()=>{
         setload2(false)
      },1000)
   
     
      if(article===null){
        history.push('/')
      }
     
  return (


    <div className='py-5 px-2' >
      <hr></hr>
      { load2 ? <img src={spinner} className="h-[100px] w-[100px] mx-auto " alt='img'/>:
      
      <div className='flex flex-col font ' >
        <span className='mx-auto px-2 lg:px-6 my-2 sm:my-4 font-bold text-2xl inline-block'>{article.source.title}</span>
        <img className='sm:w-[500px] lg:w-[700px] lg:h-[430px] sm:h-[400] w-[359px] h-[201px]  mx-auto ' src={article.source.urlToImage?article.source.urlToImage:news} alt='img'></img>
        <div className='mt-3 sm:mx-10 lg:mx-16 px-1  '>
        <p className={`font-semibold text-md sm:text-lg ${article.source.description!==null &&'my-2  '}`}>{article.source.description}</p>
        <p className={`font-medium text-md sm:text-lg ${article.source.content!==null &&'my-2  '}`}>{article.source.content}</p>
        <p className={`font-medium text-md sm:text-lg ${article.source.author===null &&'hidden'}  my-2`}>Author : {article.source.author}</p>
        <p className={`font-semibold text-md sm:text-lg inline-block   `}>for complete article  <a href={article.source.url} target='blank'><span className=' active:scale-105 inline-block'>Click here</span></a></p>
       
        </div>
        </div>
      }
        </div>
    

  )
}

export default CoArticle