require('dotenv').config()

const express = require('express')  ///create express app
const mongoose = require('mongoose')
const workoutroutes = require('./routes/workouts.js')


 // express app
const app = express()

 
//middleware
app.use(express.json())   /// for looking if any data input 

app.use((req, res, next) => {
console.log(req.path, req.method)
next()
})

// route handler
app.use('/api/workouts', workoutroutes)
app.use(express.json())

//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log('connecting to db & listening on port', process.env.PORT) 
    })
    
    })
    .catch((error) =>{
        console.log(error)
    })

///app.get('/', (req, res) => {
///res.json({msg:'welcome to the app'})
///})


 