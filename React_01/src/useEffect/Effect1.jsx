import { useActionState, useEffect, useState } from "react";
import { PropEffect } from "./propsEffect";

export function Effect() {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(0);



  return (
    <>

        <PropEffect count = {count} data = {data}></PropEffect>
      {/* <h1>Count : {count}</h1> */}
      <button onClick={() => setcount(count + 1)}>Update Counter</button>

      {/* <h1>Data : {data}</h1> */}

      <button onClick={() => setdata(data + 1)}>Data</button>
    </>
  );
}
