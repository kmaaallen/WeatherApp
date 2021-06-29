import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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

function CurrentWeather() {
    const classes = useStyles();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [data, setData] = useState([]);

    const firstCall = useRef(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (pos) {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        });
    }, []);

    useLayoutEffect(() => {
        if (firstCall.current) {
            firstCall.current = false;
            return;
        } else if (latitude !== '' && longitude !== '') {
            fetch(`/api/weather/${latitude}/${longitude}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data.data);
                    console.log(data);
                });
        }
    }, [latitude, longitude]);

    function getTime(timestamp) {
        var date = new Date(timestamp * 1000);
        var timestr = date.toLocaleTimeString();
        return timestr;
    }

    return (
        <div>
            {(typeof data.main != 'undefined') ? (
                <Card >
                    <CardContent>
                        <Typography variant="h2">
                            {data.name || 'Loading local weather...'}
                        </Typography>
                        <Grid container>
                            <Grid item xs>
                                <CardMedia
                                    className={classes.media + ' ' + classes.floatRight}
                                    image={`${process.env.REACT_APP_API_LOGO}/${data.weather[0].icon}.png`}
                                    title={`${data.weather[0].description} icon`} />
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" textAlign="center" className={classes.paddingTop30 + ' ' + classes.floatLeft}>
                                    {data.main.temp}°C
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatRight}>
                                    Max: {data.main.temp_max}°C
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatLeft}>
                                    Min: {data.main.temp_min}°C
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatRight}>
                                    Sunrise: {getTime(data.sys.sunrise)}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" className={classes.floatLeft}>
                                    Sunset: {getTime(data.sys.sunset)}
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
