const Express = require('express');
const Port = 3000;
const Router = Express.Router();

const CustomServer = Express();


//Middlewares
CustomServer.use('/about', (req, res, next) => {
    req.chance = Math.random();
    //next();
});

//The error handler function should be the last function added with app.use
CustomServer.use((err, req, res, next) => {
    console.log("Something broke!");
    res.status(500).send('Something broke!');
});

//Router & request handler
CustomServer.route('/')
    .get((req, res) => {
        res.json({
            chance: req.chance
        })
        res.status(202).send('Success!')
    });

CustomServer.route('/about')
    .get((req, res) => {
        res.json({
            type: 'about'
        })
        res.status(202).send('Success!')
    });

//Server listener
CustomServer.listen(Port, (err) => {
    if(err) {
        return console.log("Error: " + err);
    }
    console.log(`Server is listening on ${Port}`);
});