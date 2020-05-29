//Imports
const express = require('express')

const app = express()
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

//Starting Server
app.listen(8000,() => {
    console.log('started server on port 8000')
})