import React, { useState } from "react";


function UserAdd() {

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [age,setage] = useState("");

    async function handleAdd(){
        console.log(name,email,age);
        const url = "http://localhost:3000/users";
        const response = await fetch(url,{
            method: "post",
            body : JSON.stringify({name,email,age})
        })

        const data = await response.json();
        console.log(data);

        if(response){
            alert(`User : ${name} added`)
        }

        
    }

  return (
    <div className="text-center">
    
      <h1>Add User</h1>

      <input type="text" name="" id="" placeholder="Enter Name" className="border 2px" onChange={(e)=>setname(e.target.value)}/>
      <br /><br />
      <input type="text" name="" id="" placeholder="Enter email" className="border 2px" onChange={(e)=>setemail(e.target.value)}/>
      <br /><br />
      <input type="text" name="" id="" placeholder="Enter age" className="border 2px" onChange={(e)=>setage(e.target.value)}/>
      <br /><br />
      <button className="border 2px" onClick={handleAdd} >Add user</button>
   
    </div>
  );
}

export default UserAdd;
