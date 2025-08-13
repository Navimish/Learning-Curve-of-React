import { lazy, Suspense, useState } from "react"


 const Child = lazy(()=>import('./LazyChild'))

export function LazyParent(){

    const [load,setload] = useState(true);


    return(
        <>

            <button onClick={()=>setload(!load)}>Load Component</button>
            {

                load?null:<Suspense fallback="Loading...."><Child></Child></Suspense>

            }

        </>
    )
}