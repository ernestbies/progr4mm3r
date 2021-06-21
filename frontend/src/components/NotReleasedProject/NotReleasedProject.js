import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import {UnreleasedProjectDiv} from "./NotReleasedProject.styles";

const NotReleasedProject = ({projectName}) => {

    const {t} = useTranslation('common');

    return (
        <UnreleasedProjectDiv>
            <Link style={{textDecoration: 'none'}} to={'/hall-of-fame'}>
                <p className={'colored-text'}>
                    <span style={{fontWeight: 'bold'}}>~ </span>
                    <span style={{color: 'white'}}>{t('click_here_to')} </span>cd {projectName}
                </p>
            </Link>
        </UnreleasedProjectDiv>
    )
};

NotReleasedProject.propTypes = {
    projectName: PropTypes.string.isRequired
}

export default NotReleasedProject;