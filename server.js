const express = require('express')
const app = express();
const port = process.env.PORT || 49160;

const routes = require('./library/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});