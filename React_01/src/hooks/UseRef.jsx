import { useRef } from "react"

export function UseRef(){

    const inputRef = useRef(null);
    const h1Ref = useRef(null);


    function inputHandler(){

        inputRef.current.style.color = "red"
        inputRef.current.focus();

    }

    function H1handler(){

        h1Ref.current.style.color = "blue"


    }
    return(
        <>
        
        <input  ref={inputRef} type="text" name="" id="" />
        <button onClick={inputHandler}>Input handler</button>

        <h1 ref={h1Ref}>This is useref handler</h1>
        <button onClick={H1handler}>h1 handler</button>

        </>
    )
}