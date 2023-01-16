import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { useLocation} from 'react-router-dom';
const Search = ({setcatogory}) => {
    const[showsearch,setshowsearh]=useState(true)
    const[showsearch1,setshowsearh1]=useState(true)  
    const [search,setsearh] =useState('')
    const location=useLocation() 
    function set2(){
        if(search===''){
         if(showsearch===true){
         setTimeout(()=>{
            setshowsearh(!showsearch)
         },100)
          setshowsearh1(!showsearch1)
      }
      else{
         setTimeout(()=>{
    setshowsearh1(!showsearch1)
            },500)
             setshowsearh(!showsearch)
      }
        }
          }
          function searching (){
            if(showsearch===false && search!==''){
               setcatogory(search)
              
               setTimeout(()=>{
                setsearh('')
               },700)
               setTimeout(()=>{
                  setTimeout(()=>{
                     setshowsearh1(!showsearch1)
                             },500)
                              setshowsearh(!showsearch)
               },1200)
             
              }
           }
           function enter (e){
            if(e.key==="Enter"){
               searching()
            }
          }
  return (
    <div className='flex flex-row items-center space-x-2'>
  {location.pathname==='/'&&   <span  className={`${showsearch?'':'animation1 '} ${showsearch1&&'hidden'} animation  `}><input id='inp' type='text' onKeyUp={enter} onChange={(e)=>{
       setsearh(e.target.value) }} placeholder='Type here to Search news' value={search} className='py-1 px-4 font-medium w-[180px] md:w-[280px] rounded-3xl'/> </span>}
 {location.pathname==='/'&&<span onClick={searching}> < FaSearch color='white ' size='25px' cursor='pointer'onClick={set2}/></span>}
       </div>
    
  
  )
    }
export default Search