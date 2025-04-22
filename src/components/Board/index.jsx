import { useEffect, useRef, useState } from 'react'

import rough from "roughjs";

function Board() {
  const canvasRef= useRef();
  
  useEffect(()=>{
    const canvas=canvasRef.current;
    canvas.width= window.innerWidth;
    canvas.height= window.innerHeight;
    const context=canvas.getContext("2d");
   
    const roughCanvas= rough.canvas(canvas);
    const generator= roughCanvas.generator;
   

    

  },[]);

  return (
     
    
   <div className='App'> 
   <canvas ref={canvasRef} height="100vh" width="100vw"/>
   <h1 className='text-red-300'>My WhiteBoard App </h1>

   </div>
  )
}

export default Board;
