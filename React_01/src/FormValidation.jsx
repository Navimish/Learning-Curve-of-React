import { useActionState } from "react"

export function FormValidation(){


    const [data,action,pending] = useActionState(handlelogin);

    function handlelogin(prevdata,formdata){
        // console.log('funcntion called');

        const regex = /^[A-Z0-9]+$/i;

        const name = formdata.get("name");
        const pass = formdata.get("pass");

        if( !name ||name.length > 5){
            return { error : 'Name cannot be greator than 5',name,pass}
        }else if(!pass ||!regex.test(pass)){
            return { error : 'Failed Password Parameters',name,pass}
        }else{
            return {msg : 'Login successful'}
        }
        

        

    }



    return(
        <div style={{textAlign:"center"}}>
         
          <h1 className="font-bold">Form Validation using UseActionState hook</h1>
          <br />
          <br />

          {
            data?.error && <span style={{color:"red"}}>{data?.error}</span>
          }
          {
            data?.msg && <span style={{color:"green"}}>{data?.msg}</span>
          }

            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" id="" className="border 2px" />
                
                <br /><br />
                <input type="text" name="pass" id="" className="border 2px" defaultValue={data?.pass} />
                <br /><br />
                <button className="border 2px">Login</button>
            </form>
        </div>
    )
}