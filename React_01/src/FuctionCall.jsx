 function banana(name){
        return alert(name)
    }

export function Function_Call(){

    function apple(){
        return alert("Apple")
    }
   
    function banana(){
        return alert("name")
    }



    return(

        <>
           <h1>This is function call</h1> 

           <button onClick={apple}>Apple alert</button>
           <button onClick={()=>banana("First Banana")}>Banana alert</button>
        </>
    )
}