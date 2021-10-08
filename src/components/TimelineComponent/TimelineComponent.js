import React from 'react';
import Paper from '@material-ui/core/Paper';
import Timeline from '@material-ui/lab/Timeline';
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
import TimelineText from "../TimelineText/TimelineText";
import TimelineItem from "../TimelineItem/TimelineItem";
import {useStyles} from "./TimelineComponent.styles";

export default function TimelineComponent() {
    const classes = useStyles();

    return (
        <Timeline style={{marginBottom: 0}}>
            <TimelineItem>
                <TimelineContent style={{display: 'flex', alignItems: 'start', opacity: 0}}>
                    <Paper elevation={3} className={classes.paper}>
                        <TimelineText type={'eat'} color={'white'}/>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{textAlign: 'left'}}>
                        <TimelineText type={'eat'} color={'white'}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={{display: 'flex', alignItems: 'start'}}>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto', textAlign: 'right'}}>
                        <TimelineText type={'code'} color={'orange'}/>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'orange'}}>
                        <LaptopMacIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent style={{opacity: 0}}>
                    <Paper elevation={3} className={classes.paper}>
                        <TimelineText type={'code'} color={'orange'}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={{display: 'flex', alignItems: 'start', opacity: 0}}>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <TimelineText type={'play'} color={'purple'}/>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'purple'}}>
                        <SportsEsportsIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{textAlign: 'left'}}>
                        <TimelineText type={'play'} color={'purple'}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={{display: 'flex', alignItems: 'start'}}>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto', textAlign: 'right'}}>
                        <TimelineText type={'meetFriends'} color={'red'}/>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'red'}}>
                        <PeopleIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{opacity: 0}}>
                        <TimelineText type={'meetFriends'} color={'red'}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={{display: 'flex', alignItems: 'start', opacity: 0}}>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <TimelineText type={'watchMovies'} color={'green'}/>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'green'}}>
                        <WatchIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{textAlign: 'left'}}>
                        <TimelineText type={'watchMovies'} color={'green'}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={{display: 'flex', alignItems: 'start'}}>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto', textAlign: 'right'}}>
                        <TimelineText type={'sleep'} color={'blue'}/>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: 'blue'}}>
                        <HotelIcon/>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{opacity: 0}}>
                        <TimelineText type={'sleep'} color={'blue'}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineContent style={{display: 'flex', alignItems: 'start', opacity: 0}}>
                    <Paper elevation={3} className={classes.paper} style={{marginLeft: 'auto'}}>
                        <TimelineText type={'repeat'} color={'#DC143C'}/>
                    </Paper>
                </TimelineContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: '#DC143C'}}>
                        <RepeatIcon/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper} style={{textAlign: 'left'}}>
                        <TimelineText type={'repeat'} color={'#DC143C'}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
