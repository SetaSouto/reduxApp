"use strict";
let express = require('express');
let app = express();
let path = require('path');

// Middleware to define folder for static files
app.use(express.static('public'));

// Index route
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', 'index.html')));

app.listen(3000, () => console.log('app listening on port 3000.'));
