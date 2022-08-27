var express = require('express')
var router = express.Router()
// MIDDLEWARES
let logMiddleware = require('../middlewares/logMiddleware')
let admin = require('../middlewares/admin')

// GET INDEX PAGE
router.get('/', logMiddleware , function(req,res){
    res.render('index', logMiddleware)
})
router.get('/uno', logMiddleware , function(req,res){
    res.send("uno")
})
router.get('/dos', logMiddleware , function(req,res){
    res.send("dos")
})
router.get('/tres', logMiddleware , function(req,res){
    res.send("tres")
})
router.get('/admin', logMiddleware , admin , function(req,res){
    res.render('admin')
})
module.exports = router