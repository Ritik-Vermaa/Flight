const exprees = require('express');
const {port} = require('./config');

const app = exprees();  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
