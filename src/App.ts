import express from 'express';
import { connection } from './Connection/DbConnection';
import Routes from './Router/Routes'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json())

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
   
connection.on('connected', ()=> {
    console.log("Connected DP")
})

app.use('/', Routes);

app.listen(1000, ():void=>{
    console.log('Your server is running ')
})

