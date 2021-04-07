import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        width: '45%',
        height: '90%'
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function MyTimeline() {
    const classes = useStyles();

    return (
        <Timeline align="alternate" style={{marginBottom: 0}}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography style={{fontSize: 15}}>Eat</Typography>
                        <Typography style={{fontSize: 14}}>Because I need strength</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <Typography style={{fontSize: 15}}>Code</Typography>
                        <Typography style={{fontSize: 14}}>Because I want to develop myself</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <SportsEsportsIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography style={{fontSize: 15}}>Play</Typography>
                        <Typography style={{fontSize: 14}}>Because I want to compete with the best</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <PeopleIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <Typography style={{fontSize: 15}}>Meet friends</Typography>
                        <Typography style={{fontSize: 14}}>Because I want to hang out with my friends</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <WatchIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography style={{fontSize: 15}}>Watch movies & series</Typography>
                        <Typography style={{fontSize: 14}}>Because I want to know the world</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <HotelIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <Typography style={{fontSize: 15}}>Sleep</Typography>
                        <Typography style={{fontSize: 14}}>Because I need a rest</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography style={{fontSize: 15}}>Repeat</Typography>
                        <Typography style={{fontSize: 14}}>Because this is the life I love!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
