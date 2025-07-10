export function Html_in_js(){
    
    const user = "Anil" ;
    let x = 67;
    let y = 43;

    const userObj = {

        name : "Anil",
        age : 42,
        email : "anil@gmail.com"
    }

    return(
        <>
        <h2>The user is {user}</h2>
        <h2>{70+40}</h2>

        <button onClick={()=>alert("An Alert")}>Click Here</button><br />
        {x*y}

        <h2>{userObj.email}</h2>
        
        </>
    )
}