import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor() {
        super();
        this.state = { counter : 0}
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({ counter : this.state.counter + 1 })
    }

    decrement() {
        this.setState({ counter : this.state.counter - 1 })
    }

    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }
}
