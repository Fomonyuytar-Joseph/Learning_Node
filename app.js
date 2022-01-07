const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

// creatind express app
const app = express();

//register view engine
app.set('view engine', 'ejs')
//listening to requests
app.listen(3000);

app.get('/', (req ,res) =>{
    const blogs =  [
     {title:'animals', snippet:'animals in the house'},
     {title:'plants', snippet:'plants in the garden'},
     {title:'the sun', snippet:'the sun is very hot '},
    ]
    // res.send('<p>Home page</p>')
    // res.sendFile('./views/index.html', {root: __dirname})
    res.render('index' , {title:'Home' , blogs})
})

app.get('/about', (req ,res) =>{
    // res.send('<p>Home page</p>')
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('about',{title:'About'})
})

app.get('/blogs/create', (req ,res) =>{
    // res.send('<p>Home page</p>')
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('create',{title:'Create Blog'})
})

//redirects
// app.get('/about-us' , (req , res) =>{
//     res.redirect('/about')
// })

app.use((req , res) =>{
    res.status(404).render('404')
})