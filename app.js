const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const userlist = [];

app.get('', function(req, res){
const d = new Date();
let day = d.getDay();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
       
    res.render('list', {today: d.toLocaleDateString("en-US", options), todo: userlist});
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    userlist.push(item);
    res.redirect('/');
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});