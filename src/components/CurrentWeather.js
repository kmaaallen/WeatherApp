import React from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        padding: '100px',
        backgroundColor: 'transparent',
        height: '100vh'
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
});

function CurrentWeather(props) {
    const classes = useStyles();

    function getTime(timestamp) {
        var date = new Date(timestamp * 1000);
        var timestr = date.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit' });
        if (timestr[0] === '0') {
            timestr = timestr.slice(1);
        }
        return timestr;
    }

    return (
        <div>
            {(typeof props.data.main != 'undefined') ? (
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h2">
                            {props.data.name || 'Loading local weather...'}
                        </Typography>
                        <Grid container>
                            <Grid item xs>
                                <CardMedia
                                    className={classes.media + ' ' + classes.floatRight}
                                    image={`${process.env.REACT_APP_API_LOGO}/${props.data.weather[0].icon}@2x.png`}
                                    title={`${props.data.weather[0].description} icon`} />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.paddingTop30 + ' ' + classes.floatLeft}>
                                    {Math.round(props.data.main.temp)}°C
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatRight}>
                                    Max: {Math.round(props.data.main.temp_max)}°C
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatLeft}>
                                    Min: {Math.round(props.data.main.temp_min)}°C
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatRight}>
                                    Sunrise: {getTime(props.data.sys.sunrise)}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatLeft}>
                                    Sunset: {getTime(props.data.sys.sunset)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ) : (
                <div></div>
            )}
        </div>
    );

}

export default CurrentWeather;
