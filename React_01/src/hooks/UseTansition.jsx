import React from 'react'
import { useTransition } from 'react'

function UseTansition() {

    const [pending, setTransition] = useTransition();


    function handleSubmit(){
        console.log(pending);
        
        setTransition(async()=>{
            await new Promise((res)=>setTimeout(res,2000))
            console.log(pending)

        })
    }
  return (
    <div>

        <input type="text" />
        <br /> <br />
        <input type="text" />
        <br /> <br />

        {
            pending?<img width = "100px"src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null
        }
        <button disabled={pending} onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default UseTansition
