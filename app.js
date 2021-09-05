require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico
app.use( express.static('public'))

// sec comenta esto ya que solo funciona para handelebars
// app.get('/', (req,res)=>{
//     res.render('home',{
//         nombre: 'Mariano',
//         titulo: 'Curso de node'
//     })
// })

// app.get('/hola-mundo', (req,res)=>{
//     res.send('Hola Mundo e su ruta');
// })

// app.get('/generic', (req,res)=>{
//     // res.sendFile( __dirname + '/public/generic.html'); //esto sirve el generic html pero sin mostrar el .html
//     res.render('generic',{
//         nombre: 'Mariano',
//         titulo: 'Curso de node'
//     })
// })
// app.get('/elements', (req,res)=>{
//     // res.sendFile( __dirname + '/public/elements.html'); //esto sirve el generic html pero sin mostrar el .html
//     res.render('elements',{
//         nombre: 'Mariano',
//         titulo: 'Curso de node'
//     })
// })


app.get('*', (req,res)=>{
    // res.send('404 | page not fouund');
    //res.sendFile( __dirname + '/public/back/404.html') //con esto devuelvo una pagina de 404 not found
    res.sendFile( __dirname + '/public/index.html')
})

app.listen(port, ()=> {
    console.log(`listening on localhost:${port}`)
})