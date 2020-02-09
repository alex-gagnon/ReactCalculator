import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div id="display">
                <div>
                    <span id="expression">{this.props.expression}</span>
                </div>
                <div>
                    <p id="total">{this.props.total}</p>
                </div>
            </div>
        )
    }
}

export default Result