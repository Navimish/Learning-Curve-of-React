import { MyStudents } from "./MyStudents";

export function College({ college }) {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          padding: "12px",
          margin: "10px 0",
          borderRadius: "8px",
          background: "#f4f4f4",
          width: "300px",
        }}
      >
        <h1>{college.Name}</h1>
        <h1>{college.Email}</h1>

        <ul>

        {college.Students.map((std,index)=>(
            
            <MyStudents std={std} key ={index}></MyStudents>
            
        ))}
        </ul>
      </div>
    </>
  );
}
