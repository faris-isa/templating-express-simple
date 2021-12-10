const express = require('express');
const router = express.Router();
const axios = require('axios');

//get users list
router.get('/', async (req, res, next) => {
    const users =  await axios.get('https://en.hololive.tv/r/v1/sites/13421518/portfolio/products?per=100');
    res.render('layouts/template', { 
        title: 'Hololive List', 
        author : 'IsaBot',
        users : users.data.data.products,
        vContent: '../content/user' //ini view yang di bikin variable
    })
})


//get user detail
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const user =  await axios.get(`https://en.hololive.tv/r/v1/sites/13421518/portfolio/products/${id}`);
    res.send(user.data);
    // res.render('layouts/template', { 
    //     title: 'Hololive List', 
    //     author : 'IsaBot',
    //     users : user.data.data.products,
    //     vContent: '../content/user' //ini view yang di bikin variable
    // })
})

module.exports = router;