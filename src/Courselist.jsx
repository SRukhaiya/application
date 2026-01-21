import Course from "./Course.jsx";
function Courselist(){
        const Courses=[
           {name:"rukhaiya",
            course:"react"
           },
           {name:"priya",
            course:"react"
           },
           {name:"pooja",
            course:"react"
           }
        ]
     return(
    Courses.map((item)=>
    <Course name={item.name} course={item.course}/>)

)
    
}

export default Courselist;