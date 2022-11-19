import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Clicked button')
    }
  return (
    <div>
        <button onClick={clickHandler}>fButton</button>
    </div>
  )
}

export default FunctionClick