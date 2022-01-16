var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var tiktok = require('./server/routers/tik');


var app = express();
const PORT = process.env.PORT || 80;

app.use(morgan('dev'));
app.use(express.static('client'));


// Enable CORS on ExpressJS to avoid cross-origin errors when calling this server using AJAX//
// We are authorizing all domains to be able to manage information via AJAX (this is just for development)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/add',async(req,res)=>{
	return res.redirect('minecraft://?addExternalServer=Owari%20Network|owari.ddns.net:25555');
});
app.get('/addCloveria',async(req,res)=>{
	return res.redirect('minecraft://?addExternalServer=Cloveria%20S4|sg-4.fahri.dev:2021');
});
app.get('/poi',async(req,res)=>{
	return res.redirect('https://nekopoi.care/app');
});

app.use('/tiktok', tiktok);


app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`);
});
