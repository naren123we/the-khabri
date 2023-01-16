
import { useEffect,useState } from 'react'
const Usenews2 = (catogory) => {
   
    const [top1,settop1] =useState([])
    const [load,setload]=useState(true)
    const [totalpage,settotalpage]=useState(null)
    const [error,seterror]=useState(null)
    const date1 =new Date().toDateString() 
    const date2=new Date().toISOString().slice(0,10)
 
  
    useEffect(()=>{
     async function getdata2(date2,catogory){
   
      try{
       
        const res=await fetch('https://newsapi.org/v2/everything?q='+catogory+'&from='+date2+'&sortBy=popularity&apiKey=607d480f618542a39c10d516f45b4f27')
    
        const data=await res.json();
        settop1(data.articles)       
      settotalpage(Math.floor(data.articles.length/12))  
      setload(false)
      }   catch(err){
       
        console.log(err.message)
        seterror(err.message)
        setload(false)
     
     }
   
   
     
     }
     
       getdata2(date2,catogory)
       setload(true)
     },[catogory,date2])

  return {top1,date1,date2,load,totalpage,error}
}

export default Usenews2