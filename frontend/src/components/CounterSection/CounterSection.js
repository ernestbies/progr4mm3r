import {incrementValue} from "../../actions/counterActions";
import {connect} from "react-redux";
import React from "react";
import {CounterParagraph} from "./CounterSection.styles";

const CounterSection = ({counter, incrementValue}) => {

    const inc = () => {
        //console.log('counter = ', counter, 'status = ', status);
        incrementValue();
    }

    return (
        <CounterParagraph className={'colored-text'}>
            <span style={{fontWeight: 'bold'}}>{'~'}</span>
            <span style={{color: 'white'}}>{' click '}</span>
            <span style={{fontSize: 20, cursor: 'pointer'}} onClick={() => inc()}>&#10084;</span>
            <span style={{color: 'white'}}>{' for '}</span>{'javascript'}
            <span style={{fontWeight: 'bold'}}>{'\n- '}</span>
            <span style={{color: 'white'}}>{`you've clicked overall `}</span>
            <span style={{fontWeight: 'bold'}}>{counter}</span>
            <span style={{color: 'white'}}>{' times'}</span>
        </CounterParagraph>
    )
};

const mapStateToProps = ({counterReducer}) => ({counter: counterReducer.counter});

const mapDispatchToProps = {incrementValue};

export default connect(mapStateToProps, mapDispatchToProps)(CounterSection);
