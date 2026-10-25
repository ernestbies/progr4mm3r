import React from 'react';
import contact from '../../utils/data/contact';
import { FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { DiscordIcon } from '../DiscordIcon/DiscordIcon';
import { StyledIcon } from './ContactIcon.styles';
import './ContactIcon.styles.css';

const ContactIcon = ({ type }) => {
    const Icon = () => {
        return type === 'email' ? (
            <FaRegEnvelope type={'email'} className={'icon'} />
        ) : type === 'github' ? (
            <FaGithub type={'github'} className={'icon'} />
        ) : (
            <div />
        );
    };

    return type === 'discord' ? (
        <DiscordIcon />
    ) : (
        <StyledIcon
            iconType={type}
            target={'_blank'}
            rel={'noreferrer'}
            href={type === 'email' ? 'mailto:' + contact.email : contact[type]}
        >
            <Icon />
        </StyledIcon>
    );
};

export default ContactIcon;
