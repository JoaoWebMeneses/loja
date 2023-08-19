const mongoose = require('mongoose')

const url = "mongodb+srv://joaowebmeneses:JV2009@cluster0.y98sspl.mongodb.net/teste?retryWrites=true&w=majority"

const connect = ()=>{
    mongoose.connect(url)
    const connection = mongoose.connection;
    connection.on("error",()=>{
        console.log("Error!")
    })
    connection.on("open",()=>{
        console.log("Conectado ao banco")
    })
}
connect()