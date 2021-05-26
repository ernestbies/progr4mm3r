import React from "react";
import CustomCaret from "./CustomCaret";
import {hallOfFameFaq, NOT_RELEASED_PROJECT, WEBSITE_NAME} from "../utils/information";

const MessageFaq = () => {

    const renderQaA = (faq) => {
        let view = [];
        faq.map(el => view.push(
            <div key={el.id} style={{marginBottom: 30}}>
                <p style={{
                    fontFamily: 'Source Code Pro',
                    fontWeight: 300,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: -15,
                    color: 'white',
                    fontSize: 12
                }}><span style={{color: 'yellow'}}>[{el.id}] Q</span>: {el.q}</p>
                <p style={{
                    fontFamily: 'Source Code Pro',
                    fontWeight: 300,
                    textAlign: 'left',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: -15,
                    color: 'white',
                    fontSize: 12
                }}><span style={{color: 'yellow'}}>A</span>: {el.a}</p>
            </div>
        ));

        return view;
    };

    return (
        <div id={'faq'} style={{backgroundColor: '#00000099', width: 700, height: 420, marginBottom: 30}}>
            <p style={{
                marginTop: 10,
                fontSize: 16,
                color: 'orange',
                fontWeight: 300,
                fontFamily: 'Open Sans'
            }}>FAQ</p>
            <p style={{
                fontFamily: 'Source Code Pro',
                fontWeight: 300,
                textAlign: 'left',
                marginLeft: 10,
                color: 'orange',
                fontSize: 13
            }}>~/{NOT_RELEASED_PROJECT}<span style={{color: 'white'}}>$ cd {'introduction'}</span></p>
            <p style={{
                fontFamily: 'Source Code Pro',
                fontWeight: 300,
                textAlign: 'left',
                marginLeft: 10,
                marginTop: -15,
                color: 'orange',
                fontSize: 13
            }}>~/{NOT_RELEASED_PROJECT}/{'introduction'}<span style={{color: 'white'}}>$ cat hall_of_fame_faq.txt</span>
            </p>
            <p style={{
                fontFamily: 'Source Code Pro',
                fontWeight: 300,
                textAlign: 'left',
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 25,
                marginTop: -15,
                color: 'white',
                fontSize: 12
            }}>&copy; {WEBSITE_NAME} Hall Of Fame FAQ</p>
            {
                renderQaA(hallOfFameFaq)
            }
            <p style={{
                fontFamily: 'Source Code Pro',
                fontWeight: 300,
                textAlign: 'left',
                marginLeft: 10,
                marginTop: -15,
                color: 'orange',
                fontSize: 13
            }}>~/{NOT_RELEASED_PROJECT}/{'introduction'}<span style={{color: 'white'}}>$ <CustomCaret width={6} height={8}/></span>
            </p>
        </div>
    )
}

export default MessageFaq;
