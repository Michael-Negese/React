import React from "react"
const Hello = ()=> {
    // return  <h1>Siuuuuuu</h1>     
    return React.createElement('div',null,React.createElement('h1',{id:'hello', className:'baby'},'Hello Guys'))    
    // return React.createElement('h1',{id:'yeab',className:'siuu'},'Hell Guyz');
}
export default Hello;