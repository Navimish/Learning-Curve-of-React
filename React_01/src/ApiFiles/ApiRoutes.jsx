import React from 'react'
import { Routes,Route } from 'react-router'
import { UserList } from './userList'
import { UserEdit } from './UserEdit'
import UserAdd from './userAdd'

function ApiRoutes() {
  return (
    <div>

        <Routes>
            <Route path="/" element ={<UserList/>}></Route>
            <Route path="/add" element ={<UserAdd></UserAdd>}></Route>
            <Route path="/edit/:id" element ={<UserEdit></UserEdit>}></Route>


        </Routes>
      
    </div>
  )
}

export default ApiRoutes
