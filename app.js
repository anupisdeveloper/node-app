const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

/* Creating express instance and assigning to app */
const app = express();

/* Here we are setting port to express server on which server will listen*/
app.set('port', PORT);

/* We are parsing request object using bodyParser or express */
app.use(bodyParser.json());
app.use(express.json());



app.use('/', (req, res) => {

    /* for sending any text over response*/
    res.send('Cyc Node Server Running !');
});


/* Creating Https server which will listen on port using listen*/
app.listen(app.get('port'), () => {
 console.log('Server is running on port ' + app.get('port'));
});