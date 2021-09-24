import React from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    container: {
        zIndex: '50',
        position: 'relative',
        transform: 'translateY(-100vh)'
    },
    card: {
        backgroundColor: 'transparent',
        maxHeight: '100vh',
    },
    paddingTop30: {
        paddingTop: '30px',
    },
    floatRight: {
        float: 'right',
        marginRight: '15px'
    },
    floatLeft: {
        float: 'left',
        marginLeft: '15px'
    },
    media: {
        height: '100px',
        width: '100px'
    },
    night: {
        color: '#fff'
    }
});

// TODO: Sort out styles

function CurrentWeather(props) {
    const classes = useStyles();

    function getTime(timestamp, timezone) {
        var localDate = new Date();
        var localOffset = (localDate.getTimezoneOffset()) * 60000;

        var timeDate = new Date(timestamp * 1000);
        var time = timeDate.getTime();

        var utc = time + localOffset;
        var cityUtc = utc + (timezone * 1000);

        var nd = new Date(cityUtc);
        var riseSet = nd.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' });
        if (riseSet[0] === '0') {
            riseSet = riseSet.slice(1);
        }
        return riseSet;
    }

    console.log(props.data)

    return (
        <div className={classes.container}>
            {(typeof props.data.main != 'undefined') ? (
                <Card className={classes.card} elevation={0}>
                    <CardContent>
                        <Typography variant="h2" className={(props.data.weather[0].icon.includes('n') ? classes.night : '')}>
                            {`${props.data.name}, ${props.data.sys.country}` || 'Loading local weather...'}
                        </Typography>
                        <Grid container>
                            <Grid item xs>
                                <CardMedia
                                    className={classes.media + ' ' + classes.floatRight}
                                    image={`${process.env.REACT_APP_API_LOGO}/${props.data.weather[0].icon}@2x.png`}
                                    title={`${props.data.weather[0].description} icon`} />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.paddingTop30 + ' ' + classes.floatLeft + ' ' + (props.data.weather[0].icon.includes('n') ? classes.night : '')}>
                                    {Math.round(props.data.main.temp)}°C
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatRight + ' ' + (props.data.weather[0].icon.includes('n') ? classes.night : '')}>
                                    Max: {Math.round(props.data.main.temp_max)}°C
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatLeft + ' ' + (props.data.weather[0].icon.includes('n') ? classes.night : '')}>
                                    Min: {Math.round(props.data.main.temp_min)}°C
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatRight + ' ' + (props.data.weather[0].icon.includes('n') ? classes.night : '')}>
                                    Sunrise: {getTime(props.data.sys.sunrise, props.data.timezone)}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatLeft + ' ' + (props.data.weather[0].icon.includes('n') ? classes.night : '')}>
                                    Sunset: {getTime(props.data.sys.sunset, props.data.timezone)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ) : (
                <div>Loading ...</div>
            )
            }
        </div >
    );

}

export default CurrentWeather;
