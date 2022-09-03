import React from 'react';
//Components
import MiniForecast from './MiniForecast';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    grid: {
        padding: '15px 0px',
        height: 'calc(100% - 30px)',
        display: 'flex'
    },
    gridItem: {
        width: '80%',
        margin: 'auto'
    }
});

function Forecast(props) {
    const classes = useStyles();

    return (

        <Grid container spacing={2} className={classes.grid}>
            {props.data.daily.map((day, index) => {
                if (index > 0) { // excluding today's data
                    return <Grid item className={classes.gridItem} key={index}><MiniForecast day={day} /></Grid>
                }
            })}
        </Grid>

    )
}

export default Forecast;