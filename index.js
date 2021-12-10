const express = require('express')
const app = express()
const port = 80

const axios = require('axios');
const userRouter = require('./routes/users');

//using view engine ejs
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('layouts/template', { 
        title: 'NodeJS Website', 
        author : 'IsaBot',
        vContent: '../index' //ini view yang di bikin variable
    })
})

//page users route
app.use('/users', userRouter);

//default route
app.use('/', (req, res) => {
    res.status(404)
    res.send("Maaf halaman yang anda buka tidak ada !")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})