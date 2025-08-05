import React, { useRef, useState } from 'react'

function Practice() {

    const [user, setuser] = useState(0);
    const [last, setlast] = useState(null);

    const userRef = useRef(null);

    function handlebtn(){

        setuser(user+1);
        setlast(userRef.current.value)


    }

    
  return (
    <div>

        <h1>Total user : {user}</h1>
        <h1>Total unique user : </h1>
        <h1>Last user :{last} </h1>

        <input ref={userRef} type="text" name="" id="" />
        <br />
        <button onClick={handlebtn}>Add</button>
      
    </div>
  )
}

export default Practice
