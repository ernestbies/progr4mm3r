import React from 'react';
import {FaGithub, FaBitbucket} from 'react-icons/fa';
import {CgMail} from "react-icons/cg";

const Contact = () => {
    return (
        <div id={'contact'} className={'item-dashboard'}>
            <p style={{color: 'white', display: 'inline-block', fontFamily: 'Open Sans', fontWeight: 300}}>Contact with me</p>
            <div style={{marginTop: 50}}>
                <a color={'white'} target={'_blank'} style={{outline: 'none'}} href={'https://github.com/ernestbies/'}>
                    <FaGithub type={'github'} className={'icon'} size={100}/></a>
                <a color={'white'} target={'_blank'} style={{outline: 'none'}} href={'https://bitbucket.org/ernestbies/'}>
                    <FaBitbucket type={'bitbucket'} size={100} className={'icon'} style={{marginLeft: 50, marginRight: 50}}/></a>
                <a color={'white'} target={'_blank'} style={{outline: 'none'}} href={'mailto:ernestbies@gmail.com'}>
                    <CgMail size={100} type={'email'} className={'icon'}/></a>
            </div>
        </div>
    );
}

export default Contact;
