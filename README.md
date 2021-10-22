# WeatherApp
WeatherApp displays a user's local weather on load and allows users to search for and display weather from other places utilising the [OpenWeatherApp API](https://openweathermap.org/api). For this project a separate Node backend project [WeatherAppNode](https://github.com/kmaaallen/WeatherAppNode) is serving as the API.

# Description
This App is built using React and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It was built to practice developing a full-stack React and Node web app, with repositories maintained for each to keep functionality separate.

It has been deployed on Heroky and it available running [here](https://react-weather-app-front-end.herokuapp.com/)

It consists of a main page and React components to display weather and to search for weather.

When a weather data object is returned a user is able to see the following details:

For a location's current weather:
- Location and country code e.g. London, GB
- Weather icon and current temperature in degrees Celsius
- Maximum and minimum predicted temperatures in degrees Celsius
- Sunrise and sunset in the user's local time (12 hour clock)
- A background image appropriate to the current weather at that location

For a location's 7 day forecast:
- Day of the week
- Weather icon
- Maximum and minimum predicted temperatures in degrees Celsius

# How to set up and run project
- Clone this repository

## To run locally
- Clone and set up [WeatherAppNode](https://github.com/kmaaallen/WeatherAppNode)
- Run `npm install` to install the required packages
- Create a .env file at the project root and add the following:

REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = Your api key for openWeatherMap
REACT_APP_API_LOGO = 'https://openweathermap.org/img/wn'
REACT_APP_BACKEND_URL = 'api'

Remember to add your .env file to gitignore

- Once both this project and [WeatherAppNode](https://github.com/kmaaallen/WeatherAppNode) are set up, start the App by running `npm start` in each project. The app should open in your browser automatically.
- Enable location sharing in your browser for this app to load your local weather or use the search component to display a particular location.


# How to use project
To use local weather loading end users will have to enable location sharing in their browser for this app.

To search for weather users can type a city name into the search bar to display weather for that location.

# Features
## Local weather load based on user's location
### How it works
- A user's longitude and latitude are used on load to make a request to the Node backend in [WeatherAppNode](https://github.com/kmaaallen/WeatherAppNode).
- User has to enable location sharing to use this feature or they will see the following message, 'Please share your location to see local weather, or use the search bar'.

### Limitations
- The app does not currently utilise a storage solution so users cannot yet save favourite locations

# Future improvements
- Allow users to save favourite locations or go back to local weather without refreshing page
- Allow for a range of forecasts with varying detail
- Set up theme with material UI to consolidate styling
- Further optimisation of webpage for sustainability

# Deploy project
This project is currently deployed on Heroku as a stand alone app and calls a separate Heroku app hosting the WeatherAppNode API backend.
To deploy your app on Heroku refer to this [documentation](https://devcenter.heroku.com/categories/deploying-with-git) for deploying an app using git and this [documentation](https://facebook.github.io/create-react-app/docs/deployment) on deploying a create-react-app app

Once deployed you will need to add the following config variables to your app in the settings:

REACT_APP_API_KEY = Your openWeatherMap API key
REACT_APP_API_LOGO = 'https://openweathermap.org/img/wn'
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_BACKEND_URL = The url of your backend hosted server

#Technologies / Frameworks
[Create React App](https://facebook.github.io/create-react-app/docs/getting-started).
[React](https://reactjs.org/).
[OpenWeatherMap](https://openweathermap.org)
[Material UI](https://mui.com/)

#Testing
Unit tests have been used to test the components in this project. The following testing tools / frameworks have been used:
[Jest](https://jestjs.io/) as a testing framework
[Test Renderer](https://reactjs.org/docs/test-renderer.html) to render React components
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components
[Mock Service Worker](https://mswjs.io/) to mock API calls

To run all tests: `npm run test`

#Accessibility
This project has been tested using [WAVE](https://wave.webaim.org/) and [Axe](https://www.deque.com/axe/devtools/)

#Sustainability
The hosted webpage for this project has been optimised to improve its sustainability - check out how it is doing [on websitecarbon.com](https://www.websitecarbon.com/website/react-weather-app-front-end-herokuapp-com/)

#Other
Helpful tutorial used to guide initial stages of this project - [How to create a react app with a node backend](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)
Weather images were sourced from [UnSplash](https://unsplash.com/)
