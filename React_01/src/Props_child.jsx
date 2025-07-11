export function Prop_child({children,color="green"}){

    return(
        <>
            <h1 style={{color:color, border:"5px solid black"}}>
                Hello! everyone

                {children}
            </h1>
        </>
    )
}