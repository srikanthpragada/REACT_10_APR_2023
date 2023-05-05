import React, { Component } from 'react'

export default class EventsWithClass extends Component {
    constructor() {
        super()
        // bind this to process so that this in process refers to this object 
        this.process = this.process.bind(this)
        this.name = "Testing..."
    }
    process() {
        console.log(this.name)
    }

    render() {
        return (
            <>
                <button onClick={this.process}>Do Process</button>
            </>

        )
    }
}
