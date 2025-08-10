import { useEffect, useState } from "react";

export function ApiData() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    userdata();
  }, []);

  async function userdata() {
    const url = "https://dummyjson.com/users";

    const response = await fetch(url);
    const alldata = await response.json();

    setdata(alldata.users);
  }

  return (
    <>
      <ul className="flex justify-evenly border-b border-gray-300 font-bold py-2 bg-gray-100">
        <li className="w-1/4 text-center">ID</li>
        <li className="w-1/4 text-center">Fname</li>
        <li className="w-1/4 text-center">Lname</li>
        <li className="w-1/4 text-center">Age</li>
      </ul>

      {data.map((user) => {
        return (
          <ul
            key={user.id}
            className="flex justify-evenly border-b border-gray-300 py-2 hover:bg-gray-50"
          >
            <li className="w-1/4 text-center">{user.id}</li>
            <li className="w-1/4 text-center">{user.firstName}</li>
            <li className="w-1/4 text-center">{user.lastName}</li>
            <li className="w-1/4 text-center">{user.age}</li>
          </ul>
        );
      })}
    </>
  );
}
