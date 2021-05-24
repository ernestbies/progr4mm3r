import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        width: '55%',
        backgroundColor: '#00000095',
        '@media (max-width:992px)': {
            width: '100%'
        }
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

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
                        <Typography style={{
                            color: 'gray',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>{t('eat')}</Typography>
                        <Typography style={{
                            color: 'orange',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontSize: 14
                        }}> {'//'} </Typography>
                        <Typography style={{color: 'gray', display: 'inline', fontFamily: 'Open Sans', fontSize: 14}}>
                            {t('eat_text')}
                        </Typography>
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
                        <Typography style={{
                            color: 'gray',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>{t('code')}</Typography>
                        <Typography style={{
                            color: 'orange',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontSize: 14
                        }}> {'//'} </Typography>
                        <Typography style={{color: 'gray', display: 'inline', fontFamily: 'Open Sans', fontSize: 14}}>
                            {t('code_text')}
                        </Typography>
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
                        <Typography style={{
                            color: 'gray',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>{t('play')}</Typography>
                        <Typography style={{
                            color: 'orange',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontSize: 14
                        }}> {'//'} </Typography>
                        <Typography style={{color: 'gray', display: 'inline', fontFamily: 'Open Sans', fontSize: 14}}>
                            {t('play_text')}
                        </Typography>
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
                        <Typography style={{
                            color: 'gray',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>{t('friends')}</Typography>
                        <Typography style={{
                            color: 'orange',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontSize: 14
                        }}> {'//'} </Typography>
                        <Typography style={{color: 'gray', display: 'inline', fontFamily: 'Open Sans', fontSize: 14}}>
                            {t('friends_text')}
                        </Typography>
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
                        <Typography style={{
                            color: 'gray',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>{t('movies')}</Typography>
                        <Typography style={{
                            color: 'orange',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontSize: 14
                        }}> {'//'} </Typography>
                        <Typography style={{color: 'gray', display: 'inline', fontFamily: 'Open Sans', fontSize: 14}}>
                            {t('movies_text')}
                        </Typography>
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
                        <Typography style={{
                            color: 'gray',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>{t('sleep')}</Typography>
                        <Typography style={{
                            color: 'orange',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontSize: 14
                        }}> {'//'} </Typography>
                        <Typography style={{color: 'gray', display: 'inline', fontFamily: 'Open Sans', fontSize: 14}}>
                            {t('sleep_text')}
                        </Typography>
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
                        <Typography style={{
                            color: 'gray',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontWeight: 'bold',
                            fontSize: 14
                        }}>{t('repeat')}</Typography>
                        <Typography style={{
                            color: 'orange',
                            display: 'inline',
                            fontFamily: 'Open Sans',
                            fontSize: 14
                        }}> {'//'} </Typography>
                        <Typography style={{color: 'gray', display: 'inline', fontFamily: 'Open Sans', fontSize: 14}}>
                            {t('repeat_text')}
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
