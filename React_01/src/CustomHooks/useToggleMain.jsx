import React from 'react'
import { useToggle } from './useToggle'

function UseToggleMain() {

    const [val,togglehandle] = useToggle(true);

  return (
    <div>

        <button onClick={togglehandle}>Toggle</button>
        <button onClick={()=>togglehandle(false)}>Hide</button>
        <button onClick={()=>togglehandle(true)}>Show</button>

        {
            val?<h1>This is a custom hook</h1>:null
        }

        
      

    </div>
  )
}

export default UseToggleMain
