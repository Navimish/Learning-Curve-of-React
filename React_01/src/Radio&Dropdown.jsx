import { useState } from "react"

export function RadioDropdown(){

    const [gender,setgender] = useState("Male")
    const [city,setcity] = useState("Delhi")

    function Handleradio(event){

        setgender(event.target.value)

    }

    function Handlecity(event){

        setcity(event.target.value)
    }

    return(

        
        <>

            <h1>Select Gender : {gender}</h1>

            <input type="radio" id="male" name="gender" value="Male" onChange={Handleradio} checked = {gender == "Male"}></input>
            <label htmlFor="male">Male</label>        
            
            <input type="radio" id="female" name="gender" value="Female" onChange={Handleradio} checked = {gender== "Female"}></input>
            <label htmlFor="female">female</label>

            <h1>Select City : {city}</h1>

            <select onChange={Handlecity} defaultValue="Mumbai" >
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Agra">Agra</option>
            </select>

        </>
    )
}