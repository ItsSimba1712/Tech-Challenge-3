const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Api = require('./schema/apiSchema');
const Contact = require('./schema/contactSchema');

const app = express();

const dbConnect= "mongodb://localhost:27017/techchallenge";

mongoose.connect(dbConnect, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(4000))
    .then(console.log("Connection has been made"))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('index')
})

app.set('view engine', 'ejs');

const home1 = new Api({
        id: 0,
        title: 'Hello',
        content: 'Welcome to my first api',
        image: 'https://blog.axway.com/wp-content/uploads/2019/07/GettyImages-1156783188-2.jpgAPI-Mashup-2.jpg'
    });

home1.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted successfully!");
      });

const home2 = new Api({
        id: 1,
        title : 'Lorem Ipsum',
        content: 'Never made anything like this before',
        image: 'https://images.squarespace-cdn.com/content/v1/5005c84984ae929b372147ad/1407756737244-P45W8L2QIVGV3M1IMZME/lorem_ipsum.png'
    })

home2.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted successfully!");
      });
    
const home3 = new Api({
        id: 2,
        title : 'More Lorem Ipsum',
        content: 'Not sure what to put in here',
        image: 'https://joplinbusinessoutlook.com/wp-content/uploads/2020/10/fb-og-img-678x381.jpg'
    })

home3.save(function(err, doc) {
    if (err) return console.error(err);
        console.log("Document inserted successfully!");
    });

const contact = new Api({
    id: 0,
    title : 'Contact Page',
    content: 'Insert Lorem Here'
})

contact.save(function(err, doc) {
    if (err) return console.error(err);
        console.log("Document inserted successfully!");
});
 
app.get('/api/home', (req, res)=>{
    res.json([home1,home2,home3]);
});

app.get('/api/contact', (req, res) => {
    res.send(contact);
})

app.post('/contact', (req, res, next) => {
    Contact.create(req.body)
    .then(function(post){
        res.send(post);
    })
    .then(function(){
        console.log("Contact page inserted succesfully")
    })
    .catch(next);
});

module.exports = app;

module.exports = dbConnect;