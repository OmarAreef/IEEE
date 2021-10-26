const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const engine = require('ejs-mate');

const app = express();

app.engine('ejs' , engine)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.set('public', path.join(__dirname, 'public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/' , (req ,res)=> {
    let message = ""
    res.render('ieee/index.ejs',{message} );
})
app.get('/about' , (req ,res)=> {
    res.render('ieee/about.ejs')
})
app.get('/committess' , (req ,res)=> {
    res.render('ieee/committess.ejs')
})
app.get('/login' , (req ,res)=> {
    res.render('ieee/login.ejs')
})

app.get('/membership' , (req ,res)=> {
    res.render('ieee/membership.ejs')
})
app.get('/attend' , (req ,res)=> {
    res.render('ieee/attend.ejs')
})
app.post('/attend' , (req , res ) => {
    const message = "Registiration Successfull" ;
    res.redirect('/' )
})
app.get('/research' ,(req,res) =>{
    res.render('ieee/research')
})
app.get('/confrences' ,(req,res) =>{
    res.render('ieee/confrences')
})

app.listen(3000 , () => {
    console.log('listening')
})