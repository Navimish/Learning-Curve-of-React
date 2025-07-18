import { useEffect } from "react";

export function PropEffect({ count, data }) {
  function handlecount() {
    console.log("count updated", { count });
  }

  function handledata() {
    console.log("Data updated", { data });
  }

  useEffect(() => {
    handlecount();
  }, [count]);

  useEffect(() => {
    handledata();
  }, [data]);
  return (
    <>
      <h1>Counter : {count}</h1>

      <h1>Data : {data}</h1>
    </>
  );
}
