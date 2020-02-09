import React, {Component} from 'react'
import KeyPad from './KeyPad'
import Result from './Result'
import { connect } from 'react-redux'
import * as fromCalulator from '../store'
import { calculate } from '../store/actions/calculate'
import './Calculator.css'

class Calculator extends Component {
    render() {
        return (
            <div>    
                <div id="calculator">
                    <h1>React Calculator</h1>
                    <Result {...this.props} />
                    <KeyPad {...this.props} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expression: fromCalulator.getExpression(state),
        total: fromCalulator.getTotal(state)
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        calculate: (buttonKey) => {
            dispatch(calculate(buttonKey))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Calculator)