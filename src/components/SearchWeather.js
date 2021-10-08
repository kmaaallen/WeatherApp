import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    form: {
        padding: '15px',
        textAlign: 'right',
        width: '50%'
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
    },
    blackText: {
        color: 'black'
    }
})

function Search(props) {
    const classes = useStyles();
    const [city, setCity] = useState('');
    const [cityData, setCityData] = useState([]);
    const [searchError, setSearchError] = useState('');

    function handleSubmit(e) {
        setSearchError('');
        e.preventDefault();
        fetch(`/api/weather/${city}`)
            .then((res) => res.json())
            .then((cityData) => {
                if (cityData.data.cod === "404") {
                    var capitalised = cityData.data.message.charAt(0).toUpperCase() + cityData.data.message.slice(1);
                    setSearchError(capitalised);
                } else {
                    setCityData(cityData.data);
                    setCity('');
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    const prevCityData = useRef();
    useEffect(() => {
        prevCityData.current = cityData;
    });

    const prevCity = prevCityData.current;

    useLayoutEffect(() => {
        if (cityData === prevCity) {
            return;
        } else {
            props.callBackFromParent(cityData);
        }
    }, [props, cityData, prevCity])

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                id="city-text"
                onChange={(event) => { setCity(event.target.value) }}
                label="City"
                InputLabelProps={{ className: classes.blackText }} // find prop for this
                value={city}
                error={searchError ? true : false}
                helperText={searchError}
                variant="filled"
                className={classes.search} />
            <Button
                type="submit"
                variant="contained"
                className={classes.button}
            >Search</Button>
        </form>
    )
}

export default Search;