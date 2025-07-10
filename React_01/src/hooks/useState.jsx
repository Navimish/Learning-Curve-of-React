import { useState } from "react"

export function States(){

    const [fruit,setfruit] = useState("Banana")
    const [count, setcount] = useState(0);

    function fruithandler(){
        setfruit("Apple")
    }



    return(
        <>
        <h1>{fruit}</h1>
        <button onClick={fruithandler}>Change Fruit</button>

        <h1>counter : {count}</h1>

        <button onClick={()=>{setcount(count+1)}}>+</button>
        <button onClick={()=>{setcount(count-1)}}>-</button>


        </>
    )
}