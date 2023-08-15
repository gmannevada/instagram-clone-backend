//  old way of importing
// const express = require('express') 
// const app = express()

// new way of importing
import express from 'express'
const app = express()
const PORT = 5010


let number1 = []
let number2 = []
let sumOf2 = []

// convert the data that is coming from the client to json to javascript object

app.use(express.json()) // for parsing application/json // middleware

// api
app.post("/sum", (req, res)=>{
    //  console.log(req.headers)
    //  console.log(req.body)
    //  console.log(req.params)
    let {n1, n2}  = req.body
    let sum = +n1 +  +n2
    console.log(`The response is (sum of n1:${n1}, n2:${n2}) is:${sum}`)
    res.send(`The sum of (${n1} and ${n2})is ${sum} running on port ${PORT} ...`)
})


app.listen(PORT, ()=>console.log(`Server running on port ${PORT} ...`))

// api: 
// get, post, put,patch, delete 