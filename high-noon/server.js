//server.js
//manages our database requests!

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Selection from './models/selection';
import cors from 'cors';
import https from 'https';
import fs from 'fs';

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors({
  origin: 'https://sometime-soon.com'
}));
app.options('*',cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app.use(function(req, res, next){
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//  next();
//});


router.get('/responses', (req, res, next) => {
  Selection.find((err, responses) => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true, data: responses });
  });
});
router.post('/responses', (req, res, next) => {
  const response = new Selection();
  response.selection = req.body.question;
  response.time = Date(Date.now()).toString();
  response.save(err => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true});
  });
});
router.delete('/responses', (req, res, next) => {
  Selection.remove({}, (err) => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true});
  });
});

app.use('/api', router);

https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/sometime-soon.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/sometime-soon.com/cert.pem')
}, app)
.listen(API_PORT, function() {
  console.log(`Listening on port ${API_PORT}`)
})
//app.listen(API_PORT, function() {
//  console.log(`Listening on port ${API_PORT}`)
//})
