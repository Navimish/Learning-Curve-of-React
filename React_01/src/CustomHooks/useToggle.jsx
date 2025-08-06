import { useState } from "react";

export function useToggle(defaultval){

    const[val,setval] = useState(defaultval);

    function tooglehandle(newval){

        if(typeof newval == "boolean"){
            setval(newval);
        }else{
            setval(current => !current); 
        }
    }

    return [val, tooglehandle];
}