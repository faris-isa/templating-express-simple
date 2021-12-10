const express = require('express')
const app = express()
const port = 80

//using view engine ejs
app.set('view engine', 'ejs');

//default route
app.use('/', (req, res) => {
    res.status(404)
    res.send("Maaf halaman yang anda buka tidak ada !")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})