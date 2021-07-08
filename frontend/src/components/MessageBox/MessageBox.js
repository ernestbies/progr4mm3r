import React, {useEffect, useState} from "react";
import {formatData, HALL_OF_FAME_MYSTERY, WEBSITE_NAME} from "../../utils/information";
import MessageItem from "../MessageItem/MessageItem";
import {fetchPosts, sendPost} from "../../utils/helpers/FetchData";
import {AiFillLock, AiFillUnlock} from "react-icons/ai";
import CustomInput from "../CustomInput/CustomInput";
import {connect} from "react-redux";
import {setStatus} from "../../actions/statusActions";

const MessageBox = ({passToParent, status, setStatus}) => {

    // Component state with messages & statuses
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [isFetching, setIsFetching] = useState(true);
    const [answer, setAnswer] = useState('');

    // Controller to abort a fetch on component unmount
    const controller = new AbortController();
    const signal = controller.signal;

    // Hall of Fame phases: 0 - initial phase, 1 - correct answer, 2 - unlocked
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        let interval = setInterval(getCurrentDate, 1000);

        fetchPosts(signal).then((res) => {
            setIsFetching(false);
            setMessages(res.posts);
            passToParent({visitors: res.visitors, numberOfMessages: res.posts.length});
            setStatus('connect');
        }).catch((error) => {
            if (error.name !== 'AbortError') {
                setIsFetching(false);
                setStatus('connect', true);
                console.error('Error while fetching messages: ' + error);
            }
        });

        localStorage.getItem('token') && setPhase(2);

        return () => {
            clearInterval(interval);
            controller.abort();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (phase === 2) {
            if (!localStorage.getItem('token')) {
                localStorage.setItem('token', 'TOKEN_ACTIVE');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phase]);

    const renderMessages = () => {
        if (messages.length) {
            return (
                messages.map((el, index) =>
                    (
                        <MessageItem key={el.id + index.toString()} date={el.date} username={el.username}
                                     message={el.message}/>
                    )
                )
            )
        }
    }

    const confirmChanges = () => {
        if (!phase) {
            const correctAnswer = atob(HALL_OF_FAME_MYSTERY);
            if (correctAnswer === answer) {
                setPhase(1);
                setStatus('solve');
            } else {
                setStatus('solve', true);
                setAnswer('');
            }
        } else if (phase === 1) {
            setPhase(2);
        } else {
            const post = {
                username: username,
                message: message,
                date: Date.now()
            };

            sendPost(post).then(res => {
                if (res.status === 201) {
                    messages.push(post);
                    passToParent({numberOfMessages: messages.length});
                    setStatus('send');
                    setUsername('');
                    setMessage('');
                } else {
                    setStatus('send', true);
                }
            });
        }
    }

    const getCurrentDate = () => document.getElementById('dateTimer').innerHTML = formatData(new Date());

    const copyText = () => {
        let mysteryInput = document.getElementById('mysteryInput');
        mysteryInput.select();
        document.execCommand('copy', false);
    }

    return (
        <div style={{
            userSelect: 'none',
            width: '95%',
            maxWidth: 700,
            height: 550,
            backgroundColor: '#300A24',
            border: '1px solid #FFFFFF',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 40
        }}>
            <div style={{flex: 4, borderBottomStyle: 'solid', borderBottomWidth: 1, overflowY: 'scroll'}}>
                {
                    (!phase || phase === 1) ?
                        <div style={{position: 'relative', width: '100%', height: '100%'}}>
                            <div style={{
                                height: '100%',
                                width: '100%',
                                position: 'absolute',
                                backgroundColor: '#00000099',
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column'
                            }}>
                                <p style={{
                                    fontFamily: 'Source Code Pro',
                                    fontWeight: 300,
                                    color: 'white',
                                    textAlign: 'center',
                                    marginTop: 60,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    fontSize: 15
                                }}>
                                    {'resolve the mystery to enter '} <span
                                    style={{color: 'goldenrod'}}>{'hall of fame'}</span>
                                </p>
                                {
                                    !phase ?
                                        <div style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }}>
                                            <AiFillLock size={100} color={'goldenrod'}/>
                                            <CustomInput readOnly
                                                         cursorPointer
                                                         id={'mysteryInput'}
                                                         onClick={() => copyText()}
                                                         value={HALL_OF_FAME_MYSTERY}/>

                                            <CustomInput onChange={(e) => setAnswer(e.target.value)}
                                                         value={answer}
                                                         placeholder={'enter your answer here'}/>
                                        </div> :
                                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                            <AiFillUnlock size={100} color={'goldenrod'}/>
                                            <p style={{
                                                marginTop: 20,
                                                fontFamily: 'Source Code Pro',
                                                fontWeight: 300,
                                                color: 'white',
                                                textAlign: 'center',
                                                fontSize: 14
                                            }}>
                                                {'congratulations on solving the '} <span
                                                style={{color: 'goldenrod'}}>{'mystery'}</span>
                                            </p>
                                            <p style={{
                                                fontFamily: 'Source Code Pro',
                                                fontWeight: 300,
                                                color: 'white',
                                                textAlign: 'center',
                                                marginTop: -10,
                                                fontSize: 14
                                            }}>
                                                {'navigate to the '} <span
                                                style={{color: 'goldenrod'}}>{'hall of fame'}</span>
                                                <span style={{color: 'white'}}>{' by clicking '}</span>
                                                <span style={{color: 'goldenrod'}}>{'ENTER'}</span>{' button'}
                                            </p>
                                        </div>
                                }
                            </div>
                            <div style={{height: '100%'}}>
                                <p style={{
                                    fontFamily: 'Source Code Pro',
                                    color: 'white',
                                    fontSize: 11,
                                    marginLeft: 5,
                                    marginTop: 5,
                                }}>
                                    {'> Hall of Fame Console powered by '}&copy; {WEBSITE_NAME} 2021. All rights
                                    reserved.
                                </p>
                                <p style={{
                                    fontFamily: 'Source Code Pro',
                                    color: 'white',
                                    fontSize: 11,
                                    marginLeft: 5,
                                    marginTop: -15
                                }}>
                                    {'> Welcome to the Hall of Fame Console.'}
                                </p>
                                <MessageItem date={0}
                                             username={'ernestbies'}
                                             message={'sudo ./h_01_mystery_base64'}
                                             isAdmin
                                />
                            </div>
                        </div> :
                        <div>
                            <p style={{
                                fontFamily: 'Source Code Pro',
                                color: 'white',
                                fontSize: 11,
                                marginLeft: 5,
                                marginTop: 5,
                            }}>
                                {'> Hall of Fame Console powered by '}&copy; {WEBSITE_NAME} 2021. All rights reserved.
                            </p>
                            <p style={{
                                fontFamily: 'Source Code Pro',
                                color: 'white',
                                fontSize: 11,
                                marginLeft: 5,
                                marginTop: -15
                            }}>
                                {'> Welcome to the Hall of Fame Console. Leave your message here.'}
                            </p>
                            <MessageItem date={0}
                                         username={'ernestbies'}
                                         message={'sudo ./hall_of_fame '}
                                         isAdmin
                            />
                            <p style={{
                                fontFamily: 'Source Code Pro',
                                animationName: 'opacity-zero-to-one',
                                animationDuration: '2s',
                                color: 'white',
                                fontSize: 11,
                                marginLeft: 5,
                                whiteSpace: 'pre-wrap'
                            }}>
                                {'Initializing script...\n'}
                                {'Fetching all messages from external server...\n'}
                                {status.no === 1 && messages.length ? 'Messages loaded successfully!\n' : ''}
                                {status.no === 1 && !messages.length ? 'There are no messages on the board. Be the first to leave a message!\n': ''}
                                {status.no === 4 && 'There was an error connecting with server. Please refresh this page and try again.\n'}
                            </p>
                            <div style={{marginBottom: 10}}>
                                {!isFetching && renderMessages()}
                            </div>
                            {status.no === 5 && <MessageItem date={0}
                                                                   username={'ernestbies'}
                                                                   message={''}
                                                                   isAdmin
                                                                   caret
                            />}
                        </div>
                }
            </div>
            <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'black', flex: 1}}>
                <div style={{flex: 4}}>
                    <p style={{
                        fontFamily: 'Source Code Pro',
                        color: 'white',
                        fontSize: 10,
                        marginLeft: 5,
                        marginTop: 5
                    }}>> Message creator for &copy; {WEBSITE_NAME} Hall of Fame Console.</p>
                    <p style={{
                        fontFamily: 'Source Code Pro',
                        fontWeight: 700,
                        color: 'yellow',
                        fontSize: 10,
                        marginLeft: 5,
                        marginTop: -15,
                    }}>> Info<span style={{color: 'white', fontWeight: 400}}>
                    {': The maximum length of a username is 20 and messages are 300 characters.'}</span>
                    </p>
                    <p style={{
                        fontFamily: 'Source Code Pro',
                        fontWeight: 700,
                        color: 'red',
                        fontSize: 10,
                        marginLeft: 5,
                        marginTop: -15,
                    }}>> Warning<span style={{color: 'white', fontWeight: 400}}>
                    {': Your message will be visible to the public, it cannot be edited.'}</span>
                    </p>
                    <p style={{
                        fontFamily: 'Source Code Pro',
                        fontWeight: 400,
                        color: 'white',
                        fontSize: 10,
                        marginLeft: 5,
                        marginTop: -15,
                    }}>{'> Date: '} <span id={'dateTimer'}/></p>
                    <div style={{marginTop: -10}}>
                        <p style={{
                            display: phase === 2 ? 'inline' : '',
                            fontFamily: 'Source Code Pro',
                            fontWeight: 400,
                            color: 'white',
                            fontSize: 10,
                            marginLeft: 5,
                        }}>{!phase ? '> You cannot send message until you did not solve mystery.' :
                            phase === 1 ? '> Congratulations on solving the mystery.'
                                : '> Username (' + (20 - username.length) + ' characters left): '}</p>
                        {phase === 2 && <input placeholder={'Enter your username...'}
                                               onChange={(event) => setUsername(event.target.value)}
                                               maxLength={20}
                                               value={username}
                                               style={{
                                                   color: 'white',
                                                   fontFamily: 'Source Code Pro',
                                                   fontWeight: 400,
                                                   fontSize: 10,
                                                   backgroundColor: 'transparent',
                                                   borderWidth: 0,
                                                   width: 150
                                               }}/>}
                    </div>
                    <div style={phase === 2 ? {marginTop: -8} : {marginTop: -16}}>
                        <p style={{
                            display: phase === 2 ? 'inline' : '',
                            fontFamily: 'Source Code Pro',
                            fontWeight: 400,
                            color: 'white',
                            fontSize: 10,
                            marginLeft: 5,
                        }}>{!phase ? '> If you are sure of your answer, click the CHECK button. ' :
                            phase === 1 ? '> If you want to enter Hall of Fame, click the ENTER button.'
                                : '> Message (' + (300 - message.length) + ' characters left): '}</p>
                        {phase === 2 && <input placeholder={'Enter your message...'}
                                               maxLength={300}
                                               value={message}
                                               onChange={(event) => setMessage(event.target.value)}
                                               style={{
                                                   color: 'white',
                                                   fontFamily: 'Source Code Pro',
                                                   fontWeight: 400,
                                                   fontSize: 10,
                                                   backgroundColor: 'transparent',
                                                   borderWidth: 0,
                                                   width: 300,
                                                   marginBottom: 5
                                               }}/>}
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#696969'}}>
                    <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <button onClick={() => confirmChanges()}
                                style={{
                                    width: 80,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    fontFamily: 'Source Code Pro',
                                    fontSize: 11
                                }}>
                            {
                                !phase ? 'CHECK' : phase === 1 ? 'ENTER' : 'SEND'
                            }
                        </button>
                    </div>
                    <div style={{
                        flex: 2,
                        backgroundColor: '#A9A9A9',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <span
                            style={{fontFamily: 'Source Code Pro', fontSize: 11, marginBottom: 10}}>:: Status ::</span>
                        <span style={{
                            fontFamily: 'Source Code Pro',
                            fontWeight: 700,
                            fontSize: 10,
                            margin: 0,
                            color: status.color
                        }}>{status.code} {'//'} {status.no || 0}</span>
                        <span style={{
                            fontFamily: 'Source Code Pro',
                            fontSize: 9,
                            margin: 0,
                        }}>{status.message}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({statusReducer}) => ({status: statusReducer});

const mapDispatchToProps = {setStatus};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
