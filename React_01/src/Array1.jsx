export function Arrayobj(){

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

        <table border={1}>
            <thead>
                <tr>

                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Salary</td>
                </tr>
            </thead>
            
            <tbody>

                
                    {
                        userdata.map((user) =>(
                            
                            <tr key={user.id}>

                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.salary}</td>

                            </tr> 

                            // console.log(user.id);
                            
                            
                        ))
                    }

                
             </tbody>
        </table>

        </>
    )
}