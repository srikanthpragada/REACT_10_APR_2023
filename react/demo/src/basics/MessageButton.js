import React from 'react'

// Working with properties 
export default function MessageButton(props) {

  function showMessage() {
      alert(props.message)
  }
  return (
     <button onClick={showMessage}>Click Here</button>
  )
}
