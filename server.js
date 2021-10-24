const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/api');

app.use(express.static('public'));

const PORT = 9000; 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/api', api);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})

app.listen(PORT, (err) => {
    err ? console.log('Error in server Set') 
    : console.log(`Server running on port ${PORT}`);
})