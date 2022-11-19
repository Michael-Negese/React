import React from 'react'
import './myStyles.css'
function StyleSheet(props) {
    const Name= props.primary? 'primary' : ''
  return (
    <div className={`${Name} font-xl`}><h1>StyleSheet</h1></div>
  )
}

export default StyleSheet