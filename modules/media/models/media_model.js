var express = require('express')
var mongoose = require('mongoose')
var util = require('util')
var multiparty=require('multiparty')
var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;
var AWS = require('aws-sdk')
var fs=require('fs')
var config=require('../../../config')

var s3 = new AWS.S3({
    "accessKeyId": config.accessKeyId,
    "secretAccessKey":config.secretAccessKey,
    "region": config.region
})



function Media() {
    if (!(this instanceof Media)) return new Media();

    this._started = false;

    EventEmitter.call(this);
}

inherits(Media, EventEmitter)


Media.prototype.upload = function (data, callback) {
    var form = new multiparty.Form();
    form.parse(data, function(error, fields, files) {
    fs.readFile(files.file[0].path,function(err,data){
        if(err)console.log(err)
        else {
            s3.putObject({
            Bucket: config.bucket,
            Key: files.file[0].originalFilename,
            Body:data,
            ContentType:files.file[0].originalFilename.substring(files.file[0].originalFilename.lastIndexOf('.') + 1, files.file[0].originalFilename.length),
            ACL: 'public-read'
        }, function (err,data) {
            if(err)console.log(err)
            else{
                s3.getSignedUrl('putObject',{
                    Bucket:config.bucket,
                    Key:files.file[0].originalFilename
                },function(err,url){
                    if(err)callback(err,null)
                        else {
                         var uu=url.split('?')
                 callback(null,uu[0])
            }
                })
            } 
        });
        }
    })
        // var postData = {
        //     file: files.file[0]
        // };
        
    })
}

https://invoicehipcask.s3.ap-south-1.amazonaws.com//tmp/pW40--G7P3ITMkLnixNlaLLI.jpg?AWSAccessKeyId=AKIAJAS6TD6ODJ72VY5Q&Expires=1510660645&Signature=%2B%2BocRvP1%2Bk6B%2Bmujbwdn4PQ0Cf8%3D




module.exports = new Media()