import React from "react";
import {LinkText, StyledImage, StyledLink} from "./Link.styles";
import {FaBitbucket, FaGithub, FaYoutube} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';

const Link = ({link, type, image}) => {

    const {t} = useTranslation('common');

    return (<StyledLink href={link} target={'_blank'} rel={'noreferrer'}>
        {
            type === 'github' ? <FaGithub color={'white'} size={20} style={{marginRight: 5}}/> :
                type === 'bitbucket' ? <FaBitbucket size={20} style={{marginRight: 5}}/> :
                    type === 'youtube' ? <FaYoutube color={'red'} size={20} style={{marginRight: 5}}/> :
                        type === 'website' ? <StyledImage src={image}/>
                        : <div/>
        }
        <LinkText>{type === 'youtube' ? t('presentation_video') :
            type === 'website' ? t('project_homepage') : t('project_page')}</LinkText>
    </StyledLink>);
};

const types = ['github', 'bitbucket', 'youtube', 'website'];

Link.propTypes = {
    link: PropTypes.string.isRequired,
    type: PropTypes.oneOf(types).isRequired,
    image: PropTypes.string
}

export default Link;
