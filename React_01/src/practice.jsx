import { useRef } from "react"

export function Userefprac(){

    const updateRef = useRef();

    function handleUpdate(){

        updateRef.current.value = 200;
    }

    return(
        <>
        <input type="text" ref={updateRef} />
        <button onClick={handleUpdate}>update</button>
        </>
    )
}