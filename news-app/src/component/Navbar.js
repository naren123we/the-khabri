import React from 'react';
import bar from './menubar.jpg';
import close from './close-icon.png'
import { useState,useEffect} from 'react';
import { Link} from 'react-router-dom';


import Categorry from '../Categorry';
import Search from './Search';
const Navbar = ({date,setcatogory}) => {
  const [temp,settemp]=useState(null)
  const [icon,seticon]=useState(null)
     
    const [show,setshow]=useState(true)
   
    
  
     useEffect(()=>{
    
      const fetchwether=(city)=>{
        
          fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=4f533ec966b2d3140f55cc1b0eebf869")
          .then((response)=>response.json()).then((value)=>{
              const tempreture=value.main.temp;
              const icon=value.weather[0].icon;
              settemp(tempreture)
               seticon(icon)
              }).catch((err)=>{
                            console.log(err) 
              })
         
        
       
            } 
            fetchwether('delhi');
     },[temp])
     
        
     function set1 (){
      setshow(!show)
     }
  
     
    
  return (
    < div className='m-0 bg-black background w-[100%] sm:h-[60vh] h-[40vh] sm:pt-7 pt-4 flex  flex-col shadow-lg'>
    <div className="flex   w-[100%] justify-between items-center relative lg:px-2">
        
      <h1 className='text-white sm:ml-3 ml-4 p-5 font-serif  font-bold text-[2.1rem] lg:text-4xl '>the khabri</h1>
     
    
       <ul className='sm:flex hidden space-x-16 items-center justfy-between mr-24'>
        <Search  setcatogory={setcatogory}/>
        <li onClick={()=>{
            setcatogory('latest india news')
        }} className='text-white font-semibold active:font-bold hover:text-slate-200 cursor-pointer text-xl'><Link to='/'>Home</Link></li>
        <li  className='text-white font-semibold active:font-bold hover:text-slate-200 cursor-pointer text-xl'><Link to='/about'>About us</Link></li>
       </ul>
    <div className='sm:hidden flex mr-4 hover:scale-105 ' onClick={set1} >
    {show ?<img className="w-[65px] h-[60px] " src={bar} alt='img'></img> :
      <img className="w-[65px] h-[60px]" src={close} alt="img" />
    }

    </div>
    <div className={`bg-slate-200 ${show && "hidden"}  absolute right-3 top-20 p-4 rounded-xl`}>
    <ul className={`flex-col space-y-2  text-black`}>
        <li onClick={()=>{
           setcatogory('latest india news')
        }} className=' font-semibold active:font-bold cursor-pointer text-xl '><Link to='/'>Home</Link></li>
        <li  className=' font-semibold active:font-bold cursor-pointer text-xl'><Link to='/about'>About us</Link></li>
         <li><Search  setcatogory={setcatogory}/></li>
       </ul>
    </div>
   </div>
   <div className='sm:flex-row flex flex-col sm:ml-[14px] ml-4  px-5 sm:items-center'>
   <p className='text-white font-medium  mr-1'>{`${date}`}</p>
   <div className='flex items-center'>
   <p className='text-white font-medium '>{` New Delhi ${temp} °C`}</p>   
   <img className='w-[40px] h-[40px]  ' src={`https://openweathermap.org/img/wn/${icon}.png`} alt="img"></img>
   </div>
   </div>
   
   <Categorry setcatogory={setcatogory} />
   
   </div>
  )
}

export default Navbar