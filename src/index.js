const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');


//Initializations
const app = express();

//Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expbhs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialstDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index.js'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));



//Start Server
app.listen(4000, () =>{
    console.log('Server on port', 4000);
})
