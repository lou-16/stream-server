const express = require("express")
const app = express()
const port = 3002
const path = require('node:path')
const cors = require('cors')

app.use(cors({origin : 'http://localhost:5173'}))

app.get('/', (req, res)=>{
    console.log("connection from", req.ip)
    res.sendFile(path.join(__dirname, 'file.txt'))
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})