import React, { useState } from 'react'


export default function Courses2() {
    let coursesData = [
           {name : 'Python', fee : 10000},
           {name : 'Java', fee : 15000},
           {name : 'AWS', fee : 5000},
           {name : 'React', fee : 4000}
        ] 

    let [courses, setCourses] = useState([])
    let [index, setIndex] = useState([])

    function updateIndex(e) {
        // get selected index 
        console.log(e.target.selectedIndex)
        setIndex(e.target.selectedIndex)
    }

    function addCourse() {
        let course = coursesData[index]; // take selected course
        setCourses([...courses, course])
    }

    function getTotal() {
        let total = 0
        for (let c of courses)
            total += parseInt(c.fee)

        return total;
    }

    return (
        <>
            <h2>Courses</h2>
            <p></p>
            Select Course:
            <select onChange={updateIndex}>
                {
                 coursesData.map( (c, idx) =>
                    <option key={idx} value={c.fee}>{c.name}</option>
                 )
                }
            </select>
            &nbsp;
            < button onClick={addCourse}>Add</button>

            <p></p>
            <table className="table table-bordered">
                <thead>
                    <tr className="bg-primary text-white" >
                        <th>Name</th>
                        <th>fee</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((c, idx) =>
                            <tr key={idx}>
                                <td>{c.name}</td>
                                <td>{c.fee}</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>Total</td>
                        <td>{getTotal()}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

