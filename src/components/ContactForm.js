import React, {useState} from "react";
import {CgMail, RiMessage3Line} from "react-icons/all";
import ConfirmAlert from "./ConfirmAlert";

const ContactForm = () => {

    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const confirmDm = () => {
        const data = {email, topic, message};
        console.log(data);
        clearData();
        setShowAlert(true);
    }

    const clearData = () => {
        setEmail('');
        setTopic('');
        setMessage('');
    }

    return (
        <form id={'dm'} style={{
            width: 700, height: 450, backgroundColor: 'red', margin: '0 auto', borderRadius: 25,
            border: '1px solid #FFFFFF90', background: '#00000090'
        }}>
            <div style={{display: 'flex', marginLeft: 30, marginTop: 50, alignItems: 'center'}}>
                <input value={email} className={'input-field'} style={{order: 1}} type={'email'}
                       placeholder={'E-mail address'} onChange={(event) => setEmail(event.target.value)} required={true}/>
                <CgMail className={'input-icon'} size={30}/>
            </div>

            <div style={{display: 'flex', marginLeft: 30, marginTop: 30, alignItems: 'center'}}>
                <input value={topic} style={{order: 1, width: 400}} className={'input-field'} type={'text'}
                       placeholder={'Topic'}
                       onChange={(event) => setTopic(event.target.value)} required={true}/>
                <RiMessage3Line className={'input-icon'} size={30}/>
            </div>

            <textarea value={message} className={'contact-textarea'} placeholder={'Type here...'}
                      onChange={(event) => setMessage(event.target.value)} required={true}/>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <button disabled={!email || !topic || !message} form={'dm'} onClick={() => confirmDm()} type={'button'} className={'confirm-btn'}>Send</button>
            </div>

            <ConfirmAlert showAlert={showAlert} setShowAlert={setShowAlert}/>
        </form>
    );
}

export default ContactForm;
