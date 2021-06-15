import React from 'react';
import Paper from '@material-ui/core/Paper';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PeopleIcon from '@material-ui/icons/People';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import WatchIcon from '@material-ui/icons/LiveTv';
import {useTranslation} from "react-i18next";
import {TimelineText} from "../TimelineText/TimelineText";
import {useStyles} from "./MyTimeline.styles";

export default function MyTimeline() {
    const classes = useStyles();
    const { t } = useTranslation('common');

    return (
        <Timeline align="alternate" style={{marginBottom: 0}}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <TimelineText type={t('eat')} text={t('eat_text')}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'orange'}}>
                        <LaptopMacIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <TimelineText type={t('code')} text={t('code_text')}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'purple'}}>
                        <SportsEsportsIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <TimelineText type={t('play')} text={t('play_text')}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'red'}}>
                        <PeopleIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <TimelineText type={t('friends')} text={t('friends_text')}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'green'}}>
                        <WatchIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <TimelineText type={t('movies')} text={t('movies_text')}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <HotelIcon/>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <TimelineText type={t('sleep')} text={t('sleep_text')}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <RepeatIcon/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <TimelineText type={t('repeat')} text={t('repeat_text')}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
