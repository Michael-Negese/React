import React from 'react'

// function Greet(){
//     return <h1>Hello Gelila Mamo Biresaw</h1>
// }
export const Greet = pops =>{ 
const {name,marvelName}=pops
return (
     <div>
         <h1> 
            {name} A.K.A  {marvelName} 
        </h1>
      
     </div>
)
 }
// export default Greet;