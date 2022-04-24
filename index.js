const express = require('express');
const port = 8000;

const app = express();

app.listen(port, (error) => {
    
    if(error) {
        console.log(error);
        return;
    }

    console.log(`Server is running on port ${port}`);
})