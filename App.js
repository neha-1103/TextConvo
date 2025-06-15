import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import {useState} from 'react'
import Alert from './components/alert'
import About from './components/About'

// import About from './components/About'
// let t = document.getElementById('box')

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      document.title = "Textutils-dark"
      
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.title = "Textutils-light"
      
    }
  }

// function Green() {
//   const [initial,final] = useState('light');

//   const colors = () =>{
//     if(initial === "light"){
//       final("dark")
//       document.body.style.backgroundColor = 'Green'
//       document.body.style.color = 'white'
      
//     }
//     else{
//       final("light")
//       document.body.style.backgroundColor = 'white'
//       document.body.style.color = 'black'
      
//     }
//   }


  
  return (
    <div>
    
<Navbar title="Convertor"  mode={mode} toggleMode = {toggleMode}/>
<Alert alert ="This is an alert message"/>
<div className="container m-3">
<Textform/>
<About/>
</div>



  </div>  
  );
}



export default App;
