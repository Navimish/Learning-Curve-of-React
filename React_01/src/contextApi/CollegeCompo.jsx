import { useState } from "react";
import { ClassCompo } from "./classcompo";
import { SubjectContest } from "./Contextapifile";

export function CollegeCompo() {

    const [sub, setsub] = useState("");
  return (
    <div style={{backgroundColor : "yellow" , padding : "30px"}}>

        <select value={sub} name="" id="" onChange={(e)=>setsub(e.target.value)}>
        <option value="">Select Subject </option>
        <option value="Math">Math</option>
        <option value="English">English</option>
        <option value="Science">Science</option>

        </select>
        <button onClick={()=>setsub("")}>Clear</button>

      
      <SubjectContest.Provider value={[sub]}>
        <h1>College Componenet </h1>
        <ClassCompo></ClassCompo>

        
      </SubjectContest.Provider>

    </div>
  );
}
