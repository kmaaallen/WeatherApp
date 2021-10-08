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
        paddingTop: '10px',
        backgroundColor: 'black',
        borderRadius: '0',
        width: '50%',
        float: 'right',
    },
    mainMedia: {
        display: 'block',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        width: '80%',
        margin: 'auto',
        //maxHeight: '250px', //need media query here
        border: '1px solid white'
    },
    content: {
        color: 'black',
        width: '80%',
        margin: '0 auto 30px',
        padding: '16px 0',
        backgroundColor: 'white',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        border: '1px solid white'
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

// TODO: Sort out styles
// TODO: What if user doesn't give permission for geolocation?

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

    //console.log(props.data)

    return (
        <Card className={classes.card} elevation={0}>
            <CardMedia
                className={classes.mainMedia}
                component="img"
                height="300"
                image={props.background}
                alt=""
            />
            <CardContent className={classes.content}>
                <Typography component="h2" variant="h4">
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
                        <Typography component="h3" variant="h5" className={classes.paddingTop30 + ' ' + classes.floatLeft}>
                            {Math.round(props.data.main.temp)}°C
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs>
                        <Typography component="h3" variant="h5" className={classes.floatRight}>
                            Max: {Math.round(props.data.main.temp_max)}°C
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="h3" variant="h5" className={classes.floatLeft}>
                            Min: {Math.round(props.data.main.temp_min)}°C
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs>
                        <Typography component="h3" variant="h5" className={classes.floatRight}>
                            Sunrise: {getTime(props.data.sys.sunrise, props.data.timezone)}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography component="h3" variant="h5" className={classes.floatLeft}>
                            Sunset: {getTime(props.data.sys.sunset, props.data.timezone)}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );

}

export default CurrentWeather;
