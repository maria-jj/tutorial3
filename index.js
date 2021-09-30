//const fs = require('fs');

//const generateFile=() => {
//    try{
//        fs.writeFileSync('data.txt', 'hi this file was made with node')
//    }catch (err){
//        console.log(err)
//    }
//}

//generateFile();

/*const http = require('http');
http.createServer(function (req, res){
    res.write('server started hi!');
    res.end();

}).listen(8080)*/

/*const myModule = require('./my-module');

const date = myModule();
console.log(date);*/

//assignment part



//requiring express
const express = require('express');
//initializing the express ap
const app = express();
//specifying a port
const port = 9000;


//API / URLs
app.get('/',(req, res)=>{
    res.send('hi from the express server!');
});

app.get('/api/cats', (req, res)=>{
    //call to db
    //return dummy data
    const cats = ['british shorthair', 'ragdoll', 'russian blue'];
    res.send(JSON.stringify(cats));
});

app.listen(port, () =>{
console.log('listening on port', port);
});
