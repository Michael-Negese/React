import React from 'react'
import './appStyle.css'

const heading = {
    fontSize: '72px',
    color:'blue'
}

function Inline() {

  return (

    <div>
        <h1 style={heading}>inline</h1>
        <h1 className='error'>Error</h1>
    </div>
  )
}

export default Inline