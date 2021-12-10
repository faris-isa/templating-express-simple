const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send("Berhasil instalasi Web Server")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})