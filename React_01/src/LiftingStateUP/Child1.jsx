

function Child1({setUser}) {

    
  return (
    <div>

        <h1>My user</h1>
        <input  onChange ={(e)=>(setUser(e.target.value))} type="text" name="" id="" />
      
    </div>
  )
}

export default Child1
