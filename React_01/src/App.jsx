import { useState } from "react";
import { NavLink } from "react-router";

import First from "./first";
import Login, { Key, Profile } from "./userComponents";
import { Html_in_js } from "./html_in_js";
import { Function_Call } from "./FuctionCall";
import { States } from "./hooks/useState";
import { Toggle } from "./Toggle";
import { Multiple_condition } from "./Multiple_conditions";
import { Prop_obj } from "./props_object";
import { Props_Array } from "./Props_Array";
import { Props_click } from "./Props_click";
import { Prop_child } from "./Props_child";
import { InputField } from "./inputfield";
import { HandleCheck } from "./HabdleCheckboxes";
import { RadioDropdown } from "./Radio&Dropdown";
import { Arrayobj } from "./Array1";
import { Array2 } from "./Array2";
import { Clock } from "./clock";
import { NestedLoop } from "./Nested/NestedLoop";
import { Effect } from "./useEffect/Effect1";
import { LifeCycle } from "./LifeCycle";
import { Card } from "./Cards/Card";
import { CardStyling } from "./Cards/CardStyling";
import { StyledComponent } from "./StyledComponents";
import { UseRef } from "./hooks/UseRef";
import { Uncontrolled } from "./UncontrolledComponenet";
import { Parent } from "./functionAsProp/parent";
import Practice from "./practice";
import FRparent from "./Forward_ref/FRparent";
import { UseFormStatus } from "./hooks/UseFormStatus";
import UseTansition from "./hooks/UseTansition";
import { DerivedState } from "./DerivedState";
import Parentlift from "./LiftingStateUP/parent";
import ObjectinStates from "./ObjectinStates";
import { UpdateArray } from "./updateArray";
import { UseActionState } from "./hooks/UseActionState";
import UseToggleMain from "./CustomHooks/useToggleMain";
import { CollegeCompo } from "./contextApi/CollegeCompo";
import Routescompo from "./Routing/routes";
import { Navbar } from "./Navbar/Navbar1";
import FirstRoutes from "./Navbar/FirstRoutes";
import { ApiData } from "./Apidata";
import { ApiPractice } from "./ApiPractice";
import { UserList } from "./ApiFiles/userList";
import ApiRoutes from "./ApiFiles/ApiRoutes";
import { FormValidation } from "./FormValidation";
import UseReducerhook from "./hooks/UseReducerhook";
import { LazyParent } from "./LazyLoading/LazyParent";
import { Use_api } from "./use_Api";

function App() {
  const user1 = {
    name: "First",
    age: 34,
    email: "first@gmail.com",
  };

  const user2 = {
    name: "Second",
    age: 39,
    email: "Second@gmail.com",
  };

  const fruits = ["mango", "apple", "banana", "pineapple"];

  const [name, setname] = useState("harsh");

  const [count, setcount] = useState(0);
  const [data, setdata] = useState(0);
  const [display, setdisplay] = useState(true);

  return (
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

      {/* <Arrayobj></Arrayobj> */}

      {/* <Array2></Array2> */}

      {/* <Clock></Clock> */}

      {/* <NestedLoop></NestedLoop> */}

      {/* <Effect></Effect> */}

      {/* {
            display?<LifeCycle count ={count} data ={data}></LifeCycle>:null
          }

          
        <button onClick={()=>{setcount(count+1)}}>update counter</button>
        <button onClick={()=>{setdata(data+1)}}>update data</button>
        <button onClick={()=>{setdisplay(!display)}}>Toggle</button> */}

      {/* <CardStyling></CardStyling> */}

      {/* <StyledComponent></StyledComponent> */}

      {/* <UseRef></UseRef> */}

      {/* <Uncontrolled></Uncontrolled> */}

      {/* <Parent></Parent> */}

      {/* <Userefprac></Userefprac> */ }

      {/* <FRparent></FRparent> */}

      {/* <UseFormStatus></UseFormStatus> */}

      {/* <UseTansition></UseTansition> */}

      {/* <Practice></Practice> */}

      {/* <DerivedState></DerivedState> */}

      {/* <Parentlift></Parentlift> */}

      {/* <ObjectinStates></ObjectinStates> */}

      {/* <UpdateArray></UpdateArray> */}

      {/* <UseActionState></UseActionState> */}

      {/* <UseToggleMain></UseToggleMain> */}

      {/* <CollegeCompo></CollegeCompo> */}
      
      {/* <Routescompo></Routescompo> */}

      {/* <Navbar></Navbar> */}

      {/* <FirstRoutes></FirstRoutes> */}

      {/* <ApiData></ApiData> */}

      {/* <ApiPractice></ApiPractice> */}

        {/* <div className="flex justify-between items-center gap-2 bg-gray-200 p-3 rounded-md">
        <NavLink to="/" className="text-blue-600 font-semibold hover:underline">
          List
        </NavLink>
        <NavLink
          to="/add"
          className="text-blue-600 font-semibold hover:underline"
        >
          Add
        </NavLink>
      </div>

      <ApiRoutes></ApiRoutes> */}

      {/* <FormValidation></FormValidation> */}
      {/* <UseReducerhook></UseReducerhook> */}

      <div style={{textAlign: 'center', marginTop:"100px"}}>


      {/* <LazyParent></LazyParent> */}

      <Use_api></Use_api>
      </div>

     
      

    </>
  );
}

export default App;
