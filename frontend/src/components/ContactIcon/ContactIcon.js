import React from "react";
import contact from "../../utils/contact";
import {CgMail} from "react-icons/cg";
import {FaBitbucket, FaGithub, FaLinkedin} from "react-icons/fa";
import {DiscordIcon} from "../DiscordIcon/DiscordIcon";
import "./ContactIcon.styles.css";

const ContactIcon = ({type}) => {
    return (
        <div className={'icon-item'}>
            {
                type === 'discord' ?
                    <DiscordIcon/> :
                    <a color={'white'} target={'_blank'} rel={'noreferrer'} style={{outline: 'none'}}
                       href={type === 'email' ? 'mailto:' + contact.email : contact[type]}>
                        {
                            type === 'email' ?
                                <CgMail type={'email'} className={'icon'}/> :
                                type === 'github' ?
                                    <FaGithub type={'github'} className={'icon'}/> :
                                    type === 'bitbucket' ?
                                        <FaBitbucket type={'bitbucket'} className={'icon'}/> :
                                        type === 'linkedin' ?
                                            <FaLinkedin type={'linkedin'} className={'icon'}/> : <div/>

                        }
                    </a>
            }
        </div>
    )
}

export default ContactIcon;
