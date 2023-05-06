const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const { youtube } = require("ytdownloader-fts");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors({
    origin: '*',
}));
// youtube("https://www.youtube.com/watch?v=UFzpAh-x_IY&ab_channel=Discoverychannel").then(function(response){
//     console.log(response);
// });
app.get('/api', (req, res) =>{
    console.log('SErver working')
});
app.post('/api/post', (req, res) =>{
   
    youtube(req.body.link).then(function(response){
        console.log(response);
        res.send(response);
 });
});
app.listen(5000,()=>{
    console.log("Server Running At 5000")
});
