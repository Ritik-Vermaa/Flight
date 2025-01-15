const {ServerConfig , Logger} = require('./config');
const app = require('./app')

app.listen(ServerConfig.port, () => {
    console.log(`Srver is running on port ${ServerConfig.port}`);
    // Logger.info("Success! Server is running", {});
});
