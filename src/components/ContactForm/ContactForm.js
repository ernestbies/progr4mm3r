import React, {useState} from "react";
import {CgMail} from "react-icons/cg";
import {RiMessage3Line} from "react-icons/ri";
import ConfirmAlert from "../ConfirmAlert/ConfirmAlert";
import ReCAPTCHA from "react-google-recaptcha";
import {useTranslation} from "react-i18next";
import {sendMessage} from "../../utils/helpers/fetchData";
import {CaptchaDiv, FormButton, FormButtonWrapper, FormDiv, FormTextArea, StyledForm} from "./ContactForm.styles";
import './ContactForm.styles.css';

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
        sendMessage(data).then((res) => {
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

    const isEmptyOrSpaces = (str) => str === null || str.match(/^ *$/) !== null;

    const clearData = () => {
        setEmail('');
        setTopic('');
        setText('');
    }

    const generateRecaptcha = () => {
        if (i18n.language === 'en') {
            return <ReCAPTCHA ref={recaptchaRef} theme={'dark'} onChange={(value) => setRecaptchaValue(value)}
                              sitekey={'6LdCr7saAAAAAMgbDCtCl4u6GQ_WAba9ZkZgrFd1'} hl={'en-GB'}/>
        } else {
            return <div><ReCAPTCHA ref={recaptchaRef} theme={'dark'} onChange={(value) => setRecaptchaValue(value)}
                                   sitekey={'6LdCr7saAAAAAMgbDCtCl4u6GQ_WAba9ZkZgrFd1'} hl={i18n.language}/></div>
        }
    }

    return (
        <StyledForm id={'dm'}>
            <FormDiv marginTop={'50px'}>
                <input value={email} className={'input-field'} style={{order: 1, width: '50%'}}
                       type={'email'}
                       placeholder={t('email')}
                       onChange={(event) => setEmail(event.target.value)}
                       required
                />
                <CgMail className={'input-icon'} size={30}/>
            </FormDiv>

            <FormDiv marginTop={'30px'}>
                <input value={topic} className={'input-field'} style={{order: 1, width: '70%'}}
                       type={'text'}
                       placeholder={t('topic')}
                       pattern="\s*(\S\s*){1,}"
                       onChange={(event) => setTopic(event.target.value)}
                       required
                />
                <RiMessage3Line className={'input-icon'} size={30}/>
            </FormDiv>

            <FormTextArea value={text}
                          placeholder={t('type_here') + '...'}
                          onChange={(event) => setText(event.target.value)}
                          required
            />

            <CaptchaDiv>{generateRecaptcha()}</CaptchaDiv>

            <FormButtonWrapper>
                <FormButton disabled={!email || isEmptyOrSpaces(topic) || !text || !recaptcha}
                            form={'dm'}
                            onClick={() => confirmDm()}
                            type={'button'}
                >
                    {t('send')}
                </FormButton>
            </FormButtonWrapper>

            <ConfirmAlert showAlert={showAlert} setShowAlert={setShowAlert} variant={alertVariant}/>
        </StyledForm>
    );
}

export default ContactForm;
