import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    form: {
        padding: '50px'
    },
    search: {
        minWidth: '300px',
        background: '#fff',
        borderRadius: '4px'
    },
    button: {
        marginLeft: '15px',
        marginTop: '6px',
        height: '40px'
    }
})

function Search(props) {
    const classes = useStyles();
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState([]);

    function handleSubmit() {
        fetch(`/api/weather/${city}`)
            .then((res) => res.json())
            .then((cityData) => {
                setCityData(cityData.data);
            });
    }

    const prevCityData = useRef();
    useEffect(() => {
        prevCityData.current = cityData;
    });

    const prevCity = prevCityData.current;

    useLayoutEffect(() => {
        if (cityData === prevCity) {
            return
        } else {
            props.callBackFromParent(cityData);
        }
    }, [props, cityData, prevCity])

    return (
        <form className={classes.form}>
            <TextField
                id="city-text"
                //onChange={handleChange}
                onChange={(event) => { setCity(event.target.value) }}
                label="City"
                variant="filled"
                className={classes.search} />
            <Button
                variant="contained"
                className={classes.button}
                onClick={handleSubmit}>Search</Button>
        </form>
    )
}

export default Search;