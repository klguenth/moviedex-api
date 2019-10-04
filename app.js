const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/movie', (req, res) => {
    res.status(200).send('Movie Time!');
});

app.listen(8000, () => {
    console.log('Express server is listening on port 8000');
});