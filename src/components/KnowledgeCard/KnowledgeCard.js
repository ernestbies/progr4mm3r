import React, {useState} from "react";
import {knowledge} from "../../utils/data/knowledge";
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardHeader,
    CardIcon,
    CardImage,
    CardTitle,
    DivWrapper,
    ImagesContainer,
} from "./KnowledgeCard.styles";

const KnowledgeCard = ({type}) => {

    const [item] = useState(knowledge[type]);
    const {t} = useTranslation('common');

    const renderIcons = (type) => {
        return (
            <ImagesContainer key={type}>
                {
                    knowledge[type].technology_stack.map(knowledge =>
                        <CardIcon key={knowledge.name}
                                  title={knowledge.name}
                                  alt={knowledge.name}
                                  src={'images/' + knowledge.type + '/' + knowledge.code + '.png'}/>)
                }
            </ImagesContainer>
        )
    }

    return (
        <Card name={'knowledge-card'} color={item.color}>
            <CardHeader>
                <CardImage alt={'technology'} src={item.image}/>
            </CardHeader>
            <DivWrapper backgroundColor={item.color}>
                <CardTitle>{t(item.name)}</CardTitle>
            </DivWrapper>
            <CardContent>
                {
                    renderIcons(type)
                }
            </CardContent>
        </Card>
    )
}

KnowledgeCard.propTypes = {
    type: PropTypes.oneOf(['frontend', 'backend', 'databases', 'testing'])
}

export default KnowledgeCard;
