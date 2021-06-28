import {FaDiscord} from "react-icons/fa";
import React from "react";
import contact from "../../utils/contact";
import {useTranslation} from "react-i18next";

export const DiscordIcon = () => {

    const {t} = useTranslation('common');

    const copyName = () => {
        let input = document.createElement('input');
        document.body.appendChild(input);
        input.value = contact.discord;
        input.select();
        document.execCommand('copy', false);
        input.remove();

        let tooltipText = document.getElementById('discordName');
        tooltipText.innerHTML = '<p style="color: orange; display: inline;">' + contact.discord + ' <span style="color: white">' + t('copied_text') + '</span></p>';
    };

    const outCopyName = () => {
        let tooltipText = document.getElementById('discordName');
        tooltipText.innerHTML = '<p>' + t('copy_text') + '</p>';
    }

    return (
        <div className={'tooltipClass'}>
            <button id={'discordIcon'} onClick={() => copyName()} onMouseOut={() => outCopyName()}
                    color={'white'}
                    style={{backgroundColor: 'transparent', borderWidth: 0, cursor: 'pointer'}}>
                                <span id={'discordName'}
                                      className={'tooltipText'}>Click here to copy the username</span>
                <FaDiscord type={'discord'} className={'icon'}/></button>
        </div>
    )
}
