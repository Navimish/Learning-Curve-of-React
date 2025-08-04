import React, { useRef } from 'react'
import FRchild from './FRchild';

function FRparent() {

    const inputRef = useRef();

    function handleinput(){
        inputRef.current.value = 1000;
        inputRef.current.style.color = "Red";
    }

  return (
    <div>


        <FRchild ref ={inputRef}></FRchild>
        <button onClick={handleinput}>update input</button>
      
    </div>
  )
}

export default FRparent
