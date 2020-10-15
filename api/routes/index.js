const bodyParser = require('body-parser');
const colmeiasRoute = require('./colmeiaRouter');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(colmeiasRoute);
}