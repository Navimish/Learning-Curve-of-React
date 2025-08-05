import React, { useState } from "react";

function ObjectinStates() {
  const [data, setdata] = useState({
    name: "Anil",
    address: {
      city: "Noida",
      country: "India",
    },
  });

  function handlename(name) {
   

    setdata({ ...data,name : name });
  }

  function handlecity(city) {
    // data.address.city = city;

    
    setdata({ ...data,address :{...data.address,city : city} });
    console.log(data);
  }

  function handlecountry(country) {
    // data.address.country = country;

    console.log(data);

    setdata({ ...data,address :{...data.address,country : country} });
  }

  return (
    <div>
      <h1>User Data</h1>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => handlename(e.target.value)}
      />
      <input
        type="text"
        name="city"
        placeholder="city"
        onChange={(e) => handlecity(e.target.value)}
      />
      <input
        type="text"
        name="country"
        placeholder="country"
        onChange={(e) => handlecountry(e.target.value)}
      />

      <h1>Name : {data.name}</h1>
      <h1> City : {data.address.city}</h1>
      <h1> Country : {data.address.country}</h1>
    </div>
  );
}

export default ObjectinStates;
