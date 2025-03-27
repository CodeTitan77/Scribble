import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rough from "roughjs";
import './App.css'

function Board() {
  const canvasRef= useRef();
  
  useEffect(()=>{
    const canvas=canvasRef.current;
    canvas.width= window.innerWidth;
    canvas.height= window.innerHeight;
    const roughCanvas= rough.canvas(canvas);
    const generator= roughCanvas.generator;
    const context= canvas.getContext("2d");

    

  },[]);

  return (
     
    
   <div className='App'> 
   <canvas ref={canvasRef} height="100vh" width="100vw"/>
   <h1>My WhiteBoard App </h1>

   </div>
  )
}

export default Board;
