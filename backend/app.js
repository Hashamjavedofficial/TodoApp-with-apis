const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

app.get('/test',(req,res)=>{
    console.log('Hit')
    res.status(200).send({message:'WOrking application'})
})

app.listen(PORT,()=>{
    console.log(`Server is up on PORT ${PORT}`)
})