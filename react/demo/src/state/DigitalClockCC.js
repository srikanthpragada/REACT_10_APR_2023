import React from 'react'

export default class DigitalClockCC extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date().toLocaleTimeString() }
    this.changeTime = this.changeTime.bind(this);
  }

  // run when component is mounted  
  componentDidMount() {
    this.id = setInterval(this.changeTime, 1000)
    console.log(this.id)
  }

  changeTime() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  componentWillUnmount() {
    clearInterval(this.id)
    console.log("Cleaned Up!")
  }
  render() {
    return (
      <>
        <h2>Digital Clock Class</h2>
        <h1>{this.state.time}</h1>
      </>
    )
  }

} // class 
