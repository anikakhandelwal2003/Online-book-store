import mongoose from 'mongoose'


const url = 'mongodb://0.0.0.0:27017/Book_Store'

// mongodb connection
mongoose.connect(url)
.then(()=> { console.log("connection")})
.catch((err) => console.log(err))

const connection = mongoose.connection



export{connection}
