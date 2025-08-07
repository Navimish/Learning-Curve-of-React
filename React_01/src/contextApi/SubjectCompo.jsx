import { useContext } from "react";
import { SubjectContest } from "./Contextapifile";

export function SubjectCompo() {

    const [subject] = useContext(SubjectContest)
  return (
    <div style={{backgroundColor : "green" , padding : "30px"}}>
      <h1>Subject Componenet </h1>
      <h2>Subject is : {subject}</h2>
    </div>
  );
}
