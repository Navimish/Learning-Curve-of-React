import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { useState } from 'react'

function Parentlift() {

    const [user, setUser] = useState();
  return (
    <div>

        <Child1 setUser={setUser}></Child1>
        <hr />
        <Child2 user={user}></Child2>
      
    </div>
  )
}

export default Parentlift
