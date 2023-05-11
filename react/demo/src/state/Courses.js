import React, { useState } from 'react'
export default function Courses() {
    let [courses, setCourses] = useState([])

    function addCourse() {
        let coursesList = document.getElementById("ddlCourses")
        let index = coursesList.selectedIndex
        let option = coursesList.options[index];
        // console.log(option)
        // console.log(option.value)
        // console.log(option.text)
        let course = { name: option.text, fee: option.value }
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
            <select id="ddlCourses">
                <option value="10000">Java</option>
                <option value="8000">Python</option>
                <option value="5000">Aws</option>
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

