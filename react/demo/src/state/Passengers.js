import React, { useState } from 'react'

export default function Passengers() {
    let [passengers, setPassengers] = useState([])

    function addPassenger() {
        let name = document.getElementById("txtName").value;
        let age = document.getElementById("txtAge").value;
        // passengers.push( {name : name, age : age} )
        setPassengers([...passengers, { name: name, age: age }])
        console.log(passengers)
    }

    function deletePassenger(idxToDelete) {
        // delete passenger at the given index 
        let newPassengers = passengers.filter( (p, idx) => idx !== idxToDelete);
        setPassengers( [...newPassengers])
    }

    return (
        <>
            <h2>Passengers</h2>
            Name : <input type="text" id="txtName" />
            Age :  <input type="number" id="txtAge" />
            <button onClick={addPassenger}>Add</button>
            <p></p>

            <table className="table table-bordered">
                <thead>
                    <tr  className="bg-primary text-white" >
                        <th>Name</th>
                        <th>Age</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        passengers.map((p, idx) =>
                            <tr key={idx}>
                                <td>{p.name}</td>
                                <td>{p.age}</td>
                                <td className="text-center"><button onClick={() => deletePassenger(idx)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </>
    )
}
