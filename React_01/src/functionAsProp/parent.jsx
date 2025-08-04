import Child from "./Child";

export function Parent(){

    function displayname(name){
        alert(name);
        
    }

    return(
        <>
         <h1>Function As Prop</h1>
         <Child displayname={displayname} name ="Anil"></Child>
         <Child displayname={displayname} name ="Navneet"></Child>
         <Child displayname={displayname} name ="Anaya"></Child>
         
        </>
    )
}