import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export function ApiPractice(){

    const [data,setdata] = useState([]);
    const[loading, setloading] = useState(true);
    const navigate = useNavigate();
    const url = 'http://localhost:3000/users';

    async function fetchdata(){


        const response = await fetch(url);
        const alldata = await response.json();

        setdata(alldata)
        setloading(false);

    }

    async function handledelete(id){

        const response = await fetch(url+'/'+id,{
            method : 'delete'
        })

        const data = await response.json();
        fetchdata();
        console.log(data);
        

    }

     function handleedit(id){

        navigate("/edit/"+id);
    }

    useEffect(()=>{
        
        fetchdata();
        // setloading(true);

    },[])

    return(
        <>

            <h1 className="flex justify-center font-bold ml-5 mr-5">Integrating Jason Server And Api loader</h1>
            <hr />
            <ul className="flex justify-between font-bold ml-5 mr-5">
                
                <li>Name</li>
                <li>Email</li>
                <li>Age</li>
                <li>Action</li>
            </ul>
            <hr />


            {
                loading?<h1>Data Loading......</h1>:data.map((user)=>{
                    return <ul className="flex justify-between ml-5 mr-5">
                        
                        <li>{user.name}</li>
                        
                        <li>{user.email}</li>
                        <li>{user.age}</li>
                        <li>
                            <button className="border 2px" onClick={()=>handledelete(user.id)}>Delete</button>
                            <button className="border 2px" onClick={()=>handleedit(user.id)}>Edit</button>
                        </li>
                        
                    </ul>
        
                })
            }

        </>
    )
}