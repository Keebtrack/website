const express = require('express');
const path = require('path');
const fallback = require('express-history-api-fallback');

const port = process.env.PORT || 9000;

const app = express();

const root = path.join(__dirname, 'dist');

app.use(express.static(root));

app.use(fallback('index.html', { root }));

/* eslint-disable */
app.listen(port, () => console.log('app listening on port:', port));
/* eslint-enable */