//Imports
const express = require("express");
const app = express();
const port = 3000;

//Static files import
app.use(express.static('src'))
app.use('/css', express.static(__dirname + 'src/css'))
app.use('/js', express.static(__dirname + 'src/js'))
app.use('/img', express.static(__dirname + 'src/img'))

//Set view for ejs files
app.set('views', './views')
app.set('view engine', 'ejs')

//Render the ejs file 
app.get('', (req, res) => {
    res.render('index')
})

//Listening of port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))