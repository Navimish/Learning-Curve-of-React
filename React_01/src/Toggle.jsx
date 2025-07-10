import { useState } from "react"

export function Toggle(){

    // const [name,setname] = useState("Anil")

    const [display,setdisplay] =useState(false) 

   

    return(
        <> 

           
            <button onClick={()=>{setdisplay(!display)}}>Display</button>
            {display?<h1>Anil</h1>:null}

        </>
    )

}