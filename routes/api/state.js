const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = express.Router()
const path=require('path')

const data = require('../../models/data')

router.get('/data',(req,res)=>{
    if(req.query.state=='ledon'){
        const newdata1 = new data({
            state:'ledon'
        })
        newdata1.save()
        .then(console.log('done'))
        .catch(err=>console.log(err))
        data.find({state:'ledoff'})
        .then((isfind)=>{
            if(isfind){
                data.deleteMany({state:'ledoff'}).then(()=>{
                    console.log('deleted')
                }).catch(err=>console.log(err))
            }
        })
        .catch(err=>console.log(err))
        res.render('message',{
            message:'led is turned on'
        })
    }
    else{
        const newdata2 = new data({
            state:'ledoff'
        })
        newdata2.save()
        .then(console.log('done'))
        .catch(err=>console.log(err))
        data.find({state:'ledon'})
        .then((isfind)=>{
            if(isfind){
                data.deleteMany({state:'ledon'}).then(()=>{
                    console.log('deleted')
                }).catch(err=>console.log(err))
            }
        })
        .catch(err=>console.log(err))
        res.render('message',{
            message:'led is turned off'
        })
    }
    
})
module.exports=router