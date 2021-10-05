import React from "react";
import CustomCaret from "../CustomCaret/CustomCaret";
import {hallOfFameFaq, NOT_RELEASED_PROJECT, statusList, WEBSITE_NAME} from "../../utils/information";
import {BoxQaA, ColoredText, CommandText, FaqContainer, FaqHeader, TextQaA} from "./MessageFaq.styles";

const MessageFaq = () => {

    const renderStatusList = () => {
        return Object.keys(statusList).map((el, index) => `<span style="color: white"><span style="color: ${statusList[el].color}">${statusList[el].code} // ${statusList[el].no}<span style="color: white"> - </span></span>${statusList[el].description}</span>\n`).join('');
    }

    const replaceTextByHTML = (text, textToFind) => {
        return text.replace(textToFind, renderStatusList());
    }

    const filterText = (text, textToFind) => {
        return <span dangerouslySetInnerHTML={{__html: replaceTextByHTML(text, textToFind)}}/>;
    }

    const renderQaA = (faq) => {
        return (
            faq.map(el =>
                <BoxQaA key={el.id}>
                    <TextQaA><ColoredText color={'yellow'}>[{el.id}] Q</ColoredText>: {el.q}</TextQaA>
                    <TextQaA><ColoredText color={'yellow'}>A</ColoredText>: {filterText(el.a, 'STATUSES_LIST')}
                    </TextQaA>
                </BoxQaA>
            )
        )
    };

    return (
        <FaqContainer id={'faq'}>
            <FaqHeader>FAQ</FaqHeader>
            <CommandText color={'orange'}>~/{NOT_RELEASED_PROJECT}
                <ColoredText color={'white'}>$ cd {'introduction'}</ColoredText>
            </CommandText>
            <CommandText color={'orange'} marginTop={-15}>~/{NOT_RELEASED_PROJECT}/{'introduction'}
                <ColoredText style={{color: 'white'}}>$ cat hall_of_fame_faq.txt</ColoredText>
            </CommandText>
            <CommandText fontSize={'small'} marginBottom={25} marginTop={-15}>&copy; {WEBSITE_NAME} Hall of Fame FAQ</CommandText>
            {
                renderQaA(hallOfFameFaq)
            }
            <CommandText marginTop={-15} fontSize={'small'}>This page is only available in <ColoredText color={'yellow'}>English</ColoredText>.
                <ColoredText color={'yellow'}> Polish</ColoredText> translations will be added soon&#8482;.
            </CommandText>
            <CommandText color={'orange'}>~/{NOT_RELEASED_PROJECT}/{'introduction'}
                <ColoredText color={'white'}>$ <CustomCaret/></ColoredText>
            </CommandText>
        </FaqContainer>
    )
}

export default MessageFaq;
