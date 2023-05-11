import React, {useState, useEffect} from 'react'

export default function DigitalClock() {
  let [time, setTime] = useState("")

  useEffect( 
    () => {
      let id = setInterval(changeTime, 1000)
      console.log(id)

      return () => {
        // Cleanup code
        clearInterval(id)
        console.log("Cleaned up!")
      };

    }, []
  )

  function changeTime() {
    setTime( new Date().toLocaleTimeString())
  }
  return (
     <h1>{time}</h1>
  )
}
