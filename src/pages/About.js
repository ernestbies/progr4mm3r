import React from 'react';
import {Avatar} from '@material-ui/core';

const About = () => {

    const info = {
        name: 'Ernest',
        surname: 'Bieś',
        country: 'PL',
        city: 'Dąbrowa Tarnowska',
        degree: 'Bachelor\'s in Computer Science',
        dateOfBirth: '1998-03-25',
        text: 'Hi! I am a graduate of the State Higher Vocational School in Tarnów in the field of Computer Science (with a grade of 5.0 on the diploma). From an early age, I was interested in many things related to Information Technology. In my youth, I ran on-line gaming servers that were popular all over the country. I constantly develop my skills and expand my knowledge. I learn fast, I am communicative and ready to work in a team. I am a kind, reliable and helpful person. In addition to computer science, I am interested in many other things, mainly e-sports and cinematography. Take a look at my website to get to know me better.'
    };

    const calculateAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

    return (
        <div id={'about'} className={'item-dashboard row'}
             style={{
                 backgroundImage: "url(images/wallpaper.jpg)",
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 display: 'flex'
             }}>
            <div style={{
                flex: 2,
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Avatar src={'images/me.jpg'}
                        style={{display: 'inline-block', marginTop: 15, width: 200, height: 200}}/>
                <a href={'Ernest_Bies_CV.pdf'} style={{marginBottom: 15}} download={'Ernest_Bies_CV.pdf'}>
                    <button type={'submit'} className={'glow-on-hover'}>
                        Download my CV
                    </button>
                </a>
            </div>
            <div style={{
                flex: 5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'left',
                backgroundColor: '#00000090'
            }}>
                <div className={'info-bar'}>
                    <div style={{width: 5, height: 30, marginLeft: 20, backgroundColor: 'orange'}}/>
                    <p style={{
                        paddingLeft: 7,
                        fontWeight: 300,
                        fontSize: 30,
                        margin: 0,
                    }}>{info.name + ' ' + info.surname}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginLeft: 20, marginTop: 10}}>
                    <p style={{
                        fontWeight: 300,
                        fontSize: 15,
                        margin: 0,
                        marginRight: 7
                    }}>{calculateAge(info.dateOfBirth)}</p>
                    <div style={{width: 1, height: 14, backgroundColor: '#FFFFFF50', marginRight: 7}}/>
                    <p style={{
                        fontWeight: 300,
                        fontSize: 15,
                        margin: 0,
                        paddingRight: 7
                    }}>{info.degree}</p>
                    <div style={{width: 1, height: 14, backgroundColor: '#FFFFFF50', marginRight: 7}}/>
                    <img
                        alt={'country'}
                        width={20}
                        height={12}
                        src={'https://purecatamphetamine.github.io/country-flag-icons/1x1/' + info.country + '.svg'}
                    />
                    <p style={{
                        paddingLeft: 7,
                        fontWeight: 300,
                        fontSize: 15,
                        margin: 0,
                    }}>{info.city}</p>
                </div>
                <div className={'orange-bar'}/>
                <p className={'info-text'}>
                    {info.text}
                </p>
            </div>
        </div>
    );
}

export default About;
