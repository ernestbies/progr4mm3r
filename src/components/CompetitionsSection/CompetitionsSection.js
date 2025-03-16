import React from 'react';
import SectionBadge from '../SectionBadge/SectionBadge';
import { useTranslation } from 'react-i18next';
import { CompetitionContainer } from './CompetitionsSections.styles';
import CompetitionItem from '../CompetitionItem/CompetitionItem';
import { competitionsProjects } from '../../utils/data/projects';

const CompetitionsSection = () => {
    const { t } = useTranslation('common');

    const renderCompetitions = () => {
        return competitionsProjects.map((e, index) => (
            <CompetitionItem
                key={index}
                order={index % 2 === 0 ? 'left' : 'right'}
                image={e.image}
                name={e.name}
                links={e.links}
                description={e.description}
                competition={e.competition}
                technologies={e.technologies}
            />
        ));
    };

    return (
        <div id={'competitions'}>
            <div style={{ textAlign: 'center', backgroundColor: '#0f0f0f' }}>
                <SectionBadge
                    position={'start'}
                    subtitle={t('competitions')}
                    content={t('projects')}
                    specialNumber={2}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <p className={'inform-text'}>
                            {t('quote_competitions')}
                            <code className={'scale-text'}>
                                {t('competitions2')}
                            </code>
                            {'.'}
                        </p>
                        <div
                            style={{
                                width: 100,
                                height: 1,
                                backgroundColor: 'orange',
                            }}
                        />
                    </div>
                </div>
                <CompetitionContainer>
                    {renderCompetitions()}
                </CompetitionContainer>
            </div>
        </div>
    );
};

export default CompetitionsSection;
