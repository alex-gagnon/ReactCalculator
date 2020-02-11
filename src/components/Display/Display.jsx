import React, { Component } from 'react'
import './Display.css'

class Result extends Component {
    render() {
        return (
            <div id="display">
                <div>
                    <span id="expression">{this.props.expression}</span>
                    <br/>
                    <span id="total">{this.props.total}</span>
                </div>
            </div>
        )
    }
}

export default Result