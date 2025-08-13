import React, { useReducer } from 'react'

const emptydata = {
    name : '',
    password :'',
    city : '',
    country :''
}

function reducer(data,action){
    // console.log(data,action);

    return {...data,[action.type] :action.val}
    
    
    

}

function UseReducerhook() {

    const [state,dispatch] = useReducer(reducer,emptydata);
    console.log(state);
    
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>

        <input  type="text" name="name" id="" placeholder='Enter your name' onChange={(e)=>dispatch({val:e.target.value,type: 'name'})} />
        <br /> <br />
        <input type="text" name="password" id="" placeholder='Enter Password' onChange={(e)=>dispatch({val:e.target.value,type: 'password'})} />
        <br /> <br />
        <input type="text" name="city" id="" placeholder='Enter your city' onChange={(e)=>dispatch({val:e.target.value,type: 'city'})} />
        <br /> <br />
        <input type="text" name="country" id="" placeholder='Enter your country' onChange={(e)=>dispatch({val:e.target.value,type: 'country'})} />
        <br /> <br />

        <ul>
            <li>Name : {state.name}</li>
            <li>Name : {state.password}</li>
            <li>Name : {state.city}</li>
            <li>Name : {state.country}</li>
        </ul>
      
    </div>
  )
}

export default UseReducerhook
