import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';

const NotReleasedProject = ({projectName}) => {

    const {t} = useTranslation('common');

    return (
        <div style={{
            display: 'flex',
            height: 300,
            backgroundColor: '#0D0D0D',
            borderBottom: '1px solid #FFFFFF90',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <Link style={{textDecoration: 'none'}} to={'/hall-of-fame'}>
                <p className={'redirect-text'}>
                    <span style={{fontWeight: 'bold'}}>// </span>
                    <span style={{color: 'white'}}>{t('we')} </span>
                    &#10084; <span style={{color: 'white'}}>javascript</span><br/>
                    <span style={{fontWeight: 'bold'}}>~ </span>
                    <span style={{color: 'white'}}>{t('click_here_to')} </span>
                    cd {projectName}
                </p>
            </Link>
        </div>
    )
};

NotReleasedProject.propTypes = {
    projectName: PropTypes.string.isRequired
}

export default NotReleasedProject;
