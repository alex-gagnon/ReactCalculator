import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as fromCalulator from './store'
import { calculate, clear, deleteLastEntry, evaluateExpression } from './store/actions/calculate'
import Calculator from './components'
import './App.css'

class App extends Component {
    render() {
        return (
            <div id="container">    
                <div id="calculator">
                    <h1>React Calculator</h1>
                    <Calculator.Display {...this.props} />
                    <Calculator.KeyPad {...this.props} />
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
        },
        delete: () => {
            dispatch(deleteLastEntry())
        },
        clear: () => {
            dispatch(clear())
        },
        evaluate: () => {
            dispatch(evaluateExpression())
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App)