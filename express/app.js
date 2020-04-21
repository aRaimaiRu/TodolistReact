var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static('./public/'))

app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/a.png',function(req,res){
    res.send('404 Notfound')
})

var userRoute = require('./router/userRouter')
app.use('/user2',userRoute)

//app.use('/list',listRoute)

app.get('/plus',function(req,res){
    res.send(req.params.text)
})

app.get('/',function(req,res){
    res.send('hello worldd')
})
app.get('/user',function(req,res){
    res.send('hello user')
})

app.listen(3000)//listen port 300

