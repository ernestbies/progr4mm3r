import React, {useEffect, useState} from "react";
import {formatData, WEBSITE_NAME} from "../utils/information";
import MessageItem from "./MessageItem";

const MessageBox = ({messages}) => {

    const statusList = {
        load: {
            statusNo: 0,
            statusCode: 'LOAD',
            statusMessage: 'Console loaded',
            statusColor: 'white'
        },
        success: {
            statusNo: 1,
            statusCode: 'SUCCESS',
            statusMessage: 'Message sent',
            statusColor: 'green'
        },
        error: {
            statusNo: 2,
            statusCode: 'ERROR',
            statusMessage: 'Error. Try again.',
            statusColor: 'red'
        }
    }

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [currentStatus, setCurrentStatus] = useState(statusList.load);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let interval = setInterval(getCurrentDate, 1000);

        setTimeout(() => {
            setLoading(false)
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    });

    const renderMessages = () => {
        let view = [];
        messages.map((el) =>
            view.push(
                <MessageItem key={el.id} date={el.date} username={el.username} message={el.message}/>
            )
        );

        return view;
    }

    function getCurrentDate() {
        document.getElementById('dateTimer').innerHTML = formatData(new Date());
    }

    return (
        <div style={{
            userSelect: 'none',
            width: 700,
            height: 500,
            backgroundColor: '#300A24',
            border: '1px solid #FFFFFF',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{flex: 3}}>
                <p style={{
                    fontFamily: 'Source Code Pro',
                    color: 'white',
                    fontSize: 11,
                    marginLeft: 5,
                    marginTop: 5,
                }}>
                    {'> Hall of Fame Console powered by '}&copy; {WEBSITE_NAME} 2021. All rights reserved.
                </p>
                <p style={{fontFamily: 'Source Code Pro', color: 'white', fontSize: 11, marginLeft: 5, marginTop: -15}}>
                    {'> Welcome to the Hall of Fame Console. Leave your message here.'}
                </p>
                <MessageItem date={0}
                             username={'ernestbies'}
                             message={'sudo ./project_h_01_messages '}
                             isAdmin
                />
                <p style={{
                    fontFamily: 'Source Code Pro',
                    animationName: 'appear-text',
                    animationDuration: '5s',
                    color: 'white',
                    fontSize: 11,
                    marginLeft: 5,
                }}>
                    {'Loading configuration...'}<br/>
                    {'Initializing script...'}<br/>
                    {'Messages loaded successfully!'}<br/>
                </p>
                {!loading && renderMessages()}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'black', flex: 1}}>
                <div style={{flex: 4}}>
                    <p style={{
                        fontFamily: 'Source Code Pro',
                        color: 'white',
                        fontSize: 11,
                        marginLeft: 5,
                        marginTop: 5
                    }}>> Message creator for &copy; {WEBSITE_NAME} Hall of Fame Console.</p>
                    <p style={{
                        fontFamily: 'Source Code Pro',
                        fontWeight: 700,
                        color: 'yellow',
                        fontSize: 11,
                        marginLeft: 5,
                        marginTop: -15,
                    }}>> Info<span style={{color: 'white', fontWeight: 400}}>
                    {': The maximum length of a username is 20 and messages are 100 characters.'}</span>
                    </p>
                    <p style={{
                        fontFamily: 'Source Code Pro',
                        fontWeight: 700,
                        color: 'red',
                        fontSize: 11,
                        marginLeft: 5,
                        marginTop: -15,
                    }}>> Warning<span style={{color: 'white', fontWeight: 400}}>
                    {': Your message will be visible to the public, it cannot be edited.'}</span>
                    </p>
                    <p style={{
                        fontFamily: 'Source Code Pro',
                        fontWeight: 400,
                        color: 'white',
                        fontSize: 11,
                        marginLeft: 5,
                        marginTop: -15,
                    }}>{'> Date: '} <span id={'dateTimer'}/></p>
                    <div style={{marginTop: -10}}>
                        <p style={{
                            display: 'inline',
                            fontFamily: 'Source Code Pro',
                            fontWeight: 400,
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 5,
                        }}>{'> Username (' + (20 - username.length) + ' characters left): '}</p>
                        <input placeholder={'Enter your username...'}
                               onChange={(event) => setUsername(event.target.value)}
                               maxLength={20}
                               style={{
                                   color: 'white',
                                   fontFamily: 'Source Code Pro',
                                   fontWeight: 400,
                                   fontSize: 11,
                                   backgroundColor: 'transparent',
                                   borderWidth: 0,
                                   width: 150
                               }}/>
                    </div>
                    <div style={{marginTop: -8}}>
                        <p style={{
                            display: 'inline',
                            fontFamily: 'Source Code Pro',
                            fontWeight: 400,
                            color: 'white',
                            fontSize: 11,
                            marginLeft: 5,
                        }}>{'> Message (' + (100 - message.length) + ' characters left): '}</p>
                        <input placeholder={'Enter your message...'}
                               maxLength={100}
                               onChange={(event) => setMessage(event.target.value)}
                               style={{
                                   color: 'white',
                                   fontFamily: 'Source Code Pro',
                                   fontWeight: 400,
                                   fontSize: 11,
                                   backgroundColor: 'transparent',
                                   borderWidth: 0,
                                   width: 300
                               }}/>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#696969'}}>
                    <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <button style={{width: 80, fontFamily: 'Source Code Pro', fontSize: 12}}>SEND</button>
                    </div>
                    <div style={{flex: 1, backgroundColor: '#A9A9A9', textAlign: 'center'}}>
                        <p style={{fontFamily: 'Source Code Pro', fontSize: 12, marginBottom: 10}}>:: Status ::</p>
                        <p style={{
                            fontFamily: 'Source Code Pro',
                            fontWeight: 700,
                            fontSize: 10,
                            margin: 0,
                            color: currentStatus.statusColor
                        }}>{currentStatus.statusCode} {'//'} {currentStatus.statusNo || 0}</p>
                        <p style={{
                            fontFamily: 'Source Code Pro',
                            fontSize: 9,
                            margin: 0
                        }}>{currentStatus.statusMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MessageBox;
