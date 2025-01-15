const exprees = require('express');
const apiRoutes = require('./routes')
const app = exprees();  

app.use('/api', apiRoutes);

module.exports = app;