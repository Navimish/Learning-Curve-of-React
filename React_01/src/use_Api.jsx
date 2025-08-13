import { Suspense, use } from "react";
import Login from "./userComponents";

const apifetch = fetch("https://dummyjson.com/users").then((response) =>
  response.json()
);
console.log(apifetch);

export function Use_api() {
  return (
    <>
      <h1>use Api</h1>

      
      <Suspense fallback ={<h3>Loading.....</h3>}>


      <User_list_api apifetch={apifetch}></User_list_api>
      </Suspense>
    </>
  );
}

function User_list_api({ apifetch }) {
  const list = use(apifetch);
  console.log(list.users);

  return (
    <>
      <h1>User List Api</h1>

      {
      list?.users.map((user) => {
        return<ul>
          <li>{user.firstName}</li>
        </ul>;
      })}

    </>
  );
}
