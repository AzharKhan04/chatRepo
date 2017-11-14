//TODO:: User signup using EMAIL
var express = require('express')
var async=require('async')
var errorcodes = require('../../../utils/errorcodes')
var media_model = require('../models/media_model')
var router = express.Router()



router.post('/upload',function(req,res){
    media_model.upload(req, function (err, response) {
            if(err) res.status(400).json(err)
            else {
                res.status(200).json(response)
            }
        })
})
module.exports = router;