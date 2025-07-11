import { useState } from "react"

export function  InputField(){

    const [value,setvalue] = useState("")
    // console.log(value);
    
    
    

    return(
        <>
            <input type="text" placeholder="Enter User Name" value={value} onChange={(event) =>{setvalue(event.target.value)}} />

            <h1>{value}</h1>

            <button onClick={()=>{setvalue("")}}>Clear</button>
            
            
        </>
    )
}