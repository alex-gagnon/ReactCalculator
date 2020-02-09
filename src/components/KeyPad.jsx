import React, { Component } from 'react'

class KeyPad extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.calculate(e.target.innerHTML)
    }

    render() {
        return (
            <div id="top-keyPad-block">
                <button id="clear" className="keypad"
                onClick={this.handleClick}>C</button>
                <div id="keyPads-block">
                {keyPads.map(obj => (
                    <button id={obj.name} key={obj.name} className="keypad" 
                    onClick={this.handleClick}>{obj.val}</button>
                ))}
            </div>
        </div>
        )
    }
}
  
  const keyPads = [
    { name: "decimal", val: "." },
    { name: "zero", val: 0 },
    { name: "equals", val: "=" },
    { name: "add", val: "+"},
    { name: "one", val: 1 },
    { name: "two", val: 2 },
    { name: "three", val: 3 },
    { name: "multiply", val: "*" },
    { name: "four", val: 4 },
    { name: "five", val: 5 },
    { name: "six", val: 6 },
    { name: "subtract", val: "-" },
    { name: "seven", val: 7 },
    { name: "eight", val: 8 },
    { name: "nine", val: 9 },
    { name: "divide", val: "/" },
].reverse()

export default KeyPad