import { useActionState } from "react"

export function UseActionState(){

   async function handleAction(prevdata, formdata){

        const name = formdata.get('name');
        const pass = formdata.get("pass");

        
        await new Promise((res)=>setTimeout(res,2000))
        console.log(name," ,",pass);

        if(name && pass){
            return {message : "Data submitted" ,name,pass }
        }else{
            return {error : "Please Enter correct Data"}
        }
        

    }


    const[data,action,pending] = useActionState(handleAction,null) // in place of null use {} so that data?.name can only be written as data.name

    // console.log(data);

    return(
        <>
            <form action={action}>
                <input type="text" name="name" id="" defaultValue={data?.name}/>
                <hr />
                <input type="text" name="pass" id="" defaultValue={data?.pass} />
                <hr />
                <button disabled={pending}>submit</button>
            </form>
            <br />

            {
                data?.error && <span style={{color: "red"}}>{data?.error}</span>
            }

            {
                data?.message && <span style={{color: "green"}}>{data?.message}</span>
            }


            <h1>Name : {data?.name}</h1>
            <h1>Password : {data?.pass}</h1>
        </>
    )
}