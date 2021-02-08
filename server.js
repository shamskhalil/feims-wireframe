const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/www`));
app.listen(8080, () => {
    console.log('server up and running on port 8080');
});