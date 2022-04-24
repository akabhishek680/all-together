const express = require('express');
const port = 8000;
const app = express();
const router = require('./routes/index.js');
const db = require('./config/mongoose.js');

app.use('/', router);

app.listen(port, (error) => {
    
    if(error) {
        console.log(error);
        return;
    }

    console.log(`Server is running on port ${port}`);
})