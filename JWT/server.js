var app = require('./app');
var port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Express server running on port '+port)
})