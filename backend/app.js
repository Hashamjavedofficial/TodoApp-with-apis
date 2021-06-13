const express = require('express')
const cors = require('cors')
const mongoose =  require('mongoose')
const morgan = require('morgan')

const userRouter = require('./routes/user.js')

const {databaseConnectionString} = require('./utils/constant')

const app = express()

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/user',userRouter)

app.get('/test',(req,res)=>{
    console.log('Hit')
    res.status(200).send({message:'WOrking application'})
})

mongoose.connect(databaseConnectionString,{useNewUrlParser: true, useUnifiedTopology: true}).then(res=>{
    app.listen(PORT,()=>{
        console.log('Server is up on PORT ',PORT);
    })
})