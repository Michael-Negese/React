import React from 'react'

// function Greet(){
//     return <h1>Hello Gelila Mamo Biresaw</h1>
// }
export const Greet = (props) =>{ 
console.log(props)
return (
     <div>
         <h1> 
            {props.Name} A.K.A  {props.marvelName} 
        </h1>
         {props.children}
     </div>
)
 }
// export default Greet;