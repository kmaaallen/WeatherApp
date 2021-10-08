# WeatherApp
WeatherApp displays a user's local weather on load and allows users to search for and display weather from other places utilising the [OpenWeatherApp API](https://openweathermap.org/api). For this project a separate Node backend project [WeatherAppNode](https://github.com/kmaaallen/WeatherAppNode) is serving as the API.

# Description
This App is built using React and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It was built to practice developing a full-stack React and Node web app, with separate repositories maintained for each to keep functionality separate.

It has been deployed on ... TO DO and it available running [here]() //TODO

It consists of a main page and two React components to display weather and to search for weather.

When a weather data object is returned a user is able to see the following details for a location:
- Location and country code e.g. London, GB
- Weather icon and current temperature in degrees Celsius
- Maximum and minimum predicted temperatures in degrees Celsius
- Sunrise and sunset in the user's local time (12 hour clock)
- A background image appropriate to the current weather at that location

# How to set up and run project
- Clone this project

## To run locally
- Clone and set up [WeatherAppNode](https://github.com/kmaaallen/WeatherAppNode)
- Once both this project and [WeatherAppNode](https://github.com/kmaaallen/WeatherAppNode) set up. Start the App by running <code>npm start</code> in each project. The app should open in your browser automatically.
- Enable location sharing in your browser for this app to load your local weather.


# How to use project
To use local weather loading end users will have to enable location sharing in their browser for this app.

To search for weather users can type a city name into the search bar to display weather for that location.

# Features
## Local weather load based on user's location
### How it works
- A user's longitude and latitude are used on load to make a request to the Node backend in [WeatherAppNode](https://github.com/kmaaallen/WeatherAppNode).
-
### Limitations
- User has to have location sharing enabled

# Future improvements
- Add 7 day forecasting
- Return to 'My weather'
- Display multiple 'favourite locations'?
- Improve night vs day display
- Darkmode

# Deploy project
TO DO

#Testing
TO DO

#Accessibility
TO DO


---------------------------------------

# BOILER PLATE BELOW
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

SCRIPTS BELOW : TO BE INCORPORATED TO ABOVE DOCS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
