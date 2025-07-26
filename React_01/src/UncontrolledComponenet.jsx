import { useRef } from "react";
export function Uncontrolled() {
  const userRef = useRef();
  const passRef = useRef();

  function HandleSubmit(event) {
    event.preventDefault();
    const user = userRef.current.value;
    const pass = passRef.current.value;

    console.log(user, pass);
  }

  return (
    <>
      <h1>Uncontrolled component</h1>
      <form action="">
        <input ref={userRef} type="text" name="" id="" />
        <br /> <br />
        <input ref={passRef} type="text" />
        <br />
        <br />
        <button onClick={HandleSubmit}>Submit</button>
      </form>
    </>
  );
}
