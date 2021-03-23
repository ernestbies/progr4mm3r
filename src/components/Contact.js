import React from 'react';
import {FaGithub, FaBitbucket, FaDiscord} from 'react-icons/fa';
import {CgMail} from "react-icons/cg";

const Contact = () => {

    const DISCORD_NAME = 'tsl#2025';

    const copyName = () => {
        let input = document.createElement('input');
        document.body.appendChild(input);
        input.value = DISCORD_NAME;
        input.select();
        document.execCommand('copy',false);
        input.remove();

        let tooltipText = document.getElementById('discordName');
        tooltipText.innerHTML = '<p style="color: orange; display: inline;">tsl#2025</p> has been copied to clipboard!';
    };

    const outCopyName = () => {
        let tooltipText = document.getElementById('discordName');
        tooltipText.innerHTML = '<p>Click here to copy the username</p>';
    }

    return (
        <div id={'contact'} className={'item-dashboard'}>
            <p style={{color: 'white', display: 'inline-block', fontFamily: 'Open Sans', fontWeight: 300, marginTop: 20}}>Contact with me</p>
            <div className={'contact-icons'}>
                <div className={'iconDiv'}>
                    <a color={'white'} target={'_blank'} rel={'noreferrer'} style={{outline: 'none'}} href={'https://github.com/ernestbies/'}>
                        <FaGithub type={'github'} className={'icon'} size={80}/></a>
                </div>
                <div className={'iconDiv'}>
                    <a color={'white'} target={'_blank'} rel={'noreferrer'} style={{outline: 'none'}} href={'https://bitbucket.org/ernestbies/'}>
                        <FaBitbucket type={'bitbucket'} size={80} className={'icon'}/></a>
                </div>
                <div className={'iconDiv'}>
                    <a color={'white'} target={'_blank'} rel={'noreferrer'} style={{outline: 'none'}} href={'mailto:ernestbies@gmail.com'}>
                        <CgMail size={100} type={'email'} className={'icon'}/></a>
                </div>
                <div className={'iconDiv'}>
                    <div className={'tooltipClass'}>
                        <button id={'discordIcon'} onClick={() => copyName()} onMouseOut={() => outCopyName()}
                                color={'white'} style={{backgroundColor: 'transparent', borderWidth: 0, cursor: 'pointer'}}>
                            <span id={'discordName'} className={'tooltipText'}>Click here to copy the username</span>
                            <FaDiscord size={70} type={'discord'} className={'icon'}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
