const Express = require('express');
const Port = 3000;
const CustomServer = Express();
const fs = require('fs');
var users = [];

//Database
fs.readFile("server/data.json", {encoding: 'utf8'}, function(err, data){
    if(err) throw err;

    JSON.parse(data).forEach((user) => {
        users.push(user);
    })
})

//Middlewares

//Router & request handler
CustomServer.route('/')
    .get((req, res) => {
        var buffer = '';
        users.forEach((user) => {
            buffer += "<a href='/" + user.name + "'>" + user.name + '</a><br>';
        });
        res.send(buffer);
    })
    .post((req, res) => {
        
        res.end();
    })

CustomServer.route('/:username')
    .get((req, res) => {
        var username = req.params.username;
        res.send(username);
    })

//Server listener
CustomServer.listen(Port, (err) => {
    if(err) {
        return console.log("Error: " + err);
    }

    console.log(`Server is listening on ${Port}`);
});