// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// mock global navigator

const mockGeolocation = {
    getCurrentPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

//mock dataprops
export const data = {
    "coord": {
        "lon": -122.08,
        "lat": 37.39
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 282.55,
        "feels_like": 281.86,
        "temp_min": 280.37,
        "temp_max": 284.26,
        "pressure": 1023,
        "humidity": 100
    },
    "visibility": 16093,
    "wind": {
        "speed": 1.5,
        "deg": 350
    },
    "clouds": {
        "all": 1
    },
    "dt": 1560350645,
    "sys": {
        "type": 1,
        "id": 5122,
        "message": 0.0139,
        "country": "US",
        "sunrise": 1560343627,
        "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
}

export const forecast = {
    "lat": 51.4235,
    "lon": -0.1705,
    "timezone": "Europe/London",
    "timezone_offset": 3600,
    "daily": [
        {
            "dt": 1633950000,
            "sunrise": 1633933063,
            "sunset": 1633972605,
            "moonrise": 1633957020,
            "moonset": 1633983300,
            "moon_phase": 0.19,
            "temp": {
                "day": 11.37,
                "min": 8.47,
                "max": 15.48,
                "night": 11.35,
                "eve": 13.86,
                "morn": 9.41
            },
            "feels_like": {
                "day": 10.52,
                "night": 10.63,
                "eve": 12.95,
                "morn": 7.98
            },
            "pressure": 1031,
            "humidity": 75,
            "dew_point": 7.1,
            "wind_speed": 3.43,
            "wind_deg": 341,
            "wind_gust": 8.53,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 59,
            "pop": 0,
            "uvi": 1.9
        },
        {
            "dt": 1634036400,
            "sunrise": 1634019564,
            "sunset": 1634058874,
            "moonrise": 1634047380,
            "moonset": 1634073300,
            "moon_phase": 0.23,
            "temp": {
                "day": 13.78,
                "min": 9.28,
                "max": 14.93,
                "night": 12.52,
                "eve": 14.12,
                "morn": 9.31
            },
            "feels_like": {
                "day": 12.99,
                "night": 12.13,
                "eve": 13.62,
                "morn": 7.94
            },
            "pressure": 1025,
            "humidity": 68,
            "dew_point": 7.88,
            "wind_speed": 4.12,
            "wind_deg": 315,
            "wind_gust": 9.36,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.23,
            "rain": 0.27,
            "uvi": 1.78
        },
        {
            "dt": 1634122800,
            "sunrise": 1634106064,
            "sunset": 1634145143,
            "moonrise": 1634136780,
            "moonset": 1634164080,
            "moon_phase": 0.25,
            "temp": {
                "day": 14.2,
                "min": 9.7,
                "max": 16.57,
                "night": 14.1,
                "eve": 15.48,
                "morn": 10.59
            },
            "feels_like": {
                "day": 13.4,
                "night": 13.63,
                "eve": 14.86,
                "morn": 9.85
            },
            "pressure": 1028,
            "humidity": 66,
            "dew_point": 7.83,
            "wind_speed": 2.57,
            "wind_deg": 25,
            "wind_gust": 5.02,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 90,
            "pop": 0.19,
            "uvi": 1.99
        },
        {
            "dt": 1634209200,
            "sunrise": 1634192565,
            "sunset": 1634231414,
            "moonrise": 1634225340,
            "moonset": 0,
            "moon_phase": 0.3,
            "temp": {
                "day": 17.45,
                "min": 11.28,
                "max": 17.85,
                "night": 13.28,
                "eve": 15.05,
                "morn": 11.28
            },
            "feels_like": {
                "day": 16.9,
                "night": 12.83,
                "eve": 14.6,
                "morn": 10.81
            },
            "pressure": 1025,
            "humidity": 63,
            "dew_point": 10.22,
            "wind_speed": 4.16,
            "wind_deg": 251,
            "wind_gust": 7.95,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": 41,
            "pop": 0,
            "uvi": 2.17
        },
        {
            "dt": 1634295600,
            "sunrise": 1634279067,
            "sunset": 1634317685,
            "moonrise": 1634313300,
            "moonset": 1634255220,
            "moon_phase": 0.33,
            "temp": {
                "day": 15.65,
                "min": 11.52,
                "max": 16.01,
                "night": 13.17,
                "eve": 14.27,
                "morn": 11.66
            },
            "feels_like": {
                "day": 14.92,
                "night": 12.63,
                "eve": 13.61,
                "morn": 11.05
            },
            "pressure": 1016,
            "humidity": 63,
            "dew_point": 8.5,
            "wind_speed": 2.75,
            "wind_deg": 225,
            "wind_gust": 7.24,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.41,
            "rain": 0.44,
            "uvi": 1.64
        },
        {
            "dt": 1634382000,
            "sunrise": 1634365569,
            "sunset": 1634403957,
            "moonrise": 1634400900,
            "moonset": 1634346360,
            "moon_phase": 0.36,
            "temp": {
                "day": 16.13,
                "min": 10.51,
                "max": 16.79,
                "night": 12.68,
                "eve": 14.24,
                "morn": 10.51
            },
            "feels_like": {
                "day": 15.39,
                "night": 11.91,
                "eve": 13.39,
                "morn": 9.99
            },
            "pressure": 1018,
            "humidity": 61,
            "dew_point": 8.47,
            "wind_speed": 1.36,
            "wind_deg": 182,
            "wind_gust": 1.79,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0.28,
            "uvi": 2
        },
        {
            "dt": 1634468400,
            "sunrise": 1634452071,
            "sunset": 1634490230,
            "moonrise": 1634488260,
            "moonset": 1634437440,
            "moon_phase": 0.4,
            "temp": {
                "day": 15.69,
                "min": 10.09,
                "max": 16.26,
                "night": 12.82,
                "eve": 14.2,
                "morn": 10.09
            },
            "feels_like": {
                "day": 14.99,
                "night": 12.01,
                "eve": 13.4,
                "morn": 9.4
            },
            "pressure": 1020,
            "humidity": 64,
            "dew_point": 8.8,
            "wind_speed": 4.07,
            "wind_deg": 227,
            "wind_gust": 5.78,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 99,
            "pop": 0,
            "uvi": 2
        },
        {
            "dt": 1634554800,
            "sunrise": 1634538574,
            "sunset": 1634576504,
            "moonrise": 1634575500,
            "moonset": 1634528340,
            "moon_phase": 0.43,
            "temp": {
                "day": 15.86,
                "min": 10.89,
                "max": 15.86,
                "night": 15.39,
                "eve": 14.98,
                "morn": 10.89
            },
            "feels_like": {
                "day": 15.09,
                "night": 15,
                "eve": 14.26,
                "morn": 10.18
            },
            "pressure": 1018,
            "humidity": 61,
            "dew_point": 8.31,
            "wind_speed": 6.67,
            "wind_deg": 200,
            "wind_gust": 13.88,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 100,
            "pop": 0,
            "uvi": 2
        }
    ]
}

// mock server

export const handlers = [
    // Handles a GET weather from lat/long request
    rest.get('/api/weather/:latitude/:longitude', (req, res, ctx) => {
        const { latitude } = req.params.latitude;
        const { longitude } = req.params.longitude;

        return res(
            ctx.status(200),
            ctx.json(data)
        )
    }),
    /// Handles a GET weather from city request
    rest.get('/api/weather/:city', (req, res, ctx) => {
        const { city } = req.params.city;

        return res(
            ctx.status(200),
            ctx.json(data)
        )
    }),
]

const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())


server.events.on('request:start', (req) => {
    console.log(req.method, req.url.href)
})

