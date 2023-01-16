import React from 'react'
import { Link } from 'react-router-dom'
const Categorry = ({setcatogory}) => {
    const type=[{type:"Politics",id:1},{type:"Economy",id:2},{type:"Entertainment",id:3},{type:"Sports",id:4},{type:"Cricket",id:5}]
    
      function set (e){
           setcatogory(e.target.innerHTML)
          }
          if(window.innerWidth<500){
            type[4]="";
        
          }

  return (
    <div className='mt-auto sm:mb-3 mb-2  '>
      <hr className='mb-2 lg:w-[840px] mx-auto'></hr>
     <ul className='flex flex-row  justify-around lg:justify-center items-center lg:space-x-20   text-white font-bold  text-base sm:text-xl'>
        
            {type.map((l,i)=>{
                return <Link to='/'><li key={l.id} onClick={set} className='active:scale-110 hover:text-slate-200 cursor-pointer'>{l.type}</li></Link>
            })}
     </ul>
    </div>
  )
}

export default Categorry  