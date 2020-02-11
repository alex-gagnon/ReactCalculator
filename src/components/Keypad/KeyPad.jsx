import React, { Component } from 'react'
import './KeyPad.css'

class KeyPad extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let key = e.target.innerHTML

        switch(key) {
            case 'C':
                this.props.clear()
                break
            case 'CE':
                this.props.delete()
                break
            case '=':
                this.props.evaluate()
                break
            default:
                this.props.calculate(key)
                break
        }
    }

    render() {
        return (
            <div id="keypad-block">
                <div id="top-keypad-block">                    
                    <button id="clear" className="keypad"
                    onClick={this.handleClick}>C</button>
                    <button id="backspace" className="keypad"
                    onClick={this.handleClick}>CE</button>
                </div>
                <div id="bottom-keypad-block">
                {keypadButtons.map(obj => (
                    <button id={obj.name} key={obj.name} className="keypad" 
                    onClick={this.handleClick}>{obj.val}</button>
                ))}
            </div>
        </div>
        )
    }
}
  
  const keypadButtons = [
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