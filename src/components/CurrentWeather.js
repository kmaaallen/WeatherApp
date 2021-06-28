import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

function CurrentWeather() {
    const [latitude, setLatitude] = useState([]);
    const [longitude, setLongitude] = useState([]);
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
        } else {
            fetch(`/api/weather/${latitude}/${longitude}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    console.log(data);
                });
        }

    }, [longitude]);

    return (
        <div></div>
    );

}

export default CurrentWeather;
