import { useState } from "react"

export function DerivedState(){

    const [user,setuser] = useState();
    const [users,setusers] = useState([]);

    function handlebtn(){

        setusers([...users,user])
    }

    const total = users.length;
    const unique = [...new Set(users)].length;
    const last = users[length -1];



    return(
        <>
        
        <h1>Total user : {total}</h1>
        <h1>Total unique user : {unique}</h1>
        <h1>Last user :{} </h1>

        <input onChange={(e)=>(setuser(e.target.value))} type="text" name="" id="" />
        <br />
        <button onClick={handlebtn} >Add</button>

        {
            users.map((item)=>{
               return <h2>{item}</h2>
            })
        }


      

        </>
    )
}