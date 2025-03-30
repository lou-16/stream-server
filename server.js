const express = require("express")
const app = express()
const port = 3002
const path = require('node:path')

const WebSockets = require('ws');
const https = require('http');
const server = https.createServer(app)
const wss = new WebSockets.Server({ server });

wss.on("connection", (ws) => {
    console.log("client connected");

    wss.on("message", (message)=> {

        ws.clients.forEach(client =>{

            if (client !== ws && client.readyState == ws.OPEN){
                client.send(message)
            } 
        })
    });
    
    wss.on("close", ()=>{
        console.log("client disconnected")
    })
})

app.get('/', (req, res)=>{
    console.log("websocket streaming server")
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})