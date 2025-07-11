export function Prop_obj(props){

    console.log(props);
    

    return(
        <>

        <h1>{props.user.name}</h1>
        <h1>{props.user.age}</h1>
        <h1>{props.user.email}</h1>
        <hr />

        </>
    )
}