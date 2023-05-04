// Handling List 

import React from 'react'

export default function Courses() {
  let courses = ['Python','Java', 'Data Science', 'AWS', 'Full Stack']  
  return (
     <>
       <h2>Courses</h2>
       <ul>
          {
            courses.map( (course, idx) => 
                 <li  style={{color : 'blue'}} key={idx}>{course}</li>)
          }
       </ul>
     </>
  )
}
