import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

export function UserEdit(){

    const {id} = useParams();

    const url =`http://localhost:3000/users/${id}`;
        const [name,setname] = useState("");
        const [email,setemail] = useState("");
        const [age,setage] = useState("");

        const navigate = useNavigate();

    

    useEffect(()=>{

        getdetails();

       

    },[])

    async function getdetails(){


        let response = await fetch(url);

        response = await response.json();

        console.log(response);
        

        setname(response.name)
        setage(response.age)
        setemail(response.email)

    }

    async function editdetails(){

        let response = await fetch(url,{
            method : "put",
            body: JSON.stringify({name,age,email})
        })

        response = await response.json();
        navigate('/');


    }

    return(
        <div style={{textAlign:"center"}}>

        <h1>Edit User Details</h1>
        <br />
        <input type="text" className="border 2px" value={name} onChange={(e)=>setname(e.target.value)}/>
        <br />
        <br />
        <input type="text" className="border 2px" value={email} onChange={(e)=>setemail(e.target.value)} />
        <br />
        <br />
        <input type="text" className="border 2px" value={age}  onChange={(e)=>setage(e.target.value)} />
        <br />
        <br />
        <button className="border 2px" onClick={editdetails}>Edit Details</button>
        
        </div>
    )
}