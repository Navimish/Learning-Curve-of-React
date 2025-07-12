import { useState } from "react";

export function HandleCheck(){

    const [skills,setskills] = useState([]);

     function HandleCheck(event){

        const {value,checked} = event.target;

        if(checked){

            setskills([...skills,value])
        }else{
            setskills(skills.filter((skill)=>skill != value))
        }

    }

    return(
        <>
            <h1>Select the Skills</h1>
            <input type="checkbox" value="JAVA" id="java" onChange={HandleCheck} />
            <label htmlFor="java" >JAVA</label>
            <br />
            <br />

            <input type="checkbox" value="CPP" id="cpp" onChange={HandleCheck}/>
            <label htmlFor="cpp">CPP</label>

            <br />
            <br />

            <input type="checkbox" value="React" id="react" onChange={HandleCheck}/>
            <label htmlFor="react">React</label>
            <br />
            <br />

            <input type="checkbox" value="JS" id="js" onChange={HandleCheck}/>
            <label htmlFor="js">JS</label>
            <br />
            <br />

            {/* <ul>
               
               {skills.map((skill)=>(
                <li>{skill}</li>
               ))}
            </ul> */}

            <h1>{skills.join(", ")}</h1>
            
            
        </>
    )
}