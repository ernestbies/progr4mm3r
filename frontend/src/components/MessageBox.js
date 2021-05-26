import React, {useEffect, useState} from "react";
import {formatData, WEBSITE_NAME} from "../utils/information";
import MessageItem from "./MessageItem";
import {fetchPosts, sendPost} from "../utils/helpers/FetchData";

const MessageBox = () => {

    const statusList = {
        fetch: {
            statusNo: 0,
            statusCode: 'FETCHING',
            statusMessage: 'Fetching data',
            statusColor: 'grey'
        },
        load: {
            statusNo: 1,
            statusCode: 'LOADED',
            statusMessage: 'Console loaded',
            statusColor: 'white'
        },
        success: {
            statusNo: 2,
            statusCode: 'SUCCESS',
            statusMessage: 'Message sent',
            statusColor: 'green'
        },
        error_fetch: {
            statusNo: 3,
            statusCode: 'ERROR',
            statusMessage: 'Error. Try again.',
            statusColor: 'red'
        },
        error_send: {
            statusNo: 4,
            statusCode: 'ERROR',
            statusMessage: 'Error. Try again.',
            statusColor: 'red'
        }
    }

    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(statusList.fetch);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        let interval = setInterval(getCurrentDate, 1000);
        fetchMessages(true);
        return () => {
            clearInterval(interval);
        }
    }, []);

    const renderMessages = () => {
        let view = [];
        messages.map((el) =>
            view.push(
                <MessageItem key={el.id} date={el.date} username={el.username} message={el.message}/>
            )
        );

        return view;
    }

    const fetchMessages = (changeStatus) => {
        fetchPosts().then((res) => {
            setIsFetching(false);
            changeStatus && setStatus(statusList.load);
            setMessages(res);
        }).catch((error) => {
            setIsFetching(false);
            setStatus(statusList.error_fetch);
        });
    }

    const confirmMessage = () => {
        const post = {
            username: username,
            message: message
        };

        sendPost(post).then(res => {
            if(res.status === 201 ) {
                setStatus(statusList.success);
                fetchMessages(false);
                setUsername('');
                setMessage('');
            } else {
                setStatus(statusList.error_send);
            }
        });
    }

    const getCurrentDate = () => document.getElementById('dateTimer').innerHTML = formatData(new Date());

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
            <div style={{flex: 3, height: 200, overflowY: 'scroll'}}>
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
                             message={'sudo ./hall_of_fame '}
                             isAdmin
                />
                <p style={{
                    fontFamily: 'Source Code Pro',
                    animationName: 'appear-text',
                    animationDuration: '2s',
                    color: 'white',
                    fontSize: 11,
                    marginLeft: 5,
                    whiteSpace: 'pre-wrap'
                }}>
                    {'Initializing script...\n'}
                    {'Fetching all messages from external server...\n'}
                    {status.statusNo === 1 && 'Messages loaded successfully!\n'}
                    {status.statusNo === 3 && 'There was an error loading the messages. Please refresh the page and try again.\n'}
                </p>
                <div style={{marginBottom: 10}}>
                    {!isFetching && renderMessages()}
                </div>
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
                    {': The maximum length of a username is 20 and messages are 300 characters.'}</span>
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
                               value={username}
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
                        }}>{'> Message (' + (300 - message.length) + ' characters left): '}</p>
                        <input placeholder={'Enter your message...'}
                               maxLength={300}
                               value={message}
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
                        <button onClick={() => confirmMessage()}
                                style={{width: 80, fontFamily: 'Source Code Pro', fontSize: 12}}>SEND
                        </button>
                    </div>
                    <div style={{flex: 1, backgroundColor: '#A9A9A9', textAlign: 'center'}}>
                        <p style={{fontFamily: 'Source Code Pro', fontSize: 12, marginBottom: 10}}>:: Status ::</p>
                        <p style={{
                            fontFamily: 'Source Code Pro',
                            fontWeight: 700,
                            fontSize: 10,
                            margin: 0,
                            color: status.statusColor
                        }}>{status.statusCode} {'//'} {status.statusNo || 0}</p>
                        <p style={{
                            fontFamily: 'Source Code Pro',
                            fontSize: 9,
                            margin: 0
                        }}>{status.statusMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MessageBox;
