const exprees = require('express');
const {ServerConfig , Logger} = require('./config');
const apiRoutes = require('./routes')
const app = exprees();  

app.use('/api', apiRoutes);

app.listen(ServerConfig.port, () => {
    console.log(`Srver is running on port ${ServerConfig.port}`);
    // Logger.info("Success! Server is running", {});
});
