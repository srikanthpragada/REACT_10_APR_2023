import React from 'react'

export default function CurrentTime() {
  let ct = new Date()  
  return (
    <>
       <hr/>
       <h1 className="brightred">{ct.toString()}</h1>
       <hr/>
    </>
    
  )
}
