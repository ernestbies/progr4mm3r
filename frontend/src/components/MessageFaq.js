import React from "react";
import CustomCaret from "./CustomCaret";
import {hallOfFameFaq, NOT_RELEASED_PROJECT, statusList, WEBSITE_NAME} from "../utils/information";

const MessageFaq = () => {

    const renderStatusList = () => {
        return Object.keys(statusList).map((el, index) => `<span style="color: white"><span style="color: ${statusList[el].color}">${statusList[el].code} // ${statusList[el].no}<span style="color: white"> - </span></span>${statusList[el].description}</span>\n`).join('');
    }

    const replaceTextByHTML = (text, textToFind) => {
        return text.replace(textToFind, renderStatusList());
    }

    const renderQaA = (faq) => {
        return (
            faq.map(el =>
                <div key={el.id} style={{marginBottom: 30, whiteSpace: 'pre-wrap'}}>
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
                    }}><span style={{color: 'yellow'}}>A</span>: <span
                        dangerouslySetInnerHTML={{__html: replaceTextByHTML(el.a, 'STATUSES_LIST')}}/></p>
                </div>
            )
        )

    };

    return (
        <div id={'faq'}
             style={{backgroundColor: '#00000099', maxWidth: 700, marginBottom: 30, marginLeft: 5, marginRight: 5}}>
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
            }}>&copy; {WEBSITE_NAME} Hall of Fame FAQ</p>
            {
                renderQaA(hallOfFameFaq)
            }
            <p style={{
                fontFamily: 'Source Code Pro',
                fontWeight: 300,
                textAlign: 'left',
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 25,
                color: 'white',
                fontSize: 12
            }}>This page is only available in <span style={{color: 'yellow'}}>English</span>.
                <span style={{color: 'yellow'}}> Polish</span> translations will be added soon&#8482;.</p>
            <p style={{
                fontFamily: 'Source Code Pro',
                fontWeight: 300,
                textAlign: 'left',
                marginLeft: 10,
                marginTop: -15,
                color: 'orange',
                fontSize: 13
            }}>~/{NOT_RELEASED_PROJECT}/{'introduction'}<span style={{color: 'white'}}>$ <CustomCaret/></span>
            </p>
        </div>
    )
}

export default MessageFaq;
