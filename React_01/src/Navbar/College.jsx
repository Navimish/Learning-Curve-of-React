import { Link, Outlet } from "react-router"
export function MyCollege(){

    return(
        <div style={{textAlign :"center"}}>
            <h1>College Page</h1>
            <Link to={'sectionA'}><h2>Section A</h2></Link>
            <Link to={'sectionB'}><h2>Section B</h2></Link>
            <Link to={'sectionC'}><h2>Section C</h2></Link>
            <Outlet></Outlet>
        
        </div>
    )
}