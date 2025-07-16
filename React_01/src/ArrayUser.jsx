export function ArrayUser({user}){

    return(
        <div style={{ border: "5px solid green", padding: "10px", margin: "10px 0",  width:"280px", borderRadius:"16px"}}>

            <h4>ID : {user.id}</h4>
            <h4>Name : {user.name}</h4>
            <h4>Email : {user.email}</h4>
            <h4>Salary : {user.salary}</h4>
        </div>
        
    )
}