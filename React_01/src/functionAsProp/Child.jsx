import React from 'react'

function Child({displayname,name}) {
  return (
    <div>

        <button onClick={()=>displayname(name)}>Display Name</button>
      
    </div>
  )
}

export default Child
