import {incrementValue} from "../../actions/counterActions";
import {connect} from "react-redux";
import React from "react";
import {CounterElement} from "./CounterComponent.styles";
import {useTranslation} from "react-i18next";

const CounterComponent = ({counter, incrementValue}) => {

    const {t} = useTranslation('common');

    return (
        <CounterElement id={'counter'} className={'colored-text'}>
            <p style={{fontSize: 12, marginTop: 80}}>{'>'} <span style={{color: 'white'}}>{t('counter_section_0')}</span><span
                style={{fontSize: 16, cursor: 'pointer'}} onClick={() => incrementValue()}>{'  '}&#10084;</span></p>
            <p style={{fontSize: 12}}>{'>'} <span style={{color: 'white'}}>{t('counter_section_1')}</span>
                <span>{'   J A V A S C R I P T'}</span></p>
            <p style={{marginTop: 20, fontSize: 9, fontStyle: 'italic'}}>
                <span style={{color: 'gray'}}>{t('counter_section_2')}{': '}</span>
                <span style={{color: 'white'}}>{t('counter_section_3')}</span>
                <span>{' ' + counter + ' '}</span><span style={{color: 'white'}}>{t('counter_section_4')}{'.\n'}</span>
                <span style={{color: 'white'}}>{t('counter_section_5')}</span>
            </p>
        </CounterElement>
    )
};

const mapStateToProps = ({counterReducer}) => ({counter: counterReducer.counter});

const mapDispatchToProps = {incrementValue};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
