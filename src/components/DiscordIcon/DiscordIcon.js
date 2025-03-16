import React from 'react';
import contact from '../../utils/data/contact';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { DiscordIconWrapper } from './DiscordIcon.styles';

export const DiscordIcon = () => {
    const { t } = useTranslation('common');

    const copyName = () => {
        let input = document.createElement('input');
        document.body.appendChild(input);
        input.value = contact.discord;
        input.select();
        document.execCommand('copy', false);
        input.remove();

        let tooltipText = document.getElementById('discordName');
        tooltipText.innerHTML =
            '<p style="color: orange; display: inline;">' +
            contact.discord +
            ' <span style="color: white">' +
            t('copied_text') +
            '</span></p>';
    };

    const outCopyName = () => {
        let tooltipText = document.getElementById('discordName');
        tooltipText.innerHTML = '<p>' + t('copy_text') + '</p>';
    };

    return (
        <DiscordIconWrapper className={'tooltip-class'}>
            <button
                id={'discordIcon'}
                onClick={() => copyName()}
                onMouseOut={() => outCopyName()}
                color={'white'}
                style={{
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    cursor: 'pointer',
                }}
            >
                <span id={'discordName'} className={'tooltip-text'}>
                    {t('copy_text')}
                </span>
                <FontAwesomeIcon
                    icon={faDiscord}
                    type={'discord'}
                    className={'icon'}
                />
            </button>
        </DiscordIconWrapper>
    );
};
