import { useState } from 'react'

import First from './first'
import Login, { Key, Profile } from './userComponents'
import { Html_in_js } from './html_in_js'
import { Function_Call } from './FuctionCall'
import { States } from './hooks/useState'
import { Toggle } from './Toggle'
import { Multiple_condition } from './Multiple_conditions'
import { Prop_obj } from './props_object'
import { Props_Array } from './Props_Array'
import { Props_click } from './Props_click'
import { Prop_child } from './Props_child'
import { InputField } from './inputfield'
import { HandleCheck } from './HabdleCheckboxes'
import { RadioDropdown } from './Radio&Dropdown'
import { Arrayobj } from './Array1'

function App() {

    const user1 ={
      name: "First",
      age : 34,
      email :"first@gmail.com"

    }

    const user2 ={
      name: "Second",
      age : 39,
      email :"Second@gmail.com"

    }

    const friuts = ["mango","apple", "banana","pineapple"]

    const [name,setname] = useState("harsh")

      return(
        <>
        {/* <h1>Navi</h1>
        <h1>alpha cbkadsbd </h1>
        <First/>
        <Login></Login>
        <Profile></Profile>
        {Key} */}

        {/* <Html_in_js></Html_in_js> */}

        {/* <Function_Call></Function_Call> */}

        {/* <States></States> */}

        {/* <Toggle></Toggle> */}

        {/* <Multiple_condition></Multiple_condition> */}

        {/* <Prop_obj user = {user1}></Prop_obj>
        <Prop_obj user = {user2}></Prop_obj> */}

        {/* <Props_Array fruitname = {friuts}></Props_Array> */}

        {/* <Props_click name ={name}></Props_click>
        <button onClick={()=>setname("Varsha")}> change name</button> */}

        {/* <Prop_child></Prop_child>
        <Prop_child color="orange">
          I am the child
        </Prop_child> */}

        {/* <InputField></InputField> */}

        {/* <HandleCheck></HandleCheck> */}

        {/* <RadioDropdown></RadioDropdown> */}

          <Arrayobj></Arrayobj>


        
        </>

       
      )
}

export default App
