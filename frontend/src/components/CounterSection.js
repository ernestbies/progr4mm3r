import {incrementValue} from "../actions/counterActions";
import {connect} from "react-redux";
import React from "react";

// Functional component with global state using Redux
const CounterSection = ({counter, incrementValue}) => {
    return (
        <p style={{
            userSelect: 'none',
            marginTop: 10,
            fontSize: 17,
            marginBottom: 40,
            whiteSpace: 'pre-wrap'
        }} className={'colored-text'}>
            <span style={{fontWeight: 'bold'}}>{'~'}</span>
            <span style={{color: 'white'}}>{' click '}</span>
            <span style={{fontSize: 20, cursor: 'pointer'}} onClick={() => incrementValue()}>&#10084;</span>
            <span style={{color: 'white'}}>{' for '}</span>{'javascript'}
            <span style={{fontWeight: 'bold'}}>{'\n- '}</span>
            <span style={{color: 'white'}}>{`you've clicked overall `}</span>
            <span style={{fontWeight: 'bold'}}>{counter}</span>
            <span style={{color: 'white'}}>{' times'}</span>
        </p>
    )
};

const mapStateToProps = ({counterReducer}) => ({counter: counterReducer.counter});

const mapDispatchToProps = {incrementValue};

export default connect(mapStateToProps, mapDispatchToProps)(CounterSection);
