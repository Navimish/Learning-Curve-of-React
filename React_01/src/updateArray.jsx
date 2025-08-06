import { useState } from "react"

export function UpdateArray(){

    const[name, setname] = useState([
        "Anil","harsh", "vijay"
    ])

    const [data,setdata] = useState([
        {
            name : "Anil",
            age : 34
        },
        {
            name : "navi",
            age : 22
        },
        {
            name : "saam",
            age : 44
        }
    ])

    function handleinput(user){

        // name[name.length -1] = user;
        // console.log(name);

        const updatedname = [...name];

        updatedname[updatedname.length-1] = user;


        setname(updatedname)
        
    }

    function handledata(userdata){

        const clone = [...data];

        // clone[clone.length-1].age = userdata;

        const updateditem = {...clone[clone.length-1],age : userdata};

        clone[clone.length-1] = updateditem;



        setdata(clone);

    }



    return(
        <>
            <h1>Updating array in states</h1>

            <input type="text" onChange={(e)=>handleinput(e.target.value)} />

            {
                name.map((item,idx)=>{
                   return <h3 key={idx}>{item}</h3>
                })
            }

            <hr />

            <input type="text" onChange={(e) =>handledata(e.target.value)} />

            {
                data.map((item,idx)=>{
                    return <h3 key={idx}>{item.name},{item.age}</h3>
                })
            }


        </>
    )
}