import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { useState } from 'react';
import {BrowserRouter as Router,Switch ,Route } from 'react-router-dom'
import About from './component/About';
import './App.css'
import Footer from './component/Footer';
import CoArticle from './component/CoArticle';
import Usenews2 from './component/Usenews2'
import Notfound from './component/Notfound';
function App() {

  const [article,setarticle] =useState(null)
  const [catogory,setcat]=useState('latest india news')

    function setcatogory(value){
      setcat(value)
     
    }

  const {top1,date1,date2,load,totalpage,error} =Usenews2(catogory)
  

  function set( art){
    setarticle(art)
  }
 
 return(
    <Router>
 
  <Navbar date={date1}  setcatogory={setcatogory}/>
  <Switch>
    <Route exact path="/">
    
  <Home error={error} date2={date2} top={top1} totalpage={totalpage} load={load} set={set} catogory={catogory}/>

  </Route>
  <Route exact path='/about'> 
    <About />
  </Route>
<Route exact path='/coarticle'>
 <CoArticle article={article}/>
</Route>
<Route path='*'>
 <Notfound />
</Route>
  </Switch>

  <Footer />

  </Router>
  );
}

export default App;
