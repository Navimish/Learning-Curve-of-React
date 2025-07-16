import { ArrayUser } from "./ArrayUser"

export function Array2(){


    const userdata = [
        {
            id: 1,
            name : "Anil",
            email: "Anil@gmail.com",
            salary: 27000

        },
         {
            id: 2,
            name : "sam",
            email: "sam@gmail.com",
            salary: 20000

        }, {
            id: 3,
            name : "Rohan",
            email: "rohan@gmail.com",
            salary: 45000

        }, {
            id: 4,
            name : "laxman",
            email: "laxman@gmail.com",
            salary: 67000

        }, {
            id: 5,
            name : "dashrath",
            email: "dashrath@gmail.com",
            salary: 80000

        }
    ]

    return(
        <>

        <h1>USERS</h1>

        {
            userdata.map((user)=>(
                <ArrayUser user={user}></ArrayUser>
            ))
        }

        </>
    )
} 