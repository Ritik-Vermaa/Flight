const exprees = require('express');
const apiRoutes = require('./routes')
const app = exprees();  

app.use(exprees.json());
app.use(exprees.urlencoded({extended: true}));

app.use('/api', apiRoutes);

module.exports = app;