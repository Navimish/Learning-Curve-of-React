import { useEffect, useState } from "react";

export function LifeCycle({ count, data }) {
  useEffect(() => {
    console.log("on mounting");
  }, []);

  useEffect(() => {
    console.log("on data updating");
  }, [data]);

  useEffect(() => {
    return () => {
      console.log("Element Unmounted");
    };
  }, []);

  return (
    <>
      <h1>Counter : {count}</h1>
      <h1>Data : {data}</h1>
    </>
  );
}
