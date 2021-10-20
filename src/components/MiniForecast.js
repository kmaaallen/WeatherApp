import React from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    card: {
        backgroundColor: 'white',
        width: '100%',
        padding: '0px',
        maxHeight: '50px'
    },
    content: {
        padding: '0px 10px'
    },
    media: {
        height: '50px',
        width: '50px',
    },
    item: {
        margin: 'auto'
    }
});

function MiniForecast(props) {
    const classes = useStyles();
    //console.log(props.day);

    function getDay(timestamp) {
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        var date = new Date(timestamp * 1000).getUTCDay();
        return days[date];
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Grid container>
                    <Grid item>
                        <CardMedia
                            className={classes.media}
                            image={`${process.env.REACT_APP_API_LOGO}/${props.day.weather[0].icon}@2x.png`}
                            title={`${props.day.weather[0].description} icon`} />
                    </Grid>
                    <Grid item className={classes.item}><Typography>{getDay(props.day.dt)}</Typography></Grid>
                    <Grid item className={classes.item}> <Typography>Min: {Math.round(props.day.temp.min)}°C</Typography></Grid>
                    <Grid item className={classes.item}> <Typography>Max: {Math.round(props.day.temp.max)}°C</Typography></Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MiniForecast;