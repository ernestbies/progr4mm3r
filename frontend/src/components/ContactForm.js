import React, {useState} from "react";
import {CgMail, RiMessage3Line} from "react-icons/all";
import ConfirmAlert from "./ConfirmAlert";
import ReCAPTCHA from "react-google-recaptcha/lib/esm/recaptcha-wrapper";
import {useTranslation} from "react-i18next";

const ContactForm = () => {

    const recaptchaRef = React.createRef();
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [text, setText] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('info');
    const [recaptcha, setRecaptchaValue] = useState('');
    const {t, i18n} = useTranslation('common');

    const confirmDm = () => {
        const data = {email, topic, text, recaptcha};
        sendData(data).then((res) => {
            if (res.ok) {
                setAlertVariant('info');
            } else {
                setAlertVariant('danger');
            }
            setShowAlert(true);
        }).catch(() => {
            setAlertVariant('danger');
            setShowAlert(true);
        });

        recaptchaRef.current.reset();
        setRecaptchaValue('');
        clearData();
    }

    const sendData = (data) => {
        return fetch(`http://localhost:4200/api/contact`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
    }

    const isEmptyOrSpaces = (str) => str === null || str.match(/^ *$/) !== null;

    const clearData = () => {
        setEmail('');
        setTopic('');
        setText('');
    }

    const generateRecaptcha = () => {
        if(i18n.language === 'en') {
            return <ReCAPTCHA ref={recaptchaRef} theme={'dark'} onChange={(value) => setRecaptchaValue(value)}
                              sitekey={'6LdCr7saAAAAAMgbDCtCl4u6GQ_WAba9ZkZgrFd1'} hl={'en-GB'}/>
        } else {
            return <div><ReCAPTCHA ref={recaptchaRef} theme={'dark'} onChange={(value) => setRecaptchaValue(value)}
                              sitekey={'6LdCr7saAAAAAMgbDCtCl4u6GQ_WAba9ZkZgrFd1'} hl={i18n.language}/></div>
        }
    }

    return (
        <form id={'dm'} style={{
            maxWidth: 700, width: '95%', backgroundColor: 'red', margin: 10, borderRadius: 25,
            border: '1px solid #FFFFFF90', background: '#00000090',
        }}>
            <div style={{display: 'flex', marginLeft: 30, marginTop: 50, alignItems: 'center'}}>
                <input value={email} className={'input-field'} style={{order: 1, width: '50%'}} type={'email'}
                       placeholder={t('email')} onChange={(event) => setEmail(event.target.value)}
                       required={true}/>
                <CgMail className={'input-icon'} size={30}/>
            </div>

            <div style={{display: 'flex', marginLeft: 30, marginTop: 30, alignItems: 'center'}}>
                <input value={topic} style={{order: 1, width: '70%'}} className={'input-field'} type={'text'}
                       placeholder={t('topic')} pattern="\s*(\S\s*){1,}"
                       onChange={(event) => setTopic(event.target.value)} required={true}/>
                <RiMessage3Line className={'input-icon'} size={30}/>
            </div>

            <textarea value={text} className={'contact-textarea'} placeholder={t('type_here') + '...'}
                      onChange={(event) => setText(event.target.value)} required={true}/>

            <div style={{display: 'flex', marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                {generateRecaptcha()}
            </div>

            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20, alignItems: 'center'}}>
                <button disabled={!email || isEmptyOrSpaces(topic) || !text || !recaptcha}
                        form={'dm'}
                        onClick={() => confirmDm()}
                        type={'button'}
                        className={'confirm-btn'}>
                    {t('send')}
                </button>
            </div>

            <ConfirmAlert showAlert={showAlert} setShowAlert={setShowAlert} variant={alertVariant}/>
        </form>
    );
}

export default ContactForm;
