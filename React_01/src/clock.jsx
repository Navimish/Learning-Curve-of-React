import { useEffect, useState } from "react"

export function Clock(){

    const [time,settime] = useState(new Date().toLocaleTimeString());
    const [color,setcolor] = useState("red")

    function HandleColor(event){
        setcolor(event.target.value)
    }

    useEffect(()=>{

        const interval = setInterval(()=>{

            settime(new Date().toLocaleTimeString())
        },1000)

        return()=> clearInterval(interval)


    },[])

    return(
        <>

         <h1>My Clock Counter</h1>
         <h1 style={{color:color, background:"black", width:"180px" , padding:"2px"}}>{time}</h1>

         <select onChange={HandleColor} >
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
         </select>
           
        </>
    )
}