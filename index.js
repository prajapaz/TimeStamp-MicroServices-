const express = require('express'); 
const app = express(); 
const path = require('path');

app.use(express.static(path.join(__dirname, '/..', 'public')));
app.set("view engine", "ejs");
app.get('/', function(req, res){
    res.render('index'); 
});

const getTimestamp = date => ({
  unix: date.getTime(),
  utc: date.toUTCString()
});

app.get('/api/timestamp/:time', function(req,res){
    var time  = req.params.time ;
    let datetime = new Date(time);
    let dateToDisplay = getTimestamp(datetime)
    console.log(dateToDisplay);
    if(datetime  == 'Invalid Date'){
    let Todaytime = new Date();   
    let TodaytimetoDisplay = getTimestamp(Todaytime);
    res.render('index', {datetime : JSON.stringify(TodaytimetoDisplay)});
    }
    else {
      res.render('index', {datetime : JSON.stringify(dateToDisplay)});
    }

});

app.listen(2000, () => console.log('server has been started')); 
