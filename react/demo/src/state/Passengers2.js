import React, { useState } from 'react'

// Component to add Passenger 
function AddPassenger({ addPassenger }) {
    function addNewPassenger() {
        let name = document.getElementById("txtName").value;
        let age = document.getElementById("txtAge").value;
        // call a function in parent through property 
        addPassenger({ name: name, age: age })
    }

    return (
        <>
            <h2>Passengers</h2>
            Name : <input type="text" id="txtName" />
            Age :  <input type="number" id="txtAge" />
            <button onClick={addNewPassenger}>Add</button>
        </>
    )

}

function ListPassengers({ passengers, deleteFunc }) {
    function deletePassengerByIdx(idx) {
        // call a function in parent through property 
        deleteFunc(idx)
    }

    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr className="bg-primary text-white" >
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
                                <td className="text-center">
                                    <button onClick={() => deletePassengerByIdx(idx)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </>
    )
}

export default function Passengers() {
    let [passengers, setPassengers] = useState([])

    function addPassenger(newPassenger) {
        // add new passenger to passengers collection
        setPassengers([...passengers, newPassenger])
    }

    function deletePassenger(idxToDelete) {
        // delete passenger at the given index 
        let newPassengers = passengers.filter((p, idx) => idx !== idxToDelete);
        setPassengers([...newPassengers])
    }

    return (
        <>
            <AddPassenger addPassenger={addPassenger} />
            <p></p>
            {passengers.length > 0 ?
                <ListPassengers passengers={passengers} deleteFunc={deletePassenger} />
                : <h5>No passengers</h5>
            }
        </>
    )
}
