var express =require('express')
var router = express.Router()

router.get('/',function(req,res,next){
    res.send(req.query.id)
})
router.get('/add/:a/:b',function(req,res,next){
    var a = req.params.a
    var b = req.params.b
    res.send(a+b)
})

router.post('/addd',function(req,res){
    var a = parseInt(req.body.a)
    var b = parseInt(req.body.b)
    res.send(String(a+b))
})

router.get('/first',function(req,res){
    res.send('first on user')
});

router.get('/second',function(req,res){
    res.send('second on user')
});



module.exports = router