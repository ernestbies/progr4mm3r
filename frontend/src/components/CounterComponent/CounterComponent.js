import {incrementValue} from "../../actions/counterActions";
import {connect} from "react-redux";
import React from "react";
import {CounterElement} from "./CounterComponent.styles";

const CounterComponent = ({counter, incrementValue}) => {

    return (
        <CounterElement id={'counter'} className={'colored-text'}>
            <p style={{fontSize: 12, marginTop: 80}}>{'>'} <span style={{color: 'white'}}>{'C L I C K   T H I S   '}</span><span
                style={{cursor: 'pointer'}} onClick={() => incrementValue()}>&#10084;</span></p>
            <p style={{fontSize: 12}}>{'>'} <span style={{color: 'white'}}>{'F O R   '}</span>
                <span>{'J A V A S C R I P T'}</span></p>
            <p style={{marginTop: 20, fontSize: 9, fontStyle: 'italic'}}>
                <span style={{color: 'gray'}}>{'Note: '}</span>
                <span style={{color: 'white'}}>{'You clicked a total of '}</span>
                <span>{counter}</span><span style={{color: 'white'}}>{' times.\n'}</span>
                <span style={{color: 'white'}}>
                    {'Access to this statistic is possible\nthrough the use of React Redux.\nHave fun clicking.'}
                </span>
            </p>
        </CounterElement>
    )
};

const mapStateToProps = ({counterReducer}) => ({counter: counterReducer.counter});

const mapDispatchToProps = {incrementValue};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
