// import {useState,useEffect} from 'react';

// function Example(){
//     const [count,setcount]=useState(0);
//     useEffect(()=>{
//         console.log("component mounted or updated");
//         return()=>{
//             console.log("component unmounted");
//     };
// },[]);

//     useEffect(()=>{
//         if(count!==0){
//             console.log("component updated ");
//             console.log("current count is ",count);
//         }
//     },[count])


//     return (
//         <>
//         <div>
//             <h1>hello</h1>
//             <button onClick={()=>setcount(count+1)}>Increase</button>
//         </div>
//         </>
//     )

// }

// export default Example;

import {useState,useEffect} from 'react';

function Example(){
   const [count,setcount]=useState(0);

   useEffect(()=>{
    console.log("component mounted");
    return()=>{
        console.log("compomnent unmounted");
    }
   },[]);

   useEffect(()=>{
    if(count!=0){
        console.log("component updated");
        console.log(count);
    }
   },[count]);

   return(
    <>
    <button onClick={()=>setcount(count+1)}>Increase</button>
    </>
   )
}

export default Example;