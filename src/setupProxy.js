const proxy = require("http-proxy-middleware");

module.exports = app => {
    app.use(proxy("/api/*", { target: "https://react-weather-app-node.herokuapp.com/" }));
};