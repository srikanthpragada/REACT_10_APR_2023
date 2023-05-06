import React, { useState } from 'react'

export default function Passengers() {
    let [passengers, setPassengers] = useState([])

    function addPassenger() {

    }

    return (
        <>
            <h2>Passengers</h2>
            Name : <input type="text" id="txtName" />
            Age :  <input type="number" id="txtAge" />
            <button onClick={addPassenger}>Add</button>
            <p></p>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>&nbsp;</th>
                </tr>

            </table>

        </>
    )
}
