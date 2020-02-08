import React, {Component} from 'react';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }

        this.calculate = this.calculate.bind(this)
        this.reset = this.reset.bind(this)
        this.backspace = this.backspace.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    calculate() {
        try {
            this.setState({
                result: (eval(this.state.result) || "") + ""
            })
        } catch(e) {
            this.setState({
                result: "error"
            })
        }
    }

    reset() {
        this.setState({
            result: ""
        })
    }

    backspace() {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    handleClick(e) {
        let btn = e.target.value
        switch(btn) {
            case "=":
                this.calculate()
                break
            case "C":
                this.reset()
                break
            case "CE":
                this.backspace()
                break
            default:
                this.setState({
                    result: this.state.result + btn
                })
        }
    }

    render() {
        return (
            <div id="calculator">
                <h1>React Calculator</h1>
                <Result result={this.state.result} />
                <KeyPad handleClick={this.handleClick} />
            </div>
        )
    }
}

class Result extends Component {
    render() {
        return (
            <div id="display">
                <p>{this.props.result}</p>
            </div>
        )
    }
}

class KeyPad extends Component {
    render() {
        return (
            <div id="top-keyPad-block">
                <button id="clear" className="keypad"
                onClick={this.props.handleClick}>C</button>
                <div id="keyPads-block">
                {keyPads.reverse().map(obj => (
                    <button id={obj.name} key={obj.name} className="keypad" 
                    onClick={this.props.handleClick}>{obj.val}</button>
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
]

export default Calculator