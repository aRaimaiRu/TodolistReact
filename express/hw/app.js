var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var object = {text:"Hello World"}

app.use(express.json())

app.get('/static',(req,res)=>{
    res.send("Hello World")
})

app.get('/staticJSON',(req,res)=>{
    res.json(object)
})

app.get('/echo',(req,res)=>{
    var a = req.query.text
    res.send(a)
})

app.get('/plus',(req,res)=>{
    var a = parseInt(req.query.a)
    var b = parseInt(req.query.b)
    res.send(a+b)
})

app.get('/plusByJSON',(req,res)=>{
    var jsonText = JSON.parse(req.query.jsonText)
    var ans = parseInt(jsonText.a)+parseInt(jsonText["b"])
    res.send(typeof(jsonText)+" = "+jsonText+" = "+ans)
})
app.listen(4000)