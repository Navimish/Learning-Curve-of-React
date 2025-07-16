import { College } from "./college"

export function NestedLoop(){

    const collegedata = [

        {
            Name : "bennett",
            Email : "bennett@gmail.com",
            Students : [

                {name : "Sam"},
                {name : "bruce"},
                {name : "superman"},

            ]
        },       
         {
            Name : "Bits",
            Email : "bits@gmail.com",
            Students : [

                {name : "Sam"},
                {name : "bruce"},
                {name : "superman"},

            ]
        },
                  {
            Name : "jaypee",
            Email : "jaypee@gmail.com",
            Students : [

                {name : "Sam"},
                {name : "bruce"},
                {name : "superman"},

            ]
        },
    ]

    return(

        <>

        {
            collegedata.map((college,index)=>(

               <College key={index} college ={college}></College>

            ))
        }

        
        </>
    )
}