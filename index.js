const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


const models = require('./models');

app.use( bodyParser.json() );  

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json( {message: "welcome to my first nodejs API"} );
});

app.get('/hello', (req, res) => {
    res.send('hello world');
});

app.get('/api/contacts', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    models.User.findAll().then(users => {
        res.json(users);
    });
});

app.post('/api/contacts', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    models.User.create(req.body).then( result => {
        res.json(result);
    });
    // models.User.create().then(users => {
    //     res.json(users);
    // });
});

app.get('/api/contacts/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    models.User.findByPrimary(req.params.id).then( result => {
        res.json(result);
    }).catch(error => {
        res.status(400).json( { message: "Resource Not Found.", error: 400});
        console.log("Error: 400, Resource not found.");
    });
    // models.User.create().then(users => {
    //     res.json(users);
    // });
});

app.put('/api/contacts/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    models.User.findByPrimary(req.params.id).then( result => {
        result.update(req.body).then( result => {
            res.json(result);
        });

    }).catch(error => {
        res.status(400).json( { message: "Resource Not Found.", error: 400});
        console.log("Error: 400, Resource not found.");
    });
    // models.User.create().then(users => {
    //     res.json(users);
    // });
});

app.delete('/api/contacts/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    models.User.findByPrimary(req.params.id).then( result => {
            result.destroy().then( result => {
                res.json(result);
            });

        }).catch(error => {
            res.status(400).json( { message: "Resource Not Found.", error: 400});
            console.log("Error: 400, Resource not found.");
        });
    // models.User.create().then(users => {
    //     res.json(users);
    // });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
console.log('server started');