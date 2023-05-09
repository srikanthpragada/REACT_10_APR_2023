import React, { useState } from 'react'

// Component to add Passenger 
function AddPassenger({ addPassenger }) {
    let [passenger, setPassenger] = useState( { name : 'Srikanth', age : '30'})

    function addNewPassenger(e) {
        // Prevent default action (reloading the page)
        e.preventDefault();

        if ( passenger.name.trim().length === 0)
        {
            alert("Sorry! Invalid Name. Please enter valid name!");
            return;
        }

        // call a function in parent through property 
        addPassenger(passenger)
    }

    // function updateName(e) {
    //     setPassenger( { ...passenger, name : e.target.value})
    // }

    // function updateAge(e) {
    //     setPassenger( { ...passenger, age : e.target.value})
    // }

    function updateProperty(e) {
        let name = e.target.name     // name of the element/field
        let value = e.target.value  // value of the field 

        // update property whose name is in name variable 
        setPassenger( {...passenger, [name] : value })
    }

    return (
        <>
            <h2>Passengers</h2>
            <form onSubmit={addNewPassenger}>
                Name : <input type="text" name="name"
                              value={passenger.name}
                              onChange={updateProperty}
                              required pattern='[a-zA-Z ]+'/>
                Age :  <input type="number" name="age"
                              value = {passenger.age}
                              onChange={updateProperty}
                              min="12" max="115"  required />
                <button>Add</button>
            </form>
        </>
    )

}

function ListPassengers({ passengers, deleteFunc, clearAllFunc }) {
    function deletePassengerByIdx(idx) {
        // take confirmation 
        if (window.confirm("Do you want to delete passenger?")) {
            // call a function in parent through property 
            deleteFunc(idx)
        }
    }

    function clearAll() {
        if (window.confirm('Do you want to delete all passengers information?'))
             clearAllFunc();
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
            <p></p>
            <button onClick={clearAll}>Clear All</button>
        </>
    )
}

export default function Passengers() {
    let [passengers, setPassengers] = useState([])

    function addPassenger(newPassenger) {
        // add new passenger to passengers collection
        // check whether name is already present 
        let found = passengers.find((p, idx) => p.name === newPassenger.name);
        if (!found)
            setPassengers([...passengers, newPassenger])
        else
            alert("Sorry! Duplicate passenger name!")
    }

    function deletePassenger(idxToDelete) {
        // delete passenger at the given index 
        let newPassengers = passengers.filter((p, idx) => idx !== idxToDelete);
        setPassengers([...newPassengers])
    }

    function clearAll() {
        setPassengers([]);
    }

    return (
        <>
            <AddPassenger addPassenger={addPassenger} />
            <p></p>
            
            {
               // Conditional rendering
               passengers.length > 0 ?
                <ListPassengers passengers={passengers}
                    deleteFunc={deletePassenger}
                    clearAllFunc={clearAll}
                />
                : <h5>No passengers</h5>
            }
        </>
    )
}
