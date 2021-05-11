import React, {useState} from "react";
import {CgMail, RiMessage3Line} from "react-icons/all";
import ConfirmAlert from "./ConfirmAlert";
import ReCAPTCHA from "react-google-recaptcha/lib/esm/recaptcha-wrapper";

const ContactForm = () => {

    const recaptchaRef = React.createRef();
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [text, setText] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('info');
    const [recaptcha, setRecaptchaValue] = useState('');

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

    return (
        <form id={'dm'} style={{
            maxWidth: 700, width: '95%', backgroundColor: 'red', margin: 10, borderRadius: 25,
            border: '1px solid #FFFFFF90', background: '#00000090',
        }}>
            <div style={{display: 'flex', marginLeft: 30, marginTop: 50, alignItems: 'center'}}>
                <input value={email} className={'input-field'} style={{order: 1, width: '50%'}} type={'email'}
                       placeholder={'E-mail address'} onChange={(event) => setEmail(event.target.value)}
                       required={true}/>
                <CgMail className={'input-icon'} size={30}/>
            </div>

            <div style={{display: 'flex', marginLeft: 30, marginTop: 30, alignItems: 'center'}}>
                <input value={topic} style={{order: 1, width: '70%'}} className={'input-field'} type={'text'}
                       placeholder={'Topic'} pattern="\s*(\S\s*){1,}"
                       onChange={(event) => setTopic(event.target.value)} required={true}/>
                <RiMessage3Line className={'input-icon'} size={30}/>
            </div>

            <textarea value={text} className={'contact-textarea'} placeholder={'Type here...'}
                      onChange={(event) => setText(event.target.value)} required={true}/>

            <div style={{display: 'flex', marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                <ReCAPTCHA ref={recaptchaRef}  theme={'dark'} onChange={(value) => setRecaptchaValue(value)}
                           sitekey={'6LdCr7saAAAAAMgbDCtCl4u6GQ_WAba9ZkZgrFd1'} hl={'en-GB'}/>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 20, alignItems: 'center'}}>
                <button disabled={!email || isEmptyOrSpaces(topic) || !text || !recaptcha} form={'dm'} onClick={() => confirmDm()}
                        type={'button'}
                        className={'confirm-btn'}>Send
                </button>
            </div>

            <ConfirmAlert showAlert={showAlert} setShowAlert={setShowAlert} variant={alertVariant}/>
        </form>
    );
}

export default ContactForm;
